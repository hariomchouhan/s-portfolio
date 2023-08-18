import React from "react";

const ProfessionalExperience = () => {
  return (
    <div className="rounded-md w-full flex flex-col gap-8 my-14">
      <h2 className="font-bold text-3xl md:text-4xl w-full mx-auto flex justify-center">
        Professional
        <span className="text-[#004aad]">&nbsp;Experience</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto text-lg">
        {/* card 1 */}
        <div className="hover:scale-105 transition-all duration-200 hover:shadow-none border w-11/12 mx-auto bg-blue-700 rounded-3xl p-4 text-white flex flex-col gap-1 shadow-slate-400 shadow-2xl my-4">
          <h3 className="font-bold text-2xl">TRAINER (Part-Time)</h3>
          <p className="font-semibold">
            Thinkcloudly Pvt. Ltd., Ontario, Canada
          </p>
          <p className="font-bold">Feb 2023 - present</p>
          <ul className="list-inside">
            <li className="list-disc">
              Training sessions on AWS cloud specifically for Solutions
              Architect Associate
            </li>
          </ul>
        </div>

        {/* card 2 */}
        <div className="hover:scale-105 transition-all duration-200 hover:shadow-none border w-11/12 mx-auto bg-blue-500 rounded-3xl p-4 text-white flex flex-col gap-1 shadow-slate-400 shadow-2xl my-4">
          <h3 className="font-bold text-2xl">ASSISTANT PROFESSOR</h3>
          <p className="font-semibold">
            Acropolis Institute of Technology and Research, Indore
          </p>
          <p className="font-bold">2021 - Present</p>
          <ul className="list-inside">
            <li className="list-disc">
              Outcome based training on Amazon Web Services with 48 AWS students
              certified
            </li>
            <li className="list-disc">
              Subjects Taught: Database Management Systems, Data Structures and
              Algorithms
            </li>
          </ul>
        </div>

        {/* card 3 */}
        <div className="hover:scale-105 transition-all duration-200 hover:shadow-none border w-11/12 mx-auto bg-blue-500 rounded-3xl p-4 text-white flex flex-col gap-1 shadow-slate-400 shadow-2xl my-4">
          <h3 className="font-bold text-2xl">ASSISTANT PROFESSOR</h3>
          <p className="font-semibold">
            Sushila Devi Bansal College of Engineering, Indore
          </p>
          <p className="font-bold">2018 - 2021</p>
          <ul className="list-inside">
            <li className="list-disc">
              Training sessions taken on Problem Solving using 'C' programming
              Language
            </li>
          </ul>
        </div>

        {/* card 4 */}
        <div className=" hover:scale-105 transition-all duration-200 hover:shadow-none border w-11/12 mx-auto bg-blue-700 rounded-3xl p-4 text-white flex flex-col gap-1 shadow-slate-400 shadow-2xl my-4">
          <h3 className="font-bold text-2xl">TRAINER (ACADEMICS)</h3>
          <p className="font-semibold">
            Information Technology and Research Center, Indore
          </p>
          <p className="font-bold">2017 - 2018</p>
          <ul className="list-inside">
            <li className="list-disc">
              Subjects Taught: Basic Computer Engineering
            </li>
            <li className="list-disc">
              Training sessions taken on various courses including DCA, PGDCA
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
