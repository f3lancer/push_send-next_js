"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import CampaignsPage from "@/components/Campaign/CampaignsPage";

export default function CampaignsFetcherMock() {
  const searchParams = useSearchParams();

  const perPage = 10;

  const page = Number(searchParams.get("page") || "1");
  const name = searchParams.get("name") || "";
  const tags = searchParams.getAll("tags");

  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const query = new URLSearchParams();
    query.set("page", String(page));
    query.set("perPage", String(perPage));
    if (name) query.set("name", name);
    tags.forEach((tag) => query.append("tags", tag));

    fetch(`/api/companies?${query.toString()}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setData({ total: 0, items: [], offset: 0 }));
  }, [page, name, tags.join(",")]);

  if (!data) return <div>Loading...</div>;

  return (
    <CampaignsPage
      companies={data.items}
      total={data.total}
      offset={data.offset}
    />
  );
}
