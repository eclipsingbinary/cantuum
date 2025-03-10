import { Buffer } from 'buffer';

// Initialize Buffer globally
window.Buffer = Buffer;

// Add Buffer to global type
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
} 