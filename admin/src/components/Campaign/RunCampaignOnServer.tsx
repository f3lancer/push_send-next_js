"use server";
import { runCampaign } from "push-api-client";
import { getCampaign } from "@/utils/getCampaign";

export async function RunCampaignOnServer(id: string) {
  const { token, url } = getCampaign();
  return await runCampaign(url, token, id);
}
