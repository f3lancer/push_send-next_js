import { getCompanies } from "push-api-client";

import CampaignsPage from "@/components/Campaign/CampaignsPage";

import { getCampaign } from "@/utils/getCampaign";

export default async function Page({ searchParams }: { searchParams?: any }) {
  const { token, url } = getCampaign();
  const perPage = 10;

  const params = await searchParams;

  const page =
    typeof params.get === "function"
      ? Number(params.get("page") || 1)
      : params?.page
      ? Number(params.page)
      : 1;

  const offset = (page - 1) * perPage;

  const tags =
    typeof params.getAll === "function"
      ? await params.getAll("tags")
      : params?.tags
      ? Array.isArray(params.tags)
        ? params.tags
        : [params.tags]
      : [];

  const name =
    typeof params.get === "function"
      ? (await params.get("name")) || ""
      : params?.name || "";

  let data;
  try {
    data = await getCompanies(url, token, perPage, offset, tags, name);
  } catch (e: any) {
    return <div>Error: {e.message}</div>;
  }

  return (
    <main className="main">
      <div className="topbar">
        <h1>List of Companies</h1>
        {/* <button>Exit</button> */}
      </div>
      <CampaignsPage
        companies={data.items}
        total={data.total}
        offset={data.offset}
      />
    </main>
  );
}
