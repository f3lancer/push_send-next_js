"use client";
import type { Campaign } from "push-api-client";
import { useRouter } from "next/navigation";
import { Button } from "inputs-and-buttons";
import { useTransition, useState } from "react";
import { DeleteCampaignOnServer } from "@/components/Campaign/DeleteCampaignOnServer/DeleteCampaignOnServer";
import { RunCampaignOnServer } from "@/components/Campaign/RunCampaignOnServer/RunCampaignOnServer";

export default function CampaignDetail({ campaign }: { campaign: Campaign }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [localStatus, setLocalStatus] = useState(campaign.status);

  const handleRun = () => {
    if (localStatus !== "new" || isPending) return;

    startTransition(async () => {
      try {
        const resp = await RunCampaignOnServer(campaign._id);
        if (resp && resp.status) {
          setLocalStatus(resp.status);
        } else {
        }
      } catch (e: any) {
        console.log("Error run: " + (e?.message || e));
      }
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await DeleteCampaignOnServer(campaign._id);
        router.push("/campaigns");
      } catch (e: any) {
        console.log("Error run: " + (e?.message || e));
      }
    });
  };
  const campaignInfo = [
    { label: "ID", value: campaign._id, className: "text-xs text-gray-600" },
    { label: "Name", value: campaign.name },
    { label: "Title", value: campaign.title },
    { label: "Text", value: campaign.body, className: "whitespace-pre-line" },
    { label: "Link", value: campaign.click_url, className: "break-all" },
    {
      label: "Tags",
      value: campaign.tags?.join(", "),
      className: "text-xs text-blue-700",
    },
  ];
  return (
    <main className="main">
      <section className="bg-[#fafafa] border border-[#eee] rounded-lg p-6 mb-7 max-w-[600px]">
        <div className="flex gap-8 justify-end">
          <div className="flex-end">
            <Button
              disabled={isPending || localStatus !== "new"}
              variant={localStatus === "new" ? "primary" : "disabled"}
              onClick={handleRun}
            >
              Run
            </Button>
          </div>
        </div>
        {campaignInfo.map(({ label, value, className = "" }) => (
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
            <span className="font-medium">Status:</span> {localStatus}
          </div>
        </div>
        <div className="flex gap-8 text-sm text-gray-500 mb-1">
          <div>
            <span className="font-medium">Data create:</span>
            {campaign.created_at}
          </div>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <div>
            <span className="font-medium">Date update:</span>
            {campaign.updated_at}
          </div>
        </div>

        <div className="flex gap-8 mt-10">
          <Button
            disabled={isPending}
            variant="destructive"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </section>
    </main>
  );
}
