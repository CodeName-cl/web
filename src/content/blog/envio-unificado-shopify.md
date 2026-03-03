---
title: "Envío Unificado con Ship Smart"
description: "Reduce costos de envío y mejora la experiencia del cliente con el Envío Unificado de Ship Smart en Shopify. Descubre cómo funciona y cómo configurarlo."
date: 2025-02-10
author: "@rickyoncode"
image: "/images/blog/envio-unificado-shopify/shipping.jpg"
tags: ["shopify", "envíos", "ship smart", "logística", "ecommerce"]
---

![Envío Unificado con Ship Smart](/images/blog/envio-unificado-shopify/shipping.jpg)
<small>Foto de <a href="https://unsplash.com/es/@hdbernd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bernd 📷 Dittrich</a> en <a href="https://unsplash.com/es/fotos/una-pila-de-contenedores-verdes-y-rojos-uno-encima-del-otro-rPM6qVp_tgk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

En Shopify, cuando un cliente realiza una compra y el pedido debe suplirse desde múltiples bodegas, la plataforma automáticamente calcula los envíos como despachos separados. Esto significa que se generan múltiples costos de envío desde distintas bodegas hasta la dirección del cliente.

Sin embargo, muchos comerciantes prefieren centralizar los pedidos en una sola bodega y realizar un único despacho. Esto puede ayudar a reducir costos y evitar que los clientes se desmotiven por tarifas de envío elevadas. Para solucionar este problema, hemos desarrollado la funcionalidad de **Envío Unificado** en nuestro tarificador **Ship Smart**.

## ¿Cómo funciona?

Cuando un cliente llega al checkout y modifica su dirección, Shopify nos concede 10 segundos para calcular el costo de despacho. Durante ese tiempo, cada bodega involucrada en el pedido envía una consulta.

Lo que hacemos en **Ship Smart** es calcular un costo total de despacho y distribuirlo entre las diferentes solicitudes de manera uniforme. De este modo, el costo final del envío es el mismo que si el pedido se enviara desde una sola ubicación.

## ¿Cómo configurarlo?

Sigue estos pasos para habilitar el **Envío Unificado** en Ship Smart:

1. Configura esta opción directamente en nuestra aplicación **Ship Smart**, disponible en el plan **Pro**.
   ![Configuración en Ship Smart](/images/blog/envio-unificado-shopify/image-2.png)

2. En la configuración, selecciona la opción de costos de envío como **"unificado"**.
   ![Selección de tipo de costos](/images/blog/envio-unificado-shopify/image-1.png)

3. Selecciona el perfil que se utilizará para calcular los costos de envío.
   ![Selección de perfil](/images/blog/envio-unificado-shopify/image-3.png)

4. Al elegir un perfil, los demás perfiles podrán editarse, pero no aparecerán en las opciones de despacho visibles para el cliente.

## Desafíos actuales del feature

Actualmente, el **Envío Unificado** no es compatible con la función **Split Shipping** de Shopify. Esto se debe a que nuestro sistema distribuye los costos de envío entre las distintas solicitudes para obtener un precio final total. Sin embargo, en **Split Shipping**, Shopify permite a los clientes seleccionar el método de envío de cada producto individualmente, lo que podría generar costos desiguales entre productos.

## Conclusión

Este feature está diseñado para ayudarte a **aumentar las ventas** en tu tienda Shopify, evitando que los clientes abandonen sus compras debido a costos de envío elevados.

Si necesitas ayuda para configurar **Ship Smart**, contáctanos a nuestro correo de <a href="mailto:soporte@codename.cl">soporte@codename.cl</a>. ¡Estamos aquí para ayudarte!
