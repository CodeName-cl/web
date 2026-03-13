---
title: "How We Use AI to Fix City Names"
description: "We explain how we apply AI to correct misspelled city names and improve shipping cost calculations in Shopify."
date: 2025-02-11
author:
  name: "Ricardo Silva"
  url: "https://www.linkedin.com/in/rickyoncode"
image: "/images/blog/como-usamos-ia-para-completar-la-comuna/alina-grubnyak-ZiQkhI7417A-unsplash.jpg"
tags: ["shopify", "artificial intelligence", "shipping", "ship smart", "locfix"]
---

![How We Use AI to Fix City Names](/images/blog/como-usamos-ia-para-completar-la-comuna/alina-grubnyak-ZiQkhI7417A-unsplash.jpg)
<small>Photo by <a href="https://unsplash.com/es/@alinnnaaaa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alina Grubnyak</a> on <a href="https://unsplash.com/es/fotos/fotografia-de-angulo-bajo-de-estructura-metalica-ZiQkhI7417A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

Today, it's not possible to modify Shopify's checkout. This is due to security reasons and the need to ensure an optimal experience for its users.

The problem is that, to calculate shipping costs in Chile, we need the city name ("comuna"). While Shopify has a region selector, it's not detailed enough, since within the same region there can be completely different shipping costs. For example, in the Araucanía Region, we have Temuco, located on the Pan-American Highway (one of Chile's most important routes), and also Liucura, which is three more hours towards the mountains. You can't charge the same shipping to Temuco as to Liucura, so Shopify's dropdown is insufficient for correctly calculating shipping costs.

On the other hand, there's the "city" or "comuna" field, but it's a text field where users can freely type the city name. The problem is that there are almost as many ways to spell a city name as there are users. For example, for the city of Santiago, it's common to see variations like "Stgo. centro", "Stgo", "Satiago" or even "Santiaguillo". I know nobody writes "Santiaguillo", but there's always a user who wants to make our lives harder.

## Our AI Solution

To solve this problem, we implemented our own artificial intelligence model that allows us to recognize exactly which city the user is referring to, even if they spell it in an unusual way, like "Renka la lleva".

In reality, it's not just one model, but two models working together:

1. **Levenshtein Distance**: This technique calculates the difference between what the user typed and the actual city names. If the distance is "short", we can predict that the typed city matches one from the official list.
2. **Custom Neural Network**: If the difference between the entered city and the official cities is too large, we use a neural network that we trained specifically for this case.

### Model Training

To train the neural network, we needed as much data as possible. Therefore, we collected all the ways users wrote city names and performed manual classification.

Even with this technique, we didn't reach the necessary data volume, so we turned to *data augmentation*. This technique involves introducing errors or changes in existing data to artificially increase the size of the training set.

The last step was training the model, which took us a couple of days and a few dollars in CPUs, until we finally packaged it into a Python library.

![AI Model](/images/blog/como-usamos-ia-para-completar-la-comuna/image-5.png)

## Implementation in Our Products

Our products, **Ship Smart** and **LocFix AI**, are built with this library.

### **LocFix AI**

LocFix allows Shopify Plus users to display a message when they misspell the city name.

![LocFix AI Example](/images/blog/como-usamos-ia-para-completar-la-comuna/image-4.png)

### **Ship Smart**

Ship Smart improves the accuracy of shipping cost calculations and facilitates courier integration by sending the standardized city name.

![Ship Smart Example](/images/blog/como-usamos-ia-para-completar-la-comuna/image-6.png)

If you want to use our library, contact us and we'll be happy to help.

If you want to learn more about shipping optimization, check out [this article](/en/blog/unified-shipping-shopify).
