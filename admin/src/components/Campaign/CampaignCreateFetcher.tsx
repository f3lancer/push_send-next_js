"use server";
import { postCampaign } from "push-api-client";
import type { Campaign } from "push-api-client";
import { getCampaign } from "@/utils/getCampaign";

export async function createCampaignOnServer(data: {
  name: string;
  tags: string[];
  title: string;
  body: string;
  click_url: string;
}): Promise<Campaign> {
  const { token, url } = getCampaign();

  return await postCampaign(url, token, data);
}
