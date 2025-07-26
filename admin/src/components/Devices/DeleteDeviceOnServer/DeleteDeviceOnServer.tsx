"use server";
import { deleteDevice } from "push-api-client";

export async function DeleteDevicesOnServer(id: string) {
  const url = process.env.NEXT_PUBLIC_API_CAMPAIGNS_URL!;
  const token = process.env.PUSH_API_TOKEN!;
  return await deleteDevice(url, token, id);
}
