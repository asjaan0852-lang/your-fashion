import React from 'react';
import { Feather, Scissors, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LEGAL_DETAILS } from '../../data/products';

export const CraftsmanshipSection = () => {
  const pillars = [
    {
      icon: Feather,
      title: '1. Certified Natural Fibers',
      subtitle: 'European Flax & Supima Cotton',
      description: 'We strictly reject synthetic polyester blends that cause perspiration in tropical climates. Every shirt and knit is spun from 100% Normandy flax linen, Giza cotton, and Australian Merino wool.'
    },
    {
      icon: Scissors,
      title: '2. Rajasthan Atelier Tailoring',
      subtitle: 'Single-Needle Precision',
      description: 'Handcrafted in our Bhiwadi workshop under ethical craft conditions. Featuring mother-of-pearl buttons, Neapolitan unstructured shoulders, and 22 stitches per inch for unmatched longevity.'
    },
    {
      icon: Truck,
      title: '3. Insured Doorstep Fulfillment',
      subtitle: 'Delhivery & Blue Dart Express',
      description: 'Dispatched within 1–2 business days in tamper-evident luxury boxes. Free shipping above ₹1,999, live SMS updates, and an unconditional 7-Day return policy with reverse pickup.'
    }
  ];

  return (
    <section style={{
      padding: '5.5rem 0',
      backgroundColor: '#0B0F14',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.65rem' }}>
            The You Fashion Philosophy
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.2
          }}>
            Craftsmanship Without Compromise
          </h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', marginTop: '0.6rem' }}>
            Founded by <strong>Waseem</strong> in Bhiwadi, Rajasthan, You Fashion exists to provide Indian men with bespoke-tier luxury without exorbitant markups.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel card-hover"
                style={{
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backgroundColor: 'rgba(19, 25, 34, 0.75)'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(226, 199, 153, 0.15) 0%, rgba(19, 25, 34, 0.8) 100%)',
                  border: '1px solid var(--gold-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)'
                }}>
                  <Icon size={26} />
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.2rem'
                  }}>
                    {pillar.title}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {pillar.subtitle}
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {pillar.description}
                </p>

                <div style={{
                  marginTop: 'auto',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.8rem',
                  color: 'var(--emerald-light)'
                }}>
                  <CheckCircle2 size={15} />
                  <span>Verified Atelier Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* GST Transparency Banner */}
        <div style={{
          marginTop: '3.5rem',
          background: 'linear-gradient(135deg, rgba(19, 25, 34, 0.9) 0%, rgba(24, 32, 43, 0.7) 100%)',
          border: '1px solid var(--gold-border)',
          borderRadius: '16px',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(226, 199, 153, 0.12)',
              border: '1px solid var(--gold-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              flexShrink: 0
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Government Registered Sole Proprietorship
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                Trade Name: <strong>You Fashion</strong> • Proprietor: <strong>Waseem</strong> • GSTIN: <strong style={{ color: 'var(--gold-primary)' }}>{LEGAL_DETAILS.gstin}</strong>
              </p>
            </div>
          </div>

          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Principal Place: Building No. 05, Bhiwadi Alwar Road, Bhiwadi, Rajasthan — 301019
          </div>
        </div>
      </div>
    </section>
  );
};

