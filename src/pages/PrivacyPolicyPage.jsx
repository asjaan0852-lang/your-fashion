import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Database, CheckCircle2 } from 'lucide-react';
import { LEGAL_DETAILS } from '../data/products';

export const PrivacyPolicyPage = () => {
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
            Compliance with DPDPA 2023 & IT Act 2000
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
            Privacy & Data Protection Policy
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Effective Date: 15 January 2026 • Issued by Data Fiduciary: Waseem (You Fashion) • GSTIN: {LEGAL_DETAILS.gstin}
          </p>
        </div>

        {/* Data Fiduciary Box */}
        <div className="glass-panel" style={{
          padding: '1.5rem',
          backgroundColor: 'rgba(19, 25, 34, 0.9)',
          border: '1px solid var(--emerald-badge-border)',
          borderRadius: '14px',
          marginBottom: '2.5rem',
          fontSize: '0.86rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald-light)', fontWeight: 700, marginBottom: '0.5rem' }}>
            <ShieldCheck size={18} /> Official Data Fiduciary Identification
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Under the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, the designated Data Fiduciary for all processing activities on youfashion.in is <strong>Waseem</strong> (Proprietor, You Fashion), having its registered office at Building No. 05, Bhiwadi Alwar Road, Bhiwadi, District: Khairthal Tijara, Rajasthan — 301019, India.
          </p>
        </div>

        {/* Content Clauses */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.75 }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              1. Our Data Privacy Commitment
            </h2>
            <p>
              At You Fashion, we treat the personal privacy of our patrons with the same meticulous discretion and reverence as our tailoring craft. We collect only the minimal data strictly essential to process orders, facilitate doorstep delivery across India, fulfill statutory tax requirements under the Central Goods and Services Tax Act, 2017, and protect against fraudulent card usage.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              2. Categories of Personal Data Collected
            </h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <strong>Contact Information:</strong> Full name, telephone/mobile number, and active email address.
              </li>
              <li>
                <strong>Delivery & Shipping Information:</strong> House/flat number, street name, landmark, city, state, postal PIN code.
              </li>
              <li>
                <strong>Transactional & Commercial Records:</strong> Purchased item IDs, sizing, date/time of checkout, order value, payment status, and unique Order ID.
              </li>
              <li>
                <strong>Device & Network Data:</strong> IP address, browser type, and operating system collected via automated server logs to prevent automated bot scraping and fraud.
              </li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              3. Strict Non-Storage of Financial & Card Data
            </h2>
            <p>
              <strong>We NEVER store your card number, CVV code, UPI PIN, or bank passwords.</strong>
            </p>
            <p style={{ marginTop: '0.6rem' }}>
              All financial transactions are conducted directly through RBI-authorized, PCI-DSS Level 1 certified payment aggregators (<strong>Cashfree, PhonePe, Razorpay, and PayU</strong>). Your sensitive payment parameters are transmitted over 256-bit SSL encrypted channels directly to the respective payment gateway. You Fashion only receives an alphanumeric token indicating whether the transaction was successful or rejected.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              4. Lawful Purpose & Data Utilization
            </h2>
            <p>We process your personal data strictly for lawful, explicitly stated objectives:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <li>Executing garment dispatch and handover to logistics partners (Delhivery, Blue Dart, DTDC).</li>
              <li>Transmitting automated SMS and WhatsApp dispatch notifications and live tracking links.</li>
              <li>Facilitating reverse pickup and processing refunds in the event of an authorized return.</li>
              <li>Complying with statutory tax and GST audit obligations under Indian law.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              5. Statutory 8-Year Tax Invoice Retention Period
            </h2>
            <p>
              In strict accordance with <strong>Section 36 of the Central Goods and Services Tax Act, 2017 (CGST Act)</strong> and the Income Tax Act, 1961, tax invoices and associated delivery records containing customer name, shipping destination, GST rate, and transaction value must be retained for a mandatory statutory duration of <strong>8 (eight) years</strong> from the end of the financial year to which the transaction pertains. Non-statutory behavioral telemetry is automatically scrubbed within 90 days.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              6. Patron Rights Under DPDPA 2023
            </h2>
            <p>Under the Digital Personal Data Protection Act, 2023, you enjoy statutory rights regarding your personal data:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <li><strong>Right to Summary:</strong> Request an overview of all personal data held by our atelier.</li>
              <li><strong>Right to Correction:</strong> Request immediate rectification of inaccurate contact or delivery details.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of non-statutory personal data, subject to mandatory GST record retention laws.</li>
              <li><strong>Right to Grievance Redressal:</strong> Direct recourse to our Grievance Officer and subsequently the Data Protection Board of India.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              7. Data Protection Officer & Inquiries
            </h2>
            <p>
              To exercise any privacy rights, report security concerns, or request data corrections, please contact our dedicated desk:
            </p>
            <div style={{
              background: 'rgba(19, 25, 34, 0.7)',
              border: '1px solid var(--border-medium)',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              marginTop: '0.75rem'
            }}>
              <div><strong>Data Protection Officer:</strong> Waseem (Proprietor, You Fashion)</div>
              <div><strong>Direct Privacy Email:</strong> privacy@youfashion.in (cc: support@youfashion.in)</div>
              <div><strong>Postal Address:</strong> Building No. 05, Bhiwadi Alwar Road, Bhiwadi, District: Khairthal Tijara, Rajasthan — 301019, India</div>
              <div><strong>Turnaround Commitment:</strong> Formal acknowledgement within 24 hours; resolution within 7 business days.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

