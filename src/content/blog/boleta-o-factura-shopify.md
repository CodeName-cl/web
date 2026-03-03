---
title: "Selector de Boleta o Factura en Shopify"
description: "Explicamos cómo agregar la opción de boleta o factura en Shopify y los pasos necesarios para implementarlo."
date: 2025-02-12
author: "@rickyoncode"
image: "/images/blog/boleta-o-factura-shopify/adrien-delforge-CrHG_ZYn1Dw-unsplash.jpg"
tags: ["shopify", "boleta", "factura", "checkout", "billboost"]
---

![Selector de Boleta o Factura en Shopify](/images/blog/boleta-o-factura-shopify/adrien-delforge-CrHG_ZYn1Dw-unsplash.jpg)
<small>Foto de <a href="https://unsplash.com/es/@adriendlf?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adrien Delforge</a> en <a href="https://unsplash.com/es/fotos/hombre-en-camisa-negra-de-manga-larga-y-pantalones-negros-de-pie-en-el-carrito-de-compras-CrHG_ZYn1Dw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

En Chile, al vender productos o servicios es obligatorio emitir un documento tributario. Si la venta es a una persona, se emite una boleta; si es a una empresa, se emite una factura, la cual requiere información adicional como RUT, razón social y giro.

Shopify, por defecto, no incluye estos campos en su checkout, por lo que es necesario agregarlos mediante aplicaciones o modificaciones en el carrito.

## ¿Cómo agregar la opción de boleta o factura en Shopify?

### Para Shopify Plus

Si tienes Shopify Plus, puedes agregar estos campos directamente en el checkout utilizando apps especializadas. Nosotros recomendamos nuestra aplicación <a href="https://apps.shopify.com/byf-extensibility" target="_blank">BillBoost</a>, que aprovecha la API de Checkout Extensibility de Shopify para integrar estos campos sin necesidad de modificar el código de la tienda.

### Para tiendas sin Shopify Plus

Si no cuentas con Shopify Plus, puedes agregar los campos en el carrito de compras o en un paso previo al checkout.

Para esto, ofrecemos una solución de código abierto, que con conocimientos básicos de Liquid te permitirá instalar los campos necesarios para que los clientes seleccionen el tipo de documento que requieren.

Puedes acceder al código fuente aquí: <a href="https://github.com/CodeName-cl/byf-manual/" target="_blank">https://github.com/CodeName-cl/byf-manual/</a>

## Instalación

Hemos preparado un manual detallado en el archivo <a href="https://github.com/CodeName-cl/byf-manual/blob/main/README.md" target="_blank">README.md</a>.

### Pasos principales:

1. Copiar el archivo cart-precheckout.liquid.
2. Agregar el bloque que se encuentra en block.liquid.
3. Insertar el código de main-cart.liquid en la sección donde deseas mostrar los campos en tu carrito.

Si necesitas ayuda con la instalación o personalización para tu tienda, contáctanos y con gusto te asistiremos.
