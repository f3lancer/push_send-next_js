export async function runCampaign(
  url: string,
  token: string,
  id: string
): Promise<any> {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(`${url}/${id}/run`, {
    method: "POST",
    headers,
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Error: ${res.status}`);

  const data = await res.json();

  return data;
}
