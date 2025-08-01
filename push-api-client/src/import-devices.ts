export async function importDevices(
  url: string,
  token: string,
  file: File
): Promise<any> {
  const formData = new FormData();
  formData.append("file", file);

  const headers = {
    Authorization: `Bearer ${token}`,
    accept: "application/json",
  };

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: formData,
  });

  if (!res.ok) throw new Error(`Error: ${res.status}`);

  const responseData = await res.json();
  return responseData;
}
