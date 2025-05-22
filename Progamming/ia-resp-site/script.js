// Configuration des constantes
const SELECTORS = {
  AGE_VERIFICATION: ".age-verification",
  CONFIRM_AGE: ".confirm-age",
  DENY_AGE: ".deny-age",
  CART_COUNT: ".cart-count",
  CART_ITEMS: ".cart-items",
  CART_SUMMARY: ".cart-summary",
  CHECKOUT_BTN: ".checkout-btn",
  PAYMENT_MODAL: ".payment-modal",
  CLOSE_MODAL: ".close-modal",
  PAYMENT_FORM: ".payment-form",
  STRAIN_DETAIL: ".strain-detail",
  MAIN_IMAGE: ".main-image",
  THUMBNAILS: ".thumbnail-container",
  STRAIN_INFO: ".strain-info-detail",
  THEME_TOGGLE: ".theme-toggle",
  THEME_ICON: ".theme-icon",
};

// Image par défaut botanique
const DEFAULT_IMAGE = "asset/img/products/default-botanique.jpg";

// Fonction utilitaire pour vérifier si une image existe
function imageExists(src, callback) {
  if (!src) {
    callback(false);
    return;
  }
  const img = new window.Image();
  img.onload = () => callback(true);
  img.onerror = () => {
    console.warn(`Image non trouvée: ${src}`);
    callback(false);
  };
  img.src = src;
}

// Utilitaire pour obtenir la première image existante ou l'image par défaut
async function getValidImage(images) {
  if (!images || !Array.isArray(images) || images.length === 0) {
    console.warn('Aucune image fournie, utilisation de l\'image par défaut');
    return DEFAULT_IMAGE;
  }

  for (const image of images) {
    try {
      const exists = await new Promise((resolve) => imageExists(image, resolve));
      if (exists) return image;
    } catch (error) {
      console.warn(`Erreur lors de la vérification de l'image ${image}:`, error);
    }
  }
  
  console.warn('Aucune image valide trouvée, utilisation de l\'image par défaut');
  return DEFAULT_IMAGE;
}

