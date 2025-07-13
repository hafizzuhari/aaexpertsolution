export const quote = {
    title: "Request a Free Quote",
    description: "Tell us about your project and we’ll get back to you with a free estimate.",
    formFields: [
      {
        label: "Full Name",
        name: "fullName",
        type: "text",
        required: true
      },
      {
        label: "Email Address",
        name: "email",
        type: "email",
        required: true
      },
      {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        required: true
      },
      {
        label: "Project Type",
        name: "projectType",
        type: "select",
        options: ["Fencing", "Roofing", "Gates", "Fabrication", "Other"],
        required: true
      },
      {
        label: "Project Location",
        name: "location",
        type: "text",
        required: false
      },
      {
        label: "Additional Details",
        name: "message",
        type: "textarea",
        required: false
      }
    ],
    submitButtonText: "Get My Quote"
  }