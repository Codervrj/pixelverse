
export interface Quest {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Prize {
  tier: string;
  amount: string;
  perks: string[];
}

export interface TimelineItem {
  time: string;
  event: string;
  description: string;
}

// Fixed error: Module '"../types"' has no exported member 'CaseStudy' in components/CaseStudies.tsx
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  color: string;
}

// Fixed error: Module '"../types"' has no exported member 'Service' in components/Services.tsx
export interface Service {
  id: string;
  number: string;
  title: string;
  imageUrl: string;
}
