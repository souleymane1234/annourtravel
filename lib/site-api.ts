export const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.annour-travel.com';

export async function fetchSiteApi<T = unknown>(
  path: string,
  signal?: AbortSignal
): Promise<T | null> {
  const base = typeof window === 'undefined' ? API_ORIGIN : '/backend-api';
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;

  try {
    const response = await fetch(`${base}${normalizedPath}`, { signal });
    if (!response.ok) {
      return null;
    }
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export function resolveMediaUrl(url?: string | null): string | undefined {
  if (!url) {
    return undefined;
  }
  if (url.startsWith('/uploads')) {
    return `${API_ORIGIN}${url}`;
  }
  return url;
}
