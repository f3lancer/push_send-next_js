import CampaignsFetcher from "@/components/Campaign/CampaignsFetcher/CampaignsFetcher";

export default function Page({ searchParams }: { searchParams?: any }) {
  return (
    <main className="main">
      <div className="topbar">
        <h1>List of Companies</h1>
        {/* <button>Exit</button> */}
      </div>
      <CampaignsFetcher searchParams={searchParams} />
    </main>
  );
}
