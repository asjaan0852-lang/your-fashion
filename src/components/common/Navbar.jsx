import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { LEGAL_DETAILS } from '../../data/products';

export const Navbar = () => {
  const { cartCount, openCart, wishlist } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: isScrolled ? 'rgba(11, 15, 20, 0.94)' : 'rgba(11, 15, 20, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(226, 199, 153, 0.22)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
          transition: 'all 250ms ease'
        }}
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px',
          gap: '1rem'
        }}>
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '8px'
            }}
            className="mobile-only-btn"
          >
            <Menu size={24} />
          </button>

          {/* Logo & Brand Identity */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #18202B 0%, #0B0F14 100%)',
              border: '1px solid var(--gold-border-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 12px rgba(226, 199, 153, 0.15)'
            }}>
              YF
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.45rem',
                letterSpacing: '0.08em',
                color: 'var(--text-primary)',
                lineHeight: 1.1
              }}>
                YOU FASHION
              </span>
              <span style={{
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                fontWeight: 600
              }}>
                Luxury Menswear • Bhiwadi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }} className="desktop-only-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  padding: '0.35rem 0',
                  transition: 'color var(--transition-fast)'
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #E2C799, #C5A870)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(226, 199, 153, 0.6)'
                      }} />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Utilities (Search, Wishlist, Cart) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Search Toggle */}
            <div style={{ position: 'relative' }}>
              {isSearchOpen ? (
                <form
                  onSubmit={handleSearchSubmit}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '-6px',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--gold-border-strong)',
                    borderRadius: '9999px',
                    padding: '0.2rem 0.6rem 0.2rem 1rem',
                    boxShadow: 'var(--shadow-md)',
                    zIndex: 60,
                    minWidth: '240px'
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search linen, blazers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.85rem',
                      width: '100%'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '0.25rem'
                    }}
                  >
                    <X size={16} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search collection"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(19, 25, 34, 0.6)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold-border)';
                    e.currentTarget.style.color = 'var(--gold-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Wishlist Link */}
            <Link
              to="/shop"
              aria-label="Saved items"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(19, 25, 34, 0.6)',
                border: '1px solid var(--border-subtle)',
                color: wishlist.length > 0 ? '#F43F5E' : 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all var(--transition-fast)'
              }}
              className="desktop-only-nav"
            >
              <Heart size={18} fill={wishlist.length > 0 ? '#F43F5E' : 'none'} />
              {wishlist.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-3px',
                  right: '-3px',
                  background: '#F43F5E',
                  color: '#FFFFFF',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Trigger Button */}
            <button
              onClick={openCart}
              aria-label="Shopping bag"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'linear-gradient(135deg, rgba(226, 199, 153, 0.12) 0%, rgba(19, 25, 34, 0.8) 100%)',
                border: '1px solid var(--gold-border)',
                borderRadius: '9999px',
                padding: '0.5rem 1.1rem',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(226, 199, 153, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ShoppingBag size={18} style={{ color: 'var(--gold-primary)' }} />
              <span style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.03em'
              }}>
                Bag
              </span>
              <span style={{
                background: 'linear-gradient(135deg, #E2C799 0%, #C5A870 100%)',
                color: '#0B0F14',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.1rem 0.5rem',
                borderRadius: '9999px',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'flex-start'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '85%',
              maxWidth: '340px',
              height: '100%',
              background: '#0F141C',
              borderRight: '1px solid var(--gold-border)',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              animation: 'slideInLeft 250ms ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--gold-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700
                  }}>
                    YF
                  </div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.2rem' }}>
                    YOU FASHION
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: '0.4rem'
                  }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={({ isActive }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: isActive ? 'rgba(226, 199, 153, 0.1)' : 'transparent',
                      color: isActive ? 'var(--gold-primary)' : 'var(--text-primary)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      border: isActive ? '1px solid var(--gold-border)' : '1px solid transparent'
                    })}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} style={{ opacity: 0.6 }} />
                  </NavLink>
                ))}
              </div>

              {/* Quick Category Jump */}
              <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-primary)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
                  Explore Collections
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { name: 'Pure Linen & Cotton Shirts', cat: 'shirts' },
                    { name: 'Pima Cotton Polos & Tees', cat: 't-shirts' },
                    { name: 'Tailored Trousers & Denim', cat: 'trousers' },
                    { name: 'Unstructured Blazers & Jackets', cat: 'jackets' },
                    { name: 'Heavyweight Hoodies & Knitwear', cat: 'knitwear' }
                  ].map((c) => (
                    <Link
                      key={c.cat}
                      to={`/shop?category=${c.cat}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        padding: '0.4rem 0.5rem',
                        transition: 'color var(--transition-fast)'
                      }}
                    >
                      • {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer Meta */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-primary)', marginBottom: '0.4rem' }}>
                <ShieldCheck size={14} /> GSTIN: {LEGAL_DETAILS.gstin}
              </div>
              <p>Proprietor: {LEGAL_DETAILS.proprietor}</p>
              <p>Bhiwadi, Rajasthan — 301019</p>
            </div>
          </div>
        </div>
      )}

      {/* Inline styles for responsive header */}
      <style>{`
        @media (max-width: 868px) {
          .desktop-only-nav {
            display: none !important;
          }
          .mobile-only-btn {
            display: flex !important;
          }
        }
        @media (min-width: 869px) {
          .mobile-only-btn {
            display: none !important;
          }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

