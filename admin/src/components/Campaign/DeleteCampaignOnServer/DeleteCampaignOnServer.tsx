"use server";
import { deleteCampaign } from "push-api-client";

export async function DeleteCampaignOnServer(id: string) {
  const url = process.env.NEXT_PUBLIC_API_CAMPAIGNS_URL!;
  const token = process.env.PUSH_API_TOKEN!;
  return await deleteCampaign(url, token, id);
}
