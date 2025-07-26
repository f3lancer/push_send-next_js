import { Button } from "inputs-and-buttons";

export default function Home() {
  return (
    <main className="main">
      <div className="topbar">
        <h1>Admin panel</h1>
        <div className="exit w-max">
          <Button disabled={false} variant="secondary">
            Exit
          </Button>
        </div>
      </div>
    </main>
  );
}
