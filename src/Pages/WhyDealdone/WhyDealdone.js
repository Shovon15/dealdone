import React from "react";
import SectionHeading from "../../Components/Text/SectionHeading";
import img1 from "../../assets/featureMultiChannel.png";
import img2 from "../../assets/featureInventory.png";
import img3 from "../../assets/featureOrders.png";
import img4 from "../../assets/featureLending.png";
import WhyDealdoneCard from "../../Components/Card/WhyDealdoneCard";

const WhyDealdone = () => {
  const items = [
    {
      img: img1,
      title: "Multi-Channel Listing",
    },
    {
      img: img2,
      title: "Real Time Inventory Sync",
    },
    {
      img: img3,
      title: "All Orders In A Tab",
    },
    {
      img: img4,
      title: "Easy Lending",
    },
  ];
  return (
    <div id="why_dealdone" className="px-3 md:px-10  p-5">
      <SectionHeading title="Why Dealdone?" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 py-5">
        {items.map((item, i) => (
          <WhyDealdoneCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyDealdone;
