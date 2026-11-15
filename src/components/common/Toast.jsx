import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast = () => {
  const { toast } = useCart();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1100,
        backgroundColor: '#131922',
        border: `1px solid ${isSuccess ? 'var(--emerald-primary)' : isError ? '#EF4444' : 'var(--gold-border)'}`,
        borderRadius: '12px',
        padding: '0.85rem 1.25rem',
        boxShadow: 'var(--shadow-lg), 0 0 25px rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        maxWidth: '380px',
        animation: 'slideUpToast 250ms cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {isSuccess && <CheckCircle2 size={18} style={{ color: 'var(--emerald-primary)', flexShrink: 0 }} />}
      {isError && <AlertCircle size={18} style={{ color: '#EF4444', flexShrink: 0 }} />}
      {!isSuccess && !isError && <Info size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />}

      <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
        {toast.message}
      </span>

      <style>{`
        @keyframes slideUpToast {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

