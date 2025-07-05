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
    { name: "Our Portfolio", id: "portfolio" },
    { name: "Services", id: "services" },
    { name: "Contact Us", id: "contact" },
  ],
  sections: {
    hero: {
      title: "Welcome to AA Expert Solution",
      subtitle: "Building your dreams with precision and quality",
    },
    about: {
      title: "About Us",
      content: `AA Expert Solution is a professional construction company based in Kajang, Selangor. We offer a wide range of construction solutions, from minor house repairs to full-scale residential and commercial building projects. With our experienced team and commitment to quality, we ensure every project is delivered with precision and satisfaction.`,
    },
    portfolio: {
      title: "Our Portfolio",
      description: `Browse our completed projects to see the quality and range of work we’ve accomplished for clients across Selangor and beyond.`,
      projects: [
        {
          name: "2-Storey Bungalow, Bangi",
          image: "/images/portfolio1.jpg",
          description:
            "Full turnkey residential construction with modern interior finishes.",
        },
        {
          name: "Shoplot Renovation, Kajang",
          image: "/images/portfolio2.jpg",
          description:
            "Commercial refurbishment for retail use, including structural improvements.",
        },
        {
          name: "Roof Repair, Semenyih",
          image: "/images/portfolio3.jpg",
          description:
            "Urgent leak repairs and waterproofing on a double-storey house.",
        },
      ],
    },
    services: {
      title: "Our Services",
      items: [
        "Residential Construction",
        "Commercial Building Projects",
        "Home Renovation & Remodeling",
        "Roof Repairs & Waterproofing",
        "Masonry, Plumbing & Electrical Works",
        "Project Management and Consultation",
      ],
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
