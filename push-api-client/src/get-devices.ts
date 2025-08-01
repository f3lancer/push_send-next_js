import type { Device } from "./types";

const MAX_LIMIT = 100;

export async function getDevices(
  url: string,
  token: string,
  limit = 40,
  offset = 0,
  tags?: string[],
  email?: string,
  device_token?: string,
  platform?: string,
  user_id?: string
): Promise<{ total: number; offset: number; items: Device[] }> {
  const safeLimit = Math.min(limit, MAX_LIMIT);

  const params = new URLSearchParams({
    limit: String(safeLimit),
    offset: String(offset),
  });

  if (tags && tags.length > 0) {
    for (const tag of tags) params.append("tags", tag);
  }
  if (email) params.append("email", email);
  if (device_token) params.append("device_token", device_token);
  if (platform) params.append("platform", platform);
  if (user_id) params.append("user_id", user_id);

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
