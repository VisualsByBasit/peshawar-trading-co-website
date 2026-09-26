// Small inline SVG icon set shared across the site. Keeping these as simple
// components (rather than an icon font/library) keeps the bundle tiny.

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.4.5.2 1 .4 1.3.5.6.2 1 .1 1.4-.1.4-.2 1.4-.6 1.6-1.1.2-.5.2-.9.1-1l-.4-.2Z" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 8.5h2V5h-2a4 4 0 0 0-4 4v2H9v3.5h2V21h3.5v-6.5H17l.5-3.5h-3V9a.5.5 0 0 1 .5-.5Z" />
    </svg>
  );
}

export function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 3 4 6v6c0 5 3.4 8.7 8 9 4.6-.3 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M2 12h20M12 2c2.5 2.7 4 6.3 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.3-4-10s1.5-7.3 4-10Z" />
    </svg>
  );
}

export function DollarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1 3 2.2-1 1.8-3 2.3-3 1.1-3 2.3 1.3 2.2 3 2.2 3-1 3-2.4" />
    </svg>
  );
}

export const VEHICLE_ICONS = {
  car: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3 13l1.5-5A2 2 0 0 1 6.4 6.5h11.2a2 2 0 0 1 1.9 1.5L21 13" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2.5" y="13" width="19" height="6" rx="1.5" />
      <circle cx="7" cy="19.5" r="1.6" />
      <circle cx="17" cy="19.5" r="1.6" />
    </svg>
  ),
  van: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M2.5 16V8.5A1.5 1.5 0 0 1 4 7h9l4.5 4.5H21a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2.5z" strokeLinejoin="round" />
      <path d="M13 7v4.5h6.5" strokeLinejoin="round" />
      <circle cx="6.5" cy="16.5" r="1.7" />
      <circle cx="17" cy="16.5" r="1.7" />
    </svg>
  ),
  truck: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M2.5 6.5h10v9h-10z" strokeLinejoin="round" />
      <path d="M12.5 10.5H17l4 3v2h-8.5z" strokeLinejoin="round" />
      <circle cx="6" cy="17.5" r="1.7" />
      <circle cx="17.5" cy="17.5" r="1.7" />
    </svg>
  ),
  dumptruck: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M2.5 14.5 5 8h6l2.5 6.5z" strokeLinejoin="round" />
      <path d="M13.5 10.5H17l4 3v2h-3.5" strokeLinejoin="round" />
      <circle cx="6.5" cy="17.5" r="1.7" />
      <circle cx="16" cy="17.5" r="1.7" />
    </svg>
  ),
  bus: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M3 11h18M7 5v12M17 5v12" />
      <circle cx="7" cy="19.5" r="1.4" />
      <circle cx="17" cy="19.5" r="1.4" />
    </svg>
  ),
  excavator: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3 18h9" strokeLinecap="round" />
      <rect x="2.5" y="13" width="9" height="5" rx="1" />
      <path d="M7 13V8l9-3 3 2-7 4" strokeLinejoin="round" />
      <path d="M19 7l2 2-3 3" strokeLinejoin="round" />
      <circle cx="4.5" cy="19.7" r="1.2" />
      <circle cx="9" cy="19.7" r="1.2" />
    </svg>
  ),
  loader: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="8" y="9" width="8" height="6" rx="1" />
      <path d="M2.5 15 6 9h2M16 12h3l2.5 2v3H16" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18.5" cy="18" r="2" />
    </svg>
  ),
  generator: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="6" width="18" height="11" rx="1.5" />
      <circle cx="8" cy="11.5" r="2.3" />
      <path d="M13 9h5M13 12h5M13 15h3" strokeLinecap="round" />
    </svg>
  ),
  tractor: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="6.5" cy="17.5" r="3.2" />
      <circle cx="17" cy="18.2" r="2.2" />
      <path d="M6.5 14.3V8h6l3 4.5h2.5v3.5" strokeLinejoin="round" />
      <path d="M12.5 8V5.5h3" strokeLinecap="round" />
    </svg>
  ),
};
