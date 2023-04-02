import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../images/logo.jpeg";

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
        <img src={logo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
