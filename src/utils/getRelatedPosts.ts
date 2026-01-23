export function getRelatedPosts(allPosts: any[], currentPost: any, limit = 2) {
  return allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .filter(
      (post) =>
        post.data.category === currentPost.data.category ||
        (post.data.tags &&
          currentPost.data.tags &&
          post.data.tags.some((tag) => currentPost.data.tags.includes(tag))),
    )
    .slice(0, limit);
}
