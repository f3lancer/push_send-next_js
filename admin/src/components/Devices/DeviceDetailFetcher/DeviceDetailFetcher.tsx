import { getDeviceById } from "push-api-client";
import type { Device } from "push-api-client";
import DeviceDetail from "@/components/Devices/DeviceDetail/DeviceDetail";

export default async function DeviceDetailFetcher({ id }: { id: string }) {
  const url = process.env.NEXT_PUBLIC_API_DEVICES_URL;
  const token = process.env.PUSH_API_TOKEN;

  if (!url) {
    return <div>url is not defined!</div>;
  }
  if (!token) {
    return <div>Token is not defined!</div>;
  }

  let device: Device | null = null;
  let error: string | null = null;
  try {
    device = await getDeviceById(url, token, id);
  } catch (e: any) {
    error = e.message;
  }

  if (error) return <div>Error: {error}</div>;
  if (!device) return <div>Not found</div>;

  return <DeviceDetail device={device} />;
}
