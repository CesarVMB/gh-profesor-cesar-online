---
title: "Notación exponencial"
description: ""
pubDate: "2026-02-28"
category: matematicas
tags: [algebra, secundaria]
---

En el Cálculo Matemático, el número $e$ es ampliamente utilizado y cumple un papel fundamental en el estudio del crecimiento exponencial aplicado a diferentes procesos de la naturaleza.

El número $e$ es irracional y empieza como sigue:

$$
  e \approx 2,7182818284\dots
$$

En esta sección utilizaremos la relación que existe entre el número $e$ y las funciones seno y coseno, conocida como la fórmula de Euler:

$$
  e^{i\theta}=\cos\theta+i\sin\theta
$$

La demostración de esta fórmula se basa en conceptos avanzados del Cálculo Matemático (series de Taylor) que escapan al alcance de esta publicación.

La fórmula de Euler nos permite representar los números complejos con una notación más corta, conocida como la **notación exponencial**. De esta manera, si un número complejo está escrito en notación trigonométrica,

$$
  z=r(\underbrace{\cos\theta+i\sin\theta}_{e^{i\theta}})
$$

también podemos expresarlo como:

$$
\begin{equation*}
 z=re^{i\theta}\qquad\qquad\qquad(\text{notación exponencial}
\end{equation*}
$$

## Aplicaciones prácticas

La notación exponencial también nos brinda una manera muy rápida para calcular productos y cocientes de números complejos.

Sean $z_1=r_1e^{i\theta_1}$ y $z_2=r_2e^{i\theta_2}$ dos números complejos. Entonces, el producto lo calculamos de la siguiente manera:

$$
\begin{align*}
 z_1 \cdot z_2 &= r_1e^{i\theta_1} \cdot r_2e^{i\theta_2}\\
  &= r_1r_2e^{i\theta_1+i\theta_2}
\end{align*}
$$

Por lo tanto, el producto de dos números complejos se escribe como

$$
\begin{equation*}
 z_1 \cdot z_2 = r_1r_2e^{i(\theta_1+\theta_2)}
\end{equation*}
$$

Si $z_2\ne0$, entonces veamos cómo escribimos el cociente:

$$
\begin{align*}
 \frac{z_1}{z_2}&=\frac{r_1e^{i\theta_1}}{r_2e^{i\theta_2}}\\
                 &=\frac{r_1}{r_2}e^{i\theta_1-i\theta_2}\\
  &=\frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}
\end{align*}
$$

Por lo tanto, el cociente de dos números complejos se escribe

$$
\begin{equation*}
 \frac{z_1}{z_2}=\frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}
\end{equation*}
$$
