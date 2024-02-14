import React from "react";
import userImg from "../../assets/img/user.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const MemberCard = ({ member, teamId }) => {
=======
import { Link, useNavigate } from "react-router-dom";

const MemberCard = ({ member, teamId }) => {
  const navigate = useNavigate();

>>>>>>> ea92eff5e992b04f789b16de0fabae69d3ae4e9a
  return (
    <div className="flex flex-col justify-between items-center gap-y-5 px-2 py-4 border border-[#f1f1f1] rounded-md hover:border-[#fff] hover:shadow-lg">
      <div className="flex flex-col items-center gap-y-2">
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img
              src={
                !member?.imgUrl || member?.imgUrl === ""
                  ? userImg
                  : member?.imgUrl
              }
              alt="team member image"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-[18px] font-bold">{member.name}</h2>
          <p className="font-medium">{member.designation}</p>
        </div>
      </div>
      <div>
        <Link
          to={`/${teamId}/details/${member.id}`}
          className="btn btn-sm text-[#84c440] bg-[#ddd] hover:bg-[#61a518] hover:text-[#f1f1f1] border-0"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;
