import { getYouTubeId } from "./youtube";

export function getPostImage(post: any): string {
  const youtubeId = getYouTubeId(post.data.youtube);

  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }

  if (post.data.image && post.data.image.trim() !== "") {
    return post.data.image;
  }

  return "/images/default.png";
}
