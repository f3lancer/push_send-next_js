"use server";
import { putCompanies } from "push-api-client";
import type { Campaign } from "push-api-client";

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
  const url = process.env.NEXT_PUBLIC_API_CAMPAIGNS_URL;
  const token = process.env.PUSH_API_TOKEN;

  if (!url) throw new Error("url is not defined!");
  if (!token) throw new Error("Token is not defined!");

  return await putCompanies(url, token, id, data);
}
