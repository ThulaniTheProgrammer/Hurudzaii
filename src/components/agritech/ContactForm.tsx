import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, Loader2, Building2, User, MessageSquare, Headphones } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import GlassCard from './GlassCard';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  type: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.08);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    type: 'general',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'api', label: 'API Access' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'support', label: 'Technical Support' },
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: 'Hurudza AI Support',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject || 'New Inquiry',
        message: formData.message,
        type: formData.type,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder'
      );

      setIsSubmitted(true);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: 'Chinhoyi University of Technology\nChinhoyi, Zimbabwe' },
    { icon: Phone, label: 'Phone', value: '0787423492 or 0779741459' },
    { icon: Mail, label: 'Email', value: 'fmakeba@hurudzaai.tech\nchandiwanablessing@gmail.com' },
    { icon: Clock, label: 'Hours', value: '24/7 Support\nAlways Available' },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#2ECC71]/5 blur-[200px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 mb-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
            <Headphones className="w-3.5 h-3.5 text-[#2ECC71] animate-pulse" />
            <span className="text-[#2ECC71] text-xs font-medium uppercase tracking-wider">24/7 Multilingual AI Contact Center</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            24/7 Intelligent{' '}
            <span className="bg-gradient-to-r from-[#2ECC71] to-[#D4FF00] bg-clip-text text-transparent">
              Support
            </span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            Experience our 24/7 Multilingual AI Contact Center. Get instant, multilingual agricultural advice or connect with our human experts for enterprise solutions.
          </p>
        </div>

        <div className={`grid lg:grid-cols-[1fr_380px] gap-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {/* Form */}
          <GlassCard className="p-8 sm:p-10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-scale-in">
                <div className="w-20 h-20 rounded-2xl bg-[#2ECC71]/10 border border-[#2ECC71]/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#2ECC71]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/40 max-w-sm mb-8">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', subject: '', message: '', type: 'general' });
                  }}
                  className="px-6 py-3 text-sm text-white/60 border border-white/[0.1] rounded-xl hover:border-[#2ECC71]/20 hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-3 font-medium">
                    Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => handleChange('type', type.value)}
                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${formData.type === type.value
                          ? 'bg-[#2ECC71]/15 text-[#2ECC71] border border-[#2ECC71]/25'
                          : 'bg-white/[0.03] text-white/40 border border-white/[0.06] hover:border-white/[0.12] hover:text-white/60'
                          }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2 font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Moyo"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-1 transition-all ${errors.name
                          ? 'border-red-500/50 focus:ring-red-500/30'
                          : 'border-white/[0.06] focus:border-[#2ECC71]/30 focus:ring-[#2ECC71]/20'
                          }`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2 font-medium">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-1 transition-all ${errors.email
                          ? 'border-red-500/50 focus:ring-red-500/30'
                          : 'border-white/[0.06] focus:border-[#2ECC71]/30 focus:ring-[#2ECC71]/20'
                          }`}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Company & Subject Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2 font-medium">
                      Company / Farm
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Moyo Farms Ltd"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#2ECC71]/30 focus:ring-1 focus:ring-[#2ECC71]/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#2ECC71]/30 focus:ring-1 focus:ring-[#2ECC71]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your agricultural needs..."
                    rows={5}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-1 transition-all resize-none ${errors.message
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/[0.06] focus:border-[#2ECC71]/30 focus:ring-[#2ECC71]/20'
                      }`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2ECC71] to-[#27ae60] text-[#050505] font-semibold rounded-xl shadow-[0_0_30px_rgba(46,204,113,0.3)] hover:shadow-[0_0_50px_rgba(46,204,113,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>

          {/* Contact Info Sidebar */}
          <div className="space-y-5">
            {contactInfo.map((info, i) => (
              <GlassCard key={i} className="p-5" hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2ECC71]/10 border border-[#2ECC71]/15 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-[#2ECC71]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider font-medium mb-1">{info.label}</div>
                    <div className="text-sm text-white/70 whitespace-pre-line">{info.value}</div>
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Map Placeholder */}
            <GlassCard className="overflow-hidden" hover>
              <div className="relative h-48 bg-gradient-to-br from-[#0a1a0f] to-[#050505]">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(46,204,113,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(46,204,113,0.2) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-[#2ECC71] mx-auto animate-pulse" />
                      <div className="w-12 h-12 rounded-full border-2 border-[#2ECC71]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30" />
                    </div>
                    <div className="font-medium text-white">Chinhoyi, Zimbabwe</div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard className="p-5">
              <div className="text-xs text-white/30 uppercase tracking-wider font-medium mb-3">Follow Us</div>
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-[#2ECC71] hover:border-[#2ECC71]/20 hover:bg-[#2ECC71]/5 transition-all duration-300"
                    title={social}
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
