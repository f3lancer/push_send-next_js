import { getCompanies } from "push-api-client";
import CampaignsPage from "@/components/Campaign/CampaignsPage/CampaignsPage";

export default async function CampaignsFetcher({ searchParams }) {
  const params = await searchParams;

  const token = process.env.PUSH_API_TOKEN;
  const url = process.env.NEXT_PUBLIC_API_CAMPAIGNS_URL;

  const perPage = 10;

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

  if (!url) {
    return <div>url is not defined!</div>;
  }
  if (!token) {
    return <div>Token is not defined!</div>;
  }

  let data;
  try {
    data = await getCompanies(url, token, perPage, offset, tags, name);
  } catch (e: any) {
    return <div>Error: {e.message}</div>;
  }

  return (
    <CampaignsPage
      companies={data.items}
      total={data.total}
      offset={data.offset}
    />
  );
}
