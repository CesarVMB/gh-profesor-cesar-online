---
title: "Notación trigonométrica (o polar)"
description: ""
pubDate: "2026-02-27"
category: matematicas
tags: [algebra, secundaria]
---

En la figura se muestra un número complejo $z=(a,b)$, tal que $||z||=r$, donde $r$ es la longitud del radio vector y $\theta$ es el argumento medido en radianes.

<img
  class="tikz"
  src="/images/tikz/notacion-polar-de-un-numero-complejo.svg"
  alt="Notación polar de un número complejo"
/>

$$
\begin{equation*}
 \bar{z}\overset{\text{def}}{=}a-bi
\end{equation*}
$$

Podemos verificar que:

$$
\begin{align*}
 \sin\theta&=\frac{b}{r} \implies b=r\sin\theta\\
 \cos\theta&=\frac{a}{r} \implies a=r\cos\theta\\
  \tan\theta&=\frac{b}{a}
\end{align*}
$$

Si un número complejo está escrito en notación binomial $z=a+bi$, podemos reemplazar los valores de $a$ y $b$ en función de $r$ y $\theta$:

$$
\begin{align*}
 z&=a+bi\\
       &=r\cos\theta+r\sin\theta \cdot i\\
  &=r(\cos\theta+\sin\theta \cdot i)
\end{align*}
$$

Por lo tanto, también podemos expresar el número $z$ como:

$$
\begin{equation*}
 z=r(\cos\theta+i\sin\theta)\qquad\quad(\text{notación trigonométrica o polar})
\end{equation*}
$$

## Aplicaciones prácticas

La notación trigonométrica de un número complejo proporciona una alternativa para determinar productos y cocientes de números complejos.

Sean $z_1=r_1(\cos\theta_1+i\sin\theta_1)$ y $z_2=r_2(\cos\theta_2+i\sin\theta_2)$ dos números complejos. Entonces

$$
\begin{align*}
 z_1 \cdot z_2 &= r_1(\cos\theta_1+i\sin\theta_1) \cdot r_2(\cos\theta_2+i\sin\theta_2)\\
                &= r_1r_2 \cdot (\cos\theta_1+i\sin\theta_1) \cdot (\cos\theta_2+i\sin\theta_2)\\
  &= r_1r_2 \cdot ( \cos\theta_1\cos\theta_2+i\cos\theta_1\sin\theta_2+i\sin\theta_1\cos\theta_2 +i^2\sin\theta_1\sin\theta_2)\\
  &= r_1r_2 \cdot ( \cos\theta_1\cos\theta_2+i\cos\theta_1\sin\theta_2+i\sin\theta_1\cos\theta_2 -\sin\theta_1\sin\theta_2 )\\
  &= r_1r_2 \cdot \left[ (\cos\theta_1\cos\theta_2-\sin\theta_1\sin\theta_2)+i(\cos\theta_1\sin\theta_2+\sin\theta_1\cos\theta_2) \right]\\
  &= r_1r_2 \cdot \left[ \cos(\theta_1+\theta_2) + i\sin(\theta_1+\theta_2) \right]
\end{align*}
$$

Por lo tanto, el producto de dos números complejos se escribe como

$$
\begin{equation*}
 z_1 \cdot z_2 = r_1r_2\left[ \cos(\theta_1+\theta_2) + i\sin(\theta_1+\theta_2) \right]
\end{equation*}
$$

Si $z_2 \ne 0$, entonces el cociente de dos números complejos se escribe

$$
\begin{equation*}
 \frac{z_1}{z_2}=\frac{r_1}{r_2}\left[ cos(\theta_1-\theta_2) + i\sin(\theta_1-\theta_2) \right]
\end{equation*}
$$

La demostración de esta propiedad se deja como ejercicio al lector.
