import { getCampaignById } from "push-api-client";
import type { Campaign } from "push-api-client";
import CampaignDetail from "@/components/Campaign/CampaignEdit/CampaignEdit";

export default async function CampaignEditFetcher({ id }: { id: string }) {
  const url = process.env.NEXT_PUBLIC_API_CAMPAIGNS_URL;
  const token = process.env.PUSH_API_TOKEN;

  if (!url) {
    return <div>url is not defined!</div>;
  }
  if (!token) {
    return <div>Token is not defined!</div>;
  }

  let campaign: Campaign | null = null;
  let error: string | null = null;
  try {
    campaign = await getCampaignById(url, token, id);
  } catch (e: any) {
    error = e.message;
  }

  if (error) return <div>Error: {error}</div>;
  if (!campaign) return <div>Not found</div>;

  return <CampaignDetail campaign={campaign} />;
}
