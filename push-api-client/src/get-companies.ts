import type { Campaign } from "./types";

export async function getCompanies(
  url: string,
  token: string,
  limit = 40,
  offset = 0,
  tags?: string[],
  name?: string
): Promise<{ total: number; items: Campaign[] }> {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });

  // Додаємо тільки якщо є!
  if (tags && tags.length > 0) {
    for (const tag of tags) params.append("tags", tag);
  }
  if (name) params.append("name", name);

  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(`${url}?${params.toString()}`, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Error: ${res.status}`);

  const data = await res.json();

  return {
    total: data.total,
    items: data.items,
  };
}
