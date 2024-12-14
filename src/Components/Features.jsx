import React from "react";

const features = [
  {
    title: "Fast and Reliable",
    description: "Enjoy lightning-fast speeds and dependable service.",
    icon: "⚡",
  },
  {
    title: "Secure and Private",
    description: "Your data is safe with our top-notch security measures.",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    description: "We're here to help anytime, anywhere.",
    icon: "🕒",
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
