import React from 'react';
import dotIcon from '../assets/icons/dot-icon.svg';
import xtzIcon from '../assets/icons/xtz-icon.svg';
import adaIcon from '../assets/icons/ada-icon.svg';
import algoIcon from '../assets/icons/algo-icon.svg';
import ksmIcon from '../assets/icons/ksm-icon.svg';
import btcIcon from '../assets/icons/btc-icon.svg';
import ethIcon from '../assets/icons/eth-icon.svg';
import solIcon from '../assets/icons/sol-icon.svg';
import avaxIcon from '../assets/icons/avax-icon.svg';

interface IconProps {
  width?: number;
  height?: number;
}

export const BTCIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <img src={btcIcon} width={width} height={height} alt="BTC" />
);

export const DOTIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <div style={{ 
    background: 'white', 
    borderRadius: '50%', 
    padding: '2px',
    width: width,
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <img src={dotIcon} width={width - 4} height={height - 4} alt="DOT" />
  </div>
);

export const ETHIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <img src={ethIcon} width={width} height={height} alt="ETH" />
);

export const ADAIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <div style={{ 
    background: 'white', 
    borderRadius: '50%', 
    padding: '2px',
    width: width,
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <img src={adaIcon} width={width - 4} height={height - 4} alt="ADA" />
  </div>
);

export const KSMIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <img src={ksmIcon} width={width} height={height} alt="KSM" />
);

export const ALGOIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <div style={{ 
    background: 'white', 
    borderRadius: '50%', 
    padding: '2px',
    width: width,
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <img src={algoIcon} width={width - 4} height={height - 4} alt="ALGO" />
  </div>
);

export const XTZIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <img src={xtzIcon} width={width} height={height} alt="XTZ" />
);

export const SOLIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <img src={solIcon} width={width} height={height} alt="SOL" />
);

export const AVAXIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <img src={avaxIcon} width={width} height={height} alt="AVAX" />
); 