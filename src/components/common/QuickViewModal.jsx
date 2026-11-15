import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Star, ShoppingBag, ShieldCheck, Truck, RotateCcw, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { LEGAL_DETAILS } from '../../data/products';

export const QuickViewModal = () => {
  const { quickViewProduct, closeQuickView, addToCart, openCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();

  if (!quickViewProduct) return null;

  const images = [quickViewProduct.image, quickViewProduct.secondaryImage].filter(Boolean);
  const currentImage = images[selectedImageIndex] || quickViewProduct.image;

  const discountPercent = quickViewProduct.originalPrice
    ? Math.round(((quickViewProduct.originalPrice - quickViewProduct.price) / quickViewProduct.originalPrice) * 100)
    : 0;

  const handleAddAndClose = () => {
    addToCart(quickViewProduct, selectedSize, quantity);
    closeQuickView();
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, selectedSize, quantity);
    closeQuickView();
    navigate('/checkout');
  };

  return (
    <div
      className="modal-backdrop"
      onClick={closeQuickView}
    >
      <div
        className="glass-panel modal-content-animated"
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0F141C',
          border: '1px solid var(--gold-border-strong)',
          boxShadow: 'var(--shadow-lg), 0 0 40px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          padding: '2rem',
          borderRadius: '20px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(19, 25, 34, 0.8)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-secondary)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.borderColor = 'var(--gold-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border-medium)';
          }}
        >
          <X size={18} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* Left: Product Media Gallery */}
          <div>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: '14px',
              overflow: 'hidden',
              backgroundColor: '#0B0F14',
              border: '1px solid var(--gold-border)',
              position: 'relative'
            }}>
              <img
                src={currentImage}
                alt={quickViewProduct.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {discountPercent > 0 && (
                <span
                  className="badge badge-gold"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}
                >
                  {discountPercent}% SAVINGS
                </span>
              )}
            </div>

            {/* Thumbnail switcher if secondary image available */}
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.75rem' }}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    style={{
                      width: '60px',
                      height: '75px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: selectedImageIndex === idx ? '2px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                      background: 'none',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Purchase Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div>
              <span className="badge badge-emerald" style={{ fontSize: '0.72rem', marginBottom: '0.5rem' }}>
                Artisanal Rajasthan Tailoring
              </span>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                marginTop: '0.35rem'
              }}>
                {quickViewProduct.name}
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {quickViewProduct.fullName}
              </p>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', color: '#F59E0B' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(quickViewProduct.rating) ? '#F59E0B' : 'none'}
                    />
                  ))}
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {quickViewProduct.rating}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  ({quickViewProduct.reviewCount} verified patrons)
                </span>
              </div>
            </div>

            {/* Price block */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem',
              padding: '0.75rem 0',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <span style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--gold-primary)',
                fontFamily: 'var(--font-sans)'
              }}>
                ₹{quickViewProduct.price.toLocaleString('en-IN')}
              </span>
              {quickViewProduct.originalPrice && (
                <span style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'line-through'
                }}>
                  ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span style={{ fontSize: '0.75rem', color: 'var(--emerald-light)', fontWeight: 600 }}>
                (Inclusive of all taxes / GST)
              </span>
            </div>

            {/* Short Description */}
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {quickViewProduct.description}
            </p>

            {/* Fabric & Fit pills */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.6rem',
              fontSize: '0.82rem',
              background: 'rgba(19, 25, 34, 0.6)',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: '1px solid var(--border-subtle)'
            }}>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Fabric</span>
                <strong style={{ color: 'var(--text-primary)' }}>{quickViewProduct.fabric}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase' }}>Silhouette</span>
                <strong style={{ color: 'var(--text-primary)' }}>{quickViewProduct.fit}</strong>
              </div>
            </div>

            {/* Size selector */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Select Size:</span>
                <span style={{ color: 'var(--gold-primary)', fontSize: '0.78rem' }}>Standard Indian Fit</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {quickViewProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      minWidth: '44px',
                      height: '42px',
                      padding: '0 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: selectedSize === size ? '2px solid var(--gold-primary)' : '1px solid var(--border-medium)',
                      background: selectedSize === size ? 'rgba(226, 199, 153, 0.15)' : 'rgba(11, 15, 20, 0.6)',
                      color: selectedSize === size ? 'var(--gold-primary)' : 'var(--text-secondary)',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                onClick={handleAddAndClose}
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                <ShoppingBag size={17} /> Add to Bag
              </button>
              <button
                onClick={handleBuyNow}
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                Buy Now <ArrowRight size={17} />
              </button>
            </div>

            {/* Assurances */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.5rem',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '0.85rem',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              textAlign: 'center'
            }}>
              <div>
                <Truck size={14} style={{ color: 'var(--gold-primary)', margin: '0 auto 0.2rem' }} />
                <span>1–2 Days Dispatch</span>
              </div>
              <div>
                <RotateCcw size={14} style={{ color: 'var(--emerald-primary)', margin: '0 auto 0.2rem' }} />
                <span>7-Day Return Window</span>
              </div>
              <div>
                <ShieldCheck size={14} style={{ color: 'var(--gold-primary)', margin: '0 auto 0.2rem' }} />
                <span>100% Insured Transit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

