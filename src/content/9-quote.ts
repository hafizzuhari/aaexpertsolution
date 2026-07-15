export const quote = {
  // Get a free access key at https://web3forms.com using aaexpertsolution@gmail.com, then paste it here.
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  ms: {
    title: "Dapatkan Kuotasi Percuma",
    description: "Ceritakan pasal projek anda dan kami akan hubungi anda dengan anggaran percuma.",
    submitButtonText: "Dapatkan Kuotasi",
    formFields: [
      { label: "Nama Penuh", name: "fullName", type: "text", required: true },
      { label: "Alamat Emel", name: "email", type: "email", required: true },
      { label: "Nombor Telefon", name: "phone", type: "tel", required: true },
      { label: "Jenis Projek", name: "projectType", type: "select", options: ["Pagar", "Bumbung", "Pintu Pagar", "Fabrikasi", "Lain-lain"], required: true },
      { label: "Lokasi Projek", name: "location", type: "text", required: false },
      { label: "Butiran Tambahan", name: "message", type: "textarea", required: false },
    ],
  },
  en: {
    title: "Request a Free Quote",
    description: "Tell us about your project and we'll get back to you with a free estimate.",
    submitButtonText: "Get My Quote",
    formFields: [
      { label: "Full Name", name: "fullName", type: "text", required: true },
      { label: "Email Address", name: "email", type: "email", required: true },
      { label: "Phone Number", name: "phone", type: "tel", required: true },
      { label: "Project Type", name: "projectType", type: "select", options: ["Fencing", "Roofing", "Gates", "Fabrication", "Other"], required: true },
      { label: "Project Location", name: "location", type: "text", required: false },
      { label: "Additional Details", name: "message", type: "textarea", required: false },
    ],
  },
}
