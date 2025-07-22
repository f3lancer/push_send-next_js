import type { Campaign } from "./types";

export async function getCampaignById(
  url: string,
  token: string,
  id: string
): Promise<Campaign> {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(`${url}/${id}`, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Error: ${res.status}`);

  const data = await res.json();
  return data as Campaign;
}
