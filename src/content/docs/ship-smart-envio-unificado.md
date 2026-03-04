---
title: "Envío Unificado en Ship Smart"
description: "Configura el envío unificado en Ship Smart para Shopify. Centraliza costos de despacho y optimiza tu logística."
date: 2025-02-06
author:
  name: "Ricardo Silva"
  url: "https://www.linkedin.com/in/rickyoncode"
image: "/images/docs/ship-smart-getting-started/ship-smart.webp"
tags: ["shopify", "ship-smart", "envío-unificado", "logística"]
---

El envío unificado es una funcionalidad de nuestro tarifario que permite a los comerciantes seleccionar una bodega central para calcular los costos de despacho. Esto garantiza que, incluso si un pedido involucra múltiples bodegas, los costos se calculen desde un único punto de origen.

## Configuración del Envío Unificado

Para activar el envío unificado en Ship Smart, sigue estos pasos:

### 1. Activar Envío Unificado

Dirígete a la sección de tarifas personalizadas y activa la opción de envío unificado, ubicada en la tercera posición.

![Configuración de Envío Unificado](/docs/ship-smart-envio-unificado/image.png)

### 2. Seleccionar Perfil de Centralización

Inmediatamente debajo, selecciona el perfil que servirá como punto central para calcular los costos de despacho.

![Selección de Perfil](/docs/ship-smart-envio-unificado/image-1.png)

### 3. Desactivación de Otros Perfiles

Una vez seleccionado un perfil, los demás se desactivarán automáticamente. Aunque estos perfiles tengan tarifas configuradas, solo se aplicará el perfil centralizado.

![Desactivación de Perfiles](/docs/ship-smart-envio-unificado/image-2.png)

### 4. Definir Título y Descripción del Envío

El título y la descripción del envío serán los que estén definidos en el perfil seleccionado.

![Configuración de Título y Descripción](/docs/ship-smart-envio-unificado/image-3.png)

Siguiendo estos pasos, podrás configurar el envío unificado para garantizar que a tus clientes no se les cobre doble despacho en sus pedidos.

---

## Consideraciones Importantes

Para implementar esta funcionalidad, se han aprovechado al máximo las opciones que ofrece Shopify. Sin embargo, en ciertos casos extremos, podría no funcionar correctamente.

### Caso Identificado

Un escenario detectado en el que pueden producirse errores ocurre cuando un usuario:

1. Llega al checkout e ingresa su dirección de despacho.
2. Regresa inmediatamente al carrito de compras para agregar más productos.
3. Vuelve al checkout en menos de 10 segundos.

Debido a que Shopify ofrece un margen de hasta 10 segundos para recalcular los costos de despacho, este comportamiento puede generar una anomalía en la estimación del costo de envío. Según nuestros registros, la probabilidad de que ocurra este caso es baja, pero es importante tenerlo en cuenta al contratar Ship Smart.

### Solución Recomendada

Se puede mitigar este problema modificando el tema de Shopify para detectar si un usuario ha regresado al carrito tras haber estado en el checkout. En estos casos, se recomienda deshabilitar el botón de acceso al checkout hasta que se cumpla el margen de 10 segundos.

A continuación, se presenta un ejemplo de código JavaScript para implementar esta solución:

```javascript
const isCheckoutReferred = document.referrer.indexOf("checkouts");
const checkoutButton = document.getElementById("checkout");

if (!isCheckoutReferred) return;

checkoutButton.disabled = true;
setTimeout(() => {
    checkoutButton.disabled = false;
}, 10000);
```
