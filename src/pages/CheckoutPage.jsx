import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Truck,
  Building,
  Smartphone,
  Banknote,
  PackageCheck,
  Printer,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { LEGAL_DETAILS } from '../data/products';

export const CheckoutPage = () => {
  const {
    cartItems,
    cartCount,
    subtotal,
    discount,
    shippingFee,
    total,
    appliedCoupon,
    clearCart,
    showToast
  } = useCart();

  const navigate = useNavigate();

  // Multi-step state: 1 = Shipping Address, 2 = Payment Selection, 3 = Confirmation
  const [currentStep, setCurrentStep] = useState(1);

  // Address State
  const [address, setAddress] = useState({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: 'Rajasthan',
    pincode: ''
  });

  // Payment Selection
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi', 'cards', 'netbanking', 'cod'
  const [upiApp, setUpiApp] = useState('gpay'); // 'gpay', 'phonepe', 'paytm'

  // Confirmed Order Details
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Validation for Step 1
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (!address.fullName || !address.email || !address.phone || !address.streetAddress || !address.city || !address.pincode) {
      showToast('Please fill in all mandatory address fields.', 'error');
      return;
    }
    if (address.phone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'error');
      return;
    }
    if (address.pincode.length < 6) {
      showToast('Please enter a valid 6-digit Indian PIN code.', 'error');
      return;
    }

    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Place Order (Step 2 to 3)
  const handlePlaceOrder = () => {
    // Generate unique order ID in format YF-XXXXXX
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    const orderId = `YF-${randomDigits}`;

    const orderData = {
      orderId,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: [...cartItems],
      address: { ...address },
      paymentMethod,
      subtotal,
      discount,
      shippingFee,
      total,
      appliedCoupon,
      gstin: LEGAL_DETAILS.gstin,
      proprietor: LEGAL_DETAILS.proprietor,
      estimatedDelivery: '5–7 business days via Delhivery Express'
    };

    setConfirmedOrder(orderData);
    clearCart();
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Order ${orderId} placed successfully!`, 'success');
  };

  // If cart is empty and not on confirmation step
  if (cartItems.length === 0 && currentStep !== 3) {
    return (
      <div style={{ backgroundColor: '#0B0F14', minHeight: '80vh', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'rgba(226, 199, 153, 0.1)',
            border: '1px solid var(--gold-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold-primary)',
            margin: '0 auto 1.5rem'
          }}>
            <ShoppingBag size={32} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
            Your Shopping Bag is Empty
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Please select your desired garments from our catalog prior to proceeding to checkout.
          </p>
          <Link to="/shop" className="btn btn-primary">
            Browse Menswear Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0B0F14', minHeight: '85vh', padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Step Indicator Header (steps 1 & 2) */}
        {currentStep < 3 && (
          <div style={{ maxWidth: '880px', margin: '0 auto 3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
              {/* Progress Line */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '15%',
                right: '15%',
                height: '2px',
                background: currentStep === 2 ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.1)',
                zIndex: 0,
                transform: 'translateY(-50%)'
              }} />

              {/* Step 1 Pill */}
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: currentStep >= 1 ? 'var(--gold-primary)' : 'var(--bg-elevated)',
                  color: currentStep >= 1 ? '#0B0F14' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  margin: '0 auto 0.4rem',
                  boxShadow: currentStep === 1 ? '0 0 15px rgba(226, 199, 153, 0.4)' : 'none'
                }}>
                  {currentStep > 1 ? <CheckCircle2 size={18} /> : '1'}
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: currentStep >= 1 ? 'var(--gold-primary)' : 'var(--text-muted)' }}>
                  Shipping Address
                </span>
              </div>

              {/* Step 2 Pill */}
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: currentStep >= 2 ? 'var(--gold-primary)' : 'var(--bg-elevated)',
                  color: currentStep >= 2 ? '#0B0F14' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  margin: '0 auto 0.4rem',
                  boxShadow: currentStep === 2 ? '0 0 15px rgba(226, 199, 153, 0.4)' : 'none'
                }}>
                  2
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: currentStep >= 2 ? 'var(--gold-primary)' : 'var(--text-muted)' }}>
                  Payment Method
                </span>
              </div>

              {/* Step 3 Pill */}
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: currentStep === 3 ? 'var(--emerald-primary)' : 'var(--bg-elevated)',
                  color: currentStep === 3 ? '#FFFFFF' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  margin: '0 auto 0.4rem'
                }}>
                  3
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: currentStep === 3 ? 'var(--emerald-light)' : 'var(--text-muted)' }}>
                  Confirmation
                </span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 1: Shipping Address Form */}
        {currentStep === 1 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Address Inputs */}
            <form onSubmit={handleAddressSubmit} className="glass-panel" style={{
              padding: '2.5rem',
              backgroundColor: 'rgba(19, 25, 34, 0.9)',
              borderRadius: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <Truck size={22} style={{ color: 'var(--gold-primary)' }} />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                  Delivery Destination
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Kapoor"
                    className="form-input"
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="form-label">Email Address (For Tax Invoice) *</label>
                    <input
                      type="email"
                      required
                      placeholder="patron@example.com"
                      className="form-input"
                      value={address.email}
                      onChange={(e) => setAddress({ ...address, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Mobile Number (For Delivery SMS) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      className="form-input"
                      value={address.phone}
                      onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Flat, House No., Building Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Penthouse 4B, Emerald Heights"
                    className="form-input"
                    value={address.streetAddress}
                    onChange={(e) => setAddress({ ...address, streetAddress: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label">Street, Sector, Landmark (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Near Golf Course Road"
                    className="form-input"
                    value={address.apartment}
                    onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur"
                      className="form-input"
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">PIN Code *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="6 digits"
                      className="form-input"
                      value={address.pincode}
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">State *</label>
                  <select
                    className="form-select"
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  >
                    {[
                      'Rajasthan', 'Delhi', 'Haryana', 'Maharashtra', 'Karnataka',
                      'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Gujarat', 'West Bengal',
                      'Punjab', 'Kerala', 'Madhya Pradesh', 'Bihar', 'Goa', 'Uttarakhand'
                    ].map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '0.95rem', marginTop: '0.75rem' }}>
                  Continue to Payment Method <ArrowRight size={17} />
                </button>
              </div>
            </form>

            {/* Order Summary Sidebar */}
            <OrderSummaryPanel
              cartItems={cartItems}
              subtotal={subtotal}
              discount={discount}
              shippingFee={shippingFee}
              total={total}
              appliedCoupon={appliedCoupon}
            />
          </div>
        )}

        {/* STEP 2: Payment Method Selection */}
        {currentStep === 2 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div className="glass-panel" style={{
              padding: '2.5rem',
              backgroundColor: 'rgba(19, 25, 34, 0.9)',
              borderRadius: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Lock size={22} style={{ color: 'var(--gold-primary)' }} />
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                    Payment Mode
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gold-primary)',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <ArrowLeft size={14} /> Edit Address
                </button>
              </div>

              {/* Delivery destination preview card */}
              <div style={{
                background: 'rgba(11, 15, 20, 0.6)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '0.85rem 1rem',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem'
              }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  Delivering to: {address.fullName} ({address.phone})
                </div>
                <div>{address.streetAddress}, {address.city}, {address.state} — {address.pincode}</div>
              </div>

              {/* Gateway Selection Tabs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {/* 1. UPI */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.1rem 1.25rem',
                  borderRadius: '12px',
                  background: paymentMethod === 'upi' ? 'rgba(226, 199, 153, 0.12)' : 'rgba(11, 15, 20, 0.6)',
                  border: paymentMethod === 'upi' ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      style={{ accentColor: 'var(--gold-primary)' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                        UPI Instant (Google Pay, PhonePe, Paytm, BHIM)
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--emerald-light)' }}>
                        Recommended • Zero Transaction Fee • Instant Authorization
                      </div>
                    </div>
                  </div>
                  <Smartphone size={20} style={{ color: 'var(--gold-primary)' }} />
                </label>

                {/* 2. Cards */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.1rem 1.25rem',
                  borderRadius: '12px',
                  background: paymentMethod === 'cards' ? 'rgba(226, 199, 153, 0.12)' : 'rgba(11, 15, 20, 0.6)',
                  border: paymentMethod === 'cards' ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cards'}
                      onChange={() => setPaymentMethod('cards')}
                      style={{ accentColor: 'var(--gold-primary)' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                        Credit & Debit Cards (Visa, MasterCard, RuPay)
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        Processed via 256-Bit SSL Cashfree / PhonePe Gateway
                      </div>
                    </div>
                  </div>
                  <CreditCard size={20} style={{ color: 'var(--gold-primary)' }} />
                </label>

                {/* 3. Net Banking */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.1rem 1.25rem',
                  borderRadius: '12px',
                  background: paymentMethod === 'netbanking' ? 'rgba(226, 199, 153, 0.12)' : 'rgba(11, 15, 20, 0.6)',
                  border: paymentMethod === 'netbanking' ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'netbanking'}
                      onChange={() => setPaymentMethod('netbanking')}
                      style={{ accentColor: 'var(--gold-primary)' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                        Net Banking
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        All 50+ major Indian retail & corporate banks
                      </div>
                    </div>
                  </div>
                  <Building size={20} style={{ color: 'var(--gold-primary)' }} />
                </label>

                {/* 4. Cash on Delivery */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.1rem 1.25rem',
                  borderRadius: '12px',
                  background: paymentMethod === 'cod' ? 'rgba(226, 199, 153, 0.12)' : 'rgba(11, 15, 20, 0.6)',
                  border: paymentMethod === 'cod' ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      style={{ accentColor: 'var(--gold-primary)' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                        Cash on Delivery (COD)
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        Pay cash to courier executive upon doorstep inspection
                      </div>
                    </div>
                  </div>
                  <Banknote size={20} style={{ color: 'var(--gold-primary)' }} />
                </label>
              </div>

              {/* CRITICAL GATEWAY COMPLIANCE CONSENT NOTICE */}
              <div style={{
                background: 'rgba(11, 15, 20, 0.8)',
                border: '1px solid var(--gold-border)',
                borderRadius: '10px',
                padding: '1rem 1.15rem',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '0.35rem' }}>
                  <ShieldCheck size={16} /> Mandatory Statutory Order Consent
                </div>
                <p>
                  By placing your order, you explicitly agree to You Fashion's{' '}
                  <Link to="/terms" target="_blank" style={{ color: 'var(--gold-primary)', textDecoration: 'underline' }}>
                    Terms & Conditions
                  </Link>
                  ,{' '}
                  <Link to="/privacy" target="_blank" style={{ color: 'var(--gold-primary)', textDecoration: 'underline' }}>
                    Privacy Policy
                  </Link>
                  , and{' '}
                  <Link to="/refund-policy" target="_blank" style={{ color: 'var(--gold-primary)', textDecoration: 'underline' }}>
                    Refund & Cancellation Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Place Order CTA */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="btn btn-emerald"
                style={{ width: '100%', padding: '1.05rem', fontSize: '1rem' }}
              >
                Confirm & Place Order (₹{total.toLocaleString('en-IN')}) <ArrowRight size={18} />
              </button>

              <div style={{
                textAlign: 'center',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                marginTop: '0.85rem'
              }}>
                🔒 256-Bit SSL Encrypted • GST Registered: {LEGAL_DETAILS.gstin}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <OrderSummaryPanel
              cartItems={cartItems}
              subtotal={subtotal}
              discount={discount}
              shippingFee={shippingFee}
              total={total}
              appliedCoupon={appliedCoupon}
            />
          </div>
        )}

        {/* STEP 3: Order Confirmation & Tax Invoice Preview */}
        {currentStep === 3 && confirmedOrder && (
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {/* Success Banner */}
            <div className="glass-panel" style={{
              padding: '2.5rem',
              backgroundColor: 'rgba(19, 25, 34, 0.95)',
              border: '1px solid var(--emerald-primary)',
              borderRadius: '20px',
              textAlign: 'center',
              marginBottom: '2.5rem',
              boxShadow: 'var(--shadow-lg), 0 0 35px rgba(16, 185, 129, 0.15)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid var(--emerald-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--emerald-light)',
                margin: '0 auto 1.25rem'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                Order Confirmed & Authorized
              </span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Thank You For Your Patronage
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                Your order <strong style={{ color: 'var(--gold-primary)' }}>{confirmedOrder.orderId}</strong> has been received by our Bhiwadi atelier and is scheduled for tailoring dispatch.
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(11, 15, 20, 0.7)',
                padding: '0.65rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                color: 'var(--emerald-light)',
                border: '1px solid var(--emerald-badge-border)'
              }}>
                <Truck size={16} /> Estimated Delivery: {confirmedOrder.estimatedDelivery}
              </div>
            </div>

            {/* Official Tax Invoice & Order Breakdown Card */}
            <div className="glass-panel" style={{
              padding: '2.5rem',
              backgroundColor: '#0F141C',
              border: '1px solid var(--gold-border-strong)',
              borderRadius: '20px'
            }}>
              {/* Invoice Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--gold-primary)', letterSpacing: '0.04em' }}>
                    YOU FASHION
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Proprietor: <strong>{confirmedOrder.proprietor}</strong>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    GSTIN: <strong>{confirmedOrder.gstin}</strong>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', maxWidth: '300px', marginTop: '0.2rem' }}>
                    {LEGAL_DETAILS.address.formatted}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge-gold" style={{ fontSize: '0.75rem', marginBottom: '0.4rem' }}>
                    TAX INVOICE SUMMARY
                  </span>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {confirmedOrder.orderId}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Date: {confirmedOrder.date}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--emerald-light)', fontWeight: 600 }}>
                    Payment Mode: {confirmedOrder.paymentMethod.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Shipping Address Recap */}
              <div style={{
                background: 'rgba(19, 25, 34, 0.6)',
                borderRadius: '10px',
                padding: '1rem 1.25rem',
                marginBottom: '1.5rem',
                fontSize: '0.85rem'
              }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                  Billed & Shipped To:
                </span>
                <strong style={{ color: 'var(--text-primary)' }}>{confirmedOrder.address.fullName}</strong>
                <div style={{ color: 'var(--text-secondary)' }}>
                  {confirmedOrder.address.streetAddress}, {confirmedOrder.address.city}, {confirmedOrder.address.state} — {confirmedOrder.address.pincode}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                  Phone: {confirmedOrder.address.phone} • Email: {confirmedOrder.address.email}
                </div>
              </div>

              {/* Purchased Items Table */}
              <div style={{ marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                      <th style={{ padding: '0.6rem 0' }}>Garment Silhouette</th>
                      <th style={{ padding: '0.6rem 0' }}>Size</th>
                      <th style={{ padding: '0.6rem 0' }}>Qty</th>
                      <th style={{ padding: '0.6rem 0', textAlign: 'right' }}>Price (GST Incl.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {confirmedOrder.items.map((item, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                        <td style={{ padding: '0.85rem 0', color: 'var(--text-primary)', fontWeight: 500 }}>
                          {item.name}
                        </td>
                        <td style={{ padding: '0.85rem 0', color: 'var(--text-secondary)' }}>
                          {item.selectedSize}
                        </td>
                        <td style={{ padding: '0.85rem 0', color: 'var(--text-secondary)' }}>
                          {item.quantity}
                        </td>
                        <td style={{ padding: '0.85rem 0', textAlign: 'right', color: 'var(--gold-primary)', fontWeight: 600 }}>
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Financial Totals */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1rem',
                fontSize: '0.88rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Gross Subtotal (All taxes included)</span>
                  <span>₹{confirmedOrder.subtotal.toLocaleString('en-IN')}</span>
                </div>

                {confirmedOrder.discount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--emerald-light)' }}>
                    <span>Privilege Coupon Savings</span>
                    <span>-₹{confirmedOrder.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Insured Express Shipping</span>
                  <span>{confirmedOrder.shippingFee === 0 ? 'FREE' : `₹${confirmedOrder.shippingFee}`}</span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}>
                  <span>Total Paid</span>
                  <span className="text-gold-gradient">₹{confirmedOrder.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '2.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={() => window.print()}
                  className="btn btn-secondary"
                  style={{ padding: '0.85rem 1.5rem' }}
                >
                  <Printer size={16} /> Print Tax Invoice
                </button>
                <Link to="/shop" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                  Continue Shopping <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Sub-component: Order Summary Sidebar
const OrderSummaryPanel = ({ cartItems, subtotal, discount, shippingFee, total, appliedCoupon }) => {
  return (
    <div className="glass-panel" style={{
      padding: '2rem',
      backgroundColor: 'rgba(19, 25, 34, 0.85)',
      borderRadius: '20px',
      position: 'sticky',
      top: '100px'
    }}>
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.2rem',
        color: 'var(--text-primary)',
        marginBottom: '1.25rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        Order Summary ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
      </h3>

      {/* Mini Item List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', maxHeight: '240px', overflowY: 'auto' }}>
        {cartItems.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <img src={item.image} alt={item.name} style={{ width: '48px', height: '60px', objectFit: 'cover', borderRadius: '6px' }} />
            <div style={{ flex: 1, fontSize: '0.82rem' }}>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.name}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Size: {item.selectedSize} • Qty: {item.quantity}</div>
            </div>
            <div style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.88rem' }}>
              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
            </div>
          </div>
        ))}
      </div>

      {/* Breakdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.86rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
          <span>Subtotal (GST Included)</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>

        {discount > 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--emerald-light)' }}>
            <span>Privilege Discount ({appliedCoupon?.code})</span>
            <span>-₹{discount.toLocaleString('en-IN')}</span>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
          <span>Express Delivery</span>
          <span>{shippingFee === 0 ? <strong style={{ color: 'var(--emerald-light)' }}>FREE</strong> : `₹${shippingFee}`}</span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'var(--text-primary)'
        }}>
          <span>Grand Total</span>
          <span className="text-gold-gradient">₹{total.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div style={{
        marginTop: '1.25rem',
        padding: '0.75rem',
        background: 'rgba(11, 15, 20, 0.6)',
        borderRadius: '8px',
        fontSize: '0.72rem',
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem'
      }}>
        <ShieldCheck size={14} style={{ color: 'var(--emerald-primary)', flexShrink: 0 }} />
        <span>Prices inclusive of all taxes. 7-Day return policy applies.</span>
      </div>
    </div>
  );
};

