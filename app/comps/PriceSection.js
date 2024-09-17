import React from 'react';

export function PricingSection() {
  const plans = [
    {
      title: '1 Month',
      price: '$10',
      duration: '1 month',
      features: ['18K+ Channels', 'Movies & Series', 'Stability with Low WiFi'],
    },
    {
      title: '3 Months',
      price: '$15',
      duration: '3 months',
      features: [
        '18K+ Channels',
        'Movies & Series',
        'Stability with Low WiFi',
        'Support Team',
        '4K Channels',
      ],
      mostPopular: true, // Mark this plan as the most popular
    },
    {
      title: '6 Months',
      price: '$25',
      duration: '6 months',
      features: [
        '18K+ Channels',
        'Movies & Series',
        'Stability with Low WiFi',
        'Support Team',
        '4K Channels',
      ],
    },
    {
      title: '1 Year',
      price: '$50',
      duration: '1 year',
      features: [
        '18K+ Channels',
        'Movies & Series',
        'Stability with Low WiFi',
        'Support Team',
        '4K Channels',
      ],
    },
  ];

  return (
    <div className="flex justify-center py-12 my-10 bg-base-200">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-white shadow-lg rounded-lg p-6 border border-gray-200 relative ${
                plan.mostPopular ? 'border-primary border-4' : ''
              }`}
              style={plan.mostPopular ? { borderRadius: '10px' } : {}}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-4xl font-extrabold text-primary mb-6">
                {plan.price}
              </p>
              <p className="text-gray-500 mb-6">{plan.duration}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 mb-2 flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary w-full">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
