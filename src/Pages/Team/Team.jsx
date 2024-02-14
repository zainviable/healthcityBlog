import React, { useEffect } from "react";
import "./Team.css";
import { useLocation } from "react-router-dom";

import MemberCard from "../../components/MemberCard/MemberCard";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import {
  clinicalteamList,
  nonClinicalteamList,
} from "../../DataConfig/TeamData";

const cleanPathname = (pathname) => {
  // Remove trailing slash if present
  return pathname.replace(/\/$/, "");
};

const Team = () => {
  const location = useLocation();

  // Clean up the pathname to remove the trailing slash
  const cleanedPathname = cleanPathname(location.pathname);

  const slugs = cleanedPathname.split("/");
  const teamId = slugs[slugs.length - 1];
  console.log("teamId===", teamId);

  const bannerContent = {
    title: "Meet The Team",
    description:
      "Health City's core team and its associates include qualified psychologists, therapists, nurses, doctors and other professionals, as well as, former service users. They have relevant training, skills, and experiences culturally and professionally. Below are just some of our team members. Behind the experienced directors and managers, stand a number of awesome, dedicated non-executive directors and advisors, clinicians, University researchers and client support staff who make us all look good and achieving",
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div>
      {/* Meet The Team */}
      <CommonBanner bannerContent={bannerContent} />
      {/* Meet The Team */}

      {/* Team non-clinical */}
      {teamId === "non-clinical" && (
        <section>
          <div className="mt-10 mb-20 px-5 lg:px-24">
            <h2 className="common-title text-center">
              <span className="text-[#84c440]">Non Clinical</span> Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-5">
              {nonClinicalteamList?.map((member) => (
                <MemberCard key={member.id} member={member} teamId={teamId} />
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Team non-clinical */}

      {/* Team clinical */}
      {teamId === "clinical" && (
        <section>
          <div className="mt-10 mb-20 px-5 lg:px-24">
            <h2 className="common-title text-center">
              <span className="text-[#84c440]">Clinical</span> Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-5">
              {clinicalteamList?.map((member) => (
                <MemberCard key={member.id} member={member} teamId={teamId} />
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Team clinical */}
    </div>
  );
};

export default Team;
