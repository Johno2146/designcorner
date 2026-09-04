interface IconProps {
  className?: string;
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M32 16C32 7.16 24.84 0 16 0S0 7.16 0 16c0 7.99 5.85 14.61 13.5 15.81V20.63H9.44V16h4.06v-3.52c0-4.01 2.39-6.22 6.04-6.22 1.75 0 3.58.31 3.58.31v3.94h-2.02c-1.99 0-2.61 1.23-2.61 2.5V16h4.44l-.71 4.63h-3.73v11.18C26.15 30.61 32 23.99 32 16z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M16 2.9c4.3 0 4.8 0 6.5.1 1.6.1 2.4.3 3 .5.7.3 1.3.6 1.9 1.2.6.6 1 1.2 1.2 1.9.2.6.4 1.5.5 3 .1 1.7.1 2.2.1 6.5s0 4.8-.1 6.5c-.1 1.6-.3 2.4-.5 3-.3.7-.6 1.3-1.2 1.9-.6.6-1.2 1-1.9 1.2-.6.2-1.5.4-3 .5-1.7.1-2.2.1-6.5.1s-4.8 0-6.5-.1c-1.6-.1-2.4-.3-3-.5-.7-.3-1.3-.6-1.9-1.2-.6-.6-1-1.2-1.2-1.9-.2-.6-.4-1.5-.5-3-.1-1.7-.1-2.2-.1-6.5s0-4.8.1-6.5c.1-1.6.3-2.4.5-3 .3-.7.6-1.3 1.2-1.9.6-.6 1.2-1 1.9-1.2.6-.2 1.5-.4 3-.5 1.7-.1 2.2-.1 6.5-.1zm0-2.9C11.6 0 11 0 9.3.1 7.6.2 6.5.4 5.5.8 4.4 1.2 3.4 1.8 2.6 2.6 1.8 3.4 1.2 4.4.8 5.5.4 6.5.2 7.6.1 9.3 0 11 0 11.6 0 16s0 5 .1 6.7c.1 1.7.3 2.8.7 3.8.4 1.1 1 2.1 1.8 2.9.8.8 1.8 1.4 2.9 1.8 1 .4 2.1.6 3.8.7 1.7.1 2.3.1 6.7.1s5 0 6.7-.1c1.7-.1 2.8-.3 3.8-.7 1.1-.4 2.1-1 2.9-1.8.8-.8 1.4-1.8 1.8-2.9.4-1 .6-2.1.7-3.8.1-1.7.1-2.3.1-6.7s0-5-.1-6.7c-.1-1.7-.3-2.8-.7-3.8-.4-1.1-1-2.1-1.8-2.9-.8-.8-1.8-1.4-2.9-1.8-1-.4-2.1-.6-3.8-.7C21 0 20.4 0 16 0zm0 7.8a8.2 8.2 0 1 0 0 16.4 8.2 8.2 0 0 0 0-16.4zm0 13.5a5.3 5.3 0 1 1 0-10.6 5.3 5.3 0 0 1 0 10.6zM26.5 7.5a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0z"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.27a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.42-8 12-8 12s-8-7.58-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
