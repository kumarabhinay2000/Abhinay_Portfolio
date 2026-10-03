import { useState } from 'react';
import { Mail, ExternalLink, GitFork, ChevronDown, ChevronUp, Send, Check, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/common/sectionHeading';
import { useMeta } from '../hooks/useMeta';
import styles from './contactPage.module.css';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const faqs = [
  {
    q: 'Are you open to new opportunities?',
    a: 'Yes, I am actively looking for new roles and collaborations. Feel free to reach out with any interesting opportunities.',
  },
  {
    q: 'Do you work on freelance projects?',
    a: 'Depending on the project scope and timeline, yes. I enjoy working on interesting engineering problems outside my primary role.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'I specialize in backend engineering (Java/Spring Boot, Python/FastAPI), geospatial systems, AI integration, and 3D web development with Three.js.',
  },
  {
    q: 'Can we collaborate on an open-source project?',
    a: 'Absolutely. I enjoy open-source work and am always interested in meaningful collaboration. Reach out via GitHub or email.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestion}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <p className={styles.faqAnswer}>{a}</p>}
    </div>
  );
}

export default function ContactPage() {
  useMeta('Abhinay — Contact', "Let's build something meaningful. Reach out for opportunities and collaborations.");
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = () => {
    const errs: Partial<typeof form> = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('sending');

    // Build mailto URL
    const subject = encodeURIComponent(`[Portfolio] ${form.subject}`);
    const body = encodeURIComponent(
      `Hi Abhinay,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoUrl;
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>Get In Touch</p>
          <h1 className={styles.heroTitle}>
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className={styles.accent}>MEANINGFUL.</span>
          </h1>
          <p className={styles.heroDesc}>
            I&apos;m always open to discussing new opportunities, interesting
            engineering problems, collaborations, and ambitious projects.
          </p>
        </div>
      </div>

      {/* Main */}
      <section className={`section ${styles.mainSection}`}>
        <div className={`container ${styles.mainGrid}`}>
          {/* Info */}
          <div className={styles.infoCol}>
            <div className={styles.contactLinks}>
              <a
                href={`mailto:${siteConfig.email}`}
                className={styles.contactLink}
              >
                <div className={styles.contactLinkIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={styles.contactLinkLabel}>Email</p>
                  <p className={styles.contactLinkValue}>{siteConfig.email}</p>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <div className={styles.contactLinkIcon}>
                  <ExternalLink size={20} />
                </div>
                <div>
                  <p className={styles.contactLinkLabel}>LinkedIn</p>
                  <p className={styles.contactLinkValue}>Connect with me</p>
                </div>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <div className={styles.contactLinkIcon}>
                  <GitFork size={20} />
                </div>
                <div>
                  <p className={styles.contactLinkLabel}>GitHub</p>
                  <p className={styles.contactLinkValue}>View my code</p>
                </div>
              </a>
            </div>

            <div className={styles.availability}>
              <span className={styles.availabilityDot} />
              <span className={styles.availabilityText}>
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                  {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className={styles.errorMsg}>{errors.subject}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                />
                {errors.message && <p className={styles.errorMsg}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'idle' && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
                {status === 'sending' && 'Opening email client...'}
                {status === 'sent' && (
                  <>
                    <Check size={16} />
                    Email client opened!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={16} />
                    Try Again
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p className={styles.sentMsg}>
                  Your email client should have opened with the pre-filled message.
                  If it didn&apos;t, email directly at{' '}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <SectionHeading label="FAQ" title="COMMON QUESTIONS" />
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
