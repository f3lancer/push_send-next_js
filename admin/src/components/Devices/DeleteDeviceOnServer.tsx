"use server";
import { deleteItem } from "push-api-client";
import { getDeviceApiEnv } from "@/utils/getDevice";

export async function DeleteDevicesOnServer(id: string) {
  const { token, url } = getDeviceApiEnv();
  return await deleteItem(url, token, id);
}
