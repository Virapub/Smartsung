const data = {
  products: [
    {
      id: "collapsible-electric-kettle",
      name: "Collapsible Electric Kettle",
      description: "Space-saving collapsible kettle with auto shut-off and boil-dry protection",
      priceINR: 1499,
      priceUSD: 17.51,
      category: "Appliances",
      link: "https://amzn.to/448SSZx",
      image: "https://m.media-amazon.com/images/I/61WQVNM0LCL._SL1500_.jpg",
      page: "products.html#collapsible-electric-kettle",
      rating: 4.5,
      features: ["Collapsible design", "800W power", "BPA-free materials"]
    },
    {
      id: "automatic-soap-dispenser",
      name: "Automatic Soap Dispenser",
      description: "Touchless soap dispenser with infrared sensor for hygienic use",
      priceINR: 1388,
      priceUSD: 16.21,
      category: "Smart Gadgets",
      link: "https://amzn.to/46sLIRc",
      image: "https://m.media-amazon.com/images/I/61Vqx4KEHuL._SL1024_.jpg",
      page: "products.html#automatic-soap-dispenser",
      rating: 4.2,
      features: ["Touchless operation", "Battery powered", "Adjustable soap volume"]
    },
    {
      id: "magnetic-fridge-shelf",
      name: "Magnetic Fridge Shelf Rack",
      description: "Extra storage space that attaches magnetically to your fridge",
      priceINR: 1199,
      priceUSD: 14.00,
      category: "Storage",
      link: "https://amzn.to/44rEZEO",
      image: "https://m.media-amazon.com/images/I/81gCEjDOpSL._SL1500_.jpg",
      page: "products.html#magnetic-fridge-shelf",
      rating: 4.3,
      features: ["Strong magnets", "Adjustable width", "Easy to clean"]
    },
    {
      id: "fridge-organizer-bins",
      name: "Fridge Organizer Bins (Clear, Stackable)",
      description: "Set of clear plastic bins for better fridge organization",
      priceINR: 2395,
      priceUSD: 27.97,
      category: "Storage",
      link: "https://amzn.to/3I98vaY",
      image: "https://m.media-amazon.com/images/I/71S+IrhvQPL._SL1500_.jpg",
      page: "products.html#fridge-organizer-bins",
      rating: 4.6,
      features: ["Stackable design", "See-through material", "Easy-grip handles"]
    },
    {
      id: "smart-trash-can",
      name: "Smart Trash Can with Motion Sensor",
      description: "Automatic opening trash can with touch-free operation",
      priceINR: 2999,
      priceUSD: 35.03,
      category: "Smart Gadgets",
      link: "https://amzn.to/4euARZe",
      image: "https://m.media-amazon.com/images/I/615kYHdRG0L._SL1500_.jpg",
      page: "products.html#smart-trash-can",
      rating: 4.4,
      features: ["Motion sensor", "Battery operated", "Odor control"]
    },
    {
      id: "electric-jar-opener",
      name: "Electric Jar Opener",
      description: "Battery-powered device that opens tight jar lids effortlessly",
      priceINR: 1571,
      priceUSD: 18.35,
      category: "Helpers",
      link: "https://amzn.to/44sVwbo",
      image: "https://m.media-amazon.com/images/I/71XbxJC8QLL._SL1500_.jpg",
      page: "products.html#electric-jar-opener",
      rating: 4.1,
      features: ["One-touch operation", "Non-slip grip", "Works on most jars"]
    },
    {
      id: "automatic-oil-dispenser",
      name: "Automatic Oil Dispenser Bottle (with sensor)",
      description: "Touch-free oil dispenser with precise measurement",
      priceINR: 304,
      priceUSD: 3.55,
      category: "Smart Gadgets",
      link: "https://amzn.to/3In9G6p",
      image: "https://m.media-amazon.com/images/I/814ea9qZTML._SL1500_.jpg",
      page: "products.html#automatic-oil-dispenser",
      rating: 4.0,
      features: ["No-drip spout", "Adjustable flow", "Battery included"]
    },
    {
      id: "roll-up-drying-rack",
      name: "Roll-Up Over-Sink Drying Rack",
      description: "Space-saving drying rack that fits over your sink",
      priceINR: 649,
      priceUSD: 7.58,
      category: "Storage",
      link: "https://amzn.to/3GpXMIo",
      image: "https://m.media-amazon.com/images/I/81lEuQodtVL._SL1466_.jpg",
      page: "products.html#roll-up-drying-rack",
      rating: 4.2,
      features: ["Collapsible design", "Stainless steel", "Drip tray included"]
    },
    {
      id: "microwave-cleaner",
      name: "Microwave Cleaner Steamer (Angry Mama Style)",
      description: "Easy way to clean your microwave with steam",
      priceINR: 399,
      priceUSD: 4.66,
      category: "Cleaning",
      link: "https://amzn.to/4nuE7rE",
      image: "https://m.media-amazon.com/images/I/61PvRIsez6L._SL1500_.jpg",
      page: "products.html#microwave-cleaner",
      rating: 4.3,
      features: ["Non-toxic cleaning", "Reusable", "Fun design"]
    },
    {
      id: "mini-ice-tray",
      name: "Mini Ice Cube Tray with Lid & Scoop",
      description: "Silicone ice cube tray with lid and scoop for easy use",
      priceINR: 745,
      priceUSD: 8.70,
      category: "Accessories",
      link: "https://amzn.to/4klNqY9",
      image: "https://m.media-amazon.com/images/I/71Ce4GiWbZL._SL1500_.jpg",
      page: "products.html#mini-ice-tray",
      rating: 4.5,
      features: ["Flexible silicone", "Leak-proof lid", "Includes scoop"]
    },
    {
      id: "cutting-board-drain",
      name: "2-in-1 Cutting Board with Drain Tray",
      description: "Cutting board with built-in drain tray for juices",
      priceINR: 3397,
      priceUSD: 39.68,
      category: "Prep Tools",
      link: "https://amzn.to/4lbuc8R",
      image: "https://m.media-amazon.com/images/I/71lTRNr2zmL._SL1500_.jpg",
      page: "products.html#cutting-board-drain",
      rating: 4.4,
      features: ["Non-slip base", "Dishwasher safe", "Juice groove"]
    },
    {
      id: "automatic-pan-stirrer",
      name: "Automatic Pan Stirrer with Timer",
      description: "Hands-free stirring for sauces and other dishes",
      priceINR: 1299,
      priceUSD: 15.17,
      category: "Cooking",
      link: "https://amzn.to/44rdDOR",
      image: "https://m.media-amazon.com/images/I/51PuutE8okL._SL1500_.jpg",
      page: "products.html#automatic-pan-stirrer",
      rating: 3.9,
      features: ["Adjustable speed", "Timer function", "Non-stick paddles"]
    },
    {
      id: "grain-dispenser",
      name: "Wall-Mounted Rice & Grain Dispenser",
      description: "Convenient dispenser for rice, grains and cereals",
      priceINR: 2299,
      priceUSD: 26.85,
      category: "Storage",
      link: "https://amzn.to/4lBVDsk",
      image: "https://m.media-amazon.com/images/I/51emxzXRleL._SL1000_.jpg",
      page: "products.html#grain-dispenser",
      rating: 4.2,
      features: ["Wall mounted", "Clear container", "Easy-pour spout"]
    },
    {
      id: "milk-frother",
      name: "Electric Milk Frother Wand",
      description: "Battery-operated milk frother for lattes and cappuccinos",
      priceINR: 1299,
      priceUSD: 15.17,
      category: "Appliances",
      link: "https://amzn.to/4eycpWQ",
      image: "https://m.media-amazon.com/images/I/71MYVP0d-9L._SL1500_.jpg",
      page: "products.html#milk-frother",
      rating: 4.1,
      features: ["One-button operation", "Stainless steel", "Easy to clean"]
    },
    {
      id: "digital-measuring-spoon",
      name: "Digital Measuring Spoon",
      description: "Precision digital spoon scale for accurate measurements",
      priceINR: 999,
      priceUSD: 11.67,
      category: "Prep Tools",
      link: "https://amzn.to/45LPtkF",
      image: "https://m.media-amazon.com/images/I/613c9s2femL._SL1500_.jpg",
      page: "products.html#digital-measuring-spoon",
      rating: 4.0,
      features: ["LCD display", "Tare function", "Multiple units"]
    },
    {
      id: "silicone-food-covers",
      name: "Silicone Food Covers (Stretch Lids)",
      description: "Reusable silicone covers that stretch over bowls and plates",
      priceINR: 228,
      priceUSD: 2.66,
      category: "Storage",
      link: "https://amzn.to/4ljDu2o",
      image: "https://m.media-amazon.com/images/I/71KD-jSETqL._SL1500_.jpg",
      page: "products.html#silicone-food-covers",
      rating: 4.3,
      features: ["Set of 6", "Stretch to fit", "Microwave safe"]
    },
    {
      id: "magnetic-measuring-spoons",
      name: "Magnetic Measuring Spoons Set",
      description: "Stainless steel measuring spoons that stick together",
      priceINR: 3960,
      priceUSD: 46.25,
      category: "Prep Tools",
      link: "https://amzn.to/4lx0DOF",
      image: "https://m.media-amazon.com/images/I/618pvaVahwS._SL1500_.jpg",
      page: "products.html#magnetic-measuring-spoons",
      rating: 4.7,
      features: ["Magnetic connection", "Dishwasher safe", "Lifetime warranty"]
    },
    {
      id: "electric-garlic-chopper",
      name: "Mini Electric Garlic Chopper",
      description: "Compact chopper for garlic, herbs and small vegetables",
      priceINR: 1199,
      priceUSD: 14.00,
      category: "Prep Tools",
      link: "https://amzn.to/4lTqxwv",
      image: "https://m.media-amazon.com/images/I/91eGUYYMfAL._SL1500_.jpg",
      page: "products.html#electric-garlic-chopper",
      rating: 4.2,
      features: ["One-touch operation", "Easy to clean", "Non-slip base"]
    },
    {
      id: "under-shelf-basket",
      name: "Cupboard/Under-Shelf Basket Organizer",
      description: "Space-saving basket that hangs under shelves",
      priceINR: 527,
      priceUSD: 6.15,
      category: "Storage",
      link: "https://amzn.to/400tdQd",
      image: "https://m.media-amazon.com/images/I/61fNmHMWj3L._SL1001_.jpg",
      page: "products.html#under-shelf-basket",
      rating: 4.1,
      features: ["No tools needed", "Adjustable width", "Durable steel"]
    },
    {
      id: "airfryer-liners",
      name: "Silicone Air Fryer Liners (Reusable)",
      description: "Non-stick liners for easy air fryer cleaning",
      priceINR: 579,
      priceUSD: 6.76,
      category: "Accessories",
      link: "https://amzn.to/4km5dOF",
      image: "https://m.media-amazon.com/images/I/71j85bJWMJL._SL1500_.jpg",
      page: "products.html#airfryer-liners",
      rating: 4.4,
      features: ["Reusable", "Non-stick", "Fits most air fryers"]
    },
    {
      id: "inkbird-thermometer",
      name: "INKBIRD Bluetooth Meat Thermometer",
      description: "Wireless thermometer with smartphone connectivity",
      priceINR: 2090,
      priceUSD: 25.18,
      category: "Cooking",
      link: "https://amzn.to/3TjlTvu",
      image: "https://m.media-amazon.com/images/I/71UtnkqnYCL._SL1500_.jpg",
      page: "products.html#inkbird-thermometer",
      rating: 4.5,
      features: ["Bluetooth 4.0", "4 probes", "Alarm function"]
    },
    {
      id: "bbq-grill-gloves",
      name: "BBQGO BBQ Grill Gloves",
      description: "Heat-resistant gloves for grilling and cooking",
      priceINR: 1292,
      priceUSD: 15.57,
      category: "Safety",
      link: "https://amzn.to/3ZTGlXp",
      image: "https://m.media-amazon.com/images/I/61vMY+WRAZL._SL1500_.jpg",
      page: "products.html#bbq-grill-gloves",
      rating: 4.3,
      features: ["Heat resistant", "Non-slip grip", "Machine washable"]
    },
    {
      id: "breakfast-sandwich-maker",
      name: "Electric Breakfast Sandwich Maker",
      description: "Make perfect breakfast sandwiches in minutes",
      priceINR: 5699,
      priceUSD: 68.66,
      category: "Appliances",
      link: "https://amzn.to/3TRB1Ae",
      image: "https://m.media-amazon.com/images/I/61LUXbVnxjL._SL1500_.jpg",
      page: "products.html#breakfast-sandwich-maker",
      rating: 4.2,
      features: ["Non-stick plates", "Ready indicator", "Compact design"]
    },
    {
      id: "mini-food-chopper",
      name: "Mini Food Chopper",
      description: "Compact chopper for herbs, nuts and small vegetables",
      priceINR: 3700,
      priceUSD: 44.58,
      category: "Prep Tools",
      link: "https://amzn.to/3ZXneM8",
      image: "https://m.media-amazon.com/images/I/61UmnOTKVFL._SL1080_.jpg",
      page: "products.html#mini-food-chopper",
      rating: 4.0,
      features: ["200W motor", "Stainless steel blades", "Easy-grip handle"]
    },
    {
      id: "smart-measuring-spoon",
      name: "Smart Measuring Spoon/Scale",
      description: "Digital spoon that measures weight as you scoop",
      priceINR: 1199,
      priceUSD: 14.45,
      category: "Prep Tools",
      link: "https://amzn.to/4l6Z1eD",
      image: "https://m.media-amazon.com/images/I/71yo8PyCRwL._SL1500_.jpg",
      page: "products.html#smart-measuring-spoon",
      rating: 3.9,
      features: ["Tare function", "Multiple units", "LCD display"]
    },
    {
      id: "automatic-stirring-pot",
      name: "Automatic Stirring Pot Tool",
      description: "Hands-free stirring for sauces and soups",
      priceINR: 13476,
      priceUSD: 162.36,
      category: "Cooking",
      link: "https://amzn.to/4kljH1o",
      image: "https://m.media-amazon.com/images/I/61YUQzBHRpL._SL1500_.jpg",
      page: "products.html#automatic-stirring-pot",
      rating: 4.1,
      features: ["Adjustable speed", "Timer function", "Non-stick paddles"]
    },
    {
      id: "magnetic-spice-rack",
      name: "Magnetic Spice Rack Organizer",
      description: "Space-saving spice storage that sticks to metal surfaces",
      priceINR: 2299,
      priceUSD: 27.70,
      category: "Storage",
      link: "https://amzn.to/40xGaBh",
      image: "https://m.media-amazon.com/images/I/71ILXxzPrnL._SL1500_.jpg",
      page: "products.html#magnetic-spice-rack",
      rating: 4.3,
      features: ["Holds 12 jars", "Strong magnets", "Easy access"]
    },
    {
      id: "vegetable-slicer",
      name: "Multi-Function Vegetable Slicer",
      description: "Adjustable slicer for various cutting styles",
      priceINR: 3499,
      priceUSD: 42.16,
      category: "Prep Tools",
      link: "https://amzn.to/40y9ebL",
      image: "https://m.media-amazon.com/images/I/714KMq8ALwL._SL1500_.jpg",
      page: "products.html#vegetable-slicer",
      rating: 4.0,
      features: ["5 blade options", "Non-slip base", "Easy to clean"]
    },
    {
      id: "under-cabinet-lighting",
      name: "Under Cabinet Lighting (Rechargeable)",
      description: "LED lights for under-cabinet illumination",
      priceINR: 699,
      priceUSD: 8.42,
      category: "Lighting",
      link: "https://amzn.to/3I92T05",
      image: "https://m.media-amazon.com/images/I/71XvKLC3GgL._SL1500_.jpg",
      page: "products.html#under-cabinet-lighting",
      rating: 4.2,
      features: ["Rechargeable", "3 brightness levels", "Motion sensor"]
    },
    {
      id: "silicone-zipper-bags",
      name: "Reusable Silicone Zip Bags",
      description: "Eco-friendly alternative to plastic bags",
      priceINR: 700,
      priceUSD: 8.43,
      category: "Storage",
      link: "https://amzn.to/4keOzR1",
      image: "https://m.media-amazon.com/images/I/81ioPY352VL._SL1500_.jpg",
      page: "products.html#silicone-zipper-bags",
      rating: 4.4,
      features: ["Leak-proof", "Microwave safe", "Dishwasher safe"]
    },
    {
      id: "tap-water-filter",
      name: "Smart Tap Water Filter Dispenser",
      description: "Compact water filter that attaches to your tap",
      priceINR: 299,
      priceUSD: 3.60,
      category: "Appliances",
      link: "https://amzn.to/4etDQBd",
      image: "https://m.media-amazon.com/images/I/51vG9anK5GL.jpg",
      page: "products.html#tap-water-filter",
      rating: 3.8,
      features: ["Easy installation", "Carbon filter", "Flow control"]
    },
    {
      id: "breakfast-maker",
      name: "3-in-1 Breakfast Maker",
      description: "All-in-one appliance for eggs, toast and coffee",
      priceINR: 8000,
      priceUSD: 95.99,
      category: "Appliances",
      link: "https://amzn.to/45K1VkQ",
      image: "https://m.media-amazon.com/images/I/619zlfuWKgL._SL1001_.jpg",
      page: "products.html#breakfast-maker",
      rating: 4.1,
      features: ["Non-stick plates", "Automatic shut-off", "Compact design"]
    },
    {
      id: "prestige-multi-cooker",
      name: "Prestige Multi-Cooker 1.5L",
      description: "Compact pressure cooker with multiple functions",
      priceINR: 2500,
      priceUSD: 29.99,
      category: "Appliances",
      link: "https://amzn.to/4kll3ZT",
      image: "https://m.media-amazon.com/images/I/71OHF3Zl0bL._SL1500_.jpg",
      page: "products.html#prestige-multi-cooker",
      rating: 4.3,
      features: ["8-in-1 functions", "Auto keep warm", "Energy efficient"]
    },
    {
      id: "atomberg-mixer",
      name: "Atomberg Zenova Mixer Grinder",
      description: "Energy efficient mixer grinder with powerful motor",
      priceINR: 7000,
      priceUSD: 84.99,
      category: "Appliances",
      link: "https://amzn.to/4ex7lCf",
      image: "https://m.media-amazon.com/images/I/81haDHz+llL._SL1500_.jpg",
      page: "products.html#atomberg-mixer",
      rating: 4.5,
      features: ["750W motor", "3 jars", "Overload protection"]
    },
    {
      id: "philips-air-fryer",
      name: "Philips Air Fryer",
      description: "Healthy frying with little to no oil",
      priceINR: 10000,
      priceUSD: 120.00,
      category: "Appliances",
      link: "https://amzn.to/4kgzH4R",
      image: "https://m.media-amazon.com/images/I/414ly0wsjYL._SL1000_.jpg",
      page: "products.html#philips-air-fryer",
      rating: 4.6,
      features: ["Rapid air technology", "Digital display", "Auto shut-off"]
    },
    {
      id: "sliding-tray",
      name: "Sliding Tray",
      description: "Under-shelf sliding organizer for spices and small items",
      priceINR: 1000,
      priceUSD: 11.99,
      category: "Storage",
      link: "https://amzn.to/3SS1XQ4",
      image: "https://m.media-amazon.com/images/I/61rUIJtyEkL._UF1000,1000_QL80_FMwebp_.jpg",
      page: "products.html#sliding-tray",
      rating: 4.0,
      features: ["Smooth sliding", "Easy installation", "Durable plastic"]
    },
    {
      id: "vacuum-sealer",
      name: "Vacuum Sealer",
      description: "Preserve food freshness with vacuum sealing",
      priceINR: 3000,
      priceUSD: 35.99,
      category: "Food Preservation",
      link: "https://amzn.to/3SVcs54",
      image: "https://m.media-amazon.com/images/I/71QkgEBOZiL._UF894,1000_QL80_FMwebp_.jpg",
      page: "products.html#vacuum-sealer",
      rating: 4.2,
      features: ["Compact design", "One-touch operation", "Includes bags"]
    },
    {
      id: "mini-sealing-machine",
      name: "Mini Sealing Machine",
      description: "Compact bag sealer for food storage",
      priceINR: 500,
      priceUSD: 3.59,
      category: "Food Preservation",
      link: "https://amzn.to/4k1PTqE",
      image: "https://m.media-amazon.com/images/I/71utCY3f-JL._UF894,1000_QL80_FMwebp_.jpg",
      page: "products.html#mini-sealing-machine",
      rating: 3.9,
      features: ["Battery operated", "Portable", "Seals most bags"]
    },
    {
      id: "kitchen-mat",
      name: "Kitchen Mat",
      description: "Anti-fatigue mat for comfortable standing",
      priceINR: 700,
      priceUSD: 8.39,
      category: "Comfort",
      link: "https://amzn.to/3HG0ry2",
      image: "https://m.media-amazon.com/images/I/619hMFvYSoL._UF894,1000_QL80_FMwebp_.jpg",
      page: "products.html#kitchen-mat",
      rating: 4.3,
      features: ["Non-slip base", "Easy to clean", "Memory foam"]
    },
    {
      id: "knife-sharpener",
      name: "Knife Sharpener",
      description: "Manual sharpener for kitchen knives",
      priceINR: 250,
      priceUSD: 2.99,
      category: "Prep Tools",
      link: "https://amzn.to/45TExRW",
      image: "https://m.media-amazon.com/images/I/610WnGc6kPL._UF894,1000_QL80_FMwebp_.jpg",
      page: "products.html#knife-sharpener",
      rating: 3.8,
      features: ["3-stage sharpening", "Non-slip base", "Compact design"]
    }
  ],
  mealPlans: {
    office: [
      {
        id: "office-monday",
        name: "Banana Smoothie + Oats, Quinoa + Stir-fry Veggies, Chapati + Palak Paneer",
        day: "Monday",
        description: "High-protein office-friendly meals with Indian and global options",
        page: "office-meal-plan.html#office-monday",
        prepTime: "2 hours",
        calories: 1800,
        dietaryTags: ["vegetarian", "high-protein"]
      },
      {
        id: "office-tuesday",
        name: "Boiled Eggs + Toast, Rice + Sambar + Curd, Roti + Veg Kurma",
        day: "Tuesday",
        description: "Balanced meals with South Indian flavors",
        page: "office-meal-plan.html#office-tuesday",
        prepTime: "1.5 hours",
        calories: 1900,
        dietaryTags: ["vegetarian", "protein-rich"]
      },
      {
        id: "office-wednesday",
        name: "Upma + Chai, Chickpea Salad + Buttermilk, Lemon Rice + Pickle",
        day: "Wednesday",
        description: "Light and refreshing meals with protein focus",
        page: "office-meal-plan.html#office-wednesday",
        prepTime: "1 hour",
        calories: 1700,
        dietaryTags: ["vegetarian", "gluten-free"]
      },
      {
        id: "office-thursday",
        name: "Bread + Avocado Spread, Veg Burrito Bowl + Curd, Dal Khichdi + Ghee",
        day: "Thursday",
        description: "Fusion meals with global influences",
        page: "office-meal-plan.html#office-thursday",
        prepTime: "2 hours",
        calories: 1850,
        dietaryTags: ["vegetarian", "high-fiber"]
      },
      {
        id: "office-friday",
        name: "Poha + Sprouts, Jeera Rice + Rajma, Chapati + Bhindi Fry",
        day: "Friday",
        description: "North Indian favorites with healthy twists",
        page: "office-meal-plan.html#office-friday",
        prepTime: "1.5 hours",
        calories: 1750,
        dietaryTags: ["vegetarian", "iron-rich"]
      }
    ],
    budget: [
      {
        id: "budget-monday",
        name: "Poha + Tea, Rice + Dal + Veg, Chapati + Mixed Sabzi",
        day: "Monday",
        description: "Simple vegetarian meals under ₹150/day",
        page: "meal-prep.html#budget-monday",
        prepTime: "1 hour",
        calories: 1600,
        dietaryTags: ["vegetarian", "budget"]
      },
      {
        id: "budget-tuesday",
        name: "Idli + Chutney, Veg Pulao + Raita, Chapati + Paneer Bhurji",
        day: "Tuesday",
        description: "Budget-friendly meals with protein options",
        page: "meal-prep.html#budget-tuesday",
        prepTime: "1.5 hours",
        calories: 1650,
        dietaryTags: ["vegetarian", "budget"]
      },
      {
        id: "budget-wednesday",
        name: "Upma + Filter Coffee, Khichdi + Pickle, Rice + Rajma",
        day: "Wednesday",
        description: "Comfort food meals that are easy on the wallet",
        page: "meal-prep.html#budget-wednesday",
        prepTime: "1 hour",
        calories: 1550,
        dietaryTags: ["vegetarian", "budget"]
      },
      {
        id: "budget-thursday",
        name: "Bread + Peanut Butter, Veg Sandwich + Juice, Chapati + Aloo Curry",
        day: "Thursday",
        description: "Quick and affordable meals",
        page: "meal-prep.html#budget-thursday",
        prepTime: "45 minutes",
        calories: 1500,
        dietaryTags: ["vegetarian", "budget"]
      },
      {
        id: "budget-friday",
        name: "Oats + Banana, Lemon Rice + Curd, Roti + Chana Masala",
        day: "Friday",
        description: "End the week with flavorful budget meals",
        page: "meal-prep.html#budget-friday",
        prepTime: "1 hour",
        calories: 1600,
        dietaryTags: ["vegetarian", "budget"]
      }
    ]
  },
  categories: [
    "Appliances",
    "Smart Gadgets",
    "Storage",
    "Prep Tools",
    "Cooking",
    "Helpers",
    "Cleaning",
    "Accessories",
    "Safety",
    "Lighting",
    "Food Preservation",
    "Comfort"
  ]
};
