---
title: "El elemento neutro del producto de números complejos"
description: ""
pubDate: "2026-02-11"
category: matematicas
tags: [algebra, secundaria]
---

Dado un número complejo $z=(a,b)$, el elemento neutro del producto es otro número complejo $x=(x_1,x_2)$ tal que $z \cdot x=z$.

$$
\begin{align*}
 z \cdot x &=z\\
  (a,b)\cdot(x_1,x_2)&=(a,b)\\
  (ax_1-bx_2,ax_2+bx_1)&=(a,b)
\end{align*}
$$

Entonces, ahora tenemos que resolver un sistema de ecuaciones para $x_1$ y $x_2$

$$
\begin{align*}
 ax_1-bx_2 &= a\qquad\dots(i)\\
  bx_1+ax_2 &= b\qquad\dots(ii)
\end{align*}
$$

Para despejar $x_1$, si multiplicamos la ecuación $(i)$ por $a$ y la ecuación $(ii)$ por $b$ obtenemos

$$
\begin{align*}
 a^2x_1-\cancel{abx_2} &= a^2\qquad\dots(iii)\\
  b^2x_1+\cancel{abx_2} &= b^2\qquad\dots(iv)
\end{align*}
$$

Sumando las ecuaciones $(iii)+(iv)$, agrupando y factorizando, obtenemos el valor de $x_1$:

$$
\begin{align*}
 a^2x_1+b^2x_1 &= a^2+b^2\\
  (a^2+b^2)x_1 &= a^2+b^2\\
  (a^2+b^2)x_1 - (a^2+b^2) &= 0\\
  (a^2+b^2)(x_1-1)&=0 \implies x_1=1
\end{align*}
$$

Reemplazando el valor de $x_1=1$ en la ecuación $(ii)$ obtenemos el valor de $x_2$:

$$
\begin{align*}
  bx_1+ax_2 &= b\\
  b(1)+ax_2 &= b\\
  \cancel{b}+ax_2 &= \cancel{b}\\
  ax_2 &= 0 \implies x_2=0
\end{align*}
$$

Por lo tanto, el elemento neutro del producto es el número complejo $(1,0)$.
