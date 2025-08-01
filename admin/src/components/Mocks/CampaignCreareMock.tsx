"use client";
import { useState, useTransition } from "react";
import { Button, Input } from "inputs-and-buttons";
import { useRouter } from "next/navigation";

export default function CampaignCreareMock() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [clickUrl, setClickUrl] = useState("");
  const [tags, setTags] = useState("");
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = {
      name,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      title,
      body,
      click_url: clickUrl,
    };

    setSuccess(false);

    startTransition(async () => {
      try {
        const res = await fetch("/api/campaigns", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        if (json && json._id) {
          router.push(`/campaigns-mock/${json._id}/edit`);
        } else {
          setSuccess(true);
        }
      } catch (error: any) {
        console.log("Error create:", error?.message || error);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#fafafa] border border-[#eee] rounded-lg p-6 mb-7 max-w-[600px]"
    >
      <div className="mt-[24px]">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          label="Text:"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          label="Link:"
          value={clickUrl}
          onChange={(e) => setClickUrl(e.target.value)}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          label="Tags (comma separated):"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <div className="w-full mt-3">
        <Button disabled={isPending} variant="primary" type="submit">
          {isPending ? "Creating..." : "Create"}
        </Button>
        {success && (
          <div className="text-green-600 mt-2">
            Campaign successfully created!
          </div>
        )}
      </div>
    </form>
  );
}
