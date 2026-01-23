export function sortPostsByDate(posts: any[]) {
  return posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate.replace(/-/g, "/")).getTime();
    const dateB = new Date(b.data.pubDate.replace(/-/g, "/")).getTime();
    return dateB - dateA;
  });
}
