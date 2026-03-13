export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "nav.apps": "Aplicaciones",
    "nav.why": "¿Por qué elegirnos?",
    "nav.contact": "Contacto",
    "nav.docs": "Documentación",
    "blog.readMore": "Leer más",
    "blog.title": "Blog",
    "blog.description":
      "Artículos sobre Shopify, eCommerce, optimización de tiendas online e inteligencia artificial aplicada al comercio electrónico.",
    "breadcrumb.home": "Inicio",
    "contact.title": "¿Tienes preguntas? Estamos aquí para ayudarte",
    "contact.description":
      "Si tienes preguntas sobre nuestras aplicaciones o necesitas soporte, no dudes en contactarnos. Estamos aquí para ayudarte a optimizar tu tienda Shopify.",
    "contact.name": "Nombre",
    "contact.namePlaceholder": "Escribe tu nombre",
    "contact.email": "Email",
    "contact.emailPlaceholder": "usuario@email.com",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Escribe tu mensaje...",
    "contact.submit": "Enviar mensaje",
    "contact.success":
      "¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.social": "Redes Sociales",
    "footer.copyright": "Todos los derechos reservados.",
    "article.author": "Autor",
    "article.date": "Fecha de modificación",
    "skip": "Saltar al contenido",
    "meta.description":
      "Descubre nuestras aplicaciones Shopify que transforman tu tienda, mejoran tus conversiones y te ayudan a crecer.",
    "meta.keywords":
      "Shopify, aplicaciones Shopify, optimización de tiendas online, herramientas Shopify, automatización de tiendas Shopify",
  },
  en: {
    "nav.apps": "Apps",
    "nav.why": "Why choose us?",
    "nav.contact": "Contact",
    "nav.docs": "Documentation",
    "blog.readMore": "Read more",
    "blog.title": "Blog",
    "blog.description":
      "Articles about Shopify, eCommerce, online store optimization and artificial intelligence applied to ecommerce.",
    "breadcrumb.home": "Home",
    "contact.title": "Have questions? We're here to help",
    "contact.description":
      "If you have questions about our apps or need support, don't hesitate to contact us. We're here to help you optimize your Shopify store.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Enter your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "user@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Write your message...",
    "contact.submit": "Send message",
    "contact.success":
      "Form submitted successfully! We'll get back to you soon.",
    "footer.quickLinks": "Quick Links",
    "footer.social": "Social Media",
    "footer.copyright": "All rights reserved.",
    "article.author": "Author",
    "article.date": "Last modified",
    "skip": "Skip to content",
    "meta.description":
      "Discover our Shopify apps that transform your store, improve your conversions and help you grow.",
    "meta.keywords":
      "Shopify, Shopify apps, online store optimization, Shopify tools, Shopify store automation",
  },
} as const;
