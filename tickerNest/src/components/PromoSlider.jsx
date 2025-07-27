import React from 'react';
import './styles/PromoSlider.css';

const promos = [
  {
    icon: '⭐',
    title: 'TickerNest Gold',
    description: 'Earn 120 days of a boosted APY with TickerNest Gold. Terms apply.',
    cta: 'Start Earning →',
    link: '#',
  },
  {
    icon: '⭐',
    title: 'Learn & Earn',
    description: 'You can earn passive income on your uninvested cash. Get $10 to learn how.',
    cta: 'Get Started →',
    link: '#',
  },
  {
    icon: '🎤',
    title: 'IPO Access',
    description: 'Check out 1 IPO currently in flight with IPO Access.',
    cta: 'View Companies →',
    link: '#',
  },
];

const PromoSlider = () => {
  return (
    <div className="promo-slider">
      {promos.map((promo, index) => (
        <div className="promo-card" key={index}>
          <h4 className="promo-title">{promo.icon} {promo.title}</h4>
          <p className="promo-desc">{promo.description}</p>
          <a href={promo.link} className="promo-cta">{promo.cta}</a>
        </div>
      ))}
    </div>
  );
};

export default PromoSlider;
