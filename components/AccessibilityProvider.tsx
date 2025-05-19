import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

if (process.env.NODE_ENV === 'development') {
  const axe = require('@axe-core/react');
  axe(React, 1000);
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();

  useEffect(() => {
    // Announce page changes for screen readers
    const announcePageChange = () => {
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.setAttribute('aria-live', 'polite');
        mainContent.setAttribute('aria-atomic', 'true');
      }
    };

    announcePageChange();
  }, []);

  return (
    <>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="sr-only"
        aria-atomic="true"
      />
    </>
  );
} 