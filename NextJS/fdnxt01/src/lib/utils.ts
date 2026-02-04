export function extractTikTokVideoId(url: string | null): string | null {
  if (!url) return null;
  
  // Extract video ID from TikTok URL
  // Example: https://www.tiktok.com/@username/video/1234567890
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : null;
}
