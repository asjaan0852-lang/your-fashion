import React from 'react';
import { Sparkles, Shield, Truck, RotateCcw, Award } from 'lucide-react';
import { LEGAL_DETAILS } from '../../data/products';

export const MarqueeTicker = () => {
  const items = [
    { icon: Truck, text: 'FREE EXPRESS DELIVERY ABOVE ₹1,999' },
    { icon: Sparkles, text: 'AUTUMN / FESTIVE LUXURY MENSWEAR' },
    { icon: RotateCcw, text: '7-DAY HASSLE-FREE RETURNS & REVERSE PICKUP' },
    { icon: Shield, text: `GST REGISTERED: ${LEGAL_DETAILS.gstin}` },
    { icon: Award, text: 'CURATED & DESIGNED BY WASEEM' },
    { icon: Sparkles, text: '100% PURE EUROPEAN LINEN & SUPIMA COTTON' },
    { icon: Shield, text: 'INSTANT CASHFREE, PHONEPE & RAZORPAY COMPLIANT' },
    { icon: Award, text: 'HANDCRAFTED IN BHIWADI, RAJASTHAN' }
  ];

  return (
    <div style={{
      backgroundColor: '#070A0E',
      borderTop: '1px solid rgba(226, 199, 153, 0.2)',
      borderBottom: '1px solid rgba(226, 199, 153, 0.2)',
      padding: '0.85rem 0',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="marquee-wrapper">
        <div className="marquee-content" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          {[...items, ...items].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={14} style={{ color: 'var(--gold-primary)' }} />
                <span>{item.text}</span>
                <span style={{ color: 'var(--gold-border-strong)', marginLeft: '1.5rem' }}>◆</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

