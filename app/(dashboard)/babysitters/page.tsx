"use client";

import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
import { nanniesData } from "@/app/lib/data";
import { useRouter } from "next/navigation";

type Babystter = {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  description: string;
  experienceYears: number;
  hourlyRate: number;
  rating: {
    average: number;
    reviewsCount: number;
  };
  photoUrl: string;
  contact: {
    phone: string;
    email: string;
  };
  createdAt: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Babbysitter ID",
    accessor: "nannyId",
    className: "hidden md:table-cell",
  },
  {
    header: "City",
    accessor: "city",
    className: "hidden md:table-cell",
  },
  {
    header: "Experience",
    accessor: "experienceYears",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Price",
    accessor: "hourlyRate",
    className: "hidden lg:table-cell",
  },
  {
    header: "Rating",
    accessor: "averageRating",
  },
];

const ListPage = () => {
  const navigate = useRouter();

  const renderRow = (item: Babystter) => (
    <tr
      key={item._id}
      className="hover:bg-lamaPurpleLight cursor-pointer border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-slate-200"
      onClick={() => {
        navigate.push(`/babysitters/${item._id}`);
      }}
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photoUrl}
          alt="Nanny Photo"
          width={40}
          height={40}
          className="h-17 w-17 rounded-full object-cover md:hidden xl:block"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">
            {item.firstName + " " + item.lastName}
          </h3>
          <p className="text-xs text-gray-500">{item?.contact.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item._id}</td>
      <td className="hidden md:table-cell">{item.city}</td>
      <td className="hidden md:table-cell">
        {item.experienceYears}
        {item.experienceYears > 1 ? " years" : " year"}
      </td>
      <td className="hidden md:table-cell">{item.contact.phone}</td>
      <td className="hidden md:table-cell">{item.hourlyRate}</td>
      <td className="hidden md:table-cell">{item.rating.average}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="bg-lamaSky flex h-7 w-7 items-center justify-center rounded-full">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link> */}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">
          All Babbysitters
        </h1>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row"></div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={nanniesData} />
    </div>
  );
};

export default ListPage;
