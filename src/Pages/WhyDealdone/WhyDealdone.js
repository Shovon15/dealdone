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
      text: "Expand from current channel onto many sales channels without a headache of manual listing.",
    },
    {
      img: img2,
      title: "Real Time Inventory Sync",
      text: "Instant sync to keep your stock up to date on always evolving inventory and avoiding marketplaces ban for overselling on unavailable stock.",
    },
    {
      img: img3,
      title: "All Orders In A Tab",
      text: "View all the orders from different channels in one place & easily track & ship them, without missing any important deadline ",
    },
    {
      img: img4,
      title: "Easy Lending",
      text: "View all the orders from different channels in one place & easily track & ship them, without missing any important deadline",
    },
    // {
    //   img: img4,
    //   title: "",
    //   text: "Loans can be applied online in a click. We assess the data and create your credit profiles for our banking partners.",
    // },
  ];
  return (
    <div id="why_dealdone" className="px-3 md:px-10 min-h-fit my-auto p-5 ">
      <SectionHeading title="Why Dealdone?" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 p-2">
        {items.map((item, i) => (
          <WhyDealdoneCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyDealdone;
