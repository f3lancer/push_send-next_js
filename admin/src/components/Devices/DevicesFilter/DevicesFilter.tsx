// components/Devices/FilterDevise.tsx
"use client";
import React, { useState } from "react";
import { Button, Input } from "inputs-and-buttons";

export type DeviceFilters = {
  email: string;
  userId: string;
  platform: string;
  tags: string;
  deviceToken: string;
};

type Props = {
  onFilter: (filters: DeviceFilters) => void;
};

const FilterDevise: React.FC<Props> = ({ onFilter }) => {
  const [filters, setFilters] = useState<DeviceFilters>({
    email: "",
    userId: "",
    platform: "",
    tags: "",
    deviceToken: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    const cleared = {
      email: "",
      userId: "",
      platform: "",
      tags: "",
      deviceToken: "",
    };
    setFilters(cleared);
    onFilter(cleared);
  };

  return (
    <form className="flex gap-4 flex-wrap mb-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 justify-items-stretch w-full gap-x-6 gap-y-2.5 px-1  pt-4">
        <Input
          name="email"
          label="Email"
          errorText="String must contain at least 2 character(s)"
          onChange={handleChange}
          value={filters.email}
        />
        <Input
          name="userId"
          label="UserId"
          onChange={handleChange}
          errorText="String must contain at least 2 character(s)"
          value={filters.userId}
        />
        <Input
          name="platform"
          label="Platform"
          onChange={handleChange}
          value={filters.platform}
        />
        <Input
          name="tags"
          label="Tags"
          onChange={handleChange}
          value={filters.tags}
        />
        <Input
          name="deviceToken"
          label="DeviceToken"
          onChange={handleChange}
          value={filters.deviceToken}
        />
      </div>
      <Button type="submit" disabled={false} variant="secondary">
        Filter
      </Button>
      <Button
        type="button"
        disabled={false}
        variant="secondary"
        onClick={handleReset}
      >
        Reset
      </Button>
    </form>
  );
};

export default FilterDevise;
