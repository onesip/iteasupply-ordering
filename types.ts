export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string; // e.g., "Most Popular"
  tagline: string;
  targetAudience: string;
  priceRange: string;
  priceNote?: string;
  features: string[];
  advantages: string[];
  cta: string;
  color: string; // Tailwind color class base
  detailedExplanation?: string; // Content for the back of the card
}

export interface ROIData {
  cupsPerDay: number;
  averagePrice: number;
  errorRate: number; // percentage
  staffCost: number; // hourly
}