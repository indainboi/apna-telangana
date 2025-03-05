import React from "react";
import PageHeader from "../components/PageHeader";

const SoilReport = () => {
  const soilReportButtons = [
    { id: 1, name: "Area Soil Report" },
    { id: 2, name: "Book Soil Test" },
  ];
  return (
    <div>
      <PageHeader title={"Soil Report"} to={"/crop-advisory"} />

      <div className="flex justify-between gap-2">
        {soilReportButtons.map((button) => (
          <div
            key={button.id}
            className="w-full p-5 border border-solid rounded-lg text-center"
          >
            <span>{button.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoilReport;
