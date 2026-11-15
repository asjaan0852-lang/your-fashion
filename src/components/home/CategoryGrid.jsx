import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import shirt01Img from '../../assets/products/shirt-01-micro-stripe.jpg';
import polo01Img from '../../assets/products/polo-01-mocha-rugby.jpg';
import denim01Img from '../../assets/products/denim-01-faded-ash.jpg';
import jacket01Img from '../../assets/products/jacket-01-moto-racing.jpg';
import pullover01Img from '../../assets/products/pullover-01-espresso-camel.jpg';

export const CategoryGrid = () => {
  const categories = [
    {
      id: 'shirts',
      title: 'Artisanal Shirts',
      subtitle: 'Oxford Cotton & Flannel Hybrid',
      image: shirt01Img,
      badge: '6 Silhouettes'
    },
    {
      id: 't-shirts',
      title: 'Polos & Jerseys',
      subtitle: 'Heavyweight Rugby & Mercerized Piqué',
      image: polo01Img,
      badge: '7 Silhouettes'
    },
    {
      id: 'trousers',
      title: 'Denim & Trousers',
      subtitle: '14oz Skate Denim & Cargo Pants',
      image: denim01Img,
      badge: '8 Silhouettes'
    },
    {
      id: 'jackets',
      title: 'Leatherette & Jackets',
      subtitle: 'Grand Prix Moto & Varsity Bombers',
      image: jacket01Img,
      badge: '6 Silhouettes'
    },
    {
      id: 'knitwear',
      title: 'Hoodies & Knitwear',
      subtitle: '450 GSM Snap Fleece & Bouclé Sweaters',
      image: pullover01Img,
      badge: '8 Silhouettes'
    }
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#0B0F14' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          gap: '1.5rem'
        }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.65rem' }}>
              Explore Categories
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.2
            }}>
              Curated Sartorial Pillars
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.4rem', maxWidth: '500px' }}>
              Every category is meticulously engineered for comfort, climate endurance, and timeless aesthetics.
            </p>
          </div>

          <Link
            to="/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              fontSize: '0.92rem',
              letterSpacing: '0.04em'
            }}
          >
            <span>View All Collections</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="card-hover"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '340px',
                border: '1px solid var(--gold-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.75rem',
                textDecoration: 'none'
              }}
            >
              {/* Image Background with Dark Luxury Vignette */}
              <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0
              }}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 600ms ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(11, 15, 20, 0.2) 0%, rgba(11, 15, 20, 0.5) 40%, rgba(11, 15, 20, 0.94) 100%)'
                }} />
              </div>

              {/* Foreground Category Details */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span className="badge badge-gold" style={{ fontSize: '0.68rem', marginBottom: '0.5rem' }}>
                  {cat.badge}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem'
                }}>
                  {cat.title}
                </h3>
                <p style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{cat.subtitle}</span>
                  <span style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(226, 199, 153, 0.15)',
                    border: '1px solid var(--gold-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)'
                  }}>
                    <ArrowUpRight size={15} />
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
