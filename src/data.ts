import { Bike, Accessory, Review, GalleryItem, FAQItem } from "./types";

export const BRAND_LIST = [
  { name: "Royal Enfield", logo: "🛡️" },
  { name: "Yamaha", logo: "🔵" },
  { name: "KTM", logo: "🟠" },
  { name: "Honda", logo: "🔴" },
  { name: "TVS", logo: "⭐" },
  { name: "Bajaj", logo: "⚡" },
  { name: "Suzuki", logo: "🔵" },
  { name: "Ather", logo: "🟢" }
];

export const BIKES_DATA: Bike[] = [
  {
    id: "re-classic-350-new",
    brand: "Royal Enfield",
    model: "Classic 350",
    price: 220000,
    emi: 5499,
    mileage: 35,
    engine: "349 cc",
    fuelType: "Petrol",
    year: 2026,
    condition: "New",
    badge: "Bestseller Cruiser",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "20.2 BHP @ 6100 rpm",
      torque: "27 Nm @ 4000 rpm",
      brakes: "Dual Channel ABS, Twin Discs",
      weight: "195 kg",
      tankCapacity: "13 Liters"
    },
    description: "The timeless Royal Enfield Classic 350 combines vintage British styling, the iconic heavy-flywheel signature thump, and a super smooth J-series engine for the ultimate city and highway cruising."
  },
  {
    id: "yamaha-mt15-new",
    brand: "Yamaha",
    model: "MT-15 V2",
    price: 172000,
    emi: 4299,
    mileage: 45,
    engine: "155 cc",
    fuelType: "Petrol",
    year: 2026,
    condition: "New",
    badge: "Street Fighter King",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "18.4 PS @ 10000 rpm",
      torque: "14.1 Nm @ 7500 rpm",
      brakes: "Single Channel ABS, Disc/Disc",
      weight: "141 kg",
      tankCapacity: "10 Liters"
    },
    description: "The Yamaha MT-15 V2 brings hyper-naked aggressiveness to the city. Featuring a liquid-cooled 155cc engine, Variable Valve Actuation (VVA), Upside Down (USD) forks, and superb 45 km/l mileage."
  },
  {
    id: "ktm-duke-390-new",
    brand: "KTM",
    model: "Duke 390 Gen-3",
    price: 311000,
    emi: 7200,
    mileage: 28,
    engine: "399 cc",
    fuelType: "Petrol",
    year: 2026,
    condition: "New",
    badge: "Corner Rocket",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "46 PS @ 8500 rpm",
      torque: "39 Nm @ 6500 rpm",
      brakes: "Cornering ABS, Supermoto Mode, Large Disc",
      weight: "165 kg",
      tankCapacity: "15 Liters"
    },
    description: "Lighter, sharper, and packed with riding aids, the KTM Duke 390 Gen-3 is the ultimate street naked designed to maximize adrenaline with surgical cornering precision."
  },
  {
    id: "re-hunter-350-new",
    brand: "Royal Enfield",
    model: "Hunter 350 Metro",
    price: 170000,
    emi: 4199,
    mileage: 36,
    engine: "349 cc",
    fuelType: "Petrol",
    year: 2026,
    condition: "New",
    badge: "Urban Hustler",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "20.2 BHP @ 6100 rpm",
      torque: "27 Nm @ 4000 rpm",
      brakes: "Dual Channel ABS, Disc/Disc",
      weight: "181 kg",
      tankCapacity: "13 Liters"
    },
    description: "Designed for young urban explorers, the Royal Enfield Hunter 350 offers light handling, retro-metro style, alloy wheels, and a responsive engine perfect for navigating Bangalore traffic."
  },
  {
    id: "yamaha-r15-new",
    brand: "Yamaha",
    model: "YZF-R15 V4",
    price: 187000,
    emi: 4599,
    mileage: 45,
    engine: "155 cc",
    fuelType: "Petrol",
    year: 2026,
    condition: "New",
    badge: "Track DNA Sport",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "18.4 PS @ 10000 rpm",
      torque: "14.2 Nm @ 7500 rpm",
      brakes: "Dual Channel ABS, Traction Control",
      weight: "142 kg",
      tankCapacity: "11 Liters"
    },
    description: "Derived directly from MotoGP racing, the Yamaha YZF-R15 V4 features high-tech Quick Shifter, Traction Control System, and sleek aerodynamic bodywork for the enthusiast."
  },
  {
    id: "honda-cb350rs-new",
    brand: "Honda",
    model: "CB350RS",
    price: 215000,
    emi: 5299,
    mileage: 35,
    engine: "348 cc",
    fuelType: "Petrol",
    year: 2026,
    condition: "New",
    badge: "Premium Neo-Classic",
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "21 BHP @ 5500 rpm",
      torque: "30 Nm @ 3000 rpm",
      brakes: "Dual Channel ABS, Honda Selectable Torque Control",
      weight: "179 kg",
      tankCapacity: "15 Liters"
    },
    description: "Crafted with modern retro-scrambler design, the Honda CB350RS offers premium dual-tone finishes, all-LED lighting, wider rear tire, and a refined engine with a sporty exhaust note."
  },
  {
    id: "tvs-apache-200-new",
    brand: "TVS",
    model: "Apache RTR 200 4V",
    price: 148000,
    emi: 3699,
    mileage: 38,
    engine: "197.7 cc",
    fuelType: "Petrol",
    year: 2026,
    condition: "New",
    badge: "Racing Legend",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "20.82 PS @ 9000 rpm",
      torque: "17.25 Nm @ 7250 rpm",
      brakes: "Dual Channel ABS with RLP, Disc/Disc",
      weight: "152 kg",
      tankCapacity: "12 Liters"
    },
    description: "The TVS Apache RTR 200 4V sets standards with segment-first features like adjustable suspension, riding modes (Sport/Urban/Rain), and SmartXonnect Bluetooth telemetry."
  },
  {
    id: "ather-450x-new",
    brand: "Ather",
    model: "450X Gen-4",
    price: 145000,
    emi: 3599,
    mileage: 110,
    engine: "6.4 kW Motor",
    fuelType: "Electric",
    year: 2026,
    condition: "New",
    badge: "Smart Electric",
    image: "https://images.unsplash.com/photo-1611245329358-18714447c001?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "8.58 HP Peak Power",
      torque: "26 Nm (Instant)",
      brakes: "Regenerative Dual Discs, CBS",
      weight: "111.6 kg",
      tankCapacity: "3.7 kWh Lithium-Ion"
    },
    description: "Bengaluru's own tech scooter. Ather 450X Gen-4 provides rapid warp acceleration, Google Maps navigation, dashboard controls, OTA updates, and 110 km of real-world range."
  },

  /* Used Bikes Catalog - Fully Certified Pre-Owned Local Indian Market */
  {
    id: "used-re-classic-350",
    brand: "Royal Enfield",
    model: "Classic 350 Chrome",
    price: 185000,
    emi: 4200,
    mileage: 35,
    engine: "349 cc",
    fuelType: "Petrol",
    year: 2024,
    kmDriven: 8500,
    owners: 1,
    condition: "Used",
    insuranceStatus: "Active till Oct 2028 (Comprehensive)",
    serviceHistory: "Showroom certified, 3 free services completed",
    badge: "Like New - Certified",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "20.2 BHP @ 6100 rpm",
      torque: "27 Nm @ 4000 rpm",
      brakes: "Dual Channel ABS, Disc/Disc",
      weight: "195 kg",
      tankCapacity: "13 Liters"
    },
    description: "Immaculately maintained single-owner Royal Enfield Classic 350. Zero accidents, sparkling chrome elements, and equipped with original leg guard & touring seat accessories."
  },
  {
    id: "used-yamaha-mt15",
    brand: "Yamaha",
    model: "MT-15 V2 Monster",
    price: 142000,
    emi: 3500,
    mileage: 45,
    engine: "155 cc",
    fuelType: "Petrol",
    year: 2023,
    kmDriven: 14200,
    owners: 1,
    condition: "Used",
    insuranceStatus: "Active till Dec 2027 (Third Party + Own Damage)",
    serviceHistory: "Complete history available, periodic chain adjustments done",
    badge: "Hot Seller",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "18.4 PS @ 10000 rpm",
      torque: "14.1 Nm @ 7500 rpm",
      brakes: "Single Channel ABS, Disc/Disc",
      weight: "141 kg",
      tankCapacity: "10 Liters"
    },
    description: "The ultimate hypernaked monster for the city. Exceptional mileage of 45 km/l combined with Yamaha's signature VVA engine tech. Clean body, new rear Apollo Alpha H1 tire."
  },
  {
    id: "used-ktm-duke200",
    brand: "KTM",
    model: "Duke 200 BS6",
    price: 145000,
    emi: 3600,
    mileage: 35,
    engine: "199.5 cc",
    fuelType: "Petrol",
    year: 2022,
    kmDriven: 16500,
    owners: 1,
    condition: "Used",
    insuranceStatus: "Active till May 2027 (Comprehensive)",
    serviceHistory: "Fully serviced at KTM Indiranagar, scratchless body",
    badge: "Top Value City Bike",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "25 PS @ 10000 rpm",
      torque: "19.3 Nm @ 8000 rpm",
      brakes: "Dual Channel ABS, Disc/Disc",
      weight: "159 kg",
      tankCapacity: "13.5 Liters"
    },
    description: "Pristine KTM Duke 200 with electronic orange alloys. Extremely high-revving performance, crisp gear shifts, and immediate throttle response ideal for highway weekending."
  },
  {
    id: "used-pulsar-ns200",
    brand: "Bajaj",
    model: "Pulsar NS200 ABS",
    price: 105000,
    emi: 2600,
    mileage: 35,
    engine: "199.5 cc",
    fuelType: "Petrol",
    year: 2022,
    kmDriven: 18200,
    owners: 1,
    condition: "Used",
    insuranceStatus: "Active till April 2027 (Comprehensive)",
    serviceHistory: "Timely synthetic oil change, chains and sprockets fully detailed",
    badge: "Budget Street Beast",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "24.5 PS @ 9750 rpm",
      torque: "18.74 Nm @ 8000 rpm",
      brakes: "Dual Channel ABS, Disc/Disc",
      weight: "158 kg",
      tankCapacity: "12 Liters"
    },
    description: "The favorite raw power street naked. Highly affordable maintenance, great low-end punch, robust liquid cooled engine, and aggressive posture."
  },
  {
    id: "used-tvs-ntorq",
    brand: "TVS",
    model: "Ntorq 125 Race Edition",
    price: 78000,
    emi: 1900,
    mileage: 42,
    engine: "124.8 cc",
    fuelType: "Petrol",
    year: 2023,
    kmDriven: 9400,
    owners: 1,
    condition: "Used",
    insuranceStatus: "Active till Aug 2028 (Third Party)",
    serviceHistory: "Authorized service center only, pristine body panels",
    badge: "Sport Scooter",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "9.38 PS @ 7000 rpm",
      torque: "10.5 Nm @ 5500 rpm",
      brakes: "Front Disc, Rear Drum, CBS",
      weight: "118 kg",
      tankCapacity: "5.8 Liters"
    },
    description: "The sportiest 125cc commuter scooter in the country, featuring stealth fighter exhaust rumble, Bluetooth console, turn-by-turn navigation, and excellent throttle snap."
  },
  {
    id: "used-honda-activa",
    brand: "Honda",
    model: "Activa 6G DLX",
    price: 62000,
    emi: 1500,
    mileage: 50,
    engine: "109.5 cc",
    fuelType: "Petrol",
    year: 2023,
    kmDriven: 7800,
    owners: 1,
    condition: "Used",
    insuranceStatus: "Active till Sept 2028 (Comprehensive)",
    serviceHistory: "Periodic checks at Honda dealership, single lady owned",
    badge: "Family Commuter",
    image: "https://images.unsplash.com/photo-1611245329358-18714447c001?w=800&auto=format&fit=crop&q=80",
    specs: {
      power: "7.79 PS @ 8000 rpm",
      torque: "8.84 Nm @ 5500 rpm",
      brakes: "Combi Brake System (CBS) Drums",
      weight: "106 kg",
      tankCapacity: "5.3 Liters"
    },
    description: "India's highest trusted household scooter. Bulletproof reliability, comfortable upright metal body construction, effortless silent start system, and great city mileage of 50 km/l."
  }
];

