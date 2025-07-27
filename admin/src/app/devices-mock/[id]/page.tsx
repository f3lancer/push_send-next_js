import DeviceDetailFetcherMock from "@/components/Mocks/DeviceDetailFetcherMock";

export default function Page() {
  return (
    <main className="main">
      <div className="topbar">
        <h1>Devices Info</h1>
      </div>
      <DeviceDetailFetcherMock />
    </main>
  );
}
