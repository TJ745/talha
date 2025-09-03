import ResumeTabs from "@/components/ResumeTab";
import React from "react";
import {
  RiCheckboxCircleFill,
  RiGraduationCapFill,
  RiGraduationCapLine,
  RiMacbookFill,
  RiServerFill,
  RiSparklingFill,
  RiSparklingLine,
  RiUserSettingsLine,
} from "react-icons/ri";

const frontendSkills = [
  {
    icon: <RiCheckboxCircleFill className="text-xl" />,
    title: "HTML",
    level: "Advanced",
  },
  {
    icon: <RiCheckboxCircleFill className="text-xl" />,
    title: "CSS",
    level: "Advanced",
  },
  {
    icon: <RiCheckboxCircleFill className="text-xl" />,
    title: "JavaScript",
    level: "Advanced",
  },
  {
    icon: <RiCheckboxCircleFill className="text-xl" />,
    title: "React",
    level: "Advanced",
  },
];

// const resumeItems = [...]; // Assuming this is defined somewhere else in your code

function Resume() {
  return (
    <div>
      <div className="container pt-8">
        <div className="relative w-full h-full">
          <div className="flex justify-center items-center flex-col mb-[25px]">
            <h3 className="text-3xl font-bold mb-2 text-blue-600">Resume</h3>
            <p>Combination of Skills & Experience</p>
          </div>

          <ResumeTabs items={resumeItems} />
        </div>
      </div>
    </div>
  );
}

export default Resume;

const resumeItems = [
  {
    title: (
      <div className="flex justify-center items-center">
        <RiGraduationCapLine className="text-xl mr-2" />
        Education
      </div>
    ),
    content: (
      <div className="relative flex w-full justify-center mb-6 translate-y-8 mt-16">
        <div className="w-[1px] h-[130px] bg-blue-600"></div>

        <div className="absolute flex justify-center items-center flex-col gap-y-32 ">
          <div className="relative flex justify-center items-center before:absolute before:bg-blue-600 before:w-4 before:h-4 before:rounded-3xl">
            <div className="absolute w-[350px] flex items-center gap-x-6 right-[35px]">
              <RiGraduationCapFill className="text-4xl" />
              <div>
                <h5 className="font-semibold whitespace-break-spaces mb-2 text-2xl">
                  Masters in Information Technology
                </h5>
                <p className="text-sm whitespace-nowrap mb-4">
                  The University of Lahore - Pakistan
                </p>
                <span className="relative bg-blue-600 text-sm py-1 px-3 rounded-md">
                  2012 - 2015
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center before:absolute before:bg-blue-600 before:w-4 before:h-4 before:rounded-3xl">
            <div className="absolute w-[350px] flex items-center gap-x-6 left-[50px]">
              <RiGraduationCapFill className="text-4xl" />
              <div>
                <h5 className="font-semibold whitespace-break-spaces mb-2 text-2xl">
                  Bachelors in Commerce
                </h5>
                <p className="text-sm whitespace-nowrap mb-4">
                  Elite College of Commerce - Pakistan
                </p>
                <span className="relative bg-blue-600 text-sm py-1 px-3 rounded-md">
                  2009 - 2011
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex justify-center items-center">
        <RiSparklingLine className="text-xl mr-2" />
        Experience
      </div>
    ),
    content: (
      <div className="relative flex w-full justify-center mb-6 translate-y-8">
        <div className="w-[1px] h-[260px] bg-blue-600"></div>
        <div className="absolute flex justify-center items-center flex-col gap-y-32 ">
          <div className="relative flex justify-center items-center before:absolute before:bg-blue-600 before:w-4 before:h-4 before:rounded-3xl">
            <div className="absolute w-[350px] flex items-center gap-x-6 right-[35px]">
              <RiSparklingFill className="text-4xl" />
              <div>
                <h5 className="font-semibold whitespace-break-spaces mb-2 text-2xl">
                  IT Administration
                </h5>
                <p className="text-sm whitespace-nowrap mb-4">
                  Integrated Contracting Company - Riyadh
                </p>
                <span className="relative bg-blue-600 text-sm py-1 px-3 rounded-md">
                  2018 - Till Date
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center before:absolute before:bg-blue-600 before:w-4 before:h-4 before:rounded-3xl">
            <div className="absolute w-[350px] flex items-center gap-x-6 left-[50px]">
              <RiSparklingFill className="text-4xl" />
              <div>
                <h5 className="font-semibold whitespace-break-spaces mb-2 text-2xl">
                  System Administration
                </h5>
                <p className="text-sm whitespace-nowrap mb-4">
                  Morganti - Riyadh
                </p>
                <span className="relative bg-blue-600 text-sm py-1 px-3 rounded-md">
                  2017 - 2018
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center before:absolute before:bg-blue-600 before:w-4 before:h-4 before:rounded-3xl">
            <div className="absolute w-[350px] flex items-center gap-x-6 right-[35px]">
              <RiSparklingFill className="text-4xl" />
              <div>
                <h5 className="font-semibold whitespace-break-spaces mb-2 text-2xl">
                  BMS Operator
                </h5>
                <p className="text-sm whitespace-nowrap mb-4">
                  Dar Al Arkan - Riyadh
                </p>
                <span className="relative bg-blue-600 text-sm py-1 px-3 rounded-md">
                  2016 - 2017
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex justify-center items-center">
        <RiUserSettingsLine className="text-xl mr-2" />
        Personal Skills
      </div>
    ),
    content: (
      <div className="relative flex w-full justify-center mb-6">
        <div className="max-w-full flex place-items-center grid-cols-2 gap-x-12 gap-y-12">
          <div className="relative bg-slate-600 flex justify-center items-center flex-col py-12 px-6 rounded-lg border-b-4 border-white">
            <div className="flex items-center gap-x-2 mb-12">
              <RiMacbookFill className="text-4xl" />
              <span className="text-xl font-semibold">Front-End Developer</span>
            </div>
            {/* skills */}
            <div className="grid place-items-center grid-cols-2 gap-x-16 gap-y-8 px-12">
              {frontendSkills.map((item, index) => (
                <div className="flex gap-x-4" key={index}>
                  {item.icon}
                  <div className="flex flex-col gap-y-1">
                    <h5 className="font-semibold text-lg">{item.title}</h5>
                    <span className="text-sm">{item.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-slate-600 flex justify-center items-center flex-col py-12 px-6 rounded-lg border-b-4 border-white">
            <div className="flex items-center gap-x-2 mb-12">
              <RiServerFill className="text-4xl" />
              <span className="text-xl font-semibold">Back-End Developer</span>
            </div>
            <div className="grid place-items-center grid-cols-2 gap-x-16 gap-y-8 px-12">
              <div className="flex gap-x-4">
                <RiCheckboxCircleFill className="text-xl" />
                <div className="flex flex-col gap-y-1">
                  <h5 className="font-semibold text-lg">HTML</h5>
                  <span className="text-sm">Advanced</span>
                </div>
              </div>
              <div>
                <RiCheckboxCircleFill />
                <div>
                  <h5>CSS</h5>
                  <span>Advanced</span>
                </div>
              </div>
              <div>
                <RiCheckboxCircleFill />
                <div>
                  <h5>JavaScript</h5>
                  <span>Advanced</span>
                </div>
              </div>
              <div>
                <RiCheckboxCircleFill />
                <div>
                  <h5>React</h5>
                  <span>Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
