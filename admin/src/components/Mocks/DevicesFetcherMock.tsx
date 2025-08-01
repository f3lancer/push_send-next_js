"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import DevicesPage from "@/components/Devices/DevicesPage";

type Device = {
  _id: string;
  email: string;
  user_id: string;
  platform: string;
};

type ApiResponse = {
  total: number;
  offset: number;
  items: Device[];
};

export default function DevicesFetcherMock() {
  const searchParams = useSearchParams();
  const perPage = 10;

  const page = Number(searchParams.get("page") || "1");
  const email = searchParams.get("email") || "";
  const userId = searchParams.get("user_id") || "";
  const platform = searchParams.get("platform") || "";
  const tags = searchParams.get("tags") || "";
  const deviceToken = searchParams.get("device_token") || "";

  const offset = (page - 1) * perPage;

  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const query = new URLSearchParams();
    query.set("page", String(page));
    query.set("perPage", String(perPage));
    if (email) query.set("email", email);
    if (userId) query.set("user_id", userId);
    if (platform) query.set("platform", platform);
    if (tags) query.set("tags", tags);
    if (deviceToken) query.set("device_token", deviceToken);

    fetch(`/api/devices?${query.toString()}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setData({ total: 0, items: [], offset: 0 }));
  }, [page, email, userId, platform, tags, deviceToken]);

  if (!data) return <div>Loading...</div>;

  return (
    <DevicesPage devices={data.items} total={data.total} offset={data.offset} />
  );
}
