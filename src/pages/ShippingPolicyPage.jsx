import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, ShieldCheck, MapPin, PackageCheck, AlertCircle, ArrowLeft } from 'lucide-react';
import { LEGAL_DETAILS } from '../data/products';

export const ShippingPolicyPage = () => {
  return (
    <div style={{ backgroundColor: '#0B0F14', minHeight: '80vh', padding: '3.5rem 0 6rem' }}>
      <div className="container-narrow">
        {/* Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-primary)', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} /> Return to Home
          </Link>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            Doorstep Logistics Guidelines
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
            Shipping & Delivery Policy
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Last Updated: 15 January 2026 • Dispatches from Bhiwadi, Rajasthan — 301019 • GSTIN: {LEGAL_DETAILS.gstin}
          </p>
        </div>

        {/* 3 Pillars Summary Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <Clock size={24} style={{ color: 'var(--gold-primary)', margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>1–2 Business Days</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Atelier Dispatch Timeline</span>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <Truck size={24} style={{ color: 'var(--emerald-light)', margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>5–7 Business Days</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Pan-India Doorstep Transit</span>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <ShieldCheck size={24} style={{ color: 'var(--gold-primary)', margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹1,999+ Free Shipping</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Flat ₹99 Below Threshold</span>
          </div>
        </div>

        {/* Clauses */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.75 }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              1. Fulfillment & Packaging Standards
            </h2>
            <p>
              Every garment created at You Fashion undergoes a multi-point quality examination prior to packing. Garments are wrapped in protective tissue, placed inside custom breathable garment sleeves, and sealed in tamper-evident, weather-resistant outer courier boxes to ensure pristine condition upon arrival.
            </p>
            <p style={{ marginTop: '0.6rem' }}>
              All shipments originate from our central dispatch facility located at: <strong>Building No. 05, Bhiwadi Alwar Road, Bhiwadi, District: Khairthal Tijara, Rajasthan — 301019, India</strong>.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              2. Order Dispatch Timeline
            </h2>
            <p>
              Standard orders are processed, packaged, and dispatched to our logistics partners within <strong>1–2 business days</strong> (Monday through Saturday, excluding public holidays). Orders placed on Sundays or gazetted state holidays are processed on the subsequent working day.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              3. Transit Timeline & Delivery Partners
            </h2>
            <p>
              Once dispatched, average transit timelines vary by geographic tier across India:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <li><strong>Delhi-NCR, Jaipur & Northern States:</strong> 2–4 business days.</li>
              <li><strong>Metro Hubs (Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata):</strong> 3–5 business days.</li>
              <li><strong>Rest of India / Tier 2 & Tier 3 Cities:</strong> 5–7 business days.</li>
              <li><strong>Special Remote Regions (Northeast, J&K, Island Territories):</strong> 7–10 business days.</li>
            </ul>
            <p style={{ marginTop: '0.6rem' }}>
              We partner exclusively with top-tier, insured Indian logistics aggregators including <strong>Delhivery, Blue Dart Express, and DTDC</strong> to ensure maximum safety and live milestone tracking.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              4. Shipping Fees & Free Delivery Threshold
            </h2>
            <div style={{
              background: 'rgba(19, 25, 34, 0.7)',
              border: '1px solid var(--gold-border)',
              borderRadius: '12px',
              padding: '1.25rem',
              marginTop: '0.75rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600 }}>
                <span>Order Total (Inclusive of GST)</span>
                <span>Delivery Charge</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', color: 'var(--emerald-light)', fontWeight: 700 }}>
                <span>₹1,999 and above</span>
                <span>FREE (₹0)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.6rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span>Below ₹1,999</span>
                <span>Flat ₹99 (Standard Express)</span>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              5. Live Tracking & Communications
            </h2>
            <p>
              Upon parcel handover to the carrier, an automated confirmation message containing your unique Air Waybill (AWB) number and direct carrier tracking link is triggered to your registered mobile number (via SMS/WhatsApp) and email address. You can monitor the real-time movement of your package from Bhiwadi to your doorstep.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              6. Transit Damage & Tampered Shipments
            </h2>
            <p>
              All shipments from You Fashion are 100% commercially insured during transit.
            </p>
            <p style={{ marginTop: '0.6rem' }}>
              <strong>Important Instruction:</strong> If you observe that the outer courier carton is crushed, torn, opened, or the You Fashion security tamper tape has been compromised, <strong>DO NOT ACCEPT</strong> the delivery. Please refuse receipt and mark "Refused Due to Tampering" on the courier delivery sheet, then immediately notify support@youfashion.in or call +91 98765 43210. We will dispatch a brand-new replacement immediately at zero additional expense.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

