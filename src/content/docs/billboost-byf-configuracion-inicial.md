---
title: "Configuración inicial: Billboost Boleta o Factura"
description: "Configura la aplicación Billboost Boleta o Factura en Shopify. Añade campos personalizados en checkout y optimiza tu facturación."
date: 2025-03-31
author:
  name: "Ricardo Alfaro"
  url: "https://www.linkedin.com/in/rickyoncode"
image: "/images/docs/ship-smart-getting-started/ship-smart.webp"
tags: ["shopify", "billboost", "boleta", "factura", "checkout"]
---

A continuación te mostraremos, paso a paso, cómo configurar nuestra aplicación <a target="_blank" href="https://apps.shopify.com/byf-extensibility?locale=es">Billboost Boleta o Factura</a>.

La aplicación permite agregar los campos necesarios en el checkout para que tus clientes puedan elegir el tipo de documento de venta que desean emitir (boleta o factura). Además, podrán ingresar datos como el identificador fiscal, nombre y actividad económica de la empresa. También incluye validaciones automáticas para evitar errores frecuentes al ingresar estos datos.

> **Importante:** Esta aplicación únicamente recopila los datos necesarios para generar la factura o boleta. Para emitir el documento tributario de forma oficial, deberás integrar una aplicación adicional de facturación en Shopify.

Actualmente, esta aplicación está disponible para Perú, Chile y México. Si necesitas habilitarla para otro país, contáctanos y evaluaremos la viabilidad técnica para su implementación.

---

## Configuración para usuarios sin Shopify Plus

Los usuarios que no tienen Shopify Plus pueden usar esta funcionalidad directamente en el carrito de compras. Para insertar la extensión en el carrito, sigue estos pasos:

1. Desde tu panel de Shopify, dirígete a **Canales de venta > Temas > Personalizar**.

![Personalizar tema](/docs/billboost-byf-configuracion-inicial/image.png)

2. En el panel de edición del tema, selecciona la opción **Carrito de compras**.

![Carrito de compras](/docs/billboost-byf-configuracion-inicial/image-3.png)

3. En la sección **Aplicaciones**, agrega el bloque correspondiente al país que deseas configurar.

![Agregar bloque de aplicación](/docs/billboost-byf-configuracion-inicial/image-4.png)

---

## Configuración para usuarios Shopify Plus

Los usuarios con plan Shopify Plus pueden aprovechar la funcionalidad **Checkout Extensibility** para insertar directamente la extensión en el checkout.

Para configurarla, sigue estos pasos:

1. Desde tu panel de Shopify, dirígete a **Canales de venta > Temas > Personalizar**.

![Personalizar tema](/docs/billboost-byf-configuracion-inicial/image.png)

2. En el panel de edición del tema, selecciona la opción **Pantalla de pago**.

![Pantalla de pago](/docs/billboost-byf-configuracion-inicial/image-1.png)

3. En la sección **Contacto**, añade la extensión correspondiente al país donde desees vender.

![Agregar extensión](/docs/billboost-byf-configuracion-inicial/image-2.png)

---

## Configuraciones comunes para todos los países

Estas configuraciones están disponibles para todos los países soportados:

- **Permitir que la app bloquee el pago:** Si activas esta opción, la aplicación bloqueará el paso al pago si el cliente no completa todos los campos requeridos.
- **Mostrar/Ocultar extensión:** Permite mostrar u ocultar temporalmente la extensión. Útil cuando necesitas desactivarla temporalmente sin perder la configuración realizada.

---

## Configuración específica para Chile

Para Chile, puedes configurar las siguientes opciones:

- **Activar factura:** Permite que los clientes puedan elegir emitir factura. Ideal para comenzar a facturar a empresas.
- **RUT obligatorio para boleta:** Al activar esta opción, el RUT será obligatorio para clientes personas naturales. Mostrará un mensaje de error si el campo está vacío o el RUT ingresado es inválido.
- **Agregar guión automáticamente:** Inserta automáticamente el guión en el RUT mientras el usuario escribe, facilitando el ingreso.
- **Habilitar opción para extranjeros:** Añade un checkbox para clientes extranjeros. Útil cuando tu tienda permite compras sin necesidad de RUT.
- **RUT válido para extranjeros:** Define un RUT genérico que se utilizará para extranjeros al generar boletas ante el SII (habitualmente es el 55.555.555-5).

---

## Configuración específica para Perú

En Perú, puedes configurar:

- **Longitud del RUC en factura:** Define cuántos caracteres debe ingresar obligatoriamente el cliente al digitar su RUC.
- **Longitud del DNI en boleta:** Define cuántos caracteres debe ingresar obligatoriamente el cliente al digitar su DNI.

---

## Configuración específica para México

Las siguientes opciones están disponibles para México:

- **Texto Checkbox Factura:** Texto que aparecerá junto al checkbox para seleccionar factura.
- **Nombre Empresa Placeholder:** Texto mostrado cuando el campo "Nombre de Empresa" está vacío.
- **Régimen Fiscal Placeholder:** Texto mostrado cuando el campo "Régimen Fiscal" está vacío.
- **CFDI Placeholder:** Texto mostrado cuando el campo "CFDI" está vacío.
- **RFC Placeholder:** Texto mostrado cuando el campo "RFC" está vacío.
- **Tipo Persona Placeholder:** Texto mostrado cuando el campo "Tipo de Persona" está vacío.
- **CFDI por defecto:** Código CFDI usado por defecto cuando el cliente no lo proporciona (por ejemplo, cuando es persona física).
- **Nombre del CFDI:** Nombre del CFDI utilizado por defecto.
- **Nombre de la empresa por defecto:** Nombre de empresa usado por defecto cuando no se proporciona uno (por ejemplo, cliente persona física).
- **RFC por defecto:** RFC utilizado cuando el cliente no lo proporciona.
- **Régimen fiscal por defecto:** Régimen fiscal asignado por defecto si el cliente no indica uno.
- **Etiqueta del régimen fiscal:** Etiqueta personalizada para el régimen fiscal.
- **Tipo de persona por defecto:** Tipo de persona asignado por defecto (por ejemplo, Física o Moral).
- **Solicitar Dirección:** Añade un campo adicional para solicitar dirección e identificar la matriz de la empresa.
- **Mensaje para el usuario:** Permite mostrar un mensaje personalizado en la sección de facturación (ejemplo: `Consulta nuestros {https://www.codename.cl|términos y condiciones}`)
