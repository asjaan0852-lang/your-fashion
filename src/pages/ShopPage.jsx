import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/shop/ProductCard';

export const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL state synchronization
  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSize, setSelectedSize] = useState('all');
  const [maxPrice, setMaxPrice] = useState(7000);

  // Sync if URL query parameters change
  useEffect(() => {
    const cat = searchParams.get('category');
    const q = searchParams.get('q');
    if (cat) setSelectedCategory(cat);
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Update URL on category change
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  // Reset filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    setSelectedSize('all');
    setMaxPrice(7000);
    setSearchParams({});
  };

  // Filtered & Sorted products computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesFull = product.fullName.toLowerCase().includes(query);
        const matchesFabric = product.fabric.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesFull && !matchesFabric && !matchesDesc) {
          return false;
        }
      }

      // Price filter
      if (product.price > maxPrice) {
        return false;
      }

      // Size filter
      if (selectedSize !== 'all' && (!product.sizes || !product.sizes.includes(selectedSize))) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'bestseller') return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortBy, selectedSize, maxPrice]);

  return (
    <div style={{ backgroundColor: '#0B0F14', minHeight: '80vh', padding: '3rem 0 6rem' }}>
      <div className="container">
        {/* Page Title & Breadcrumb */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            <span>Home</span>
            <span>/</span>
            <span style={{ color: 'var(--gold-primary)' }}>Menswear Collections</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.2
          }}>
            The You Fashion Atelier Catalog
          </h1>
          <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', marginTop: '0.4rem', maxWidth: '680px' }}>
            Explore 30+ distinctive menswear silhouettes tailored from European flax linen, two-ply Oxford cotton, heavy French terry, and festive Chanderi silk. All prices inclusive of GST.
          </p>
        </div>

        {/* Category Pills Navigation */}
        <div style={{
          display: 'flex',
          gap: '0.6rem',
          overflowX: 'auto',
          paddingBottom: '0.75rem',
          marginBottom: '2rem'
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                padding: '0.65rem 1.35rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                border: selectedCategory === cat.id ? '1px solid var(--gold-primary)' : '1px solid var(--border-medium)',
                background: selectedCategory === cat.id ? 'linear-gradient(135deg, rgba(226, 199, 153, 0.2) 0%, rgba(19, 25, 34, 0.95) 100%)' : 'rgba(19, 25, 34, 0.6)',
                color: selectedCategory === cat.id ? 'var(--gold-primary)' : 'var(--text-secondary)',
                boxShadow: selectedCategory === cat.id ? '0 0 15px rgba(226, 199, 153, 0.15)' : 'none',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Filter & Sorting Control Strip */}
        <div className="glass-panel" style={{
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}>
          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '260px', flex: '1 1 280px' }}>
            <Search size={17} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by linen, fabric, mandarin collar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.5rem', fontSize: '0.88rem' }}
            />
          </div>

          {/* Quick Filters: Size, Price Range & Sort */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', flex: '2 1 400px', justifyContent: 'flex-end' }}>
            {/* Size Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Size:</span>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="form-select"
                style={{ width: 'auto', padding: '0.45rem 1.75rem 0.45rem 0.75rem', fontSize: '0.82rem' }}
              >
                <option value="all">All Sizes</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="32">32 (Denim)</option>
                <option value="34">34 (Denim)</option>
                <option value="36">36 (Denim)</option>
                <option value="40">40 (Suit)</option>
                <option value="42">42 (Suit)</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select"
                style={{ width: 'auto', padding: '0.45rem 1.75rem 0.45rem 0.75rem', fontSize: '0.82rem' }}
              >
                <option value="featured">Featured Curations</option>
                <option value="bestseller">Top Bestsellers</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Reset Button */}
            {(selectedCategory !== 'all' || searchQuery || selectedSize !== 'all' || sortBy !== 'featured') && (
              <button
                onClick={handleResetFilters}
                className="btn btn-outline btn-sm"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                title="Reset all filters"
              >
                <RotateCcw size={13} /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Results Count Summary */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>
            Showing <strong style={{ color: 'var(--gold-primary)' }}>{filteredProducts.length}</strong> handcrafted menswear pieces
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--emerald-light)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={13} /> Free Express Delivery Above ₹1,999
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="glass-panel" style={{
            textAlign: 'center',
            padding: '4.5rem 1.5rem',
            maxWidth: '520px',
            margin: '2rem auto'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(226, 199, 153, 0.1)',
              border: '1px solid var(--gold-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              margin: '0 auto 1.25rem'
            }}>
              <Search size={28} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              No Matching Garments Found
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              We could not find any items matching your selected criteria. Try adjusting your search term or resetting your filters.
            </p>
            <button onClick={handleResetFilters} className="btn btn-primary btn-sm">
              <RotateCcw size={15} /> Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid-responsive-cards">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

