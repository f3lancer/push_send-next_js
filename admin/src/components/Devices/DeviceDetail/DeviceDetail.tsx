"use client";
import type { Device } from "push-api-client";
import { Button } from "inputs-and-buttons";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { DeleteDevicesOnServer } from "@/components/Devices/DeleteDeviceOnServer/DeleteDeviceOnServer";

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
  return (
    <main className="main">
      <section className="bg-[#fafafa] border border-[#eee] rounded-lg p-6 mb-7 max-w-[600px]">
        <div className="mb-3">
          <span className="block mb-1 font-medium">ID:</span>
          <div className="w-full px-2 py-1 bg-white border border-[#ccc] rounded text-xs text-gray-600">
            {device._id}
          </div>
        </div>

        <div className="mb-3">
          <span className="block mb-1 font-medium">Device Token:</span>
          <div className="w-full px-2 py-1 bg-white border border-[#ccc] rounded break-all">
            {device.device_token}
          </div>
        </div>

        <div className="mb-3">
          <span className="block mb-1 font-medium">Platform:</span>
          <div className="w-full px-2 py-1 bg-white border border-[#ccc] rounded">
            {device.platform}
          </div>
        </div>

        <div className="mb-3">
          <span className="block mb-1 font-medium">User ID:</span>
          <div className="w-full px-2 py-1 bg-white border border-[#ccc] rounded">
            {device.user_id}
          </div>
        </div>

        <div className="mb-3">
          <span className="block mb-1 font-medium">Email:</span>
          <div className="w-full px-2 py-1 bg-white border border-[#ccc] rounded">
            {device.email}
          </div>
        </div>

        <div className="mb-3">
          <span className="block mb-1 font-medium">Tags:</span>
          <div className="w-full px-2 py-1 bg-white border border-[#ccc] rounded text-xs text-blue-700">
            {device.tags?.join(", ")}
          </div>
        </div>

        <div className="mb-3">
          <span className="block mb-1 font-medium">Undelivered:</span>
          <div className="w-full px-2 py-1 bg-white border border-[#ccc] rounded">
            {device.undelivered ? "Yes" : "No"}
          </div>
        </div>

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
