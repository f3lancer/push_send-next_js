import CampaignNewFetcher from "@/components/Campaign/CampaignNewFetcher/CampaignNewFetcher";

export default function Page() {
  return (
    <main className="main">
      <div className="topbar">
        <h1>Create Company</h1>
        <button>Exit</button>
      </div>
      <CampaignNewFetcher />
    </main>
  );
}
