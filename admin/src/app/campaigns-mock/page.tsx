import CampaignsFetcher from "@/components/Mocks/CampaignsFetcherMock";

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
