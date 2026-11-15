import React from 'react';
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart, openQuickView, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.id);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="glass-panel card-hover"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: 'rgba(19, 25, 34, 0.85)'
      }}
    >
      {/* Product Image & Badges */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '3/4',
        overflow: 'hidden',
        backgroundColor: '#070A0E'
      }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            if (product.secondaryImage && e.currentTarget.src !== product.secondaryImage) {
              e.currentTarget.src = product.secondaryImage;
            } else {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80';
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            if (product.secondaryImage) {
              e.currentTarget.src = product.secondaryImage;
            } else {
              e.currentTarget.style.transform = 'scale(1.06)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = product.image;
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />

        {/* Floating Badges */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          zIndex: 2
        }}>
          {product.isBestseller && (
            <span className="badge badge-gold" style={{ fontSize: '0.68rem', padding: '0.15rem 0.55rem' }}>
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="badge badge-emerald" style={{ fontSize: '0.68rem', padding: '0.15rem 0.55rem' }}>
              New Edition
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label="Save to wishlist"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'rgba(11, 15, 20, 0.75)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: wishlisted ? '#F43F5E' : 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            zIndex: 2
          }}
        >
          <Heart size={16} fill={wishlisted ? '#F43F5E' : 'none'} />
        </button>

        {/* Quick View Hover Trigger */}
        <button
          onClick={() => openQuickView(product)}
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            right: '12px',
            padding: '0.55rem',
            borderRadius: '8px',
            backgroundColor: 'rgba(11, 15, 20, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--gold-border)',
            color: 'var(--gold-primary)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            zIndex: 2
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
            e.currentTarget.style.color = '#0B0F14';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(11, 15, 20, 0.85)';
            e.currentTarget.style.color = 'var(--gold-primary)';
          }}
        >
          <Eye size={15} /> Quick View
        </button>
      </div>

      {/* Product Content Details */}
      <div style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <div>
          {/* Category & Rating */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
              {product.category}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: '#F59E0B' }}>
              <Star size={12} fill="#F59E0B" />
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 style={{
            fontSize: '0.98rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.35,
            marginBottom: '0.35rem',
            fontFamily: 'var(--font-serif)'
          }}>
            {product.name}
          </h3>

          <p style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            marginBottom: '0.75rem'
          }}>
            {product.fabric}
          </p>
        </div>

        {/* Pricing and Add to Bag */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
              <span style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--gold-primary)'
              }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'line-through'
                }}>
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {discountPercent > 0 && (
              <span style={{ fontSize: '0.72rem', color: 'var(--emerald-light)', fontWeight: 600 }}>
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={() => addToCart(product, product.sizes?.[0] || 'M', 1)}
            className="btn btn-secondary btn-sm"
            style={{
              width: '100%',
              padding: '0.6rem',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <ShoppingBag size={14} /> Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

