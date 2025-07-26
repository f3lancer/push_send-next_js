"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Input } from "inputs-and-buttons";

export default function Filter() {
  const [tags, setTags] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    params.set("tags", tags);
    params.set("name", name);

    router.push(`?${params.toString()}`);
  };

  return (
    <form className="flex items-center gap-3 my-6" onSubmit={handleSubmit}>
      <div className="f">
        <Input onChange={(e) => setTags(e.target.value)} label="Tags" />
      </div>
      <div className="f">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name:"
        />
      </div>
      <Button
        className="mb-[5px]"
        type="submit"
        disabled={false}
        variant="secondary"
      >
        Enter
      </Button>
    </form>
  );
}
