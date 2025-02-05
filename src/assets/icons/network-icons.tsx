// We'll use React components for SVG icons for better control
import { SVGProps } from 'react';

export const BTCIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#F7931A"/>
    <path d="M16.5 10.5c.2-1.4-.9-2.2-2.4-2.7l.5-2-1.2-.3-.5 1.9c-.3-.1-.6-.2-1-.2l.5-1.9-1.2-.3-.5 2c-.2-.1-.5-.1-.7-.2l-1.6-.4-.3 1.3s.9.2.9.2c.5.1.6.4.5.7l-.5 2.1c0 0 .1 0 .1 0-.1 0-.1 0-.2 0l-.7 2.9c-.1.2-.2.4-.5.3 0 0-.9-.2-.9-.2L7 16l1.5.4c.3.1.6.1.8.2l-.5 2 1.2.3.5-2c.3.1.6.2.9.2l-.5 2 1.2.3.5-2c2.2.4 3.8.2 4.5-1.7.5-1.5 0-2.4-1.1-3 .8-.1 1.4-.6 1.5-1.6zM13.9 14c-.4 1.5-3 .7-3.8.5l.7-2.7c.8.2 3.5.6 3.1 2.2zm.4-3.5c-.3 1.3-2.4.7-3.1.5l.6-2.4c.7.2 2.8.5 2.5 1.9z" fill="white"/>
  </svg>
);

export const DOTIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="12" fill="#E6007A"/>
    <circle cx="12" cy="12" r="4" fill="white"/>
  </svg>
);

export const ETHIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="12" fill="#627EEA"/>
    <path d="M12 4v5.9l5 2.3L12 4z" fill="white" fillOpacity="0.6"/>
    <path d="M12 4L7 12.2l5-2.3V4z" fill="white"/>
    <path d="M12 16.9v3.1l5-7-5 3.9z" fill="white" fillOpacity="0.6"/>
    <path d="M12 20v-3.1L7 13l5 7z" fill="white"/>
    <path d="M12 15.8l5-3.9-5-2.3v6.2z" fill="white" fillOpacity="0.2"/>
    <path d="M7 11.9l5 3.9V9.6L7 11.9z" fill="white" fillOpacity="0.6"/>
  </svg>
); 