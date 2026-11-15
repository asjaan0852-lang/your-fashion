import React, { createContext, useContext, useState, useEffect } from 'react';
import { LEGAL_DETAILS } from '../data/products';

const CartContext = createContext(null);

const STORAGE_KEY = 'you_fashion_cart_v1';
const WISHLIST_KEY = 'you_fashion_wishlist_v1';

export const CartProvider = ({ children }) => {
  // Load initial cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist items
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      console.error('Failed to persist cart:', err);
    }
  }, [cartItems]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch (err) {
      console.error('Failed to persist wishlist:', err);
    }
  }, [wishlist]);

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Add to Cart
  const addToCart = (product, size = 'M', quantity = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            fullName: product.fullName,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            category: product.category,
            fabric: product.fabric,
            selectedSize: size,
            quantity: quantity
          }
        ];
      }
    });

    showToast(`Added ${product.name} (${size}) to your bag`, 'success');
  };

  // Remove from Cart
  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
    showToast('Item removed from your bag', 'info');
  };

  // Update Quantity
  const updateQuantity = (id, size, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  // Wishlist toggle
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed from your saved items`, 'info');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved ${product.name} to wishlist`, 'success');
        return [...prev, product];
      }
    });
  };

  const isWishlisted = (productId) => wishlist.some((item) => item.id === productId);

  // Apply Coupon
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'WASEEM10' || cleanCode === 'YOU10') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 10, label: '10% Welcome Luxury Privilege' });
      showToast('10% Luxury privilege discount applied!', 'success');
      return { success: true, message: '10% discount applied!' };
    } else if (cleanCode === 'FASHION500') {
      setAppliedCoupon({ code: cleanCode, flatDiscount: 500, label: '₹500 Artisanal Patron Privilege' });
      showToast('₹500 Patron privilege discount applied!', 'success');
      return { success: true, message: '₹500 discount applied!' };
    } else {
      showToast('Invalid coupon code. Try YOU10 or FASHION500', 'error');
      return { success: false, message: 'Invalid coupon code.' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  // Computations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discount = Math.round((subtotal * appliedCoupon.discountPercent) / 100);
    } else if (appliedCoupon.flatDiscount) {
      discount = Math.min(appliedCoupon.flatDiscount, subtotal);
    }
  }

  const freeShippingThreshold = LEGAL_DETAILS.thresholds.freeShipping;
  const isFreeShipping = subtotal >= freeShippingThreshold || cartItems.length === 0;
  const shippingFee = cartItems.length === 0 ? 0 : isFreeShipping ? 0 : LEGAL_DETAILS.thresholds.standardShippingFee;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const total = Math.max(0, subtotal - discount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        discount,
        shippingFee,
        total,
        isFreeShipping,
        freeShippingThreshold,
        amountNeededForFreeShipping,
        freeShippingProgress,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        quickViewProduct,
        openQuickView: (product) => setQuickViewProduct(product),
        closeQuickView: () => setQuickViewProduct(null),
        toast,
        showToast,
        wishlist,
        toggleWishlist,
        isWishlisted
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

