import React from "react";

const Competency = () => {
  const competencyData = [
    {
      point: "Amazon Web Services (Solution Architect Associate: C03)",
    },
    {
      point: "Database Management Systems",
    },
    {
      point: "Data Structures and Algortihms in Java",
    },
    {
      point: "Object Oriented Programming Methodology",
    },
  ];
  return (
    <div className="rounded-xl bg-slate-200 w-full flex flex-col md:flex-row justify-between gap-16 md:gap-8 my-14 shadow-lg px-2 py-8">
      <div className="w-full">
        <h2 className="text-[#004aad] h-full text-5xl font-bold flex justify-center items-center">
          Competency
        </h2>
      </div>
      <div className="w-full flex justify-center items-center">
      <div className="w-full bg-blue-500 rounded-xl p-3">
        <ul className="list-inside">
          {competencyData.map((data, index) => (
            <li key={index} className="list-disc text-white text-lg">
              {data.point}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Competency;
