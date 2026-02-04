---
title: "Definición del inverso (o recíproco) de un número complejo"
description: ""
pubDate: "2026-02-15"
category: matematicas
tags: [algebra, secundaria]
---

Dado un número complejo $z=(a,b)$, no nulo ($a\ne0,\,b\ne0$), su inverso (o recíproco) es aquel número $x=(x_1,x_2)$ tal que $z \cdot x=1$.

$$
\begin{align*}
 z \cdot x &= 1\\
  (a,b)\cdot(x_1,x_2)&=(1,0)\\
  (ax_1-bx_2,ax_2+bx_1)&=(1,0)
\end{align*}
$$

Entonces, en el sistema de ecuaciones para $x_1$ y $x_2$:

$$
\begin{align*}
 ax_1-bx_2&=1\qquad\dots(i)\\
  bx_1+ax_2&=0\qquad\dots(ii)
\end{align*}
$$

Para despejar $x_1$, si multiplicamos la ecuación $(i)$ por $a$ y la ecuación $(ii)$ por $b$ obtenemos

$$
\begin{align*}
 a^2x_1-\cancel{abx_2} &= a\qquad\dots(iii)\\
  b^2x_1+\cancel{abx_2} &= 0\qquad\dots(iv)
\end{align*}
$$

Sumando las ecuaciones $(iii)+(iv)$ y factorizando, obtenemos el valor de $x_1$:

$$
\begin{align*}
 a^2x_1+b^2x_1 &= a\\
  (a^2+b^2)x_1 &= a \implies x_1=\frac{a}{a^2+b^2}
\end{align*}
$$

Reemplazando el valor de $x_1=1$ en la ecuación $(ii)$ obtenemos el valor de $x_2$:

$$
\begin{align*}
  bx_1+ax_2 &= 0\\
  b\left( \frac{a}{a^2+b^2} \right)+ax_2 &= 0\\
  \left( \frac{ab}{a^2+b^2} \right)+ax_2 &= 0\\
  \cancel{a}x_2 &= \left( \frac{-\cancel{a}b}{a^2+b^2} \right) \implies x_2=\frac{-b}{a^2+b^2}
\end{align*}
$$

Considerando que $||z||=\sqrt{a^2+b^2}$, entonces $a^2+b^2=||z||^2$. Por lo tanto

$$
x=\left( \dfrac{a}{||z||^2},\dfrac{-b}{||z||^2} \right)=\dfrac{1}{||z||^2}(a,-b)
$$

En general, dado un número complejo $z=(a,b)$, no nulo ($a\ne0$, $b\ne0$), el inverso (o
recíproco) de $z$, se denota $z^{-1}$ y se define como aquel número tal que el producto $z \cdot z^{-1}$ es igual a la unidad.

$$
\begin{equation}
 z \cdot z^{-1} = 1 \overset{\text{def}}{\iff} z^{-1}=\frac{1}{||z||^2}(a,-b)
\end{equation}
$$
