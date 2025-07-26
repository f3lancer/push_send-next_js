"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "inputs-and-buttons";
import Filter from "@/components/Campaign/Filter/Filter";
import type { Campaign } from "push-api-client/src/types";

type CampaignsPageProps = {
  companies: Campaign[];
  total: number;
  offset: number;
};

function getPagination(current: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [];
  if (current > 3) pages.push(1);
  if (current > 4) pages.push("...");
  for (
    let i = Math.max(1, current - 1);
    i <= Math.min(total, current + 1);
    i++
  ) {
    pages.push(i);
  }
  if (current < total - 3) pages.push("...");
  if (current < total - 2) pages.push(total);
  return pages;
}

function getPaginationLinkParams(searchParams: URLSearchParams, page: number) {
  const params = new URLSearchParams(searchParams.toString());
  params.set("page", String(page));
  return params.toString();
}

export default function CampaignsPage({
  companies,
  total,
  offset,
}: CampaignsPageProps) {
  const perPage =
    companies.length > 0
      ? Math.max(1, Math.round(total / Math.ceil(total / companies.length)))
      : 1;

  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Math.floor((offset ?? 0) / perPage) + 1;
  const pagesCount = Math.ceil(total / perPage);
  const pagination = getPagination(currentPage, pagesCount);

  const handleFilter = (tags: string, name: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (tags) params.set("tags", tags);
    else params.delete("tags");

    if (name) params.set("name", name);
    else params.delete("name");

    params.set("page", "1");

    router.push(`?${params.toString()}`);
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">List Companies</h2>
      <p className="mb-2 text-gray-600">Total: {total}</p>
      <Filter onFilter={handleFilter} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((cmp, idx) => (
              <tr key={cmp._id} className="border-t">
                <td className="py-2 px-4">{offset + idx + 1}</td>
                <td className="py-2 px-4">{cmp.name ?? cmp._id}</td>
                <td className="py-2 px-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/campaigns/${cmp._id}`}>
                      <Button disabled={false} variant="secondary">
                        Info
                      </Button>
                    </Link>
                    <Link href={`/campaigns/${cmp._id}/edit`}>
                      <Button disabled={false} variant="secondary">
                        Edit
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagesCount > 1 && (
        <div className="flex items-center gap-2 mt-6 justify-center">
          {pagination.map((p, idx) =>
            p === "..." ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 text-gray-400 select-none"
              >
                ...
              </span>
            ) : (
              <Link
                key={`page-${p}`}
                href={`?${getPaginationLinkParams(searchParams, p)}`}
                className={`px-3 py-1 rounded-lg border transition ${
                  p === currentPage
                    ? "bg-blue-600 text-white border-blue-600 font-bold"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {p}
              </Link>
            )
          )}
        </div>
      )}
    </section>
  );
}

// "use client";
// import { useState } from "react";
// import Filter from "@/components/Campaign/Filter/Filter";
// import Link from "next/link";
// import { Button } from "inputs-and-buttons";

// export default function CampaignsPage({ companies }) {
//   const perPage = 10;
//   const [page, setPage] = useState(1);

//   const [filterTags, setFilterTags] = useState("");
//   const [filterName, setFilterName] = useState("");

//   const handleFilter = (tags, name) => {
//     setFilterTags(tags);
//     setFilterName(name);
//     setPage(1);
//   };

//   const filteredCompanies = companies.filter(
//     (cmp) =>
//       (filterTags === "" || cmp.tags?.includes(filterTags)) &&
//       (filterName === "" ||
//         cmp.name?.toLowerCase().includes(filterName.toLowerCase()))
//   );

//   const totalPages = Math.ceil(filteredCompanies.length / perPage);
//   const pageCompanies = filteredCompanies.slice(
//     (page - 1) * perPage,
//     page * perPage
//   );

//   return (
//     <section className="w-full">
//       <h2>List Companies</h2>
//       <Filter onFilter={handleFilter} />
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pageCompanies.map((campaign, i) => (
//             <tr key={campaign._id}>
//               <td>{(page - 1) * perPage + i + 1}</td>
//               <td>{campaign.name ?? campaign.name ?? campaign._id}</td>
//               <td>
//                 <div className="flex w-full gap-2 justify-end">
//                   <Link href={`/campaigns/${campaign._id}`}>
//                     <Button disabled={false} variant="secondary">
//                       Info
//                     </Button>
//                   </Link>
//                   <Link href={`/campaigns/${campaign._id}/edit`}>
//                     <Button disabled={false} variant="secondary">
//                       Edit
//                     </Button>
//                   </Link>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {totalPages > 1 && (
//         <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
//           <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
//             Previous
//           </button>
//           <span>
//             Page {page} of {totalPages}
//           </span>
//           <button
//             onClick={() => setPage(page + 1)}
//             disabled={page >= totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }
