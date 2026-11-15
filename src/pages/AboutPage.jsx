import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Heart, CheckCircle2, ArrowRight, MapPin, Feather, Users, Sparkles } from 'lucide-react';
import { LEGAL_DETAILS } from '../data/products';

export const AboutPage = () => {
  const stats = [
    { value: '500+', label: 'Artisanal Designs Perfected' },
    { value: '10,000+', label: 'Discerning Patrons Dressed' },
    { value: '27,000+', label: 'Indian PIN Codes Served' },
    { value: '100%', label: 'Natural Fiber Guarantee' }
  ];

  const milestones = [
    {
      year: 'The Genesis',
      title: 'Rejecting Fast Fashion',
      description: 'Disenchanted with mass-produced synthetic shirts and predatory luxury markups, founder Waseem envisioned an Indian menswear house centered on genuine materials and timeless proportions.'
    },
    {
      year: 'The Workshop',
      title: 'Atelier Established in Bhiwadi',
      description: 'Our primary design workshop opened on Bhiwadi Alwar Road, Rajasthan. Employing master tailors and pattern makers with decades of combined heritage in drape and finishing.'
    },
    {
      year: 'The Standards',
      title: 'Zero Trademark Imitation, Pure Original Craft',
      description: 'Committing to strict intellectual property purity. We never produce counterfeit logos or unauthorized replicas—every piece is an original You Fashion design with proprietary cuts.'
    },
    {
      year: 'Present Day',
      title: 'Digital Pan-India Expansion',
      description: 'Full integration with RBI-authorized payment gateways (Cashfree, PhonePe, Razorpay, PayU) and nationwide courier partnerships with Delhivery and Blue Dart, delivering pure luxury to your doorstep.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#0B0F14', minHeight: '80vh', padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--gold-primary)' }}>About Us</span>
        </div>

        {/* Hero Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
              The Story of You Fashion
            </span>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '1.25rem'
            }}>
              Where Sartorial Precision Meets <span className="text-gold-gradient">Authentic Heritage</span>.
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Founded by <strong>Waseem</strong> in the historic industrial corridor of Bhiwadi, Rajasthan, <strong>You Fashion</strong> was born from a fundamental conviction: modern Indian gentlemen deserve world-class luxury apparel crafted with pure natural fibers, uncompromised tailoring, and radical price transparency.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              From French Normandy flax linen to 14.5oz Japanese selvedge-inspired denim and hand-embroidered Lucknowi Chikankari kurtas, we bridge traditional textile mastery with effortless metropolitan aesthetics.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <Link to="/shop" className="btn btn-primary">
                Explore The Collection <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Visual Atelier Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              aspectRatio: '4/3',
              border: '1px solid var(--gold-border-strong)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80"
                alt="You Fashion Atelier Craftsmanship in Bhiwadi Rajasthan"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Founder Note Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              left: '20px',
              right: '20px',
              background: 'rgba(19, 25, 34, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--gold-border)',
              borderRadius: '14px',
              padding: '1.25rem 1.5rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.98rem', color: 'var(--gold-light)', lineHeight: 1.5 }}>
                "Luxury is not a logo stitched on a shirt; it is how natural fiber breathes against your skin in the afternoon heat."
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.65rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  — Waseem, Founder & Proprietor
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--emerald-light)', fontWeight: 600 }}>
                  Bhiwadi, Rajasthan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          margin: '5rem 0'
        }}>
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                backgroundColor: 'rgba(19, 25, 34, 0.7)'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--gold-primary)',
                marginBottom: '0.25rem'
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Timeline */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '0.65rem' }}>
              Evolution of the Brand
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              color: 'var(--text-primary)'
            }}>
              Our Journey of Uncompromising Integrity
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="glass-panel card-hover"
                style={{
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  backgroundColor: 'rgba(19, 25, 34, 0.75)'
                }}
              >
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {m.year}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Official Legal Identity & Commercial Registry */}
        <div className="glass-panel" style={{
          padding: '2.5rem',
          borderRadius: '20px',
          border: '1px solid var(--gold-border-strong)',
          backgroundColor: 'rgba(19, 25, 34, 0.9)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <ShieldCheck size={26} style={{ color: 'var(--gold-primary)' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
              Commercial & Statutory Identity
            </h3>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            In compliance with Indian E-Commerce guidelines and payment gateway regulatory norms (Cashfree, PhonePe, Razorpay, PayU), You Fashion operates as a transparent, verified sole proprietorship entity.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            background: 'rgba(11, 15, 20, 0.7)',
            padding: '1.5rem',
            borderRadius: '12px',
            fontSize: '0.86rem'
          }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase' }}>Trade Name</span>
              <strong style={{ color: 'var(--text-primary)' }}>{LEGAL_DETAILS.tradeName}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase' }}>Legal Entity / Proprietor</span>
              <strong style={{ color: 'var(--text-primary)' }}>{LEGAL_DETAILS.legalEntity}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase' }}>GST Identification (GSTIN)</span>
              <strong style={{ color: 'var(--gold-primary)' }}>{LEGAL_DETAILS.gstin}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase' }}>Principal Place of Business</span>
              <strong style={{ color: 'var(--text-primary)' }}>Bhiwadi, Rajasthan — 301019</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

