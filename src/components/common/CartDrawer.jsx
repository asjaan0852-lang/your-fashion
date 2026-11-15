import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { LEGAL_DETAILS } from '../../data/products';

export const CartDrawer = () => {
  const {
    cartItems,
    cartCount,
    subtotal,
    discount,
    shippingFee,
    total,
    isFreeShipping,
    amountNeededForFreeShipping,
    freeShippingProgress,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    closeCart
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    closeCart();
    navigate('/checkout');
  };

  const handleApplyCouponSubmit = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 200ms ease-out'
      }}
      onClick={closeCart}
    >
      <div
        className="drawer-animated"
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#0F141C',
          borderLeft: '1px solid var(--gold-border)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(19, 25, 34, 0.7)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShoppingBag size={20} style={{ color: 'var(--gold-primary)' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, fontFamily: 'var(--font-serif)', letterSpacing: '0.04em' }}>
              Your Luxury Bag
            </h3>
            <span className="badge badge-gold" style={{ fontSize: '0.72rem', padding: '0.15rem 0.55rem' }}>
              {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </span>
          </div>

          <button
            onClick={closeCart}
            aria-label="Close cart"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '0.4rem',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{
          padding: '0.85rem 1.5rem',
          backgroundColor: 'rgba(16, 185, 129, 0.06)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.18)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.45rem' }}>
            <span style={{ color: isFreeShipping ? 'var(--emerald-light)' : 'var(--text-secondary)', fontWeight: 600 }}>
              {isFreeShipping ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Sparkles size={14} style={{ color: 'var(--emerald-primary)' }} />
                  You've unlocked <strong>FREE Express Delivery</strong>!
                </span>
              ) : (
                <span>
                  Add <strong style={{ color: 'var(--gold-primary)' }}>₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</strong> more for FREE Delivery
                </span>
              )}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              Threshold: ₹{LEGAL_DETAILS.thresholds.freeShipping}
            </span>
          </div>
          <div style={{
            height: '6px',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${freeShippingProgress}%`,
              background: isFreeShipping
                ? 'linear-gradient(90deg, #10B981, #34D399)'
                : 'linear-gradient(90deg, #C5A870, #E2C799)',
              borderRadius: '9999px',
              transition: 'width 300ms ease'
            }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.1rem'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              margin: 'auto 0',
              textAlign: 'center',
              padding: '2.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(226, 199, 153, 0.08)',
                border: '1px solid var(--gold-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-primary)'
              }}>
                <ShoppingBag size={30} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                Your Luxury Bag is Empty
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '280px', lineHeight: 1.5 }}>
                Explore our handcrafted linen shirts, tailored denim, and bespoke blazers curated by Waseem.
              </p>
              <button
                onClick={() => {
                  closeCart();
                  navigate('/shop');
                }}
                className="btn btn-primary btn-sm"
                style={{ marginTop: '0.5rem' }}
              >
                Browse Collections <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}`}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '0.85rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(25, 33, 46, 0.45)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative'
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  width: '74px',
                  height: '92px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  backgroundColor: '#0B0F14'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <h4 style={{
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3
                      }}>
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        aria-label="Remove item"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-muted)',
                          cursor: 'pointer',
                          padding: '0.2rem'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#EF4444')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.3rem' }}>
                      <span className="badge badge-obsidian" style={{ fontSize: '0.7rem', padding: '0.1rem 0.45rem' }}>
                        Size: {item.selectedSize}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        GST Included
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Price */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.6rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(11, 15, 20, 0.7)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '6px'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                          padding: '0.25rem 0.5rem',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, padding: '0 0.5rem', minWidth: '24px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                          padding: '0.25rem 0.5rem',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: 'var(--gold-primary)'
                      }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer (Subtotal, Coupon & Checkout) */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'rgba(19, 25, 34, 0.95)'
          }}>
            {/* Coupon Section */}
            <div style={{ marginBottom: '1rem' }}>
              {appliedCoupon ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.85rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px dashed var(--emerald-primary)',
                  borderRadius: '8px',
                  fontSize: '0.82rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--emerald-light)' }}>
                    <Tag size={14} />
                    <span><strong>{appliedCoupon.code}</strong> applied ({appliedCoupon.label})</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      textDecoration: 'underline'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCouponSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Privilege code (e.g. YOU10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    style={{
                      flex: 1,
                      background: 'rgba(11, 15, 20, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      padding: '0.5rem 0.85rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }}
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Subtotal (Inclusive of GST)</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--emerald-light)' }}>
                  <span>Privilege Savings</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Express Insured Shipping</span>
                <span>
                  {shippingFee === 0 ? (
                    <span style={{ color: 'var(--emerald-light)', fontWeight: 600 }}>FREE</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '0.65rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}>
                <span>Estimated Total</span>
                <span className="text-gold-gradient">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={handleCheckoutClick}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.95rem' }}
            >
              Proceed to Secure Checkout <ArrowRight size={17} />
            </button>

            {/* Security Guarantee */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              marginTop: '0.75rem',
              fontSize: '0.72rem',
              color: 'var(--text-muted)'
            }}>
              <ShieldCheck size={13} style={{ color: 'var(--emerald-primary)' }} />
              <span>Compliant with Cashfree, PhonePe, Razorpay & PayU</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

