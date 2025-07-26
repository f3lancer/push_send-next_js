import React, { useState } from "react";
import type { importDevices } from "push-api-client";
import { Button } from "inputs-and-buttons";

export default function DeviceImport() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    if (!file) return;
    try {
      const result = await importDevices(
        process.env.NEXT_PUBLIC_API_DEVICES_IMPORT_URL!,
        process.env.PUSH_API_TOKEN!,
        file
      );
      alert("Import successful!");
      console.log(result);
    } catch (e: any) {
      alert("Error: " + (e?.message || e));
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <Button onClick={handleUpload} disabled={!file} variant="primary">
        Upload
      </Button>
    </div>
  );
}
