export interface PujaService {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: string;
  suitableFor: string;
  image: string;
  benefits: string[];
  includes: string[];
  samagri: string[];
  procedure: string[];
  faqs: { question: string; answer: string }[];
}

export const PUJA_CATEGORIES = [
  "All",
  "Pujas",
  "Homa/Havan",
  "Festival Pujas",
  "Parihara",
  "Ancestors Rituals",
] as const;

export const PUJA_SERVICES: PujaService[] = [
  {
    slug: "rudrabhisheka",
    title: "Rudrabhisheka",
    category: "Popular Pujas",
    shortDescription:
      "Sacred bathing of Shivalinga with milk, honey, curd, and holy water while chanting Rudra mantras for divine blessings and liberation.",
    fullDescription:
      "Rudrabhisheka is one of the most powerful Vedic rituals dedicated to Lord Shiva. It involves the sacred bathing (Abhisheka) of the Shivalinga with Panchamrit — milk, curd, ghee, honey, and sugar — while chanting the powerful Sri Rudram mantras. This ceremony invokes Lord Shiva's grace for removing obstacles, ensuring health, prosperity, and spiritual liberation. Performed by experienced pandits in the sacred land of Gokarna, the spiritual benefits are multiplied manifold.",
    duration: "2-3 Hours",
    price: "₹5,100",
    suitableFor: "Health, Prosperity, Obstacle Removal, Spiritual Growth",
    image: "/images/rudrabhisheka.jpg",
    benefits: [
      "Removes negative karma and past sins",
      "Bestows health, longevity, and vitality",
      "Brings prosperity and success in endeavors",
      "Grants spiritual growth and inner peace",
      "Removes obstacles from life path",
      "Protects from malefic planetary influences",
    ],
    includes: [
      "Complete Panchamrit Abhisheka",
      "Sri Rudram chanting by experienced Pandit",
      "Chamakam recitation",
      "Bilva Patra offering (108)",
      "Sacred Ash (Vibhuti) preparation",
      "Maha Aarti and Prasad distribution",
      "All samagri and materials",
    ],
    samagri: [
      "Raw Milk (2 liters)",
      "Curd",
      "Honey",
      "Ghee",
      "Sugar",
      "Sandalwood paste",
      "Bilva Patra (108 leaves)",
      "Rudraksha mala",
      "Camphor",
      "Incense sticks",
      "Flowers (white & red)",
      "Coconut",
    ],
    procedure: [
      "Ganapati Pooja (removing obstacles)",
      "Kalasha Sthapana",
      "Sankalpa (intention setting)",
      "Nyasa and Avahana",
      "Panchamrit Abhisheka with Rudra mantras",
      "Bilva Archana (108 offerings)",
      "Rudra Chamakam chanting",
      "Maha Aarti",
      "Prasad distribution",
    ],
    faqs: [
      {
        question: "When is the best time to perform Rudrabhisheka?",
        answer:
          "Monday is the most auspicious day. Shravan month (July-August) is considered especially powerful. Maha Shivaratri and Pradosh days are also highly recommended.",
      },
      {
        question: "Can Rudrabhisheka be performed at home?",
        answer:
          "Yes, our Pandit can perform Rudrabhisheka at your home with a Shivalinga or at the Mahabaleshwar Temple in Gokarna for enhanced spiritual benefits.",
      },
      {
        question: "How many people can participate?",
        answer:
          "There is no limit. The entire family can participate and receive blessings. We encourage family participation for maximum spiritual benefit.",
      },
      {
        question: "Do I need to prepare anything?",
        answer:
          "No. We provide all samagri and materials. You just need to be present with a clean mind and devotional intent. We'll guide you through any participation required.",
      },
    ],
  },
  {
    slug: "maha-ganapati-pooja",
    title: "Maha Ganapati Pooja",
    category: "Popular Pujas",
    shortDescription:
      "Invoke Lord Ganesha's supreme grace to remove all obstacles, ensure success in new beginnings, and bring wisdom and prosperity.",
    fullDescription:
      "Maha Ganapati Pooja is an elaborate ceremony dedicated to Lord Ganesha — the remover of obstacles and the lord of new beginnings. This powerful ritual goes beyond a simple Ganesh Pooja by incorporating the chanting of Ganapati Atharvasheersha, 108 names of Ganesha, and special modak offerings. It is especially performed before starting new ventures, during education pursuits, or when facing persistent obstacles in life.",
    duration: "2-2.5 Hours",
    price: "₹3,100",
    suitableFor: "New Beginnings, Obstacle Removal, Education, Business Success",
    image: "/images/ganapati-pooja.jpg",
    benefits: [
      "Removes all obstacles from your path",
      "Blesses new ventures and beginnings",
      "Enhances wisdom and intellect",
      "Brings prosperity and good fortune",
      "Protects from negative energies",
      "Grants success in education and career",
    ],
    includes: [
      "Complete Maha Ganapati Pooja vidhi",
      "Ganapati Atharvasheersha recitation",
      "108 names archana",
      "Modak and Durva grass offering",
      "Ganesh Aarti",
      "Prasad and blessed items",
      "All samagri included",
    ],
    samagri: [
      "Modak (21 pieces)",
      "Durva grass (21 shoots)",
      "Red flowers",
      "Coconut",
      "Jaggery",
      "Red sandalwood",
      "Camphor and incense",
      "Betel leaves and nuts",
      "Banana and seasonal fruits",
      "Red cloth",
    ],
    procedure: [
      "Sankalpa and intention setting",
      "Ganapati Sthapana and Avahana",
      "Shodashopachara Pooja (16-step worship)",
      "Ganapati Atharvasheersha path",
      "108 names archana with red flowers",
      "Modak and Durva offering",
      "Aarti and Pradakshina",
      "Prasad distribution",
    ],
    faqs: [
      {
        question: "When should I perform Maha Ganapati Pooja?",
        answer:
          "It's ideal before starting any new venture, on Chaturthi days, or during Ganesh Chaturthi festival. It can also be performed any time you face persistent obstacles.",
      },
      {
        question: "Is this different from regular Ganesh Pooja?",
        answer:
          "Yes. Maha Ganapati Pooja is more elaborate, includes the complete Atharvasheersha, 108 names archana, and specific offerings that make it significantly more powerful.",
      },
      {
        question: "Can it be performed for children's education?",
        answer:
          "Absolutely. Lord Ganesha is the deity of wisdom and intellect. This pooja is highly beneficial for students before exams or when starting new courses.",
      },
      {
        question: "What should I wear during the pooja?",
        answer:
          "Traditional Indian attire is recommended. Men can wear dhoti-kurta and women can wear saree or salwar. Clean, preferably new clothes in bright colors are ideal.",
      },
    ],
  },
  {
    slug: "marriage-puja",
    title: "Marriage Puja",
    category: "Special Rituals",
    shortDescription:
      "Complete Vedic wedding rituals performed with authenticity, grace, and spiritual depth for a blessed and harmonious married life.",
    fullDescription:
      "Marriage Puja (Vivah Sanskar) is one of the most sacred ceremonies in Hindu tradition. It encompasses all essential Vedic wedding rituals — from Ganesh Pooja and Kanyadaan to Mangal Phera and Saptapadi. Our experienced pandits perform each ritual with complete authenticity, explaining the significance to the couple and families. The ceremony invokes divine blessings for a lifetime of love, harmony, prosperity, and spiritual growth together.",
    duration: "4-6 Hours",
    price: "₹21,000",
    suitableFor: "Wedding Ceremony, Sacred Union, Family Blessings, New Beginning",
    image: "/images/marriage-pooja.jpg",
    benefits: [
      "Divine blessings for lifelong harmony",
      "Sacred bond between two souls and families",
      "Prosperity and abundance in married life",
      "Protection from negative influences on the union",
      "Spiritual foundation for the relationship",
      "Ancestral and divine blessings for progeny",
    ],
    includes: [
      "Complete Vedic wedding ceremony",
      "Ganesh Pooja and Kalasha Sthapana",
      "Kanyadaan and Mangal Sutra rituals",
      "Saptapadi (seven sacred vows)",
      "Sacred Havan for the couple",
      "Mangal Phera around sacred fire",
      "All samagri and ceremonial items",
    ],
    samagri: [
      "Sacred fire pit (Havan Kund)",
      "Ghee and Havan samagri",
      "Mangal Sutra",
      "Sindoor",
      "Rice and flowers",
      "Coconut and fruits",
      "Sacred threads",
      "Betel leaves and nuts",
      "Turmeric and kumkum",
      "New cloth for offerings",
    ],
    procedure: [
      "Ganesh Pooja and invocation",
      "Kalasha Sthapana",
      "Kanyadaan ceremony",
      "Mangal Sutra and Sindoor",
      "Panigrahana (hand-holding ritual)",
      "Saptapadi (seven vows around fire)",
      "Mangal Phera",
      "Ashirvad (blessings)",
      "Havan and Purnahuti",
    ],
    faqs: [
      {
        question: "How long does the complete wedding ceremony take?",
        answer:
          "A complete Vedic wedding ceremony typically takes 4-6 hours. We can also customize the duration based on your schedule while keeping all essential rituals intact.",
      },
      {
        question: "Can you perform the ceremony at our venue?",
        answer:
          "Yes, our pandits travel to your chosen venue — be it a wedding hall, home, temple, or any location. We bring all required materials and set up the ceremonial area.",
      },
      {
        question: "Do you explain the rituals to the guests?",
        answer:
          "Absolutely. Our pandits explain each ritual's significance in Hindi and English so that the couple and all family members understand and participate meaningfully.",
      },
      {
        question: "Can you help with muhurat selection for the wedding?",
        answer:
          "Yes, we provide muhurat consultation as part of the service. Based on both horoscopes, we suggest the most auspicious date and time for the wedding ceremony.",
      },
    ],
  },
  {
    slug: "udaka-shanti",
    title: "Udaka Shanti",
    category: "Griha Shanti",
    shortDescription:
      "Sacred water purification ceremony invoking divine blessings through Vedic hymns for peace, prosperity, and protection of the home and family.",
    fullDescription:
      "Udaka Shanti is one of the most powerful Vedic purification rituals involving the sanctification of water through the chanting of sacred Suktas and mantras. The ceremony invokes the blessings of Varuna (water deity), Indra, and other Vedic gods. The sanctified water is then used to bless the devotees, home, and surroundings. This ceremony is traditionally performed during housewarmings, after recovering from illness, for prosperity, and to ward off negative energies. In Gokarna, performed with sacred water from Kotiteertha, its potency is greatly amplified.",
    duration: "3-4 Hours",
    price: "₹5,500",
    suitableFor: "Home Purification, Peace, Prosperity, Protection, New Beginnings",
    image: "/images/udaka-shanti.jpg",
    benefits: [
      "Purifies the home and surroundings",
      "Brings peace and harmony to the family",
      "Removes negative energies and Vastu doshas",
      "Grants prosperity and divine protection",
      "Blesses all family members with health",
      "Ideal for new beginnings and auspicious occasions",
    ],
    includes: [
      "Complete Udaka Shanti vidhi",
      "Chanting of Pavamana Sukta and Varuna Sukta",
      "Sacred water preparation with 108 herbs",
      "Abhisheka with sanctified water",
      "Havan for purification",
      "Sprinkling of blessed water in all rooms",
      "All samagri and materials provided",
    ],
    samagri: [
      "108 sacred herbs",
      "Gold and silver coins (for water)",
      "Ghee for Havan",
      "Durva grass",
      "Kusha grass",
      "Flowers and tulsi leaves",
      "Camphor and incense",
      "Coconut",
      "Sacred earth from Gokarna",
      "Copper kalasha (pot)",
    ],
    procedure: [
      "Ganapati Pooja and Sankalpa",
      "Kalasha Sthapana with sacred water",
      "Invocation of Varuna and water deities",
      "Chanting of Pavamana Sukta (purification hymns)",
      "Sanctification of water with 108 herbs",
      "Abhisheka on devotees with blessed water",
      "Havan and offerings",
      "Sprinkling of water in home/venue",
      "Final blessings and closure",
    ],
    faqs: [
      {
        question: "When should Udaka Shanti be performed?",
        answer:
          "It is ideal during Griha Pravesh, after recovering from illness, during Vastu corrections, on birthdays, anniversaries, or whenever you want to bring fresh positive energy into your space.",
      },
      {
        question: "Can it be performed in an apartment?",
        answer:
          "Yes, Udaka Shanti can be performed in any space — house, apartment, office, or shop. The sanctified water is sprinkled in all areas to purify the entire environment.",
      },
      {
        question: "What makes Gokarna special for this ceremony?",
        answer:
          "Gokarna's Kotiteertha (sacred tank) water is already spiritually potent. Using this water in Udaka Shanti greatly enhances the ceremony's purifying effects.",
      },
      {
        question: "How many people can participate?",
        answer:
          "The entire family can participate. The blessed water is sprinkled on all members. There is no restriction on the number of participants.",
      },
    ],
  },
  {
    slug: "griha-pravesh",
    title: "Griha Pravesh Puja",
    category: "Griha Shanti",
    shortDescription:
      "Sacred housewarming ceremony to purify your new home, invite positive energies, and seek divine blessings for a happy family life.",
    fullDescription:
      "Griha Pravesh Puja is the sacred housewarming ceremony performed when entering a new home for the first time. This comprehensive ritual includes Ganapati Pooja, Vastu Shanti, Navagraha prayers, and a sacred Havan to purify the space, remove any negative energies, and invite prosperity, harmony, and divine protection into the new dwelling. Our experienced pandits ensure every Vedic protocol is followed to establish your home as a place of peace and spiritual growth.",
    duration: "3-4 Hours",
    price: "₹7,500",
    suitableFor: "New Home, Housewarming, Vastu Purification, Family Blessings",
    image: "/images/griha-pravesh.jpg",
    benefits: [
      "Purifies the new home of all negative energies",
      "Invites Goddess Lakshmi for prosperity",
      "Establishes Vastu harmony in the space",
      "Protects the family from misfortune",
      "Blesses all residents with health and happiness",
      "Creates a spiritually positive living environment",
    ],
    includes: [
      "Complete Griha Pravesh vidhi",
      "Ganapati Pooja and Kalasha Sthapana",
      "Vastu Shanti Pooja",
      "Navagraha prayers",
      "Sacred Havan for purification",
      "Milk boiling ceremony (Dudh Ubalna)",
      "All samagri and materials provided",
    ],
    samagri: [
      "Mango leaves and toran",
      "Coconut",
      "Milk (for boiling ceremony)",
      "Ghee for Havan",
      "Rice and turmeric",
      "Flowers and garlands",
      "Camphor and incense",
      "Kalasha with holy water",
      "Swastik materials",
      "New cloth for pooja",
    ],
    procedure: [
      "Ganapati Pooja and obstacle removal",
      "Kalasha Sthapana",
      "Vastu Purush invocation",
      "Navagraha Shanti",
      "Sacred Havan for home purification",
      "Entering the home with right foot first",
      "Milk boiling ceremony (Dudh Ubalna)",
      "Room-by-room purification with mantras",
      "Final Aarti and family blessings",
    ],
    faqs: [
      {
        question: "When is the best time for Griha Pravesh?",
        answer:
          "An auspicious muhurat is selected based on the family's horoscope. Generally, it should be done during Shubh Muhurat, avoiding Rahu Kaal. Our pandit will help select the perfect timing.",
      },
      {
        question: "Can it be done for a rented house?",
        answer:
          "Yes, Griha Pravesh can be performed for any new residence — whether purchased or rented. The ceremony purifies the space and brings positive energy regardless of ownership.",
      },
      {
        question: "What should the family prepare?",
        answer:
          "We provide all pooja materials. The family just needs to ensure the home is clean and ready. We'll guide you on any specific preparations needed for the milk boiling ceremony.",
      },
      {
        question: "How long before moving in should it be done?",
        answer:
          "Ideally, Griha Pravesh is the first thing done before moving furniture or belongings. If already moved in, it can still be performed — the purification benefits apply regardless.",
      },
    ],
  },
  {
    slug: "satyanarayana-pooja",
    title: "Satyanarayana Pooja",
    category: "Festival Pujas",
    shortDescription:
      "Invoke Lord Vishnu's blessings as Satyanarayan for prosperity, success, family harmony, and fulfillment of wishes.",
    fullDescription:
      "Satyanarayana Pooja is one of the most popular and beloved Vedic ceremonies in Hindu tradition. Dedicated to Lord Vishnu in his form as Satyanarayan (the embodiment of Truth), this pooja includes the narration of sacred Katha (stories) that illustrate the power of truth and devotion. It is performed for prosperity, wish fulfillment, during housewarmings, after good news, or on Purnima (full moon) days. The entire family participates, making it a joyous spiritual gathering.",
    duration: "2-3 Hours",
    price: "₹4,100",
    suitableFor: "Prosperity, Wish Fulfillment, Housewarming, Family Harmony, Celebrations",
    image: "/images/satyanarayana-pooja.jpg",
    benefits: [
      "Brings prosperity and abundance",
      "Fulfills sincere wishes and prayers",
      "Strengthens family bonds and harmony",
      "Removes financial difficulties",
      "Blesses new homes and beginnings",
      "Grants success in undertakings",
    ],
    includes: [
      "Complete Satyanarayana Pooja vidhi",
      "Five chapters of Katha narration",
      "108 names of Lord Vishnu archana",
      "Panchamrit preparation and distribution",
      "Prasad (Sheera/Halwa) preparation guidance",
      "Aarti and family blessings",
      "All samagri and materials",
    ],
    samagri: [
      "Banana and seasonal fruits",
      "Coconut",
      "Betel leaves and nuts",
      "Wheat flour (for Sheera)",
      "Sugar and ghee",
      "Yellow flowers",
      "Turmeric and kumkum",
      "Incense and camphor",
      "Silver coin",
      "New cloth for deity",
    ],
    procedure: [
      "Ganapati Pooja",
      "Kalasha Sthapana",
      "Satyanarayana Avahana (invocation)",
      "Shodashopachara Pooja",
      "Katha narration (5 chapters)",
      "108 names archana",
      "Aarti and Mangal",
      "Prasad preparation and distribution",
      "Family blessings",
    ],
    faqs: [
      {
        question: "Can anyone perform Satyanarayana Pooja?",
        answer:
          "Yes! This is one of the most inclusive poojas. Anyone regardless of age, gender, or caste can participate. It's especially recommended for families.",
      },
      {
        question: "When is the best time to perform it?",
        answer:
          "Purnima (full moon) days are traditional. It's also performed after receiving good news, during housewarmings, on birthdays, anniversaries, and during festivals.",
      },
      {
        question: "Do guests need to stay for the entire Katha?",
        answer:
          "It's considered auspicious to listen to the complete Katha. The five chapters take about 30-40 minutes. Leaving midway is traditionally considered inauspicious.",
      },
      {
        question: "Can I perform this in my apartment?",
        answer:
          "Absolutely. Satyanarayana Pooja is perfectly suited for homes and apartments. Our Pandit will set up everything needed in your available space.",
      },
    ],
  },
  {
    slug: "maha-havan",
    title: "Maha Havan",
    category: "Homa / Havan",
    shortDescription:
      "Sacred fire ceremony invoking Agni Dev to carry your prayers to the divine. Purifies the environment and brings prosperity.",
    fullDescription:
      "Maha Havan is an elaborate sacred fire ceremony (Yajna) where offerings are made into the consecrated fire while chanting powerful Vedic mantras. Agni Dev (the fire deity) acts as the divine messenger, carrying offerings and prayers to all Devas. This ceremony purifies the environment, removes negative energies, and creates a powerful spiritual atmosphere. It can be dedicated to various deities based on your specific needs and intentions.",
    duration: "2-3 Hours",
    price: "₹4,500",
    suitableFor: "Purification, Prosperity, New Ventures, Environmental Cleansing",
    image: "/images/havan.jpg",
    benefits: [
      "Purifies home and environment",
      "Removes negative energies completely",
      "Carries prayers directly to the divine",
      "Brings prosperity and positive energy",
      "Heals respiratory and health issues",
      "Creates spiritual protection shield",
    ],
    includes: [
      "Complete Havan Kund setup",
      "Vedic fire consecration rituals",
      "Specific mantras based on purpose",
      "108+ offerings into sacred fire",
      "Purnahuti (final complete offering)",
      "Vibhuti and Prasad",
      "All Havan samagri and herbs",
    ],
    samagri: [
      "Havan Kund (fire pit)",
      "Mango wood sticks",
      "Ghee (1 kg)",
      "Havan samagri (herb mixture)",
      "Specific herbs for intention",
      "Rice and sesame",
      "Coconut for Purnahuti",
      "Camphor",
      "Sandalwood chips",
      "Sacred thread",
    ],
    procedure: [
      "Agni Sthapana (fire consecration)",
      "Ganapati Havan",
      "Main deity invocation",
      "108 Ahutis (offerings) with mantras",
      "Specific prayer offerings",
      "Purnahuti (final offering)",
      "Shanti Path",
      "Vibhuti distribution",
      "Blessings and closure",
    ],
    faqs: [
      {
        question: "Can Havan be performed in an apartment?",
        answer:
          "Yes, we use appropriately sized Havan Kunds for apartment settings. We ensure minimal smoke using pure ghee and dry mango wood. Ventilation near a balcony or window is helpful.",
      },
      {
        question: "What is the purpose-specific Havan?",
        answer:
          "Different herbs and mantras are used based on your intention — prosperity (Lakshmi Havan), health (Dhanvantari Havan), obstacle removal (Ganapati Havan), or general purification.",
      },
      {
        question: "How often should Havan be performed?",
        answer:
          "Monthly or during special occasions is ideal. Many families perform it on Purnima or during festivals. For specific issues, our Pandit will recommend the right frequency.",
      },
      {
        question: "Is fire safe indoors?",
        answer:
          "Absolutely. We use controlled, small-scale fire with proper Havan Kund. Our pandits are experienced in performing indoor Havans safely. We take all necessary precautions.",
      },
    ],
  },
];

export function getPujaBySlug(slug: string): PujaService | undefined {
  return PUJA_SERVICES.find((puja) => puja.slug === slug);
}

export function getPujasByCategory(category: string): PujaService[] {
  if (category === "All") return PUJA_SERVICES;
  return PUJA_SERVICES.filter((puja) => puja.category === category);
}
