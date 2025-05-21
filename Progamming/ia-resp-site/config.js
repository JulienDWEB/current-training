const CONFIG = {
  // Configuration générale
  siteName: "Cannabis World",
  legalAge: 18,

  // Configuration des produits
  products: [
    {
      id: "critical-cbd",
      name: "Critical CBD",
      type: "Indica",
      thc: 0.3,
      cbd: 15,
      price: 12.99,
      description:
        "Une variété CBD populaire avec un ratio CBD/THC équilibré. Parfaite pour la relaxation et le bien-être.",
      effects: ["Relaxation", "Calme", "Sommeil amélioré"],
      aromas: ["Terreux", "Piquant", "Agrumes"],
      images: ["asset/img/products/critical-cbd-1.jpg"],
    },
    {
      id: "jack-herer-cbd",
      name: "Jack Herer CBD",
      type: "Sativa",
      thc: 0.2,
      cbd: 18,
      price: 14.99,
      description:
        "Une version CBD de la célèbre Jack Herer. Idéale pour la concentration et la créativité.",
      effects: ["Énergisant", "Concentration", "Créativité"],
      aromas: ["Pine", "Épices", "Citron"],
      images: ["asset/img/products/jack-herer-1.jpg"],
    },
    {
      id: "tropical-haze",
      name: "Tropical Haze",
      type: "Sativa",
      thc: 0.3,
      cbd: 12,
      price: 13.99,
      description:
        "Une variété tropicale avec des arômes exotiques. Parfaite pour les journées ensoleillées.",
      effects: ["Énergisant", "Humeur positive", "Sociabilité"],
      aromas: ["Tropical", "Mangue", "Agrumes"],
      images: ["asset/img/products/tropical-haze-1.jpg"],
    },
    {
      id: "himalayan-cbd",
      name: "Himalayan CBD",
      type: "Indica",
      thc: 0.2,
      cbd: 20,
      price: 15.99,
      description:
        "Une variété CBD puissante originaire des contreforts de l'Himalaya.",
      effects: ["Relaxation profonde", "Anti-stress", "Sommeil"],
      aromas: ["Terreux", "Bois", "Épices"],
      images: ["asset/img/products/himalayan-1.jpg"],
    },
    {
      id: "granny-candy",
      name: "Granny Candy",
      type: "Hybride",
      thc: 0.3,
      cbd: 14,
      price: 13.99,
      description:
        "Une variété hybride équilibrée avec des arômes sucrés et fruités.",
      effects: ["Équilibre", "Bien-être", "Relaxation modérée"],
      aromas: ["Fruits", "Bonbons", "Vanille"],
      images: ["asset/img/products/granny-candy-1.jpg"],
    },
    {
      id: "moby",
      name: "Moby Dick",
      type: "Hybride",
      thc: 0.4,
      cbd: 10,
      price: 16.99,
      description:
        "Une variété puissante et résineuse, idéale pour les connaisseurs.",
      effects: ["Stimulation", "Créativité", "Bonne humeur"],
      aromas: ["Pin", "Citron", "Encens"],
      images: ["asset/img/products/moby.jpg"],
    },
    {
      id: "purple",
      name: "Purple Haze",
      type: "Sativa",
      thc: 0.5,
      cbd: 8,
      price: 15.49,
      description:
        "Une variété légendaire aux teintes violettes et à l'arôme sucré.",
      effects: ["Énergie", "Euphorie", "Créativité"],
      aromas: ["Fruits rouges", "Épices", "Sucré"],
      images: ["asset/img/products/purple.jpg"],
    },
    {
      id: "blunt",
      name: "Blunt Premium",
      type: "Pré-roulé",
      thc: 0.3,
      cbd: 5,
      price: 9.99,
      description:
        "Notre sélection de blunts pré-roulés de qualité supérieure.",
      effects: ["Relaxation", "Sociabilité"],
      aromas: ["Chanvre", "Épices"],
      images: ["asset/img/products/blunt.jpg"],
    },
    {
      id: "buds",
      name: "Buds Selection",
      type: "Hybride",
      thc: 0.2,
      cbd: 12,
      price: 11.99,
      description:
        "Un mix de têtes sélectionnées pour leur arôme et leur puissance.",
      effects: ["Bien-être", "Détente"],
      aromas: ["Fruité", "Terreux"],
      images: ["asset/img/products/buds.jpg"],
    },
  ],

  // Configuration du panier
  cart: {
    maxQuantity: 10,
    shippingCost: 5.99,
    freeShippingThreshold: 50,
  },

  // Configuration des breakpoints
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },

  // Configuration des animations
  animations: {
    duration: 300,
    easing: "ease",
  },

  // Configuration de la sidebar
  sidebar: {
    width: "300px",
    categories: [
      { name: "Indica", strains: ["critical-cbd", "himalayan-cbd"] },
      { name: "Hybride", strains: ["granny-candy", "moby", "buds"] },
      {
        name: "Sativa",
        strains: ["jack-herer-cbd", "tropical-haze", "purple"],
      },
      { name: "Pré-roulé", strains: ["blunt"] },
    ],
  },

  images: {
    logo: "asset/img/logo/logo.png",
    header: {
      background: "asset/img/backgrounds/header-bg.jpg",
      hero: "asset/img/backgrounds/hero-bg.jpg",
    },
    about: {
      background: "asset/img/backgrounds/about-bg.jpg",
      shop: "asset/img/about/shop-front.jpg",
    },
    cart: {
      background: "asset/img/backgrounds/cart-bg.jpg",
    },
  },
};
