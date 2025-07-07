export const content = {
  company: {
    name: "AA Expert Solution",
    tagline: "Building your dreams with precision and quality",
    logo: "/path-to-your-logo.png", // Adjust as needed
    address: "Kajang, Selangor",
    email: "info@aaexpertsolution.com",
    phone: "+6012-345-6789",
  },
  navLinks: [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Our Portfolio", id: "portfolio" },
    { name: "Contact Us", id: "contact" },
  ],
  sections: {
    hero: [
      {
        title: "Welcome to AA Expert Solution",
        subtitle: "Building your dreams with precision and quality",
        image: "/hero/hero-1.jpg"
      },
      {
        title: "Your Trusted Construction Partner",
        subtitle: "From home repairs to full-scale building projects, we deliver quality you can count on.",
        image: "/hero/hero-2.jpg"
      },
      {
        title: "Residential Renovation Experts",
        subtitle: "Transform your living space with our professional renovation services.",
        image: "/hero/hero-3.jpg"
      },
      {
        title: "Commercial Projects? Covered.",
        subtitle: "We handle office, shop, and industrial construction with precision and care.",
        image: "/hero/hero-4.jpg"
      },
      {
        title: "Fast, Affordable, Reliable",
        subtitle: "On-time project delivery without compromising on quality.",
        image: "/hero/hero-5.jpg"
      },
      {
        title: "Based in Kajang, Serving Selangor",
        subtitle: "Your local construction experts with regional reach.",
        image: "/hero/hero-6.jpg"
      },
    ],
    about: {
      title: "About Us",
      content: `AA Expert Solution is a professional construction company based in Kajang, Selangor. We offer a wide range of construction solutions, from minor house repairs to full-scale residential and commercial building projects. With our experienced team and commitment to quality, we ensure every project is delivered with precision and satisfaction.`,
    },
    portfolio: {
      title: "Our Portfolio",
      description: `Browse our completed projects to see the quality and range of work we've accomplished for clients across Selangor and beyond.`,
      projects: [
        {
          name: "2-Storey Bungalow, Bangi",
          image: "/portfolio/portfolio-1.jpg",
          description:
            "Full turnkey residential construction with modern interior finishes.",
        },
        {
          name: "Shoplot Renovation, Kajang",
          image: "/portfolio/portfolio-2.jpg",
          description:
            "Commercial refurbishment for retail use, including structural improvements.",
        },
        {
          name: "Roof Repair, Semenyih",
          image: "/portfolio/portfolio-3.jpg",
          description:
            "Urgent leak repairs and waterproofing on a double-storey house.",
        },
      ],
    },
    services: {
      title: "Our Services",
      items: [
        {
          name: "Residential Construction",
          icon: "backhoe",
          description: "From foundation to finish — we build quality homes that last."
        },
        {
          name: "Commercial Building Projects",
          icon: "buildings",
          description: "We deliver efficient, scalable commercial spaces for businesses of all sizes."
        },
        {
          name: "Home Renovation & Remodeling",
          icon: "home",
          description: "Upgrade your living space with smart, modern renovations tailored to your lifestyle."
        },
        {
          name: "Roof Repairs & Waterproofing",
          icon: "home-share",
          description: "Protect your property with durable roofing and reliable leak-proofing solutions."
        },
        {
          name: "Masonry, Plumbing & Electrical Works",
          icon: "nut",
          description: "Our skilled team handles the core of your home — from bricks to pipes to wiring."
        },
        {
          name: "Project Management and Consultation",
          icon: "contract",
          description: "Expert oversight from planning to execution to ensure smooth project delivery."
        },
      ]
    },
    contact: {
      title: "Contact Us",
      description:
        "Reach out to us for any construction-related inquiries or to get a project quote.",
      methods: {
        email: "info@aaexpertsolution.com",
        phone: "+6012-345-6789",
        address: "Kajang, Selangor",
      },
      formFields: [
        { label: "Name", name: "name", type: "text", required: true },
        { label: "Email", name: "email", type: "email", required: true },
        { label: "Message", name: "message", type: "textarea", required: true },
      ],
    },
  },
  footer: {
    text: "© 2025 AA Expert Solution. All rights reserved.",
  },
};
