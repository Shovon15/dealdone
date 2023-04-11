import { Typography } from "@material-tailwind/react";
import React from "react";
import PricingCardItem from "./PricingCardItem";
import pack1 from "../../assets/pack1Grey.png";
import pack2 from "../../assets/pack2Grey.png";
import pack3 from "../../assets/pack3Grey.png";
import pack1Color from "../../assets/pack1Blue.png";
import pack2Color from "../../assets/pack2Blue.png";
import pack3Color from "../../assets/pack3Blue.png";
import { IoHomeOutline } from "react-icons/io5";

import { BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const PricingCard = () => {
  const items = [
    {
      icon: <IoHomeOutline />,
      //   iconColor: pack1Color,
      title: "Cottage & Micro",
      text: "(Free For First 12Months) ",
      price: "99",
    },
    {
      icon: <HiOutlineBuildingOffice2 />,

      //   iconColor: pack2Color,
      title: "SME",
      text: "(Free For First 6Months) ",
      price: "599",
    },
    {
      icon: <BsBuildings />,
      //   iconColor: pack3Color,
      title: "Enterprise",
      text: "(15Days FREE Trial) ",
      price: "9,999",
    },
  ];
  return (
    <div className="flex flex-col gap-5 md:px-12">
      {items.map((item, i) => (
        <PricingCardItem key={i} item={item} />
      ))}
    </div>
  );
};

export default PricingCard;
