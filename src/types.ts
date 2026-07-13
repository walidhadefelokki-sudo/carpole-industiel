export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  advantages: string[];
}

export type TruckType = 'carrier_small' | 'truck_medium' | 'semi_heavy_duty' | 'special_order';
export type BodyType = 'insulated_refrigerated' | 'standard_box_dry' | 'meat_hanging' | 'subframe_only';
export type RefrigeratorCapacity = 'none' | 'positive_fresh' | 'negative_deep_freeze' | 'dual_multi_temp';

export interface QuoteInput {
  truckType: TruckType;
  bodyType: BodyType;
  frigoCapacity: RefrigeratorCapacity;
  truckCount: number;
  hasSubframeIncluded: boolean;
  notes: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  clientCompany: string;
  clientCity: string;
}

export interface QuoteEstimate {
  bodyworkCost: number;
  refrigeratorCost: number;
  subframeCost: number;
  engineeringCost: number;
  totalBeforeTax: number;
  estimatedTaxes: number;
  totalWithTax: number;
  durationInDays: number;
  warrantyMonths: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'carrosserie' | 'frigo' | 'atelier' | 'realisation';
  imageUrl: string;
  description: string;
  location: string;
}

export interface FeedbackItem {
  id: string;
  author: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  date: string;
}
