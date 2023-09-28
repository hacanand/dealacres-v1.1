"use client"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "@/components/propertyListing/Card/Card";

const ReadMore = () => {
  const newsData = [
    {
      id: 1,
      title: "Lorem Ipsum News",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "September 1, 2023",
    },
    {
      id: 2,
      title: "Aenean Pulvinar Magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 28, 2023",
    },
    {
      id: 3,
      title: "Sed Tincidunt Euismod",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 25, 2023",
    },
    {
      id: 4,
      title: "Lorem Ipsum News",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "September 1, 2023",
    },
    {
      id: 5,
      title: "Aenean Pulvinar Magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 28, 2023",
    },
    {
      id: 6,
      title: "Sed Tincidunt Euismod",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 25, 2023",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 space-y-8 mt-10 py-5">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold">
        Interesting Reads
      </h2>
      <Swiper
        spaceBetween={46}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          798: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {newsData.map((newsItem) => (
          <SwiperSlide className="pb-12" key={newsItem.id}>
            <Card
              title={newsItem.title}
              text={newsItem.text}
              imageSrc={newsItem.imageSrc}
              date={newsItem.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReadMore;
