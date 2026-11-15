import React from 'react';
import { Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { LEGAL_DETAILS } from '../../data/products';

export const AnnouncementBar = () => {
  return (
    <div style={{
      backgroundColor: '#070A0E',
      borderBottom: '1px solid rgba(226, 199, 153, 0.15)',
      fontSize: '0.8rem',
      color: 'var(--text-secondary)',
      padding: '0.45rem 1rem',
      position: 'relative',
      zIndex: 50
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {/* Left: GST & Registered Entity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge badge-gold" style={{ fontSize: '0.7rem', padding: '0.15rem 0.6rem' }}>
            <ShieldCheck size={12} /> GSTIN: {LEGAL_DETAILS.gstin}
          </span>
          <span style={{ display: 'none', color: 'var(--text-muted)' }} className="announcement-meta">
            • Bhiwadi, Rajasthan
          </span>
        </div>

        {/* Center: Highlight Promotion */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--gold-primary)',
          fontWeight: 600,
          letterSpacing: '0.03em',
          margin: '0 auto'
        }}>
          <Sparkles size={13} style={{ color: 'var(--gold-primary)' }} />
          <span>✨ Free Express Delivery on Orders Above ₹1,999 | Premium Collection Live Now</span>
        </div>

        {/* Right: Phone Support */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={`tel:${LEGAL_DETAILS.contact.phone.replace(/\s+/g, '')}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--text-secondary)',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Phone size={12} style={{ color: 'var(--gold-primary)' }} />
            <span>Support: {LEGAL_DETAILS.contact.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

