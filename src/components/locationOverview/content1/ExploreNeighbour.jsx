import ExploreNeighbourCard from './ExploreNeighbourCard'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/pagination";

function ExploreNeighbour() {

  const ExploreData = [
    <ExploreNeighbourCard key={1} title='Schools & Colleges'/>,
    <ExploreNeighbourCard key={2} title='Market'/>,
    <ExploreNeighbourCard key={3} title='Hospitals'/>,
    <ExploreNeighbourCard key={4} title='Transport'/>,
    <ExploreNeighbourCard key={5} title='Park'/>,
    <ExploreNeighbourCard key={6} title='Offices'/>
  ];

  return (
    <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop ={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {ExploreData.map((dt, index) => (<SwiperSlide key={index} className="pb-12">{dt}</SwiperSlide>))}
        </Swiper>
    </div>
  )
}

export default ExploreNeighbour