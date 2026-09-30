export const BRAND = {
  name: "Gokarna Sarva Poojas",
  tagline: "Sacred Rituals, Divine Blessings",
  description:
    "Premium Vedic pooja services and pandit booking platform for all your spiritual needs.",
  whatsappNumber: "+918217487689",
  email: "gokarnasarvapoojas@gmail.com",
  phone: "+91 82174 87689",
  address: "No. 123, 15th Cross Rd, Ittamadu, Banashankari 3rd Stage, Hosakerehalli, Bengaluru, Karnataka 560085",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Blogs", href: "/blogs" },
  { label: "All Puja Services", href: "/services" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Astrology", href: "/astrology" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, "")}`;
