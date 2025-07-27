import DevicesFetcher from "@/components/Mocks/DevicesFetcherMock";

export default function Page({ searchParams }: { searchParams?: any }) {
  return (
    <main className="main">
      <div className="topbar">
        <h1>List of Devices</h1>
        {/* <button>Exit</button> */}
      </div>
      <DevicesFetcher searchParams={searchParams} />
    </main>
  );
}
