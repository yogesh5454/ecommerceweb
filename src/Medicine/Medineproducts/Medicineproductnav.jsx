import React from "react";
import { GiBabyBottle } from "react-icons/gi";
import { FaFirstAid } from "react-icons/fa";
import { SiTemporal } from "react-icons/si";
import { CgGirl } from "react-icons/cg";
import { FaFemale } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";
import { FaPersonPregnant } from "react-icons/fa6";

const Medicineproductnav = () => {


  return (
    <div className="flex-col p-8 space-y-6 w-50 mt-5 bg-white shadow-lg min-h-screen ">
    <a className="flex  items-center  gap-3" href="">
      <GiBabyBottle/> Babycare
    </a>
    <a className="flex  items-center  gap-3" href="">
      <FaFirstAid/> First Aid
      </a>
      <a className="flex  items-center  gap-3" href="">
      <SiTemporal/> Oral
      </a>
      <a className="flex  items-center  gap-3" href="">
      <CgGirl/> Face & skin care
      </a>
      <a className="flex  items-center  gap-3" href="">
      <FaFemale/> Feminine Hygiene 
      </a>
      <a className="flex  items-center  gap-3" href="">
      <GiHealthCapsule/> Health & Protein
      </a>
      <a className="flex  items-center  gap-3" href="">
      <FaPersonPregnant/> Pregnancy
      </a>

    </div>
  );
};

export default Medicineproductnav;
