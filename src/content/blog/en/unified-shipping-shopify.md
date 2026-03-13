---
title: "Unified Shipping with Ship Smart"
description: "Reduce shipping costs and improve the customer experience with Ship Smart's Unified Shipping on Shopify. Discover how it works and how to set it up."
date: 2025-02-10
author:
  name: "Ricardo Silva"
  url: "https://www.linkedin.com/in/rickyoncode"
image: "/images/blog/envio-unificado-shopify/shipping.jpg"
tags: ["shopify", "shipping", "ship smart", "logistics", "ecommerce"]
---

![Unified Shipping with Ship Smart](/images/blog/envio-unificado-shopify/shipping.jpg)
<small>Photo by <a href="https://unsplash.com/es/@hdbernd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bernd 📷 Dittrich</a> on <a href="https://unsplash.com/es/fotos/una-pila-de-contenedores-verdes-y-rojos-uno-encima-del-otro-rPM6qVp_tgk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

In Shopify, when a customer makes a purchase and the order needs to be fulfilled from multiple warehouses, the platform automatically calculates shipping as separate deliveries. This means that multiple shipping costs are generated from different warehouses to the customer's address.

However, many merchants prefer to centralize orders in a single warehouse and make a single delivery. This can help reduce costs and prevent customers from being discouraged by high shipping fees. To solve this problem, we developed the **Unified Shipping** feature in our rate calculator **Ship Smart**.

## How Does It Work?

When a customer reaches checkout and modifies their address, Shopify gives us 10 seconds to calculate the shipping cost. During that time, each warehouse involved in the order sends a request.

What we do in **Ship Smart** is calculate a total shipping cost and distribute it among the different requests evenly. This way, the final shipping cost is the same as if the order were shipped from a single location.

## How to Set It Up?

Follow these steps to enable **Unified Shipping** in Ship Smart:

1. Configure this option directly in our **Ship Smart** app, available on the **Pro** plan.
   ![Ship Smart Configuration](/images/blog/envio-unificado-shopify/image-2.png)

2. In the settings, select the shipping cost option as **"unified"**.
   ![Cost Type Selection](/images/blog/envio-unificado-shopify/image-1.png)

3. Select the profile that will be used to calculate shipping costs.
   ![Profile Selection](/images/blog/envio-unificado-shopify/image-3.png)

4. When choosing a profile, the other profiles can be edited but won't appear in the shipping options visible to the customer.

## Current Feature Challenges

Currently, **Unified Shipping** is not compatible with Shopify's **Split Shipping** feature. This is because our system distributes shipping costs among the different requests to get a final total price. However, in **Split Shipping**, Shopify allows customers to select the shipping method for each product individually, which could generate unequal costs between products.

## Conclusion

This feature is designed to help you **increase sales** in your Shopify store, preventing customers from abandoning their purchases due to high shipping costs.

If you need help setting up **Ship Smart**, contact us at <a href="mailto:soporte@codename.cl">soporte@codename.cl</a>. We're here to help!
