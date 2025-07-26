"use server";
import { runCampaign } from "push-api-client";

export async function RunCampaignOnServer(id: string) {
  const url = process.env.NEXT_PUBLIC_API_CAMPAIGNS_URL!;
  const token = process.env.PUSH_API_TOKEN!;
  return await runCampaign(url, token, id);
}
