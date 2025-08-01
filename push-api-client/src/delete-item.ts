export async function deleteItem(
  url: string,
  token: string,
  id: string
): Promise<void> {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers,
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Error: ${res.status}`);
}
