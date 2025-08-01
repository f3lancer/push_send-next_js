import DeviceDetailFetcher from "@/components/Devices/DeviceDetailFetcher/DeviceDetailFetcher";
export default async function Page({ params }: { params: any }) {
  const resolvedParams = await params;
  return (
    <main className="main">
      <div className="topbar">
        <h1>Campany Info</h1>
        {/* <button>Exit</button> */}
      </div>
      <DeviceDetailFetcher id={resolvedParams.id} />
    </main>
  );
}
