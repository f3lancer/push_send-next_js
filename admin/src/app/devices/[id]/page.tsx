import { getDeviceById } from "push-api-client";
import DeviceDetail from "@/components/Devices/DeviceDetail";
import { getDeviceApiEnv } from "@/utils/getDevice";

const { token, url } = getDeviceApiEnv();

export default async function Page({ params }: { params: any }) {
  const { token, url } = getDeviceApiEnv();

  const resolvedParams = await params;
  const id = resolvedParams.id;

  let device = null;
  let error = null;

  try {
    device = await getDeviceById(url, token, id);
  } catch (e: any) {
    error = e.message;
  }

  if (error) return <div>Error: {error}</div>;
  if (!device) return <div>Not found</div>;

  return (
    <main className="main">
      <div className="topbar">
        <h1>Campany Info</h1>
        {/* <button>Exit</button> */}
      </div>
      <DeviceDetail device={device} />
    </main>
  );
}
