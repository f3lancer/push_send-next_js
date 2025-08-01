import { getCampaignById } from "push-api-client";
import CampaignEdit from "@/components/Campaign/CampaignEdit";
import { getCampaign } from "@/utils/getCampaign";

export default async function Page({ params }: { params: any }) {
  const { token, url } = getCampaign();

  const resolvedParams = await params;
  const id = resolvedParams.id;

  let campaign = null;
  let error = null;

  try {
    campaign = await getCampaignById(url, token, id);
  } catch (e: any) {
    error = e.message;
  }

  if (error) return <div>Error: {error}</div>;
  if (!campaign) return <div>Not found</div>;

  return (
    <main className="main">
      <div className="topbar">
        <h1>Edit Campany </h1>
        {/* <button>Exit</button> */}
      </div>
      <CampaignEdit campaign={campaign} />
    </main>
  );
}
