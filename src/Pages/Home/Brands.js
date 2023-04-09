import React from "react";
import "./Brand.css";
import Carousel from "react-elastic-carousel";
import brnad1 from "../../assets/Company logo/atn.png";
import brnad2 from "../../assets/Company logo/ajkerdeal.png";
import brnad3 from "../../assets/Company logo/daraz.png";
import brnad4 from "../../assets/Company logo/ebay.png";
import brnad5 from "../../assets/Company logo/jadroo.png";
import brnad6 from "../../assets/Company logo/magento.png";
import brnad7 from "../../assets/Company logo/perfee.png";
import brnad8 from "../../assets/Company logo/shopify.png";
import brnad9 from "../../assets/Company logo/shoplover.png";
import brnad10 from "../../assets/Company logo/woocommerce.png";

const Brands = () => {
  const carouselRef = React.createRef(null);
  let resetTimeout;

  const items = [
    {
      brand: brnad1,
    },
    {
      brand: brnad2,
    },
    {
      brand: brnad3,
    },
    {
      brand: brnad4,
    },
    {
      brand: brnad5,
    },
    {
      brand: brnad6,
    },
    {
      brand: brnad7,
    },
    {
      brand: brnad8,
    },
    {
      brand: brnad9,
    },
    {
      brand: brnad10,
    },
  ];
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
      itemsToScroll: 1,
    },
    {
      width: 550,
      itemsToShow: 3,
      itemsToScroll: 1,
    },
    {
      width: 768,
      itemsToShow: 5,
      itemsToScroll: 2,
    },
    {
      width: 1000,
      itemsToShow: 5,
      itemsToScroll: 1,
    },
  ];

  return (
    <div className="flex justify-center items-center px-2  py-5">
      <Carousel
        breakPoints={breakPoints}
        ref={carouselRef}
        enableMouseSwipe={true}
        // itemsToShow={3}
        //   itemsToScroll={itemsToScroll}
        // renderArrow={myArrow}
        pagination={false}
        // renderPagination={myPagination}
        enableAutoPlay={true}
        autoPlaySpeed={2500}
        onNextEnd={({ index }) => {
          console.log("index", index, "length", items.length);
          // if (index === 9) {
          if (index === 5) {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 2000); // same time
          }
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            item={item}
            className="dark:bg-gray-300 px-2 rounded-md h-20 w-44 flex justify-center items-center"
          >
            <img src={item.brand} alt="..." className="w-full " />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Brands;
