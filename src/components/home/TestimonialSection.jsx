import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { REVIEWS } from '../../data/reviews';

export const TestimonialSection = () => {
  return (
    <section style={{
      padding: '5.5rem 0',
      backgroundColor: '#0F141C',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.65rem' }}>
            Voices of Our Patrons
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.2
          }}>
            Trusted Across 27,000+ PIN Codes
          </h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', marginTop: '0.6rem' }}>
            Hear from architects, entrepreneurs, creative directors, and discerning patrons who have experienced You Fashion.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-panel card-hover"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                backgroundColor: 'rgba(19, 25, 34, 0.8)'
              }}
            >
              <div>
                {/* Rating & Quote Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem', color: '#F59E0B' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={20} style={{ color: 'var(--gold-border-strong)', opacity: 0.8 }} />
                </div>

                <h4 style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.6rem',
                  lineHeight: 1.3
                }}>
                  "{review.title}"
                </h4>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem'
                }}>
                  {review.comment}
                </p>
              </div>

              {/* Author & Verification */}
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    {review.author}
                  </span>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.72rem',
                    color: 'var(--emerald-light)',
                    fontWeight: 600
                  }}>
                    <ShieldCheck size={12} /> Verified Buyer
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  <span>{review.location}</span>
                  <span>{review.date}</span>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', marginTop: '0.3rem' }}>
                  Purchased: {review.productName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

