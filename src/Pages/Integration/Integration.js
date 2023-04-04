import React from "react";
import img1 from "../../assets/Company logo/ajkerdeal.png";
import img2 from "../../assets/Company logo/atn.png";
import img3 from "../../assets/Company logo/daraz.png";
import img4 from "../../assets/Company logo/ebay.png";
import img5 from "../../assets/Company logo/jadroo.png";
import img6 from "../../assets/Company logo/magento.png";
import img7 from "../../assets/Company logo/perfee.png";
import img8 from "../../assets/Company logo/shopify.png";
import img9 from "../../assets/Company logo/shoplover.png";
import img10 from "../../assets/Company logo/woocommerce.png";

const Integration = () => {
  const images = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
    {
      img: img10,
    },
  ];
  return (
    <div className="bg-indigo-400 py-5 px-5 md:px-10">
      <h1 className="text-xl md:text-4xl py-5 font-semibold text-center">
        One Click Integration With
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3  m-5 md:mx-10 gap-5 ">
        {images.map((image, i) => (
          <div className="flex justify-center items-center bg-slate-100 h-28 p-5 rounded-lg cursor-pointer hover:shadow-lg">
            <img src={image.img} alt="..." />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integration;
