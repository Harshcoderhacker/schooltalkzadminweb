import schoolData from "@/data/schoolData";
import Table from "@/ui/Table";
import { useState } from "react";

interface schoolFilteredData {
  contact_name: string;
  created_at: string;
  email: string;
  id: string;
  isActive: false;
  location: string;
  name: string;
  phone: string;
  subdomain_alloted: string;
  updated_at: string;
}
interface col {
  Header: string;
  accessor: string;
}

const columns: col[] = [
  {
    Header: "",
    accessor: "isActive",
  },
  {
    Header: "School Code",
    accessor: "id",
  },
  {
    Header: "School Name",
    accessor: "name",
  },
  {
    Header: "Domain",
    accessor: "subdomain_alloted",
  },
  {
    Header: "Contact Name",
    accessor: "contact_name",
  },
  {
    Header: "Email ID",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "More",
    accessor: "a",
  },
];

const SchoolTable = ({
  schoolFilteredData,
}: {
  schoolFilteredData: schoolFilteredData[];
}) => {
  console.log(schoolFilteredData);
  return <Table columns={columns} data={schoolFilteredData} />;
};

export default SchoolTable;
