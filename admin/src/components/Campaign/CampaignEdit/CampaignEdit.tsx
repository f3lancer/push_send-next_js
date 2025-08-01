"use client";
import { useState, useTransition } from "react";
import { Button, Input } from "inputs-and-buttons";
import type { Campaign } from "push-api-client";
import { updateCampaignOnServer } from "@/components/Campaign/CampaignUpdateFetcher/CampaignUpdateFetcher";

export default function CampaignEdit({ campaign }: { campaign: Campaign }) {
  const [name, setName] = useState(campaign.name || "");
  const [title, setTitle] = useState(campaign.title || "");
  const [body, setBody] = useState(campaign.body || "");
  const [clickUrl, setClickUrl] = useState(campaign.click_url || "");
  const [tags, setTags] = useState((campaign.tags || []).join(", "));

  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = {
      name,
      title,
      body,
      click_url: clickUrl,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    startTransition(async () => {
      try {
        await updateCampaignOnServer(campaign._id, dataToSend);
        setSuccess(true);
      } catch (error: any) {
        alert("Error update: " + (error?.message || error));
      }
    });
  };

  return (
    <main className="main">
      <form
        onSubmit={handleSubmit}
        className="bg-[#fafafa] border border-[#eee] rounded-lg p-6 mb-7 max-w-[600px]"
      >
        <div className="mb-3">
          <span className="block mb-1 font-medium">ID:</span>
          <div className="w-full px-2 py-1 bg-white border border-[#ccc] rounded text-xs text-gray-600">
            {campaign._id}
          </div>
        </div>

        <div className="mt-[24px] top-3">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText=""
            errorText="String must contain at least 2 character(s)"
          />
        </div>
        <div className="mt-[24px] top-3">
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            helperText=""
            errorText="String must contain at least 2 character(s)"
          />
        </div>
        <div className="mt-[24px] top-3">
          <Input
            label="Text:"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            helperText=""
            errorText="String must contain at least 2 character(s)"
          />
        </div>
        <div className="mt-[24px] top-3">
          <Input
            label="Link:"
            value={clickUrl}
            onChange={(e) => setClickUrl(e.target.value)}
            helperText=""
            errorText="String must contain at least 2 character(s)"
          />
        </div>
        <div className="mt-[24px] top-3">
          <Input
            label="Tags:"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            helperText=""
            errorText="String must contain at least 2 character(s)"
          />
        </div>

        <div className="flex gap-8 text-sm text-gray-500 mb-1">
          <div>
            <span className="font-medium">Status:</span> {campaign.status}
          </div>
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
        <div className="flex gap-8 text-sm text-gray-400">
          <div className="w-full mt-3">
            <Button disabled={isPending} variant="primary" type="submit">
              {isPending ? "Updating..." : "Update"}
            </Button>
            {success && (
              <div className="text-green-600 mt-2">
                Campaign successfully updated!
              </div>
            )}
          </div>
        </div>
      </form>
    </main>
  );
}
