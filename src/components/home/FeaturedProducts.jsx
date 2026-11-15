import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';

export const FeaturedProducts = () => {
  const [filter, setFilter] = useState('all');

  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);

  const displayedProducts = filter === 'all'
    ? bestsellers.slice(0, 8)
    : bestsellers.filter((p) => p.category === filter);

  const tabs = [
    { id: 'all', label: 'All Bestsellers' },
    { id: 'shirts', label: 'Linen Shirts' },
    { id: 't-shirts', label: 'Polos & Tees' },
    { id: 'trousers', label: 'Denim & Pants' },
    { id: 'jackets', label: 'Jackets & Blazers' },
    { id: 'knitwear', label: 'Hoodies & Knits' }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: '#0F141C',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '0.65rem' }}>
            <Sparkles size={13} /> Highly Acclaimed
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.2
          }}>
            Patron-Favorite Bestsellers
          </h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', marginTop: '0.6rem' }}>
            Garments that define contemporary Indian masculine style — praised by over 10,000 patrons for unparalleled cut, breathability, and durability.
          </p>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginTop: '1.75rem'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  cursor: 'pointer',
                  border: filter === tab.id ? '1px solid var(--gold-primary)' : '1px solid var(--border-medium)',
                  background: filter === tab.id ? 'linear-gradient(135deg, rgba(226, 199, 153, 0.18) 0%, rgba(19, 25, 34, 0.9) 100%)' : 'rgba(11, 15, 20, 0.6)',
                  color: filter === tab.id ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid-responsive-cards">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to Shop */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/shop" className="btn btn-secondary btn-lg">
            Explore All 35+ Luxury Garments <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};

