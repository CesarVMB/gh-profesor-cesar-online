---
title: "Notación binomial (o canónica)"
description: ""
pubDate: "2026-02-22"
category: matematicas
tags: [algebra, secundaria]
---

Dado un número complejo $z=(a,b)$, sabemos que podemos expresarlo como la suma de sus
componentes real e imaginaria (descomposición canónica):

$$
 z=(a,b)=(a,0)+(0,b)=a+bi
$$

Por lo tanto, también podemos escribir el número complejo $z$ como:

$$
\begin{equation*}
 z=a+bi\qquad\qquad(\text{notación binomial o canónica})
\end{equation*}
$$

Esta notación nos permite operar los números complejos con mayor facilidad sin necesidad de aplicar las definiciones de suma o producto; simplemente aplicando las operaciones de los binomios algebraicos.

Por ejemplo, sean los números complejos $z_1=a+bi$ y $z_2=c+di$. Podemos calcular la suma de dichos números mediante una simple agrupación de términos:

$$
\begin{align*}
 z_1+z_2&=a+ba+c+di\\
         &=(a+c)+(b+d)i\\
  &\equiv(a+c,b+d)
\end{align*}
$$

A su vez, podemos calcular el producto aplicando la propiedad distributiva que conocemos desde siempre:

$$
\begin{align*}
 z_1 \cdot z_2&=(a+bi) \cdot (c+di)\\
               &=ac+adi+bci+bdi^2\qquad(\text{pero }i^2=-1\implies bdi^2=-bd)\\
               &=ac+adi+bci-bd\\
              &=(ac-bd)+(ad+bc)i\\
  &\equiv(ac-bd,ad+bc)
\end{align*}
$$

Podemos observar que estas expresiones son equivalentes a las definiciones de la suma y el producto de números complejos.
