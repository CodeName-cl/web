---
title: "Cómo usamos IA para corregir la comuna"
description: "Explicamos cómo aplicamos IA para corregir comunas mal escritas y mejorar los cálculos de costos de envío en Shopify."
date: 2025-02-11
author:
  name: "Ricardo Alfaro"
  url: "https://www.linkedin.com/in/rickyoncode"
image: "/images/blog/como-usamos-ia-para-completar-la-comuna/alina-grubnyak-ZiQkhI7417A-unsplash.jpg"
tags: ["shopify", "inteligencia artificial", "envíos", "ship smart", "locfix"]
---

![Cómo usamos IA para corregir la comuna](/images/blog/como-usamos-ia-para-completar-la-comuna/alina-grubnyak-ZiQkhI7417A-unsplash.jpg)
<small>Foto de <a href="https://unsplash.com/es/@alinnnaaaa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alina Grubnyak</a> en <a href="https://unsplash.com/es/fotos/fotografia-de-angulo-bajo-de-estructura-metalica-ZiQkhI7417A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

Hoy en día, no es posible modificar el checkout de Shopify. Esto se debe a motivos de seguridad y a la necesidad de asegurar una experiencia óptima para sus usuarios.

El problema es que, para calcular los costos de envío en Chile, necesitamos el nombre de la comuna. Si bien Shopify dispone de un selector para la región, este no es lo suficientemente detallado, ya que dentro de una misma región pueden existir costos de despacho completamente distintos. Por ejemplo, en la Región de la Araucanía, tenemos a Temuco, ubicada en la Panamericana (una de las rutas más importantes de Chile), y también a Liucura, que está a tres horas más de camino hacia la cordillera. No se puede cobrar el mismo despacho a Temuco que a Liucura, por lo que el dropdown de Shopify resulta insuficiente para calcular correctamente los costos de despacho.

Por otro lado, existe el campo "ciudad" o "comuna", pero es un campo de texto donde los usuarios pueden escribir libremente el nombre de la comuna. El problema es que hay casi tantas formas de escribir el nombre de una comuna como usuarios. Por ejemplo, para la comuna de Santiago, es común ver variaciones como "Stgo. centro", "Stgo", "Satiago" o incluso "Santiaguillo". Sé que nadie escribe "Santiaguillo", pero siempre hay algún usuario que nos quiere complicar la existencia.

## Nuestra solución con IA

Para resolver este problema, implementamos nuestro propio modelo de inteligencia artificial que nos permite reconocer exactamente a qué comuna se refiere el usuario, incluso si la escribe de una forma inusual, como "Renka la lleva".

En realidad, no es solo un modelo, sino dos modelos trabajando juntos:

1. **Distancia de Levenshtein**: Esta técnica calcula la diferencia entre lo que escribió el usuario y las comunas reales. Si la distancia es "corta", podemos predecir que la comuna escrita coincide con una de la lista oficial.
2. **Red neuronal personalizada**: Si la diferencia entre la comuna ingresada y las comunas oficiales es demasiado grande, recurrimos a una red neuronal que entrenamos específicamente para este caso.

### Entrenamiento del modelo

Para entrenar la red neuronal, necesitábamos la mayor cantidad de datos posibles. Por ello, recopilamos todas las formas en que los usuarios escribían las comunas y realizamos una clasificación manual.

Aun con esta técnica, no alcanzábamos el volumen de datos necesario, por lo que recurrimos a la técnica de *data augmentation*. Esta técnica consiste en introducir errores o cambios en los datos existentes para aumentar artificialmente el tamaño del conjunto de entrenamiento.

El último paso fue entrenar el modelo, lo que nos tomó un par de días y algunos dólares en CPUs, hasta finalmente empaquetarlo en una librería de Python.

![Modelo de IA](/images/blog/como-usamos-ia-para-completar-la-comuna/image-5.png)

## Implementación en nuestros productos

Nuestros productos, **Ship Smart** y **LocFix AI**, están construidos con esta librería.

### **LocFix AI**

LocFix permite a los usuarios de Shopify Plus añadir un mensaje cuando escriben mal la comuna.

![Ejemplo de LocFix AI](/images/blog/como-usamos-ia-para-completar-la-comuna/image-4.png)

### **Ship Smart**

Ship Smart mejora la precisión en el cálculo de costos de despacho y facilita la integración con couriers al enviar la comuna estandarizada.

![Ejemplo de Ship Smart](/images/blog/como-usamos-ia-para-completar-la-comuna/image-6.png)

Si quieres usar nuestra librería, contáctanos y estaremos felices de ayudarte.

Si quieres aprender más sobre optimización de envíos, revisa [este artículo](/blog/envio-unificado-shopify).
