import type { Campaign } from "./types";

const MAX_LIMIT = 100;

export async function getCompanies(
  url: string,
  token: string,
  limit = 40,
  offset = 0,
  tags?: string[],
  name?: string
): Promise<{ total: number; offset: number; items: Campaign[] }> {
  const safeLimit = Math.min(limit, MAX_LIMIT);

  const params = new URLSearchParams({
    limit: String(safeLimit),
    offset: String(offset),
  });

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
    offset: data.offset,
    items: data.items,
  };
}
