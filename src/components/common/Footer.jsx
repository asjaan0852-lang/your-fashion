import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, Check, Lock, Award, Heart } from 'lucide-react';
import { LEGAL_DETAILS } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      showToast('Thank you for joining the You Fashion Patron Circle.', 'success');
      setNewsletterEmail('');
    }
  };

  return (
    <footer style={{
      backgroundColor: '#070A0E',
      borderTop: '1px solid rgba(226, 199, 153, 0.2)',
      marginTop: 'auto',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Upper Trust Strip */}
      <div style={{
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1.75rem 0',
        backgroundColor: 'rgba(19, 25, 34, 0.4)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(226, 199, 153, 0.1)',
              border: '1px solid var(--gold-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              flexShrink: 0
            }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>GST Registered Entity</h5>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>GSTIN: {LEGAL_DETAILS.gstin}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid var(--emerald-badge-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--emerald-primary)',
              flexShrink: 0
            }}>
              <Award size={20} />
            </div>
            <div>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>100% Genuine Apparel</h5>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Curated & tailored by Waseem</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(226, 199, 153, 0.1)',
              border: '1px solid var(--gold-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              flexShrink: 0
            }}>
              <Lock size={20} />
            </div>
            <div>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Bank-Grade 256-Bit SSL</h5>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Cashfree & PhonePe compliant</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid var(--emerald-badge-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--emerald-primary)',
              flexShrink: 0
            }}>
              <Heart size={20} />
            </div>
            <div>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>7-Day Easy Returns</h5>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Doorstep reverse pickup across India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="container" style={{ padding: '3.5rem 1.5rem 2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '2.5rem'
        }}>
          {/* Column 1: Brand & Official Legal Entity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--gold-border-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-primary)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}>
                YF
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '0.06em' }}>
                YOU FASHION
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              A luxury menswear atelier founded and operated by <strong>Waseem</strong>. Crafting refined silhouettes with natural fibers and artisanal Rajasthan tailoring.
            </p>

            <div style={{
              background: 'rgba(19, 25, 34, 0.8)',
              border: '1px solid var(--gold-border)',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
              fontSize: '0.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}>
              <div style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>
                Official GST Identity
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                <strong>Legal Entity:</strong> {LEGAL_DETAILS.legalEntity}
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                <strong>GSTIN:</strong> {LEGAL_DETAILS.gstin}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{LEGAL_DETAILS.address.formatted}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <a href={`tel:${LEGAL_DETAILS.contact.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--text-secondary)' }}>
                  {LEGAL_DETAILS.contact.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <a href={`mailto:${LEGAL_DETAILS.contact.supportEmail}`} style={{ color: 'var(--text-secondary)' }}>
                  {LEGAL_DETAILS.contact.supportEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Collections / Categories */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem'
            }}>
              Curated Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <Link to="/shop?category=shirts" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Pure Linen & Cotton Shirts
                </Link>
              </li>
              <li>
                <Link to="/shop?category=t-shirts" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Supima Polos & Heavyweight Tees
                </Link>
              </li>
              <li>
                <Link to="/shop?category=trousers" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Wide-Leg Denim & Gurkha Trousers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=jackets" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Tailored Blazers & Trucker Jackets
                </Link>
              </li>
              <li>
                <Link to="/shop?category=knitwear" style={{ color: 'var(--text-secondary)', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Heavyweight Hoodies & Knitwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Governance */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem'
            }}>
              Company & Heritage
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <Link to="/about" style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  The You Fashion Story
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Bhiwadi Atelier Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Contact & Support Desks
                </Link>
              </li>
              <li>
                <Link to="/terms" style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Privacy Policy (DPDPA 2023)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance Policies & Newsletter */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem'
            }}>
              Assistance & Policies
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              <li>
                <Link to="/shipping-policy" style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Shipping & Delivery Policy (Delhivery/Blue Dart)
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  7-Day Return & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Payment & Refund Help Center
                </Link>
              </li>
            </ul>

            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
              The Patron Circle Newsletter
            </span>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--emerald-light)', fontSize: '0.8rem' }}>
                <Check size={14} /> You're subscribed to private launches.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'rgba(11, 15, 20, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '0.5rem 0.75rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Accepted Payment Gateways & Badges */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              100% Compliant & Secure Payment Partners
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
              {['Cashfree Payments', 'PhonePe PG', 'Razorpay', 'PayU', 'UPI / GPay', 'Visa / RuPay', 'Net Banking'].map((gw) => (
                <span
                  key={gw}
                  style={{
                    background: 'rgba(19, 25, 34, 0.85)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '6px',
                    padding: '0.3rem 0.65rem',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)'
                  }}
                >
                  {gw}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            <span>Operating Currency: <strong>INR (₹)</strong></span>
            <span>•</span>
            <span>All Prices GST-Inclusive</span>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div style={{
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          gap: '1rem'
        }}>
          <div>
            © 2026 <strong>You Fashion</strong> — A registered trade name of <strong>Waseem</strong> (Sole Proprietorship). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/terms" style={{ color: 'var(--text-muted)' }}>Terms</Link>
            <Link to="/privacy" style={{ color: 'var(--text-muted)' }}>Privacy</Link>
            <Link to="/shipping-policy" style={{ color: 'var(--text-muted)' }}>Shipping</Link>
            <Link to="/refund-policy" style={{ color: 'var(--text-muted)' }}>Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

