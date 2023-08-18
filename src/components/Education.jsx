import React from "react";
import { MdCastForEducation } from "react-icons/md";
const Education = () => {
  const educationData = [
    {
      title:
        "RAJEEV GANDHI PROUDYOGIKI RAJEEV GANDHI PROUDYOGIKI VISHWAVIDYALAYA",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      year: "2006 - 2010",
      perc: "69.56%",
    },
    {
      title:
        "RAJEEV GANDHI PROUDYOGIKI RAJEEV GANDHI PROUDYOGIKI VISHWAVIDYALAYA",
      degree:
        "Master of Engineering in Computer Science and Engineering (GATE Stipendship)",
      year: "2011 - 2014",
      perc: "7.7/10 CGPA",
    },
  ];
  return (
    <>
      <div className="rounded-md w-full flex flex-col gap-8 my-14">
        <h2 className="font-bold text-4xl w-full mx-auto flex justify-center gap-3">
          Education
          <MdCastForEducation className="text-[#004aad]" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto text-lg">
          {educationData.map((data, index) => (
            <div key={index} className="hover:scale-105 transition-all duration-200 hover:shadow-none border w-11/12 mx-auto bg-blue-600 rounded-3xl p-4 text-white flex flex-col gap-1 shadow-slate-400 shadow-2xl my-4">
              <h3 className="font-bold text-xl">{data.title}</h3>
              <p className="font-semibold">{data.degree}</p>
              <p>{data.year}</p>
              <p>{data.perc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
