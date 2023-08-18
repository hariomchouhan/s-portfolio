import React from "react";

const Achievements = () => {
  const achievementsData = [
    {
      point: "AWS Certified Solutions Architect Associate: May-2023",
    },
    {
      point: "AWS Certified Cloud Practitioner: Dec-2022",
    },
    {
      point: "UiPath Certified RPA Associate v1.0 (UiRPA) Feb-2022",
    },
    {
      point:
        "Received 'Certificate of Honor' for achieving excellence in the subject 'Object Oriented Programming and Methodology' at SRIJAN-2020",
    },
    {
      point: "  Qualified GATE- 2010, 2011, 2012",
    },
  ];

  return (
    <div className="rounded-md w-full flex flex-col gap-14 my-14">
      <h2 className="font-bold text-3xl flex-wrap md:text-4xl w-full mx-auto flex justify-center text-blue-400">
        <span className="text-[#004aad]">Certifications</span> &nbsp;&
        <span className="text-[#004aad]">&nbsp;Achievements</span>
      </h2>
      <div className="w-11/12 flex flex-col gap-5 mx-auto">
        {achievementsData.map((data, index) => (
          <p key={index} className="text-lg hover:text-xl transition-all duration-400 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl md:rounded-full text-center font-bold text-white">
            {data.point}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
