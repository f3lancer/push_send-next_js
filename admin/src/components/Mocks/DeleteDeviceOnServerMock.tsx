export async function DeleteDevicesOnServerMock(id: string): Promise<void> {
  const res = await fetch(`/api/devices/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
}
