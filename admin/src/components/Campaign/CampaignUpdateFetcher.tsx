"use server";
import { putCompanies } from "push-api-client";
import type { Campaign } from "push-api-client";
import { getCampaign } from "@/utils/getCampaign";

console.log(putCompanies);

export async function updateCampaignOnServer(
  id: string,
  data: {
    name: string;
    tags: string[];
    title: string;
    body: string;
    click_url: string;
  }
): Promise<Campaign> {
  const { token, url } = getCampaign();

  return await putCompanies(url, token, id, data);
}
