export function getCampaign(): { token: string; url: string } {
  const token = process.env.PUSH_API_TOKEN;
  const url = process.env.NEXT_PUBLIC_API_CAMPAIGNS_URL;

  if (!url) throw new Error("NEXT_PUBLIC_API_CAMPAIGNS_URL is not defined");
  if (!token) throw new Error("PUSH_API_TOKEN is not defined");

  return { token, url };
}
