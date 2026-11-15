import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, Clock, CheckCircle2, ShieldCheck, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { LEGAL_DETAILS } from '../data/products';

export const RefundPolicyPage = () => {
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
          <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
            Consumer Protection Compliant
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
            Cancellation, Return & Refund Policy
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Official Policy of You Fashion (Proprietor: Waseem) • GSTIN: {LEGAL_DETAILS.gstin} • Effective 2026
          </p>
        </div>

        {/* 3 Metrics Highlighting Customer Assurance */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <RotateCcw size={24} style={{ color: 'var(--emerald-light)', margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>7-Day Window</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>From Doorstep Delivery</span>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <Clock size={24} style={{ color: 'var(--gold-primary)', margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>12-Hour Cancellation</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Pre-Dispatch Instant Reversal</span>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <ShieldCheck size={24} style={{ color: 'var(--emerald-light)', margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>7–10 Business Days</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Source Gateway Reversal</span>
          </div>
        </div>

        {/* Policy Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.75 }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              1. 7-Day Hassle-Free Return & Exchange Window
            </h2>
            <p>
              We want every patron to be thoroughly thrilled with the fit, drape, and tactile finish of our menswear. If a garment does not meet your expectations or requires a different size, you may initiate a return or exchange request within <strong>7 (seven) calendar days</strong> from the timestamp of delivery confirmed by the carrier.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              2. Pre-Dispatch Cancellation Policy
            </h2>
            <p>
              You have the right to cancel any order free of cost within <strong>12 hours</strong> of placing it, or anytime prior to dispatch handover to our courier partner (whichever is earlier).
            </p>
            <p style={{ marginTop: '0.6rem' }}>
              Upon cancellation, an automated full reversal (100% of order value) is immediately initiated through the respective payment gateway (Cashfree, PhonePe, Razorpay, or PayU) without any penalty or administrative deduction.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              3. Step-by-Step Return & Reverse Pickup Process
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(19, 25, 34, 0.6)', padding: '1rem', borderRadius: '10px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gold-primary)', color: '#0B0F14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>1</span>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600 }}>Initiate Request</h4>
                  <p style={{ fontSize: '0.85rem' }}>Email <strong>support@youfashion.in</strong> with your Order ID (e.g. YF-XXXXXX), photos of the item, and the reason (size mismatch, style preference, etc.) or call +91 98765 43210.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(19, 25, 34, 0.6)', padding: '1rem', borderRadius: '10px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gold-primary)', color: '#0B0F14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>2</span>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600 }}>Reverse Pickup Scheduled</h4>
                  <p style={{ fontSize: '0.85rem' }}>Our team schedules a doorstep reverse pickup via Delhivery or Blue Dart within 24–48 hours at your original delivery address across all serviceable Indian PIN codes.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(19, 25, 34, 0.6)', padding: '1rem', borderRadius: '10px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gold-primary)', color: '#0B0F14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>3</span>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600 }}>Quality Check at Bhiwadi Atelier</h4>
                  <p style={{ fontSize: '0.85rem' }}>Upon reaching our Bhiwadi facility, garments are inspected to verify they are unworn, unwashed, unaltered, and possess original You Fashion tags.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(19, 25, 34, 0.6)', padding: '1rem', borderRadius: '10px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gold-primary)', color: '#0B0F14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>4</span>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600 }}>Immediate Refund Disbursement</h4>
                  <p style={{ fontSize: '0.85rem' }}>Refund is triggered within 24 hours of inspection passing directly to the original source method.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              4. Refund Disbursement Timelines & Methods
            </h2>
            <p>
              In accordance with banking guidelines, refunds are settled according to the original payment mode used during checkout:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <li>
                <strong>UPI (Google Pay, PhonePe, Paytm, BHIM):</strong> 2–4 business days directly to the originating VPA/bank account.
              </li>
              <li>
                <strong>Credit Cards & Debit Cards (Visa, MasterCard, RuPay):</strong> 7–10 business days, depending on your issuing bank's settlement cycle.
              </li>
              <li>
                <strong>Net Banking:</strong> 5–7 business days to the originating bank account.
              </li>
              <li>
                <strong>Cash on Delivery (COD) Orders:</strong> Upon quality verification, our accounts desk requests your verified UPI ID or Bank Account Details (IFSC + Account Number) and issues an instant payout via NEFT / IMPS within 48 hours.
              </li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              5. Eligibility & Non-Returnable Scenarios
            </h2>
            <p>To qualify for a 100% refund or free size exchange, the item must fulfill the following criteria:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
              <li>Item must be entirely unworn, unperfumed, unwashed, and unstained.</li>
              <li>All original woven neck labels, hangtags, and spare button envelopes must remain intact.</li>
              <li>Garments returned with evident body odor, cosmetic marks, or altered seams cannot be accepted and will be returned to the buyer at their expense.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              6. Escalations & Refund Support Desk
            </h2>
            <div style={{
              background: 'rgba(19, 25, 34, 0.7)',
              border: '1px solid var(--border-medium)',
              borderRadius: '10px',
              padding: '1.25rem',
              marginTop: '0.75rem'
            }}>
              <div><strong>Dedicated Returns Desk:</strong> support@youfashion.in</div>
              <div><strong>Escalations to Proprietor:</strong> waseem@youfashion.in</div>
              <div><strong>Hotline:</strong> +91 98765 43210 (Mon–Sat, 10:00 AM – 7:00 PM IST)</div>
              <div><strong>Return Address:</strong> Returns Dept, You Fashion, Building No. 05, Bhiwadi Alwar Road, Bhiwadi, District: Khairthal Tijara, Rajasthan — 301019, India.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

