---
title: "El cuadrado del número i"
description: ""
pubDate: "2026-02-20"
category: matematicas
tags: [algebra, secundaria]
---

Calculemos el valor de $i^2$. Por la definición del producto:

$$
\begin{align*}
 i^2&=i \cdot i\\
     &=(0,1)\cdot(0,1)\\
     &=(0-1,0+0)\\
     &=(-1,0)\\
       &=-1
\end{align*}
$$

Por lo tanto, el valor de $i^2$ es el número real $-1$.

$$
\begin{equation}
 i^2=-1 \in \mathbb{R}
\end{equation}
$$

## Aplicación práctica

El valor de $i^2=-1$ es muy útil en la resolución de ecuaciones por el método de completación de cuadrados. Por ejemplo, dada la siguiente ecuación de segundo grado

$$
  x^2+1=0
$$

observamos que no existe ningún número real que satisfaga la igualdad; entonces las soluciones deben ser números complejos.

En efecto, para resolver la ecuación podemos completar cuadrados de la siguiente manera:

$$
\begin{align*}
 x^2+1&=0\\
  x^2-(\underbrace{-1}_{i^2})&=0\\
  x^2-i^2&=0\\
  (x+i)(x-i)&=0 \implies x+i=0 \quad\lor\quad x-i=0
\end{align*}
$$

Entonces,

$$
  x=-i \quad\lor\quad x=i
$$

Finalmente, la solución de la ecuación es $x \in \{-i,i\}$.
