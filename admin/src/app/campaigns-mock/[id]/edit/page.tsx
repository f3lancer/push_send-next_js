import CampaignEditFetcherMock from "@/components/Mocks/CampaignEditFetcherMock";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="main">
      <div className="topbar">
        <h1>Edit Campaign</h1>
      </div>
      <CampaignEditFetcherMock />
    </main>
  );
}
