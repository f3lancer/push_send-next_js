"use client";
import type { Device } from "push-api-client";
import { Button } from "inputs-and-buttons";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { DeleteDevicesOnServer } from "@/components/Devices/DeleteDeviceOnServer";

export default function DeviceDetail({ device }: { device: Device }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleDelete = () => {
    startTransition(async () => {
      try {
        await DeleteDevicesOnServer(device._id);
        router.push("/devices");
      } catch (e: any) {
        console.log("Error run: " + (e?.message || e));
      }
    });
  };
  const deviceInfo = [
    { label: "ID", value: device._id, className: "text-xs text-gray-600" },
    {
      label: "Device Token",
      value: device.device_token,
      className: "break-all",
    },
    { label: "Platform", value: device.platform },
    { label: "User ID", value: device.user_id },
    { label: "Email", value: device.email },
    {
      label: "Tags",
      value: device.tags?.join(", "),
      className: "text-xs text-blue-700",
    },
    { label: "Undelivered", value: device.undelivered ? "Yes" : "No" },
  ];
  return (
    <main className="main">
      <section className="bg-[#fafafa] border border-[#eee] rounded-lg p-6 mb-7 max-w-[600px]">
        {deviceInfo.map(({ label, value, className = "" }) => (
          <div key={label} className="mb-3">
            <span className="block mb-1 font-medium">{label}:</span>
            <div
              className={`w-full px-2 py-1 bg-white border border-[#ccc] rounded ${className}`}
            >
              {value || "-"}
            </div>
          </div>
        ))}

        <div className="flex gap-8 text-sm text-gray-500 mb-1">
          <div>
            <span className="font-medium">Created at:</span> {device.created_at}
          </div>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <div>
            <span className="font-medium">Updated at:</span> {device.updated_at}
          </div>
        </div>
        <div className="flex gap-8 mt-10">
          <Button disabled={false} variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </section>
    </main>
  );
}
