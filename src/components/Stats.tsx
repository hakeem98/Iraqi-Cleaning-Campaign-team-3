import React from "react";
import { Typography } from "../app/material-tailwind";

import { GoPerson } from "react-icons/go";
import { PiTrash } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

type Props = {};

export default function Stats({}: Props) {
  return (
    <div className="stats absolute w-full px-[2rem] sm:px-[1rem] md:px-[1.5rem] top-[-36rem] md:top-[-15rem]">
      <div className="statsCards container mx-auto bg-[#82B092] rounded-md shadow-md border-b-2 border-b-amber-300 w-full py-[2rem] flex flex-col md:flex-row md:justify-around">
        <div className="card1 flex flex-col justify-center items-center py-[2rem]">
          <div className="icon">
            <GoPerson className="text-[4rem] text-white" />
          </div>
          <Typography
            variant="h2"
            color="white"
            className="text-center font-bold text-[2rem] sm:text-[1.9rem] md:text-[2rem]"
          >
            +10,000
          </Typography>
          <Typography
            variant="h2"
            color="white"
            className="text-center font-bold text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]"
          >
            متطوع
          </Typography>
        </div>

        <div className="card2 flex flex-col justify-center items-center py-[2rem]">
          <div className="icon">
            <PiTrash className="text-[4rem] text-white" />
          </div>
          <Typography
            variant="h2"
            color="white"
            className="text-center font-bold text-[2rem] sm:text-[1.9rem] md:text-[2rem]"
          >
            +75,000
          </Typography>
          <Typography
            variant="h2"
            color="white"
            className="text-center font-bold text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]"
          >
            كيس نفايات
          </Typography>
        </div>

        <div className="card3 flex flex-col justify-center items-center py-[1.5rem]">
          <div className="icon">
            <IoLocationOutline className="text-[4rem] text-white" />
          </div>
          <Typography
            variant="h2"
            color="white"
            className="text-center font-bold text-[2rem] sm:text-[1.9rem] md:text-[2rem]"
          >
            +50
          </Typography>
          <Typography
            variant="h2"
            color="white"
            className="text-center font-bold text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]"
          >
            حملة تنظيف
          </Typography>
        </div>
      </div>
    </div>
  );
}
