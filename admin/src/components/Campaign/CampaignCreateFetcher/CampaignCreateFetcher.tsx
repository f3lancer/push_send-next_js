"use server";
import { postCampaign } from "push-api-client";
import type { Campaign } from "push-api-client";

export async function createCampaignOnServer(data: {
  name: string;
  tags: string[];
  title: string;
  body: string;
  click_url: string;
}): Promise<Campaign> {
  const url = process.env.NEXT_PUBLIC_API_CAMPAIGNS_URL;
  const token = process.env.PUSH_API_TOKEN;

  if (!url) throw new Error("url is not defined!");
  if (!token) throw new Error("Token is not defined!");

  return await postCampaign(url, token, data);
}
