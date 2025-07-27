"use client";
import { useState, useTransition } from "react";
import { Button, Input } from "inputs-and-buttons";

type Campaign = {
  _id: string;
  name: string;
  title: string;
  body: string;
  click_url: string;
  tags: string[];
  status: string;
  created_at: string;
  updated_at: string;
};

type Props = {
  campaign: Campaign;
  onSave: (
    id: string,
    data: Omit<Campaign, "_id" | "status" | "created_at" | "updated_at">
  ) => Promise<any>;
};

export default function CampaignEditMock({ campaign, onSave }: Props) {
  const [name, setName] = useState(campaign.name);
  const [title, setTitle] = useState(campaign.title);
  const [body, setBody] = useState(campaign.body);
  const [clickUrl, setClickUrl] = useState(campaign.click_url);
  const [tags, setTags] = useState(campaign.tags.join(", "));
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
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
        const response = await fetch(`/api/campaigns/${campaign._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to update campaign");
        }

        setSuccess(true);
      } catch (e: any) {
        alert("Error update: " + (e?.message || e));
      }
    });
  };

  return (
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

      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        label="Text:"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Input
        label="Link:"
        value={clickUrl}
        onChange={(e) => setClickUrl(e.target.value)}
      />
      <Input
        label="Tags:"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <div className="flex gap-8 text-sm text-gray-500 mt-4">
        <div>
          <span className="font-medium">Status:</span> {campaign.status}
        </div>
        <div>
          <span className="font-medium">Created at:</span> {campaign.created_at}
        </div>
      </div>

      <div className="flex gap-8 text-sm text-gray-400 mb-4">
        <div>
          <span className="font-medium">Updated at:</span> {campaign.updated_at}
        </div>
      </div>

      <div className="flex gap-8 mt-4">
        <Button disabled={isPending} type="submit" variant="primary">
          {isPending ? "Updating..." : "Update"}
        </Button>
        {success && (
          <div className="text-green-600 mt-2">
            Campaign successfully updated!
          </div>
        )}
      </div>
    </form>
  );
}
