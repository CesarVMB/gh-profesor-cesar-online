export function getRelatedPosts(allPosts: any[], currentPost: any, limit = 4) {
  const currentTags = currentPost.data.tags ?? [];
  const currentCategory = currentPost.data.category;

  // ❌ Excluir el post actual
  const candidates = allPosts.filter((post) => post.slug !== currentPost.slug);

  // 🥇 Prioridad alta:
  // misma categoría + al menos una etiqueta en común
  const strongMatches = candidates.filter(
    (post) =>
      post.data.category === currentCategory &&
      post.data.tags &&
      currentTags.length > 0 &&
      post.data.tags.some((tag) => currentTags.includes(tag)),
  );

  // 🥈 Prioridad media:
  // misma categoría aunque no tenga etiquetas
  const categoryOnlyMatches = candidates.filter(
    (post) =>
      post.data.category === currentCategory && !strongMatches.includes(post),
  );

  // 🔀 Unir resultados por prioridad
  const related = [...strongMatches, ...categoryOnlyMatches];

  // 📅 Ordenar por fecha (más recientes primero)
  related.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  );

  // 🔢 Limitar resultados
  return related.slice(0, limit);
}
