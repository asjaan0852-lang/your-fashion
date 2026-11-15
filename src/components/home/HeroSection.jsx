import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import heroModelImg from '../../assets/hero-model.jpg';

export const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '4.5rem 0 5rem',
      background: 'radial-gradient(ellipse at top, #18202B 0%, #0B0F14 70%)',
      borderBottom: '1px solid rgba(226, 199, 153, 0.15)'
    }}>
      {/* Background Subtle Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '10%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(226, 199, 153, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Editorial Headline & Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className="badge badge-gold" style={{ fontSize: '0.78rem', padding: '0.35rem 0.95rem' }}>
                <Sparkles size={13} /> Artisanal Autumn / Festive '26
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.78rem', padding: '0.35rem 0.95rem' }}>
                Curated by Waseem
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: 'var(--text-primary)'
            }}>
              Redefine Your Everyday <span className="text-gold-gradient">Luxury</span>.
            </h1>

            {/* Subtitle & Value Statement */}
            <p style={{
              fontSize: '1.08rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.68,
              maxWidth: '540px'
            }}>
              Handcrafted in Bhiwadi, Rajasthan. Experience European Normandy flax linen shirts, structured Supima knitwear, and Neapolitan tailored blazers meticulously created for discerning Indian gentlemen.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
              <Link to="/shop" className="btn btn-primary btn-lg">
                Explore Collection <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Our Story & Craft
              </Link>
            </div>

            {/* Trust Metrics Pill Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              marginTop: '0.5rem'
            }}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--gold-primary)',
                  display: 'block'
                }}>
                  10,000+
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Gentlemen Dressed
                </span>
              </div>

              <div>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--emerald-light)',
                  display: 'block'
                }}>
                  ₹1,999+
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Free Express Delivery
                </span>
              </div>

              <div>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--gold-primary)',
                  display: 'block'
                }}>
                  100%
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Pure Natural Fibers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Garment Showcase */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              padding: '10px',
              background: 'linear-gradient(135deg, rgba(226, 199, 153, 0.3) 0%, rgba(19, 25, 34, 0.4) 50%, rgba(16, 185, 129, 0.25) 100%)',
              boxShadow: 'var(--shadow-lg), 0 0 50px rgba(0, 0, 0, 0.8)'
            }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '4/5',
                backgroundColor: '#0B0F14'
              }}>
                <img
                  src={heroModelImg}
                  alt="You Fashion Haute Avant-Garde Menswear Collection"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                />

                {/* Floating Glassmorphic Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(11, 15, 20, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid var(--gold-border-strong)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
                }}>
                  <div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.65rem', marginBottom: '0.2rem' }}>
                      Atelier Signature
                    </span>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Architectural Geometric Pullover
                    </h4>
                    <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      Double-Knit Merino & Wide-Leg Trousers
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--gold-primary)', display: 'block' }}>
                      ₹4,899
                    </span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--emerald-light)' }}>
                      GST Included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
