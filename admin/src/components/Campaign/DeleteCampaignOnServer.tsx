"use server";
import { deleteItem } from "push-api-client";
import { getCampaign } from "@/utils/getCampaign";

export async function DeleteCampaignOnServer(id: string) {
  const { token, url } = getCampaign();
  return await deleteItem(url, token, id);
}
