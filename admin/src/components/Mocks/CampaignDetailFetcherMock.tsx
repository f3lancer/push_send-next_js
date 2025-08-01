"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CampaignDetailMock from "@/components/Mocks/CampaignsDetailMock";
import { DeleteCompaingsOnServerMock } from "@/components/Mocks/DeleteCompaingsOnServerMock";
import { RunCampaignOnServerMock } from "@/components/Mocks/RunCampaignOnServerMock";

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

export default function CampaignDetailFetcherMock() {
  const params = useParams();
  const id =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : "";

  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      setError(true);
      return;
    }

    fetch(`/api/campaigns/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(setCampaign)
      .catch(() => setError(true));
  }, [id]);

  if (error) return <div>Failed to load campaign</div>;
  if (!campaign) return <div>Loading...</div>;

  return (
    <CampaignDetailMock
      campaign={campaign}
      onDelete={DeleteCompaingsOnServerMock}
      onRun={RunCampaignOnServerMock}
    />
  );
}
