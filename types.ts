import React from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content?: React.ReactNode; // Simulating MDX content
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}