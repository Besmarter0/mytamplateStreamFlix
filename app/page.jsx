'use client';
import React, { useState } from 'react';
import { ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { massiveFunction } from './lib/Functions';
import HeroSection from './comps/HeroSction';
import { Carousel } from './comps/Carousel';
import Countdown, { CountDown } from './comps/CountDown';
import { TimeLine } from './comps/TimeLine';
import { Rating } from './comps/Rating';
import { ReviewSection } from './comps/ReviewSection';
import { PricingSection } from './comps/PriceSection';
import { ContactSection } from './comps/ContactSection';

export default function Page() {
  return (
    <div className="">
      <HeroSection />
      <Carousel />
      <Countdown />
      <TimeLine />
      <PricingSection />
      <Rating />
      <ReviewSection />
      <ContactSection />
    </div>
  );
}
