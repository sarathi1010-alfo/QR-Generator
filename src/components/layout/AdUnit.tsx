"use client";

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdUnit({ slot, format = 'auto', className = '', style }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!ADSENSE_CLIENT || initialized.current) return;

    const el = adRef.current;
    if (!el) return;

    const pushAd = () => {
      if (initialized.current) return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        initialized.current = true;
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    // If already has width, push immediately
    if (el.clientWidth > 0) {
      pushAd();
      return;
    }

    // Otherwise wait for resize
    const observer = new ResizeObserver(() => {
      if (el.clientWidth > 0 && !initialized.current) {
        pushAd();
        observer.disconnect();
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ADSENSE_CLIENT]);

  if (!ADSENSE_CLIENT) {
    if (process.env.NODE_ENV !== 'production') {
      return (
        <div className={`ad-container overflow-hidden min-h-[90px] flex justify-center items-center bg-gray-100/50 my-8 rounded-lg border border-dashed border-muted/30 ${className}`}>
          <span className="text-muted text-sm font-mono">AdSense not configured (Slot: {slot})</span>
        </div>
      );
    }
    return null;
  }

  return (
    <div
      ref={adRef}
      className={`ad-container overflow-hidden min-h-[90px] flex justify-center items-center bg-gray-100/50 my-8 rounded-lg ${className}`}
    >
      <ins
        className="adsbygoogle"
        style={style || { display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
