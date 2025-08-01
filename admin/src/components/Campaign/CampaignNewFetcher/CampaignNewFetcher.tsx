import type { Campaign } from "push-api-client";
import CampaignNew from "@/components/Campaign/CampaignNew/CampaignNew";

export default async function CampaignNewFetcher() {
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
  } catch (e: any) {
    error = e.message;
  }

  if (error) return <div>Error: {error}</div>;
  if (!campaign) {
    return <CampaignNew />;
  }

  return null;
}
