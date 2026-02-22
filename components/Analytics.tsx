import React, { useEffect } from 'react';

// Add TypeScript declarations for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 - Replace 'GA_MEASUREMENT_ID' with your actual GA4 ID
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // You'll need to replace this
    
    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views on route changes
    const handleRouteChange = (url: string) => {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };

    // Listen for route changes (for Next.js)
    if (typeof window !== 'undefined') {
      // This will work with Next.js router events
      const originalPushState = history.pushState;
      history.pushState = function (state: any, title: string, url?: string | URL | null) {
        originalPushState.call(this, state, title, url);
        if (url) {
          handleRouteChange(url.toString());
        }
      };

      window.addEventListener('popstate', () => {
        handleRouteChange(window.location.pathname);
      });
    }

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default Analytics;