// Classe principale pour la gestion du site
class GreenShop {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.theme = localStorage.getItem("theme") || "light";
    this.init();
  }

  init() {
    this.initTheme();
    this.initAgeVerification();
    this.initCart();
    this.initPaymentModal();
    this.initStrainDetail();
  }

  // Gestion du thème
  initTheme() {
    const themeToggle = document.querySelector(SELECTORS.THEME_TOGGLE);
    const themeIcon = document.querySelector(SELECTORS.THEME_ICON);

    if (themeToggle && themeIcon) {
      this.applyTheme();
      themeToggle.addEventListener("click", () => this.toggleTheme());
    }
  }

  applyTheme() {
    document.documentElement.setAttribute("data-theme", this.theme);
    const themeIcon = document.querySelector(SELECTORS.THEME_ICON);
    if (themeIcon) {
      themeIcon.className = `theme-icon fas fa-${
        this.theme === "dark" ? "sun" : "moon"
      }`;
    }
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);
    this.applyTheme();
  }

  // Gestion de la vérification d'âge
  initAgeVerification() {
    const ageVerification = document.querySelector(SELECTORS.AGE_VERIFICATION);
    const confirmAgeBtn = document.querySelector(SELECTORS.CONFIRM_AGE);
    const denyAgeBtn = document.querySelector(SELECTORS.DENY_AGE);

    if (!ageVerification || !confirmAgeBtn || !denyAgeBtn) {
      console.warn('Éléments de vérification d\'âge non trouvés');
      return;
    }

    if (!localStorage.getItem("ageVerified")) {
      requestAnimationFrame(() => {
        ageVerification.classList.add("active");
      });
    }

    confirmAgeBtn.addEventListener("click", () => {
      localStorage.setItem("ageVerified", "true");
      ageVerification.classList.remove("active");
    });

    denyAgeBtn.addEventListener("click", () => {
      window.location.href = "https://www.google.com";
    });
  }

  // Gestion du panier
  initCart() {
    this.updateCartCount();
    this.initAddToCartButtons();
    this.initCartPage();
  }

  updateCartCount() {
    const cartCount = document.querySelector(SELECTORS.CART_COUNT);
    if (cartCount) {
      cartCount.textContent = this.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    }
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.updateCartCount();
  }

  showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    requestAnimationFrame(() => {
      notification.classList.add("active");
    });

    setTimeout(() => {
      notification.classList.remove("active");
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  initAddToCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        const card = e.target.closest(".strain-card");
        const strainId = card.dataset.id;
        const strain = CONFIG.products.find((p) => p.id === strainId);

        if (strain) {
          this.addToCart(strain);
        }
      });
    });
  }

  addToCart(strain, quantity = 1) {
    const existingItem = this.cart.find((item) => item.id === strain.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        id: strain.id,
        name: strain.name,
        price: strain.price,
        image: strain.images[0],
        quantity,
      });
    }
    this.saveCart();
    this.showNotification(`${quantity} ${strain.name} ajouté(s) au panier`);
  }

  initCartPage() {
    const cartPage = document.querySelector(".cart-section");
    if (cartPage) {
      this.updateCartDisplay();
      this.attachCartEventListeners();
    }
  }

  async updateCartDisplay() {
    const cartItems = document.querySelector(SELECTORS.CART_ITEMS);
    const cartSummary = document.querySelector(SELECTORS.CART_SUMMARY);
    const checkoutBtn = document.querySelector(SELECTORS.CHECKOUT_BTN);

    if (!cartItems || !cartSummary) return;

    await this.renderCartItems(cartItems);
    this.renderCartSummary(cartSummary, checkoutBtn);
  }

  async renderCartItems(container) {
    if (!container) return;
    
    container.innerHTML = "";
    if (this.cart.length === 0) {
      container.innerHTML = '<div class="empty-cart">Votre panier est vide.</div>';
      return;
    }

    for (const item of this.cart) {
      try {
        const product = CONFIG.products.find((p) => p.id === item.id);
        if (!product) {
          console.warn(`Produit non trouvé: ${item.id}`);
          continue;
        }

        const imgSrc = await getValidImage(product.images || [item.image]);
        container.innerHTML += `
          <div class="cart-item" data-id="${item.id}">
            <img src="${imgSrc}" alt="${item.name}" class="item-image" onerror="this.src='${DEFAULT_IMAGE}'">
            <div class="item-details">
              <h3>${item.name}</h3>
              <div class="item-qty-price">
                <span>Quantité : <strong>${item.quantity}</strong></span>
                <span>Prix unitaire : ${item.price.toFixed(2)} €</span>
                <span>Total : <strong>${(item.price * item.quantity).toFixed(2)} €</strong></span>
              </div>
            </div>
            <button class="remove-item" title="Retirer du panier"><i class="fas fa-trash"></i></button>
          </div>
        `;
      } catch (error) {
        console.error(`Erreur lors du rendu de l'élément du panier: ${error.message}`);
      }
    }
  }

  renderCartSummary(container, checkoutBtn) {
    const subtotal = this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shipping =
      subtotal >= CONFIG.cart.freeShippingThreshold
        ? 0
        : CONFIG.cart.shippingCost;
    const total = subtotal + shipping;

    container.innerHTML = `
            <h2>Récapitulatif de la commande</h2>
            <div class="summary-item">
                <span>Sous-total</span>
                <span>${subtotal.toFixed(2)} €</span>
            </div>
            <div class="summary-item">
                <span>Frais de livraison</span>
                <span>${shipping.toFixed(2)} €</span>
            </div>
            <div class="summary-item total">
                <span>Total</span>
                <span><strong>${total.toFixed(2)} €</strong></span>
            </div>
            <button class="checkout-btn" ${
              this.cart.length === 0 ? "disabled" : ""
            }>
                <i class="fas fa-lock"></i>
                Procéder au paiement
            </button>
        `;

    if (checkoutBtn) {
      checkoutBtn.disabled = this.cart.length === 0;
    }
  }

  attachCartEventListeners() {
    const cartItems = document.querySelector(SELECTORS.CART_ITEMS);
    if (!cartItems) return;

    cartItems.addEventListener("click", this.handleCartItemClick.bind(this));
    cartItems.addEventListener("change", this.handleCartItemChange.bind(this));
  }

  handleCartItemClick(e) {
    const item = e.target.closest(".cart-item");
    if (!item) return;

    const itemId = item.dataset.id;
    const cartItem = this.cart.find((i) => i.id === itemId);

    if (e.target.classList.contains("decrease")) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        this.saveCart();
        this.updateCartDisplay();
      }
    } else if (e.target.classList.contains("increase")) {
      if (cartItem.quantity < CONFIG.cart.maxQuantity) {
        cartItem.quantity++;
        this.saveCart();
        this.updateCartDisplay();
      }
    } else if (e.target.closest(".remove-item")) {
      this.cart = this.cart.filter((i) => i.id !== itemId);
      this.saveCart();
      this.updateCartDisplay();
      this.showNotification("Article supprimé du panier");
    }
  }

  handleCartItemChange(e) {
    if (e.target.matches('input[type="number"]')) {
      const item = e.target.closest(".cart-item");
      const itemId = item.dataset.id;
      const cartItem = this.cart.find((i) => i.id === itemId);
      const newQuantity = parseInt(e.target.value);

      if (newQuantity >= 1 && newQuantity <= CONFIG.cart.maxQuantity) {
        cartItem.quantity = newQuantity;
        this.saveCart();
        this.updateCartDisplay();
      } else {
        e.target.value = cartItem.quantity;
      }
    }
  }

  // Gestion du modal de paiement
  initPaymentModal() {
    const paymentModal = document.querySelector(SELECTORS.PAYMENT_MODAL);
    const checkoutBtn = document.querySelector(SELECTORS.CHECKOUT_BTN);
    const closeModalBtn = document.querySelector(SELECTORS.CLOSE_MODAL);
    const payForm = document.querySelector(SELECTORS.PAYMENT_FORM);

    checkoutBtn?.addEventListener("click", () => {
      paymentModal.classList.add("active");
    });

    closeModalBtn?.addEventListener("click", () => {
      paymentModal.classList.remove("active");
    });

    payForm?.addEventListener("submit", this.handlePayment.bind(this));
  }

  handlePayment(e) {
    e.preventDefault();
    const payBtn = e.target.querySelector(".pay-btn");
    payBtn.disabled = true;
    payBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Traitement en cours...';

    setTimeout(() => {
      this.cart = [];
      this.saveCart();
      document
        .querySelector(SELECTORS.PAYMENT_MODAL)
        .classList.remove("active");
      this.showNotification("Paiement effectué avec succès !");
      this.updateCartDisplay();
      payBtn.disabled = false;
      payBtn.innerHTML = '<i class="fas fa-lock"></i> Payer';
      e.target.reset();
    }, 2000);
  }

  // Gestion de la page de détail
  initStrainDetail() {
    const strainDetail = document.querySelector(SELECTORS.STRAIN_DETAIL);
    if (strainDetail) {
      const strainId = new URLSearchParams(window.location.search).get("id");
      const strain = CONFIG.products.find((p) => p.id === strainId);

      if (strain) {
        document.title = `${strain.name} - Green Shop`;
        this.updateStrainDetail(strain);
      }
    }
  }

  async updateStrainDetail(strain) {
    const mainImage = document.querySelector(SELECTORS.MAIN_IMAGE);
    const thumbnails = document.querySelector(SELECTORS.THUMBNAILS);
    const strainInfo = document.querySelector(SELECTORS.STRAIN_INFO);

    if (mainImage && thumbnails && strainInfo) {
      await this.renderStrainImages(mainImage, thumbnails, strain);
      this.renderStrainInfo(strainInfo, strain);
      this.attachStrainEventListeners(strainInfo, strain);
    }
  }

  async renderStrainImages(mainImage, thumbnails, strain) {
    const mainSrc = await getValidImage(strain.images);
    mainImage.src = mainSrc;
    mainImage.alt = strain.name;
    thumbnails.innerHTML = "";
    for (let i = 0; i < strain.images.length; i++) {
      const thumbSrc = await getValidImage([strain.images[i]]);
      thumbnails.innerHTML += `
        <img src="${thumbSrc}" alt="${strain.name} - Vue ${i + 1}" 
             class="thumbnail ${i === 0 ? "active" : ""}"
             onclick="greenShop.updateMainImage(this.src)">
      `;
    }
  }

  renderStrainInfo(container, strain) {
    container.innerHTML = `
            <h1>${strain.name}</h1>
            <span class="strain-type">${strain.type}</span>
            <div class="strain-stats">
                <div class="stat">
                    <i class="fas fa-chart-line"></i>
                    <div class="stat-info">
                        <span class="label">THC</span>
                        <span class="value">${strain.thc}%</span>
                    </div>
                </div>
                <div class="stat">
                    <i class="fas fa-leaf"></i>
                    <div class="stat-info">
                        <span class="label">CBD</span>
                        <span class="value">${strain.cbd}%</span>
                    </div>
                </div>
            </div>
            <div class="price">${strain.price.toFixed(2)} €</div>
            <div class="quantity-selector">
                <button class="quantity-btn decrease">-</button>
                <input type="number" value="1" min="1" max="${
                  CONFIG.cart.maxQuantity
                }">
                <button class="quantity-btn increase">+</button>
            </div>
            <button class="add-to-cart-btn">
                <i class="fas fa-shopping-cart"></i>
                Ajouter au panier
            </button>
            <div class="strain-description">
                <h2><i class="fas fa-info-circle"></i> Description</h2>
                <p>${strain.description}</p>
            </div>
            <div class="strain-effects">
                <h2><i class="fas fa-star"></i> Effets</h2>
                <ul>
                    ${strain.effects
                      .map((effect) => `<li>${effect}</li>`)
                      .join("")}
                </ul>
            </div>
            <div class="strain-aroma">
                <h2><i class="fas fa-wind"></i> Arômes</h2>
                <ul>
                    ${strain.aromas
                      .map((aroma) => `<li>${aroma}</li>`)
                      .join("")}
                </ul>
            </div>
        `;
  }

  attachStrainEventListeners(container, strain) {
    const quantityInput = container.querySelector('input[type="number"]');
    const decreaseBtn = container.querySelector(".decrease");
    const increaseBtn = container.querySelector(".increase");
    const addToCartBtn = container.querySelector(".add-to-cart-btn");

    decreaseBtn.addEventListener("click", () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });

    increaseBtn.addEventListener("click", () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue < CONFIG.cart.maxQuantity) {
        quantityInput.value = currentValue + 1;
      }
    });

    addToCartBtn.addEventListener("click", () => {
      const quantity = parseInt(quantityInput.value);
      this.addToCart(strain, quantity);
    });
  }

  updateMainImage(src) {
    const mainImage = document.querySelector(SELECTORS.MAIN_IMAGE);
    const thumbnails = document.querySelectorAll(".thumbnail");

    if (mainImage) {
      mainImage.src = src;
    }

    thumbnails.forEach((thumb) => {
      thumb.classList.toggle("active", thumb.src === src);
    });
  }
}

