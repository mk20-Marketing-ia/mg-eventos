import { type LucideIcon } from "lucide-react";

export interface ServiceItem {
  name: string;
  slug: string;
  shortDescription: string;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ValuePropItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface CTAProps {
  text: string;
  href: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
