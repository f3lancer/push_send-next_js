import CampaignNew from "@/components/Campaign/CampaignNew";

export default async function Page() {
  return (
    <main className="main">
      <div className="topbar">
        <h1>Create Company</h1>
        {/* <button>Exit</button> */}
      </div>
      <CampaignNew />
    </main>
  );
}