// Initialisation de l'application
document.addEventListener("DOMContentLoaded", () => {
  window.greenShop = new GreenShop();

  // Génération de la galerie (gallery.html)
  if (document.querySelector(".gallery-grid")) {
    console.log(
      "Appel de renderGallery, produits trouvés :",
      CONFIG.products?.length
    );
    renderGallery();
  }
});

// Génération des produits en vedette sur la page d'accueil
async function renderFeaturedProducts() {
  try {
    const container = document.querySelector('.featured-products');
    if (!container) {
      console.warn('Conteneur des produits en vedette non trouvé');
      return;
    }

    const featuredProducts = CONFIG.products.slice(0, 4);
    for (const product of featuredProducts) {
      try {
        const imgSrc = await getValidImage(product.images);
        container.innerHTML += `
          <div class="strain-card" data-id="${product.id}">
            <img src="${imgSrc}" alt="${product.name}" class="strain-image" onerror="this.src='${DEFAULT_IMAGE}'">
            <div class="strain-info">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <div class="strain-details">
                <span>Type: ${product.type}</span>
                <span>THC: ${product.thc}%</span>
                <span>CBD: ${product.cbd}%</span>
              </div>
              <div class="strain-price">
                <span>${product.price.toFixed(2)} €</span>
                <button class="add-to-cart">Ajouter au panier</button>
              </div>
            </div>
          </div>
        `;
      } catch (error) {
        console.error(`Erreur lors du rendu du produit ${product.id}:`, error);
      }
    }
  } catch (error) {
    console.error('Erreur lors du rendu des produits en vedette:', error);
  }
}

