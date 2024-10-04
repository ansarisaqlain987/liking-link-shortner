"use client";

import LSTable from "../components/LSTable";

const page = () => {
  const tableHead = ["A", "B", "C", "D", "E", "f"];
  const tableBody = [["A", "B", "C", "D", "E", "f"]];
  return (
    <div>
      <LSTable tableHead={tableHead} tableBody={tableBody} />
    </div>
  );
};

export default page;
