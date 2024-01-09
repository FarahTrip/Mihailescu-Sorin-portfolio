import React from "react";
import Image from "next/image";

const ProjectBanner = () => {
  return (
    <>
      <Image
        className="flex w-full h-1/6 bg-slate-100"
        src={data.image}
        alt={""}
        width={600}
        height={600}
      ></Image>
    </>
  );
};

export default ProjectBanner;
