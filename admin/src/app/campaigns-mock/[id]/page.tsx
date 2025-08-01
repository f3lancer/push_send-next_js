import CampaignDetailFetcherMock from "@/components/Mocks/CampaignDetailFetcherMock";

export default function Page() {
  return (
    <main className="main">
      <div className="topbar">
        <h1>Campaign Info</h1>
      </div>
      <CampaignDetailFetcherMock />
    </main>
  );
}
