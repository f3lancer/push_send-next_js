import { getDevices } from "push-api-client";
import DevicesPage from "@/components/Devices/DevicesPage";

import { getDeviceApiEnv } from "@/utils/getDevice";

export default async function Page({ searchParams }: { searchParams?: any }) {
  const { token, url } = getDeviceApiEnv();

  const params = await searchParams;

  const perPage = 10;

  const page =
    typeof params.get === "function"
      ? Number(params.get("page") || 1)
      : params?.page
      ? Number(params.page)
      : 1;

  const offset = (page - 1) * perPage;
  const tags =
    typeof params.getAll === "function"
      ? await params.getAll("tags")
      : params?.tags
      ? Array.isArray(params.tags)
        ? params.tags
        : [params.tags]
      : [];

  const email =
    typeof params.get === "function"
      ? (await params.get("email")) || ""
      : params?.email || "";

  const device_token =
    typeof params.get === "function"
      ? (await params.get("device_token")) || ""
      : params?.device_token || "";

  const platform =
    typeof params.get === "function"
      ? (await params.get("platform")) || ""
      : params?.platform || "";

  const user_id =
    typeof params.get === "function"
      ? (await params.get("user_id")) || ""
      : params?.user_id || "";

  let data;
  try {
    data = await getDevices(
      url,
      token,
      perPage,
      offset,
      tags,
      email,
      device_token,
      platform,
      user_id
    );
  } catch (e: any) {
    return <div>Error: {e.message}</div>;
  }

  return (
    <main className="main">
      <div className="topbar">
        <h1>List of Devices</h1>
        {/* <button>Exit</button> */}
      </div>
      <DevicesPage
        devices={data.items}
        total={data.total}
        offset={data.offset}
      />
    </main>
  );
}
