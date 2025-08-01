import React, { useState } from "react";
import DeviceImport from "@/components/Devices/DeviceImport";
import FilterDevise from "@/components/Devices/DevicesFilter";
import { Button } from "inputs-and-buttons";

export default function DevicesToolbar({ onFilter }) {
  const [openTab, setOpenTab] = useState<null | "import" | "filter">(null);

  const handleTabClick = (tab: "import" | "filter") => {
    setOpenTab((prev) => (prev === tab ? null : tab));
  };

  return (
    <div className="mb-4">
      <div className="flex gap-2 mb-4">
        <Button
          variant={openTab === "import" ? "primary" : "secondary"}
          onClick={() => handleTabClick("import")}
        >
          Open Import
        </Button>
        <Button
          variant={openTab === "filter" ? "primary" : "secondary"}
          onClick={() => handleTabClick("filter")}
        >
          Open Filter
        </Button>
      </div>
      <div className="bg-white  rounded-b-lg ">
        {openTab === "import" && <DeviceImport />}
        {openTab === "filter" && <FilterDevise onFilter={onFilter} />}
      </div>
    </div>
  );
}
