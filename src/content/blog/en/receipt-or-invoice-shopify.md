---
title: "Receipt or Invoice Selector in Shopify"
description: "Learn how to add the receipt or invoice option in Shopify and the steps needed to implement it."
date: 2025-02-12
author:
  name: "Ricardo Silva"
  url: "https://www.linkedin.com/in/rickyoncode"
image: "/images/blog/boleta-o-factura-shopify/adrien-delforge-CrHG_ZYn1Dw-unsplash.jpg"
tags: ["shopify", "receipt", "invoice", "checkout", "billboost"]
---

![Receipt or Invoice Selector in Shopify](/images/blog/boleta-o-factura-shopify/adrien-delforge-CrHG_ZYn1Dw-unsplash.jpg)
<small>Photo by <a href="https://unsplash.com/es/@adriendlf?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adrien Delforge</a> on <a href="https://unsplash.com/es/fotos/hombre-en-camisa-negra-de-manga-larga-y-pantalones-negros-de-pie-en-el-carrito-de-compras-CrHG_ZYn1Dw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

In Chile, when selling products or services, issuing a tax document is mandatory. If the sale is to an individual, a receipt ("boleta") is issued; if it's to a company, an invoice ("factura") is issued, which requires additional information such as the tax ID (RUT), legal business name, and business activity.

By default, Shopify does not include these fields in its checkout, so they need to be added through apps or cart modifications.

## How to add the receipt or invoice option in Shopify?

### For Shopify Plus

If you have Shopify Plus, you can add these fields directly in the checkout using specialized apps. We recommend our app <a href="https://apps.shopify.com/byf-extensibility" target="_blank">BillBoost</a>, which leverages Shopify's Checkout Extensibility API to integrate these fields without modifying the store's code.

### For stores without Shopify Plus

If you don't have Shopify Plus, you can add the fields in the shopping cart or in a step before checkout.

For this, we offer an open-source solution that, with basic Liquid knowledge, will allow you to install the necessary fields so customers can select the type of document they need.

You can access the source code here: <a href="https://github.com/CodeName-cl/byf-manual/" target="_blank">https://github.com/CodeName-cl/byf-manual/</a>

## Installation

We've prepared a detailed guide in the <a href="https://github.com/CodeName-cl/byf-manual/blob/main/README.md" target="_blank">README.md</a> file.

### Main steps:

1. Copy the cart-precheckout.liquid file.
2. Add the block found in block.liquid.
3. Insert the main-cart.liquid code in the section where you want to display the fields in your cart.

If you need help with installation or customization for your store, contact us and we'll be happy to assist you.
