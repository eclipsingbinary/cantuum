# Project Notes and Conversations

## Table of Contents
- [Project Overview](#project-overview)
- [Core Philosophy](#core-philosophy)
- [Technical Structure](#technical-structure)
- [Current Implementation Details](#current-implementation-details)
- [Conversations with AI Assistant](#conversations-with-ai-assistant)

## Project Summary

Cantuum is a decentralized music platform built on the following principles and features:

### Core Purpose and Philosophy
- Functions as a pure interface between artists and listeners
- Eliminates traditional platform intermediation
- Operates as a public good with no middleman fees
- Facilitates direct peer-to-peer interactions
- Maintains transparency in all operations

### Technical Architecture
1. **Frontend Stack**
   - TypeScript/React application
   - Emotion for styled components
   - Vite as the build tool
   - Modern TypeScript configuration with project references
   - Comprehensive blockchain integrations

2. **Backend** (Planned)
   - Rust implementation (in development)

### Key Systems

1. **Blockchain Integration**
   - Multi-wallet support across major networks:
     - Bitcoin (Lightning Network)
     - Polkadot (Asset Hub)
     - Ethereum (Optimism)
   - Additional networks configured for future implementation:
     - Cardano, Kusama, Algorand
     - Tezos, Solana, Avalanche

2. **Content Management**
   - No direct file storage by platform
   - Decentralized storage options:
     - IPFS
     - Arweave
     - Nostr
   - Full artist control over content

3. **Artist Verification**
   - Blockchain-based verification system
   - Platform wallet address verification
   - Support for:
     - Content links
     - Payment addresses
     - Collaborator split payments

4. **Sustainability Model**
   - Optional donation system
   - Transparent platform expenses
   - Voluntary support structure
   - No mandatory platform fees

### Distinguishing Features
- Direct peer-to-peer payments
- Multi-chain wallet integration
- Decentralized content storage
- Artist autonomy and control
- Transparent operations
- Responsive design
- Dynamic UI with background animation

This implementation represents a paradigm shift in music streaming platforms, prioritizing direct artist-listener relationships while leveraging blockchain technology for payments and verification without creating additional technological barriers or intermediary systems.

## Project Overview

Cantuum is a web3-enabled music platform that functions as a pure interface between artists and listeners, emphasizing direct peer-to-peer interactions without platform intermediation.

### Key Features
- Multi-wallet support:
  - Bitcoin (Lightning Network)
  - Polkadot (Asset Hub)
  - Ethereum (Optimism)
- Artist and song selection
- Seamless payment integration
- Responsive design
- Dynamic background animation

### Tech Stack
- Frontend:
  - TypeScript
  - React
  - Emotion (styled components)
  - Vite
- Backend: (Coming soon)
  - Rust

## Core Philosophy

### Pure Interface Approach
- Functions solely as a facilitator between artists and listeners
- No middleman fees
- All payments remain peer-to-peer
- Built and maintained as a public good

### Key Benefits
- No new blockchain needed
- No smart contracts required
- Verifiable on-chain records
- Direct P2P payments
- Artist control of content
- Transparent operations
- Sustainable public good model

## Technical Structure

### Content Storage
- No music files stored by Cantuum
- Artists use their own storage solutions:
  - IPFS
  - Arweave
  - Nostr
- Artists maintain full control with their own keys

### Artist Verification System
- Designated platform wallet address on existing blockchains
- Artist submission process:
  - Content links (IPFS/Arweave/Nostr with encryption)
  - Payment addresses
  - Split percentages
- Verification via blockchain transaction
  - Only blockchain fee required
  - Creates on-chain record
  - No platform fees

### Payment System
- Direct P2P payments using BTC/ETH/DOT
- Split payment support for collaborators
- No intermediary smart contracts
- No platform wallet middleman

### Sustainability Model
- Optional donation system
  - One-time donation during track addition
  - Optional ongoing percentage from track plays
- Complete transparency of platform expenses
- Clear public good messaging
- Voluntary support model

## Current Implementation Details

### Component Architecture
- **Network Integration**
  - `NetworkSelector.tsx`: Multi-wallet connection interface
  - `WalletService.ts`: Wallet connection management
  - Support for Lightning Network, Asset Hub, and Optimism

### Core Components
1. **Artist Registration**
   - `RegisterArtistForm.tsx`
   - Username verification system
   - Social/music platform link integration
   - Wallet address verification
   - Support for collaborator splits

2. **UI Components**
   - `Modal.tsx`: Reusable modal system
   - Emotion-based styling with theme support
   - Dynamic background video animation
   - Responsive design elements

### Authentication Flow
1. User connects wallet (BTC/DOT/ETH)
2. Verification of wallet connection
3. Option to register as artist or continue as listener
4. Artist registration with platform links and verification

### Theme System
- Dark theme with accent colors
- Consistent styling through Emotion
- Animated transitions and effects
- Responsive design principles

## Conversations with AI Assistant

### [Date: 2024-03-26]

#### Topic: App.tsx Structure and Implementation
- **Main Components**:
  - Background video with animation (CantaumLoop.mp4)
  - Header with Cantuum title
  - Network selector for wallet connections
  - Artist registration modal
  - Wallet status display

- **State Management**:
  - `WalletState` interface tracking:
    - Connection status
    - Wallet address
    - Selected network
    - Connection status
    - Artist registration status

- **Key Features**:
  - Wallet connection handling through `WalletService`
  - Network selection with multiple blockchain support
  - Artist registration flow
  - Responsive styling with Emotion
  - Background video with reduced playback rate (0.5)

- **UI/UX Elements**:
  - Dark theme with styled components
  - Centered wallet connection interface
  - Conditional rendering of registration button
  - Modal system for artist registration
  - Animated background with opacity control

#### Topic: Base Modal Component Implementation
- **Core Components**:
  - `ModalButton`: Reusable styled button
    - Transparent background with themed border
    - Hover state with inverted colors
    - Disabled state handling
    - Full width by default

  - `Modal`: Base modal container
    - Props: `isOpen`, `onClose`, `title`, `children`
    - Overlay with semi-transparent background
    - Centered content positioning
    - Click-outside-to-close functionality

- **Styling Features**:
  - Responsive dimensions (max 90% of viewport)
  - Scrollable content area
  - Themed colors from context
  - Clean header with close button
  - z-index management for stacking

- **UX Considerations**:
  - Event propagation handling for nested clicks
  - Conditional rendering based on isOpen
  - Accessible button states
  - Consistent spacing and sizing

This base Modal serves as the foundation for all modal interfaces in the application (PlayerModal, ArtistModal, etc.).

#### Topic: Polkadot Wallet Integration
- **Implementation Details**:
  - Using `@polkadot/extension-dapp` for wallet connectivity
  - Custom hook `useDOTWalletConnect` for managing wallet connections
  - Supports multiple Polkadot wallets:
    - Polkadot.js
    - SubWallet
    - Talisman

- **Connection Flow**:
  1. Enable Web3 with app identifier 'Cantuum'
  2. Check for installed wallet extensions
  3. Fetch available accounts
  4. Connect to first available account
  
- **Error Handling**:
  - Checks for wallet extension installation
  - Validates account existence
  - Provides clear error messages to users

- **Integration Points**:
  - Used in `NetworkSelector` component
  - Provides wallet address for artist registration
  - Handles connection state management

#### Topic: Component Structure Overview
- **Core Modal Components**:
  - `Modal`: Base modal component
  - `PlayerModal`: Music player interface
  - `ArtistModal`: Artist profile/details view
  - `SongModal`: Individual song details/player
  - `InsertCoinModal`: Payment interface

- **Wallet Integration Components**:
  - `NetworkSelector`: Network/wallet selection interface
  - `WalletStatus`: Connected wallet status display
  - `ModalButton`: Reusable styled button component

- **Architecture Pattern**:
  - Modular component structure
  - Clear separation of concerns
  - Reusable UI elements
  - Modal-based user interactions

This structure suggests a modal-driven interface where each major action (playing music, viewing artists, making payments) has its own dedicated modal component.

#### Topic: Network Icons Implementation
- **Supported Networks**:
  - Bitcoin (BTC)
  - Polkadot (DOT)
  - Ethereum (ETH)
  - Cardano (ADA)
  - Kusama (KSM)
  - Algorand (ALGO)
  - Tezos (XTZ)
  - Solana (SOL)
  - Avalanche (AVAX)

- **Implementation Details**:
  - React functional components for each icon
  - Consistent interface with width/height props
  - SVG-based icons from assets directory
  - Special handling for certain icons:
    - DOT, ADA, ALGO have white circular backgrounds
    - Other icons displayed directly

- **Design Considerations**:
  - Consistent sizing (default 24x24)
  - Proper padding for circular backgrounds
  - Alt text for accessibility
  - Flexible dimensions through props

This implementation suggests broader multi-chain support beyond the initial BTC/DOT/ETH integration, potentially for future expansion.

#### Topic: NetworkSelector Component Implementation
- **UI Components**:
  - `NetworkContainer`: Main wrapper with column layout
  - `NetworkButton`: Primary connection trigger
  - `NetworkList`: Dropdown menu for network selection
  - `NetworkOption`: Individual network choice
  - `ConnectedWallet`: Address display with animation

- **Network Configuration**:
  - Comprehensive network support:
    - Bitcoin (BTC) - Bitcoin Core wallet
    - Polkadot (DOT) - Polkadot.js
    - Ethereum (ETH) - MetaMask
    - Cardano (ADA) - Nami
    - Kusama (KSM) - Polkadot.js
    - Algorand (ALGO) - MyAlgo
    - Tezos (XTZ) - Temple
    - Solana (SOL) - Phantom
    - Avalanche (AVAX) - Core

- **Features**:
  - Dropdown-based network selection
  - Wallet connection state management
  - Connected address display with animation
  - Registration flow integration
  - Network-specific wallet handling
  - Explorer URLs for each network
  - Consistent styling with theme

- **UX Flow**:
  1. Display "Connect Wallet" button
  2. Show network selection on click
  3. Handle wallet connection
  4. Animate connected address
  5. Show registration options
  6. Handle registration selection

This component serves as the primary entry point for user interaction with the platform's blockchain features.

#### Topic: Artist Registration Form Implementation
- **Form Structure**:
  - Username selection with availability check
  - Connected wallet verification display
  - Social media links (2 required, 1 optional)
  - Music platform links (1 required, 2 optional)
  - Submit button with transaction signing

- **Data Model**:
  ```typescript
  {
    username: string;
    socialLinks: string[];
    musicLinks: string[];
    paymentAddresses: {
      network: Network;
      address: string;
    }[];
    contentStorage: {
      type: 'IPFS' | 'Arweave' | 'Nostr';
      address: string;
    };
    collaborators?: {
      address: string;
      share: number;
    }[];
  }
  ```

- **Validation Features**:
  - Real-time username availability checking
  - Minimum username length (3 characters)
  - Reserved username protection
  - URL format validation for links
  - Form-level validity tracking
  - Visual feedback for validation states

- **UI Components**:
  - Styled form inputs with theme integration
  - Validation message system with status colors
  - Section organization with titles
  - Wallet verification display
  - Submit button with disabled states

- **UX Considerations**:
  - Clear feedback on username availability
  - Wallet connection confirmation
  - Network verification
  - Required vs optional fields
  - Transaction signing warning

This form implements the artist verification system described in the technical structure, handling both user information and blockchain integration.

#### Topic: Registration Options Implementation
- **User Types**:
  - Artist: Content creators
  - User: Standard account
  - Listener: Minimal permissions

- **UI Components**:
  - `HeaderText`: Animated title
  - `OptionsContainer`: Flex column layout
  - `MainButtonsContainer`: Primary options row
  - `OptionButton`: Configurable button component with variants:
    - Large (Artist/User buttons)
    - Horizontal (Listener option)
    - Extra width variant

- **Animation System**:
  - Fade-in animation with vertical movement
  - Staggered animations:
    - Header: 0.1s delay
    - Large buttons: 0.2s delay
    - Horizontal button: 0.4s delay
  - Smooth hover transitions
  - Transform effects for interaction

- **Styling Features**:
  - Large, prominent buttons for main options
  - Consistent white theme
  - Transparent backgrounds
  - Hover state with color inversion
  - Responsive sizing with aspect ratios
  - Dynamic padding based on button type

This component represents the first decision point in the user journey, determining their role and permissions within the platform.

#### Topic: WalletButton Component Implementation
- **Component Structure**:
  - Standalone button component
  - Fixed positioning (top-right corner)
  - Theme-integrated styling

- **Styling Details**:
  - Transparent background
  - Theme-colored border
  - Consistent padding (10px 20px)
  - Border radius matching system (4px)
  - Interactive hover state with color inversion

- **Technical Features**:
  - Emotion styled-components integration
  - Theme system connection
  - Click handler preparation
  - Positioned absolutely for overlay usage

- **Future Integration Points**:
  - Wallet connection logic placeholder
  - Potential state management integration
  - Theme system extensibility

This component serves as the initial wallet connection trigger in the application's authentication flow.

#### Topic: WalletStatus Component Implementation
- **Component Structure**:
  - Status display for connected wallets
  - Network icon integration
  - Shortened address display
  - Disconnect button

- **UI Elements**:
  - `StatusContainer`: Flex container with border
  - `NetworkIcon`: Icon wrapper component
  - `Address`: Monospace formatted text
  - `DisconnectButton`: Minimal close button

- **Features**:
  - Address shortening (6 first + 4 last characters)
  - Network-specific icon display
  - One-click disconnect functionality
  - Consistent theme integration

- **Styling Details**:
  - Horizontal layout with gap spacing
  - Bordered container matching theme
  - Transparent background
  - Hover effects on disconnect button
  - Monospace font for address readability

This component provides user feedback about the current wallet connection state and network selection.

#### Topic: WalletService Implementation
- **Core Structure**:
  ```typescript
  interface WalletConnection {
    address: string;
    network: NetworkType;
    disconnect: () => Promise<void>;
  }
  ```

- **Supported Networks**:
  1. **Lightning Network**:
     - Uses WebLN standard
     - Alby wallet integration
     - Node pubkey as address
     
  2. **Asset Hub (Polkadot)**:
     - Polkadot.js extension
     - Account management
     - Extension enablement flow
     
  3. **Optimism**:
     - MetaMask integration
     - Chain ID verification (0xa)
     - Automatic network switching

- **Service Features**:
  - Single connection management
  - Network-specific error handling
  - Connection state persistence
  - Unified disconnect interface
  - Type-safe network handling

- **Error Handling**:
  - Extension availability checks
  - Network-specific error messages
  - Account existence validation
  - Chain ID verification
  - Wallet state management

- **Implementation Pattern**:
  - Singleton connection management
  - Async/await pattern
  - Network-specific private methods
  - Unified public interface
  - Type-safe implementation

This service implements the core wallet connectivity layer, providing a consistent interface across different blockchain networks.

#### Topic: Theme Type System Implementation
- **Type Declaration**:
  ```typescript
  declare module '@emotion/react' {
    export interface Theme extends MyTheme {}
  }
  ```

- **Technical Details**:
  - Module augmentation for Emotion
  - Custom theme type extension
  - TypeScript declaration merging
  - Global theme typing support

- **Benefits**:
  - Type-safe theme access
  - IDE autocompletion
  - Compile-time theme checking
  - Consistent theme typing across components

- **Integration Points**:
  - Emotion styled-components
  - Theme provider system
  - Component theme props
  - Style utilities

This implementation ensures type safety and developer experience when working with the theme system throughout the application.

#### Topic: Custom Font Implementation
- **Font Details**:
  - Name: 'spincycle'
  - Format: TrueType (.TTF)
  - Location: `/fonts/spincycle.TTF`

- **Implementation**:
  ```css
  @font-face {
    font-family: 'spincycle';
    src: url('/fonts/spincycle.TTF') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  ```

- **Performance Considerations**:
  - Font display swap for better loading performance
  - Local font file in public directory
  - Single weight/style variant
  - TrueType format support

- **Usage Points**:
  - Brand typography (Cantuum title)
  - Specialized UI elements
  - Consistent font fallback system
  - Performance-optimized loading

This implementation provides the custom brand typography while maintaining performance through optimized loading strategies.

#### Topic: Theme Configuration Implementation
- **Theme Structure**:
  ```typescript
  const theme = {
    colors: {
      background: '#000000',
      primary: '#ffffff',
      secondary: '#666666',
      accent: '#ff0000',
    },
    fonts: {
      spincycle: '"Spincycle", sans-serif',
      joystream: 'system-ui', // Temporary placeholder
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px',
    }
  } as const
  ```

- **Type System Integration**:
  - Full TypeScript interface declaration
  - Strict type checking with `as const`
  - Module augmentation for Emotion
  - Exported theme type for reuse

- **Design System Elements**:
  - **Colors**:
    - Dark theme base (black background)
    - High contrast primary (white)
    - Muted secondary (gray)
    - Accent color for emphasis (red)
  
  - **Typography**:
    - Custom Spincycle font for branding
    - System UI fallback for body text
    - Font family fallback chains
  
  - **Spacing Scale**:
    - Consistent 8px grid system
    - Three-tier spacing hierarchy
    - Standardized component spacing

- **Implementation Notes**:
  - Theme object exported as constant
  - Type-safe theme access throughout app
  - Placeholder for future Joystream font
  - Configurable accent color for future adjustments

This configuration establishes the foundational design system, ensuring consistent styling and maintainable theme management across the application.

#### Topic: Global Type Declarations
- **Wallet Interface Types**:
  ```typescript
  // Lightning Network Interface
  interface WebLN {
    enable: () => Promise<void>;
    getInfo: () => Promise<{ node: { pubkey: string } }>;
  }

  // Polkadot Interface
  interface InjectedWeb3 {
    'polkadot-js': {
      enable: () => Promise<{
        accounts: {
          get: () => Promise<Array<{ address: string }>>;
        };
      }>;
    };
  }

  // Ethereum Interface
  interface Ethereum {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (eventName: string, handler: (params: any) => void) => void;
    removeListener: (eventName: string, handler: (params: any) => void) => void;
  }
  ```

- **Window Extensions**:
  - WebLN for Lightning Network integration
  - InjectedWeb3 for Polkadot ecosystem
  - Ethereum for EVM-compatible chains

- **Asset Type Declarations**:
  - SVG file imports as strings
  - Type-safe asset imports
  - Module declaration pattern

- **Implementation Details**:
  - **Lightning Network**:
    - Enable/disable wallet functionality
    - Node pubkey retrieval
    - Async operation support
  
  - **Polkadot**:
    - Extension enablement
    - Account management
    - Array-based account structure
  
  - **Ethereum**:
    - Method-based request system
    - Event subscription system
    - Listener cleanup support

- **Type Safety Considerations**:
  - Global window object augmentation
  - Optional chaining for wallet checks
  - Promise-based async operations
  - Strict typing for method parameters

This implementation provides type safety and IDE support for wallet interactions and asset imports across the application.

#### Topic: Core Data Types and Mock Implementation
- **Network and Token Enums**:
  ```typescript
  enum SupportedNetwork {
    JOYSTREAM = 'JOYSTREAM',
    POLYGON = 'POLYGON',
    POLKADOT = 'POLKADOT'
  }

  enum SupportedToken {
    JOY = 'JOY',
    POL = 'POL',
    DOT = 'DOT'
  }
  ```

- **Artist Profile Types**:
  ```typescript
  interface WalletAddress {
    network: SupportedNetwork;
    address: string;
    token: SupportedToken;
  }

  interface ArtistProfile {
    id: string;
    name: string;
    walletAddresses: WalletAddress[];
    preferredPaymentNetwork?: SupportedNetwork;
  }
  ```

- **Payment System Types**:
  ```typescript
  interface Payment {
    amount: number;
    token: SupportedToken;
    network: SupportedNetwork;
    fromAddress: string;
    toAddress: string;
    platformFee: number;
  }
  ```

- **Content Types**:
  ```typescript
  interface Artist {
    id: string;
    name: string;
  }

  interface Song {
    id: string;
    artistId: string;
    title: string;
    price: string;
    audioUrl: string;
    thumbnailUrl: string;
  }
  ```

- **Mock Data Implementation**:
  - Sample artists with basic identification
  - Sample songs with pricing and media URLs
  - Structured for testing and development

- **Type System Features**:
  - Network-token relationship enforcement
  - Optional preferred payment networks
  - Comprehensive payment tracking
  - Content metadata structure
  - URL-based media references

- **Design Considerations**:
  - **Network Support**:
    - Joystream primary network
    - Polygon for scalability
    - Polkadot ecosystem integration
  
  - **Token Integration**:
    - JOY as platform token
    - POL for Polygon transactions
    - DOT for Polkadot operations
  
  - **Profile Management**:
    - Multiple wallet support
    - Network preferences
    - Flexible address system

  - **Payment Structure**:
    - Direct amount specification
    - Network fee handling
    - Address tracking
    - Platform fee integration

This implementation provides the core data structures for artist profiles, payment processing, and content management within the platform.

#### Topic: Network Configuration System
- **Network Type Definition**:
  ```typescript
  type NetworkType = 
    // Polkadot ecosystem
    | 'assethub'    // Asset Hub (formerly Statemint)
    | 'hydradx'     // HydraDX
    | 'astar'       // Astar Network
    // Ethereum L2s
    | 'optimism'    // Optimism
    | 'arbitrum'    // Arbitrum One
    | 'base'        // Base
    | 'dot'
    | 'eth'
    | 'ada'
    | 'ksm'
    | 'algo'
    | 'xtz'
    | 'sol'
    | 'btc'
    | 'avax'
  ```

- **Network Interface**:
  ```typescript
  interface Network {
    id: NetworkType;
    name: string;
    token: string;
    chainName: string;
    icon: React.FC<{ width?: number; height?: number; color?: string }>;
    walletName: string;
    walletUrl: string;
    chainId?: string;      // For EVM networks
    parachainId?: number;  // For Polkadot networks
    explorerUrl: string;
  }
  ```

- **Ecosystem Support**:
  1. **Polkadot Ecosystem**:
     - Asset Hub (ParaID: 1000)
     - HydraDX (ParaID: 2034)
     - Astar Network (ParaID: 2006)
     - Unified Polkadot.js wallet integration
     - Subscan-based explorers
  
  2. **Ethereum L2s**:
     - Optimism (ChainID: 0xa)
     - Arbitrum One (ChainID: 0xa4b1)
     - Base (ChainID: 0x2105)
     - MetaMask wallet integration
     - Network-specific block explorers

- **Implementation Features**:
  - **Icon System**:
    - Flexible icon components
    - Customizable dimensions
    - Optional color props
    - Consistent styling API
  
  - **Network Metadata**:
    - Human-readable names
    - Native token information
    - Chain identifiers
    - Wallet requirements
    - Explorer links

  - **Type Safety**:
    - Union type for network IDs
    - Optional chain-specific IDs
    - Strict network configuration
    - Icon component typing

- **Integration Points**:
  - Network selector UI
  - Wallet connection flow
  - Transaction routing
  - Explorer link generation
  - Network switching logic

This implementation provides a comprehensive network configuration system supporting both Polkadot parachains and Ethereum L2 networks, with extensibility for future chain additions.

#### Topic: Polkadot Wallet Configuration System
- **Core Interfaces**:
  ```typescript
  interface WalletInfo {
    id: string;
    name: string;
    type: 'extension' | 'mobile' | 'both';
    logo: string;
    downloadUrl: string;
    isInstalled?: () => boolean;
  }

  interface DOTWalletConfig {
    network: 'polkadot';
    wallets: WalletInfo[];
  }
  ```

- **Supported Wallets**:
  1. **Polkadot.js**:
     - Official browser extension
     - Extension-only support
     - Primary development wallet
     - Installation detection via window.injectedWeb3
  
  2. **SubWallet**:
     - Hybrid wallet solution
     - Both mobile and extension support
     - Multi-chain capabilities
     - SubWallet-js injection detection
  
  3. **Talisman**:
     - Enhanced browser extension
     - Advanced features
     - Extension-only support
     - Talisman injection detection
  
  4. **Nova Wallet**:
     - Mobile-only solution
     - No installation detection
     - Direct mobile integration
     - App-based approach

- **Implementation Features**:
  - **Wallet Detection**:
    ```typescript
    isInstalled: () => {
      return typeof window !== 'undefined' && 
             window.injectedWeb3 !== undefined && 
             'wallet-id' in window.injectedWeb3;
    }
    ```
  
  - **Type System**:
    - Strict wallet type enumeration
    - Optional installation checking
    - Comprehensive wallet metadata
    - Network-specific configuration

  - **Asset Management**:
    - Centralized logo storage
    - Consistent path structure
    - SVG format preference
    - Organized asset references

- **Integration Points**:
  - **UI Components**:
    - Wallet selection interface
    - Installation status display
    - Download link handling
    - Logo presentation
  
  - **Network Features**:
    - Wallet type filtering
    - Platform-specific routing
    - Installation guidance
    - Connection management

This implementation provides a structured approach to managing multiple Polkadot wallet integrations while maintaining flexibility for different wallet types and platforms.

#### Topic: Root CSS Styling Implementation
- **Base Typography**:
  ```css
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis: none;
  }
  ```

- **Color Scheme**:
  - **Dark Mode (Default)**:
    - Background: #242424
    - Text: rgba(255, 255, 255, 0.87)
    - Links: #646cff (hover: #535bf2)
  
  - **Light Mode**:
    - Background: #000000
    - Text: #213547
    - Links: #747bff (hover)
    - Button Background: #f9f9f9

- **Layout Components**:
  - **Body**:
    - Flex display
    - Centered items
    - Minimum dimensions (320px × 100vh)
    - Zero margin
  
  - **Headings**:
    - H1 size: 3.2em
    - Line height: 1.1
  
  - **Links**:
    - Font weight: 500
    - Inherited text decoration
    - Color transitions
  
  - **Buttons**:
    - Border radius: 8px
    - Transparent border (1px)
    - Consistent padding (0.6em 1.2em)
    - Inherited font (size: 1em, weight: 500)
    - Dark background (#1a1a1a)
    - Border color transition (0.25s)
    - Focus state with ring outline

- **Accessibility Features**:
  - Color scheme preference detection
  - Focus ring visibility
  - Text rendering optimization
  - Font smoothing
  - High contrast ratios

- **Design System Integration**:
  - System font stack
  - Consistent spacing
  - Interactive element states
  - Color scheme variables
  - Typography scale

This implementation establishes the core visual language of the application, ensuring consistency across components while maintaining accessibility and performance.

#### Topic: Global CSS Import System
- **File Structure**:
  ```
  src/
  ├── styles/
  │   └── global.css    # Global styles and resets
  └── App.tsx           # Root component with style import
  ```

- **Import Pattern**:
  ```typescript
  import './styles/global.css'
  // Component-specific imports follow
  ```

- **Implementation Features**:
  - **Organization**:
    - Dedicated styles directory
    - Clear separation from component styles
    - Global scope management
    - Base style definitions
  
  - **Loading Order**:
    - Global styles loaded first
    - Component styles cascade properly
    - Theme system integration
    - Style precedence management

- **Best Practices**:
  - Global styles limited to:
    - CSS resets
    - Base typography
    - Color schemes
    - Root-level layouts
  - Component-specific styles handled by:
    - Emotion styled components
    - Scoped CSS modules
    - Theme system

- **Integration Points**:
  - Application entry point
  - Theme provider setup
  - Media query definitions
  - CSS custom properties

This implementation establishes the foundation for the application's styling hierarchy, ensuring proper style cascade and maintainable CSS architecture.

#### Topic: Application Entry Point Implementation
- **Core Structure**:
  ```typescript
  // Main imports
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import { ThemeProvider } from '@emotion/react'
  import App from './App'
  import './index.css'
  ```

- **Theme Configuration**:
  ```typescript
  const theme = {
    colors: {
      primary: '#ffffff',    // Main text and UI elements
      background: '#000000', // Application background
      secondary: '#666666',  // Supporting elements
      accent: '#ff00ff',    // Highlight and interactive elements
    }
  }

  // Theme type declaration
  declare module '@emotion/react' {
    export interface Theme {
      colors: {
        primary: string;
        background: string;
        secondary: string;
        accent: string;
      }
    }
  }
  ```

- **Root Rendering**:
  - **Setup**:
    - Using React 18's createRoot API
    - Strict Mode enabled
    - Theme provider integration
    - Root element mounting
  
  - **Component Tree**:
    ```tsx
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
    ```

- **Implementation Features**:
  - **Theme System**:
    - Global theme definition
    - Type-safe theme interface
    - Emotion integration
    - Color scheme management
  
  - **React Configuration**:
    - Strict Mode for development checks
    - Modern rendering architecture
    - Type-safe root element selection
    - Centralized theme provision

- **Integration Points**:
  - Entry point for application
  - Global style imports
  - Theme system initialization
  - React 18 features utilization
  - Type system configuration

This implementation establishes the application's entry point, configuring the theme system, React rendering, and type safety features.

#### Topic: Git Ignore Configuration
- **Log Files**:
  ```gitignore
  # Log files from various package managers
  logs
  *.log
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  pnpm-debug.log*
  lerna-debug.log*
  ```

- **Build and Development**:
  ```gitignore
  # Build output and local development
  node_modules
  dist
  dist-ssr
  *.local
  ```

- **Editor and System**:
  ```gitignore
  # Editor-specific files
  .vscode/*
  !.vscode/extensions.json
  .idea
  .DS_Store
  
  # Visual Studio files
  *.suo
  *.ntvs*
  *.njsproj
  *.sln
  *.sw?
  ```

- **Configuration Details**:
  - **Package Management**:
    - Debug logs from npm, yarn, and pnpm
    - Lerna monorepo debug logs
    - General log files and directories
  
  - **Build System**:
    - Node modules directory
    - Production build output
    - SSR build output
    - Local development files
  
  - **Development Tools**:
    - VS Code settings (except extensions.json)
    - JetBrains IDE files
    - macOS system files
    - Visual Studio project files
    - Swap files

- **Best Practices**:
  - Exclude dependency directories
  - Ignore build artifacts
  - Skip editor-specific files
  - Maintain shared configurations
  - Preserve extension recommendations

This configuration ensures clean version control by excluding unnecessary files while maintaining essential shared development configurations.

#### Topic: ESLint Configuration Implementation
- **Core Dependencies**:
  ```typescript
  import js from '@eslint/js'
  import globals from 'globals'
  import reactHooks from 'eslint-plugin-react-hooks'
  import reactRefresh from 'eslint-plugin-react-refresh'
  import tseslint from 'typescript-eslint'
  ```

- **Configuration Structure**:
  ```typescript
  export default tseslint.config(
    { ignores: ['dist'] },
    {
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended
      ],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  )
  ```

- **Key Features**:
  - **TypeScript Integration**:
    - Flat config system
    - Recommended TypeScript rules
    - `.ts` and `.tsx` file support
    - Build output exclusion
  
  - **React Support**:
    - Hooks linting rules
    - Fast Refresh compatibility
    - Component export validation
    - Constant export allowance

  - **Environment Setup**:
    - ECMAScript 2020 features
    - Browser globals included
    - Module-based configuration
    - Plugin integration

- **Implementation Details**:
  - **File Patterns**:
    - TypeScript files: `*.ts`
    - React components: `*.tsx`
    - Build exclusion: `dist/*`
  
  - **Plugin Configuration**:
    - React Hooks rules enabled
    - Fast Refresh optimization
    - TypeScript ESLint integration
    - JavaScript base rules

  - **Rule Customization**:
    - Hooks rules from recommended set
    - Component export warnings
    - Constant export exceptions
    - Browser environment globals

- **Best Practices**:
  - Modern flat configuration
  - Plugin-based architecture
  - Strict TypeScript checking
  - React-specific optimizations
  - Build performance considerations

This implementation provides a comprehensive linting setup that ensures code quality and consistency while supporting TypeScript and React development patterns.

#### Topic: HTML Entry Point Implementation
- **Document Structure**:
  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cantuum</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  ```

- **Key Features**:
  - **Meta Configuration**:
    - HTML5 doctype declaration
    - English language specification
    - UTF-8 character encoding
    - Responsive viewport settings
    - SVG favicon support
  
  - **Application Setup**:
    - Root mounting point (`<div id="root">`)
    - Module-based script loading
    - Entry point specification
    - React application container

- **Implementation Details**:
  - **Document Head**:
    - Character encoding (UTF-8)
    - Favicon configuration
    - Viewport settings for responsiveness
    - Application title
  
  - **Document Body**:
    - Minimal structure
    - React root element
    - Module script loading
    - TypeScript entry point

- **Best Practices**:
  - Modern HTML5 standards
  - Responsive design support
  - Module-based JavaScript
  - Clean document structure
  - Semantic markup usage

This implementation provides the foundational HTML template that serves as the entry point for the React application, ensuring proper configuration and modern web standards compliance.

## Project Configuration

### Package.json Overview

The project uses a modern JavaScript/TypeScript setup with Vite as the build tool. Here are the key aspects:

#### Basic Information
- Project Name: `cantuum`
- Private package: Yes
- Version: 0.0.0
- Type: ES Module

#### Scripts
- `dev`: Development server using Vite
- `build`: TypeScript build followed by Vite build
- `lint`: ESLint for code quality
- `preview`: Vite preview for production build testing

#### Key Dependencies
1. **Blockchain Integration**
   - `@polkadot/api` & `@polkadot/extension-dapp`: Polkadot/Substrate integration
   - `@taquito/taquito`: Tezos blockchain integration
   - `ethers`: Ethereum interaction library

2. **UI Framework**
   - `react` (v18.3.1)
   - `react-dom` (v18.3.1)
   - `@emotion/react` & `@emotion/styled`: Styling solution

3. **Additional Features**
   - `@emailjs/browser`: Email functionality
   - `ipfs-http-client`: IPFS integration
   - `buffer`: Buffer implementation

#### Development Dependencies
- **Build Tools**
  - `vite` (v6.0.5)
  - `@vitejs/plugin-react`
  - `typescript` (~5.6.2)

- **Code Quality**
  - `eslint` (v9.17.0)
  - Various ESLint plugins for React and TypeScript

The configuration shows a modern web3-focused application with comprehensive blockchain integration capabilities across multiple chains (Ethereum, Polkadot, and Tezos), along with modern React and TypeScript setup for robust development.

#### Topic: TypeScript Configuration
- **Core Settings**:
  ```json
  {
    "compilerOptions": {
      "target": "ES2020",
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "jsx": "react-jsx",
      "jsxImportSource": "@emotion/react"
    }
  }
  ```

- **Build Optimization**:
  - **Performance Features**:
    - Incremental compilation enabled
    - Composite project support
    - Build info stored in `.tmp` directory
    - Module detection forced
  
  - **Bundler Configuration**:
    - Bundler-mode module resolution
    - TypeScript extension imports allowed
    - Isolated modules for better compilation
    - No emit (handled by Vite)

- **Type Safety**:
  - **Strict Mode**:
    - All strict checks enabled
    - Unused locals checked
    - Unused parameters flagged
    - Switch case fallthrough prevented
  
  - **Modern Features**:
    - Class fields using `define`
    - ES2020 target and library
    - Skip library checks for performance
    - DOM types included

- **React Integration**:
  - JSX compilation for React
  - Emotion as JSX source
  - Modern bundler support
  - TypeScript-aware JSX

- **Project Structure**:
  - Source in `src` directory
  - Incremental builds supported
  - Build cache management
  - Module isolation enforced

This configuration establishes a robust TypeScript development environment with strong type safety, modern JavaScript features, and optimized build performance while maintaining full compatibility with React and Emotion.

#### Topic: TypeScript Project References
- **Project Structure**:
  ```json
  {
    "files": [],
    "references": [
      { "path": "./tsconfig.node.json" },
      { "path": "./tsconfig.app.json" }
    ]
  }
  ```

- **Configuration Pattern**:
  - **Split Configuration**:
    - Empty root files array
    - Node-specific configuration
    - Application-specific configuration
    - Project references for modular builds
  
  - **Build Organization**:
    - `tsconfig.node.json`: Node.js environment settings
    - `tsconfig.app.json`: Application-specific settings
    - Separate build contexts for different environments

- **Benefits**:
  - **Build Performance**:
    - Parallel compilation support
    - Incremental builds per project
    - Isolated dependency graphs
    - Optimized rebuilds
  
  - **Project Organization**:
    - Clear separation of concerns
    - Environment-specific settings
    - Modular configuration management
    - Better build caching

This setup implements TypeScript project references, enabling efficient builds through configuration splitting and environment-specific settings while maintaining proper separation between Node.js and application code.

### [Date: 2024-03-10]

#### Topic: Multi-Chain Wallet Integration Progress
- **Dependency Resolution**:
  - Fixed ESM version conflicts between Polkadot packages
  - Standardized versions:
    - @polkadot/api: 10.9.1
    - @polkadot/extension-dapp: 0.46.5
    - @polkadot/util: 12.6.2
  - Resolved Buffer polyfill implementation for browser environment

- **Integration Status**:
  - Successfully configured Vite for blockchain integrations
  - Implemented Buffer and Stream polyfills
  - Set up development environment on port 3000
  - Prepared foundation for wallet connections:
    - Polkadot (DOT)
    - Ethereum (ETH)
    - Cardano (ADA)

- **Technical Improvements**:
  - Added proper polyfill initialization
  - Configured Vite for cross-chain compatibility
  - Implemented global Buffer availability
  - Enhanced development server configuration

- **Next Steps**:
  - Implement wallet connection UI
  - Add network selection functionality
  - Develop transaction handling system
  - Create wallet status indicators

## Development Notes

## UI Layout (2024-03-11)

### Current Layout Structure
- Header:
  - Logo positioned on left (160px height)
  - Wallet status and register button appear on right when connected
  - 40px padding top/bottom
  - Clean flex layout with space-between

### Pre-Connection State
- Network selector centered in page
- Absolute positioning with transform for perfect centering
- 300px width for wallet container
- Clean minimal interface

### Connected State
- Wallet address displays in header
- Register as Artist button appears when not registered
- Modal form for artist registration

### Styling Details
- Subtle hover effects on logo (scale 1.05)
- Smooth transitions (0.3s ease)
- Background video with 0.4 opacity
- Proper spacing and alignment throughout

## Wallet Integration Progress (2024-03-11)

### Completed Integrations
1. **Tezos (XTZ)**
   - Implemented using Beacon protocol
   - Temple wallet support
   - Mainnet connection
   - Clean error handling
   - Network switching support

2. **Solana (SOL)**
   - Phantom wallet integration
   - Direct public key retrieval
   - Simplified connection flow
   - Error state management
   - Connection state cleanup

### Next Steps for Wallet Integration
1. **Bitcoin Lightning**
   - Evaluate LNURL vs WebLN standards
   - Consider QR-based connection flow
   - Research non-email requiring wallet options
   - Plan universal wallet support

2. **Remaining Networks**
   - AVAX (Core wallet)
   - ALGO (MyAlgo)
   - ATOM (Keplr)

### Technical Improvements Made
1. **Connection State Management**
   - Added cleanup for previous connections
   - Prevented multiple concurrent connections
   - Centralized error handling
   - Improved state reset logic

2. **User Experience**
   - Clear error messages
   - Network switching protection
   - Connection status indicators
   - Registration flow triggers

## Wallet Registration Flow
- When a wallet connects, the system should check if it's associated with an existing artist or user profile
- For new wallets (not associated with any profile):
  - Show the registration flow (artist/user/listener selection)
  - Allow creation of new artist or user profiles
- For existing wallets:
  - Skip registration flow
  - Direct user straight to their personalized UX experience based on their profile type (artist/user)
  - This will be implemented when we create the artist profiles feature

## Implementation TODOs
- [ ] Create backend endpoint to check if wallet address has existing profile
- [ ] Add profile type check before showing registration options
- [ ] Implement direct routing to personalized UX for existing profiles
- [ ] Create artist profile management system
- [ ] Add wallet-to-profile association storage

## Supported Networks
Current implementation includes:
- BTC (Bitcoin)
- DOT (Polkadot)
- ETH (Ethereum)
- ADA (Cardano)
- KSM (Kusama)
- XTZ (Tezos)
- SOL (Solana)
- AVAX (Avalanche)
- ALGO (Algorand)
- ATOM (Cosmos)

## Known Issues & Considerations
1. **Lightning Network Integration**
   - Need to evaluate wallet options
   - Consider LNURL for broader compatibility
   - Balance email requirement vs usability

2. **Network Switching**
   - Need to handle disconnection cleanly
   - Consider persistent connections
   - Manage multiple active connections

3. **Error Handling**
   - Standardize error messages
   - Improve user feedback
   - Add recovery flows