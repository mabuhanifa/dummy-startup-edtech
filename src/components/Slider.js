import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bank from '../images/bank.jpg';
import bcs from "../images/bcs.avif";
import logo from "../images/logo.jpeg";
import student from "../images/student.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="p-10"
    >
      <SwiperSlide >
        <img src={logo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={student} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bcs} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bank} alt="" />
      </SwiperSlide>
      
    </Swiper>
  );
}
