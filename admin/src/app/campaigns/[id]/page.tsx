import CampaignDetailFetcher from "@/components/Campaign/CampaignDetailFetcher/CampaignDetailFetcher";

export default async function Page({ params }: { params: any }) {
  const resolvedParams = await params;
  return (
    <main className="main">
      <div className="topbar">
        <h1>Campany Info</h1>
        <button>Вийти</button>
      </div>
      <CampaignDetailFetcher id={resolvedParams.id} />
    </main>
  );
}
