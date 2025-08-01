"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DeviceDetail from "@/components/Mocks/DeviceDetailMock";
import { DeleteDevicesOnServerMock } from "@/components/Mocks/DeleteDeviceOnServerMock";

type Device = {
  _id: string;
  device_token: string;
  platform: string;
  user_id: string;
  email: string;
  tags: string[];
  undelivered: boolean;
  created_at: string;
  updated_at: string;
};

export default function DeviceDetailFetcherMock() {
  const params = useParams();
  const id =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : "";

  const [device, setDevice] = useState<Device | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      setError(true);
      return;
    }

    fetch(`/api/devices/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(setDevice)
      .catch(() => setError(true));
  }, [id]);

  if (error) return <div>Failed to load device</div>;
  if (!device) return <div>Loading...</div>;

  return <DeviceDetail device={device} onDelete={DeleteDevicesOnServerMock} />;
}