// Appel automatique sur la page d'accueil
if (document.querySelector(".products-grid")) {
  renderFeaturedProducts();
}

// Génération de la galerie (gallery.html)
async function renderGallery() {
  const grid = document.querySelector(".gallery-grid");
  if (!grid) return;
  grid.innerHTML = "";
  for (const product of CONFIG.products) {
    const card = document.createElement("div");
    card.className = "strain-card card";
    card.dataset.id = product.id;
    const img = document.createElement("img");
    img.className = "strain-image card-image";
    img.alt = product.name;
    img.src = await getValidImage(product.images);
    card.appendChild(img);
    // Ajout du contenu produit
    const info = document.createElement("div");
    info.className = "strain-info card-content";
    info.innerHTML = `
      <h3>${product.name}</h3>
      <div class="strain-stats">
        <span><i class="fas fa-leaf"></i> ${product.type}</span>
        <span><i class="fas fa-percentage"></i> CBD: ${product.cbd}%</span>
      </div>
      <div class="strain-price">${product.price.toFixed(2)} €</div>
      <button class="add-to-cart"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>
    `;
    card.appendChild(info);
    grid.appendChild(card);
  }
}

// Appel automatique sur la page galerie
if (document.querySelector(".gallery-grid")) {
  renderGallery();
}
