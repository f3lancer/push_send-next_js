import type { Campaign } from "./types";

export async function postCampaign(
  url: string,
  token: string,
  data: {
    name: string;
    tags: string[];
    title: string;
    body: string;
    click_url: string;
  }
): Promise<Campaign> {
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error(`Error: ${res.status}`);

  const responseData = await res.json();
  return responseData as Campaign;
}
