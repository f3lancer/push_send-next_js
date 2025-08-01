export async function RunCampaignOnServerMock(
  id: string
): Promise<{ status: string }> {
  const res = await fetch(`/api/campaigns/${id}/run`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return res.json();
}
