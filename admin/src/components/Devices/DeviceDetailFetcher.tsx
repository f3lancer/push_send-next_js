import { getDeviceById } from "push-api-client";
import type { Device } from "push-api-client";
import DeviceDetail from "@/components/Devices/DeviceDetail";
import { getDeviceApiEnv } from "@/utils/getDevice";

export default async function DeviceDetailFetcher({ id }: { id: string }) {
  const { token, url } = getDeviceApiEnv();

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
