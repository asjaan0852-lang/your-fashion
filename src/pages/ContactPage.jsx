import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Sparkles } from 'lucide-react';
import { LEGAL_DETAILS } from '../data/products';
import { FAQS } from '../data/faqData';
import { useCart } from '../context/CartContext';

export const ContactPage = () => {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Order & Fitting Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      showToast('Inquiry received. Our Bhiwadi team will reply within 4 business hours.', 'success');
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Order & Fitting Inquiry',
      message: ''
    });
  };

  return (
    <div style={{ backgroundColor: '#0B0F14', minHeight: '80vh', padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--gold-primary)' }}>Contact Us</span>
        </div>

        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            Patron Concierge & Assistance
          </span>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.15
          }}>
            Connect With Our <span className="text-gold-gradient">Bhiwadi Atelier</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.65 }}>
            Whether you require sizing guidance, custom wedding tailoring consultations, or delivery status on an active dispatch, our dedicated team is here to assist.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.75rem',
          marginBottom: '4rem'
        }}>
          {/* Card 1: Operating Address */}
          <div className="glass-panel card-hover" style={{ padding: '2rem 1.75rem', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(226, 199, 153, 0.1)',
              border: '1px solid var(--gold-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              marginBottom: '1.25rem'
            }}>
              <MapPin size={22} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              Atelier & Registered Office
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.85rem' }}>
              {LEGAL_DETAILS.address.formatted}
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              color: 'var(--gold-primary)',
              fontWeight: 600
            }}>
              <ShieldCheck size={14} /> GSTIN: {LEGAL_DETAILS.gstin}
            </div>
          </div>

          {/* Card 2: Phone Hotline */}
          <div className="glass-panel card-hover" style={{ padding: '2rem 1.75rem', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid var(--emerald-badge-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--emerald-primary)',
              marginBottom: '1.25rem'
            }}>
              <Phone size={22} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              Customer Support Hotline
            </h3>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '0.5rem' }}>
              <a href={`tel:${LEGAL_DETAILS.contact.phone.replace(/\s+/g, '')}`} style={{ color: 'inherit' }}>
                {LEGAL_DETAILS.contact.phone}
              </a>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <Clock size={14} style={{ color: 'var(--emerald-light)' }} />
              <span>{LEGAL_DETAILS.contact.phoneHours}</span>
            </div>
          </div>

          {/* Card 3: Email Desks */}
          <div className="glass-panel card-hover" style={{ padding: '2rem 1.75rem', backgroundColor: 'rgba(19, 25, 34, 0.8)' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(226, 199, 153, 0.1)',
              border: '1px solid var(--gold-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              marginBottom: '1.25rem'
            }}>
              <Mail size={22} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              Direct Electronic Desks
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.86rem' }}>
              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.74rem', display: 'block', textTransform: 'uppercase' }}>Orders & Returns:</span>
                <a href={`mailto:${LEGAL_DETAILS.contact.supportEmail}`} style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>
                  {LEGAL_DETAILS.contact.supportEmail}
                </a>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.74rem', display: 'block', textTransform: 'uppercase' }}>Legal & Privacy:</span>
                <a href={`mailto:${LEGAL_DETAILS.contact.privacyEmail}`} style={{ color: 'var(--text-secondary)' }}>
                  {LEGAL_DETAILS.contact.privacyEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form and FAQ Two-Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Interactive Inquiry Form */}
          <div className="glass-panel" style={{
            padding: '2.5rem',
            backgroundColor: 'rgba(19, 25, 34, 0.9)',
            border: '1px solid var(--gold-border-strong)',
            borderRadius: '20px'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid var(--emerald-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald-primary)',
                  margin: '0 auto 1.25rem'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Inquiry Dispatched Successfully
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Our senior concierge in Bhiwadi will review your message and reply to <strong>{formData.email}</strong> within 4 business hours.
                </p>
                <button onClick={handleResetForm} className="btn btn-secondary btn-sm">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    Send an Atelier Inquiry
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    Fill out the parameters below and our concierge desk will assist promptly.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 00000"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="patron@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label">Inquiry Subject</label>
                  <select
                    className="form-select"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Order & Fitting Inquiry">Order & Fitting Inquiry</option>
                    <option value="Return / Exchange Request">7-Day Return / Exchange Request</option>
                    <option value="Payment / Gateway Assistance">Payment / Gateway Assistance (Cashfree/PhonePe)</option>
                    <option value="Bespoke Wedding Tailoring">Bespoke Wedding Tailoring Consultation</option>
                    <option value="Corporate / Bulk Order">Corporate Gifting & Bulk Curation</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Message Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please specify your order ID or questions regarding fit, fabric, or shipping..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '0.95rem' }}>
                  <Send size={16} /> Submit Concierge Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Accordion FAQ Section */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                Instant Answers
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                Frequently Asked Inquiries
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    style={{
                      background: isOpen ? 'rgba(19, 25, 34, 0.95)' : 'rgba(19, 25, 34, 0.5)',
                      border: isOpen ? '1px solid var(--gold-border-strong)' : '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                      style={{
                        width: '100%',
                        padding: '1.1rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        gap: '1rem'
                      }}
                    >
                      <span>{faq.question}</span>
                      <span style={{ color: 'var(--gold-primary)', flexShrink: 0 }}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 1.25rem 1.25rem',
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                        borderTop: '1px solid var(--border-subtle)',
                        paddingTop: '0.85rem'
                      }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

