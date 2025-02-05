import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const BTCIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#F7931A' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill={color}/>
    <path d="M16.5 10.5c.2-1.4-.9-2.2-2.4-2.7l.5-2-1.2-.3-.5 1.9c-.3-.1-.6-.2-1-.2l.5-1.9-1.2-.3-.5 2c-.2-.1-.5-.1-.7-.2l-1.6-.4-.3 1.3s.9.2.9.2c.5.1.6.4.5.7l-.5 2.1c0 0 .1 0 .1 0-.1 0-.1 0-.2 0l-.7 2.9c-.1.2-.2.4-.5.3 0 0-.9-.2-.9-.2L7 16l1.5.4c.3.1.6.1.8.2l-.5 2 1.2.3.5-2c.3.1.6.2.9.2l-.5 2 1.2.3.5-2c2.2.4 3.8.2 4.5-1.7.5-1.5 0-2.4-1.1-3 .8-.1 1.4-.6 1.5-1.6z" fill="white"/>
  </svg>
);

export const DOTIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#E6007A' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill={color}/>
    <circle cx="12" cy="12" r="4" fill="white"/>
  </svg>
);

export const ETHIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#627EEA' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill={color}/>
    <path d="M12 4v5.9l5 2.3L12 4z" fill="white" fillOpacity="0.6"/>
    <path d="M12 4L7 12.2l5-2.3V4z" fill="white"/>
    <path d="M12 16.9v3.1l5-7-5 3.9z" fill="white" fillOpacity="0.6"/>
    <path d="M12 20v-3.1L7 13l5 7z" fill="white"/>
    <path d="M12 15.8l5-3.9-5-2.3v6.2z" fill="white" fillOpacity="0.2"/>
    <path d="M7 11.9l5 3.9V9.6L7 11.9z" fill="white" fillOpacity="0.6"/>
  </svg>
); 