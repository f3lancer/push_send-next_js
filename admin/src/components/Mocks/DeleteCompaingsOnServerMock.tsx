export async function DeleteCompaingsOnServerMock(id: string): Promise<void> {
  const res = await fetch(`/api/campaigns/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
}
