export function getYouTubeId(value?: string | null): string | null {
  if (!value || typeof value !== "string") return null;

  // ID directo
  if (!value.includes("http")) return value;

  // URL larga
  if (value.includes("watch?v=")) {
    return value.split("watch?v=")[1].split("&")[0];
  }

  // URL corta
  if (value.includes("youtu.be/")) {
    return value.split("youtu.be/")[1].split("?")[0];
  }

  return null;
}
