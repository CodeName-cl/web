---
title: "Configuración inicial de Ship Smart"
description: "Aprende a configurar Ship Smart en Shopify en pocos pasos. Personaliza tarifas y mejora la logística de tu tienda online."
date: 2024-02-01
author:
  name: "Ricardo Silva"
  url: "https://www.linkedin.com/in/rickyoncode"
image: "/images/docs/ship-smart-getting-started/ship-smart.webp"
tags: ["shopify", "ship-smart", "configuración", "envíos"]
---

Esta guía te ayudará a realizar la configuración inicial de Ship Smart en tu tienda Shopify, utilizando un caso de uso básico con precios fijos por comuna.

## Configuración Inicial

### 1. Selección de Plan

Al instalar la aplicación, se te solicitará seleccionar un plan de pago. Puedes optar por facturación mensual o anual (con descuento). Una vez aprobado el cargo, Shopify aplicará el pago automáticamente a tu tarjeta de crédito según el plan elegido. Recuerda que puedes cambiar de plan en cualquier momento.

![Selección de plan](/docs/ship-smart-getting-started/image.png)
<small>Selección de plan en Ship Smart</small>

![Aprobación del cargo](/docs/ship-smart-getting-started/image-1.png)
<small>Aprobación del cargo</small>

### 2. Pantalla de Inicio

Después de completar la configuración del plan, al iniciar la aplicación se mostrará la pantalla principal (Home) en lugar de la pantalla de pago. En esta pantalla, tendrás las siguientes opciones:

- Crear tarifas
- Modificar el plan
- Cancelar el plan

![Pantalla de inicio](/docs/ship-smart-getting-started/image-2.png)
<small>Pantalla de inicio de Ship Smart</small>

### 3. Configuración de Tarifas

Para comenzar a configurar las tarifas de envío, haz clic en el botón **"Tarifas personalizadas"** o selecciona la opción correspondiente en el menú de la aplicación.

![Acceso a tarifas](/docs/ship-smart-getting-started/image-3.png)
<small>Acceso a configuración de tarifas</small>

### Estado Predeterminado de las Tarifas

Por defecto, las tarifas están desactivadas. Además, Ship Smart muestra tres perfiles:

- **Perfil 1:** Siempre activo.
- **Perfil 2 y 3:** Su activación depende del plan que el usuario haya seleccionado.

![Tarifas desactivadas](/docs/ship-smart-getting-started/image-5.png)
<small>Estado predeterminado de tarifas</small>

![Perfiles de Ship Smart](/docs/ship-smart-getting-started/image-4.png)
<small>Perfiles disponibles en Ship Smart</small>

## Modificando Tarifas de Envío

### Configuración de Perfil

Debajo del checkbox que activa o desactiva el perfil, podrás configurar el título y la descripción que se mostrará al usuario. Estos campos permiten el uso de *templates* para incluir datos dinámicos al momento de calcular el despacho.

![Configuración del perfil](/docs/ship-smart-getting-started/image-6.png)
<small>Configuración de perfil de envío</small>

#### Campos Disponibles

- **{comuna}:** Muestra el nombre de la comuna normalizado. *Ejemplo:* Si el usuario escribe "maipu", este campo mostrará "Maipú".
- **{desde}:** Representa la promesa de tiempo de despacho, indicando el tiempo mínimo. *Ejemplo:* "Despacho a la {comuna} - puede tomar {desde} días hábiles."
- **{hasta}:** Representa la promesa de tiempo de despacho, indicando el rango máximo. *Ejemplo:* "Despacho a la {comuna} - tiempo de despacho {desde} - {hasta} días hábiles."
- **{direccion}:** Representa la dirección escrita por el usuario. *Ejemplo:* "Despacho a la dirección: {direccion}"
- **{nombre}:** Nombre de la bodega desde la que se realizará el envío. *Ejemplo:* "Envío desde la bodega {nombre}"
- **{region}:** Nombre de la región seleccionada por el usuario, se utiliza el estándar definido por Shopify. *Ejemplo:* "Envío a la region {region}"

### 4. Modificación de Precios

Por defecto, se ha cargado un costo de despacho de **CLP 3.000** para todas las comunas y para todos los rangos de peso.

![Ejemplo de tarifa predeterminada de Ship Smart en Shopify con precio de CLP 3.000](/docs/ship-smart-getting-started/image-7.png)
<small>Precio predeterminado</small>

Puedes modificar estos precios de forma individual por comuna o descargar un archivo Excel (CSV) para realizar cambios masivos.

![Modificación de precios por comuna](/docs/ship-smart-getting-started/image-8.png)
<small>Modificación de precios por comuna</small>

#### Uso del CSV

- Al descargar el CSV, obtendrás un archivo que contiene todos los precios por comuna y por rango de peso.
- **Importante:** Asegúrate de modificar únicamente los precios y no el formato del archivo.

![CSV descargado](/docs/ship-smart-getting-started/image-9.png)
<small>CSV descargado</small>

### 5. Subida y Guardado del CSV

Una vez que hayas realizado las modificaciones en el archivo:

1. Sube el CSV utilizando el botón **"Subir csv"**.

![Subida del CSV](/docs/ship-smart-getting-started/image-10.png)
<small>Subida del CSV</small>

2. Luego, haz clic en **"Guardar"** en la parte superior derecha de la aplicación para aplicar los cambios.

![Guardar cambios](/docs/ship-smart-getting-started/image-11.png)
<small>Guardar cambios</small>

Con estos pasos, habrás completado la configuración inicial y la personalización de las tarifas de envío en Ship Smart para tu tienda Shopify. Si tienes alguna duda o necesitas asistencia adicional, no dudes en consultar nuestra sección de soporte técnico.