export const ACCESSORIES_DATA: Accessory[] = [
  {
    id: "acc-helmet-agv",
    name: "AGV K1 S Full Face Helmet - Matte Black",
    category: "Helmets",
    price: 24999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&auto=format&fit=crop&q=80",
    description: "Premium racing-derived aerodynamic design, high-resistance thermoplastic resin shell with pinlock-ready optical class visor."
  },
  {
    id: "acc-jacket-alpinestars",
    name: "Alpinestars T-GP Plus R v3 Air Riding Jacket",
    category: "Riding Gear",
    price: 18499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop&q=80",
    description: "Highly durable poly-fabric shell with localized mesh panels for ultimate airflow during warm summer Bengaluru rides."
  },
  {
    id: "acc-gloves-dainese",
    name: "Dainese Mig 3 Air Mesh Protective Gloves",
    category: "Riding Gear",
    price: 8499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=80",
    description: "Lightweight, breathable short gloves with rigid polyurethane knuckle inserts and micro-injected leather palms."
  },
  {
    id: "acc-exhaust-akrapovic",
    name: "Akrapovic Slip-On Line Exhaust System",
    category: "Exhausts",
    price: 89000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&auto=format&fit=crop&q=80",
    description: "Lightweight titanium exhaust delivering the authentic deep growl sound, maximum performance, and premium style."
  },
  {
    id: "acc-holder-spconnect",
    name: "SP Connect Moto Mount Pro Vibration Dampened Mount",
    category: "Electronics",
    price: 7999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1611245329358-18714447c001?w=800&auto=format&fit=crop&q=80",
    description: "Machined aircraft-grade aluminum CNC mount with a 3D vibration dampener to protect modern smartphone optical image stabilizers."
  },
  {
    id: "acc-care-motul",
    name: "Motul Chain Clean & Lube Premium Combo Kit",
    category: "Care Products",
    price: 1250,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80",
    description: "The absolute standard for chain care. High-performance clean agent paired with original Motul C2 chain paste/spray."
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Surendra V.",
    rating: 5,
    text: "CM Bikes is hands down the best place in Bangalore to purchase premium motorcycles. I bought my Royal Enfield Super Meteor 650 from them, and the entire transaction, from value valuation of my old Pulsar to the loan transfer, was incredibly professional. Highly recommended!",
    date: "2 weeks ago",
    source: "Google",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    bikeModel: "Royal Enfield Super Meteor 650"
  },
  {
    id: "rev-2",
    name: "Ananya Gowda",
    rating: 5,
    text: "I was super skeptical about buying a used bike, but CM Bikes changed my mind entirely. Their certified pre-owned Yamaha MT-15 v2 looked and rode like it just rolled off the factory floor. They took care of the Bangalore RTO RC transfer effortlessly. Splendid service!",
    date: "1 month ago",
    source: "Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    bikeModel: "Yamaha MT-15 V2 (Pre-Owned)"
  },
  {
    id: "rev-3",
    name: "Vikram Reddy",
    rating: 5,
    text: "Truly a luxury experience. Bought the Kawasaki ZX-10R. The showroom delivery with confetti and cake cutting felt so premium! The sales team is highly knowledgeable about superbike specs, unlike normal dealership executives. Finance approval took just 2 hours.",
    date: "3 weeks ago",
    source: "Customer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    bikeModel: "Kawasaki Ninja ZX-10R"
  },
  {
    id: "rev-4",
    name: "Rohan Murthy",
    rating: 5,
    text: "Exchanged my old Duke 200 for a pre-owned H'ness CB350. They gave me a valuation that was Rs. 15,000 higher than what other portals in Bengaluru offered. The entire exchange process took less than an hour. Trustworthy and transparent!",
    date: "3 months ago",
    source: "Google",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    bikeModel: "Honda CB350 H'ness"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "CM Bikes Showroom Premium Launch Display",
    category: "Showroom",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-2",
    title: "Kawasaki ZX-10R Superbike Delivery Celebrations",
    category: "Deliveries",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-3",
    title: "Sunday Morning Superbike Rider Club Breakfast Meet",
    category: "Events",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-4",
    title: "Pristine Ducati Panigale V4 S on Display Bed",
    category: "Bikes",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-5",
    title: "Happy Customer Delivery - Royal Enfield Classic",
    category: "Deliveries",
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "gal-6",
    title: "Showroom Service Bay & Diagnostics Workspace",
    category: "Showroom",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop&q=80"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What documents are required for buying a bike on finance in Bangalore?",
    answer: "You typically need: 1. Aadhaar Card, 2. PAN Card, 3. Bank Statements (last 6 months), 4. Salary slips (last 3 months) or ITR (for self-employed), 5. Address proof of Bangalore, and 6. Two passport size photographs. CM Bikes has in-house executives to complete the full loan process under 2 hours.",
    category: "Finance"
  },
  {
    question: "How is the valuation done for exchanging an old motorcycle?",
    answer: "Our evaluation is scientific and based on a comprehensive 50-point check including engine health, chassis straightness, electricals, tires, and original service records. We offer the best market price in Bengaluru. You can submit the valuation form online and drive down to Channasandra for immediate approval.",
    category: "Exchange"
  },
  {
    question: "Do you assist with RTO transfer and paperwork for used/exchanged bikes?",
    answer: "Yes, absolutely. CM Bikes takes care of the complete end-to-end Bengaluru RTO document transfer including NOC issuance, RC transfer, and hypothecation clearance. Our dedicated agents ensure you do not have to visit any RTO office.",
    category: "Selling"
  },
  {
    question: "What is covered in your 'Certified Pre-Owned' used bike program?",
    answer: "Every used bike at CM Bikes undergoes a strict 120-point quality verification, complete detail servicing (engine oil change, brake check, chain tuning), holds clear non-accidental history, has a clean title, and comes with an optional 6-month engine warranty and 1 year free roadside assistance.",
    category: "Buying"
  },
  {
    question: "Do you have cashless tie-ups for insurance claims?",
    answer: "Yes! We have seamless cashless garage tie-ups with leading insurance providers including ICICI Lombard, HDFC Ergo, Tata AIG, Bajaj Allianz, and Oriental Insurance. Our in-house claims department takes care of vehicle retrieval, damage estimation, surveyor alignment, and direct settlement.",
    category: "Insurance"
  },
  {
    question: "Where is CM Bikes located and what are the working hours?",
    answer: "CM Bikes is located in Channasandra, Bengaluru, Karnataka (Pin: 560067), close to Whitefield. We are open from Monday to Sunday, 9:30 AM to 8:30 PM. Walk-ins are always welcome, but booking a test ride online ensures a dedicated vehicle is prepped and ready for you.",
    category: "Buying"
  }
];
