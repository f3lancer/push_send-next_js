import type { Device } from "./types";

export async function getDeviceById(
  url: string,
  token: string,
  id: string
): Promise<Device> {
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
  return data as Device;
}
