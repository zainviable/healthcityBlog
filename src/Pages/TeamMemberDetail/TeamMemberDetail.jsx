import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  clinicalteamList,
  nonClinicalteamList,
} from "../../DataConfig/TeamData";
import userImg from "../../assets/img/user.png";

const TeamMemberDetail = () => {
  const { teamId, memberId } = useParams();
  // console.log(teamId, memberId);

  const [currentMember, setCurrentMember] = useState(null);

  const downloadCV = () => {
    if (currentMember) {
      const link = document.createElement("a");
      link.href = currentMember?.cv;
      // link.download =
      //   "CV_of_" + currentMember?.name.replace(/\s+/g, "_") + ".pdf";
      link.download =
        "CV_of_" +
        currentMember?.name.replace(/\s+/g, "_").replace(/,/g, "") +
        ".pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    if (teamId === "non-clinical") {
      const newMember = nonClinicalteamList.find(
        (member) => member.id === parseInt(memberId)
      );
      setCurrentMember(newMember);
    } else if (teamId === "clinical") {
      const newMember = clinicalteamList.find(
        (member) => member.id === parseInt(memberId)
      );
      setCurrentMember(newMember);
    }
  }, [teamId, memberId]);

  // console.log("currentMember===", currentMember);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="px-5 lg:px-24 my-14">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* <div className="w-40 h-40">
          <img
            src={currentMember?.imgUrl}
            alt="member image"
            className="w-full h-full rounded-full"
          />
        </div> */}
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img
              src={
                !currentMember?.imgUrl || currentMember?.imgUrl === ""
                  ? userImg
                  : currentMember?.imgUrl
              }
              alt="member image"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-[24px] font-bold">{currentMember?.name}</h2>
          <p className="text-[18px] font-semibold">
            {currentMember?.designation}
          </p>
        </div>
      </div>
      <div className="mt-6">
        {/* {currentMember?.detail ? (
          <p className="font-medium">{currentMember?.detail}</p>
        ) : (
          <p className="font-medium text-[18px] text-red-400 text-center">
            Details not availabe
          </p>
        )} */}
        <p className="font-medium">{currentMember?.detail}</p>
        {currentMember?.cv && (
          <div className="flex justify-center mt-8">
            <button
              className="btn btn-sm text-[#84c440] bg-[#ddd] hover:bg-[#61a518] hover:text-[#f1f1f1] border-0"
              onClick={downloadCV}
            >
              Download CV
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberDetail;
