import type { Campaign } from "./types";

export async function putCompanies(
  url: string,
  token: string,
  id: string,
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

  const res = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error(`Error: ${res.status}`);

  const responseData = await res.json();
  return responseData as Campaign;
}
