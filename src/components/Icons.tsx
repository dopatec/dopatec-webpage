import React from 'react';

export const AIKlubbenLogo = () => (
  <div className="flex items-center">
    <span className="text-3xl font-black tracking-wider">
      <span className="text-accent">ai</span>
      <span className="text-white">klubben</span>
    </span>
  </div>
);

export const CourseIcons = {
  BasicAI: () => (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" className="fill-accent" />
      <path d="M50 20C35 20 25 35 25 50C25 65 35 80 50 80C65 80 75 65 75 50C75 35 65 20 50 20Z" className="fill-dark" />
    </svg>
  ),
  
  Jobbcoach: () => (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 30H80V70H20V30Z" className="fill-secondary" />
      <path d="M35 40H65V60H35V40Z" className="fill-dark" />
    </svg>
  ),
  
  SistaSteget: () => (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 40L50 20L80 40V70L50 90L20 70V40Z" className="fill-primary" />
      <path d="M35 50L50 40L65 50V65L50 75L35 65V50Z" className="fill-dark" />
    </svg>
  )
};

export const NavigationIcons = {
  Menu: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  
  Close: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};