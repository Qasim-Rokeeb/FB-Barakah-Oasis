import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * A stub for tracking analytics events.
 * In a real application, you would replace this with a call to your analytics service.
 * @param eventName - The name of the event to track.
 * @param eventProperties - An object of properties to associate with the event.
 */
export function trackEvent(eventName: string, eventProperties: Record<string, any> = {}) {
  console.log(`[Analytics] Event: ${eventName}`, eventProperties);
  // Example integration with a real analytics service:
  // window.analytics.track(eventName, eventProperties);
}
