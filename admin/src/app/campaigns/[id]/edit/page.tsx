import CampaignEditFetcher from "@/components/Campaign/CampaignEditFetcher/CampaignEditFetcher";

export default async function Page({ params }: { params: any }) {
  const resolvedParams = await params;
  return (
    <main className="main">
      <div className="topbar">
        <h1>Edit Campany </h1>
        {/* <button>Exit</button> */}
      </div>
      <CampaignEditFetcher id={resolvedParams.id} />
    </main>
  );
}
