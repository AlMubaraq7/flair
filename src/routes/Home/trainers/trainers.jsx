import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TrainerCard from "../../../components/TrainerCard/TrainerCard";
import trainers from "../../../components/trainer";
import "./trainers.scss";
const Trainers = () => {
  return (
    <div className="trainers-group">
      <div className="title">
        <h1>Gym Trainers</h1>
      </div>
      <h1>Meet our team of experts</h1>
      <section className="trainers">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          spaceBetween={50}
          loop
          navigation
          slidesPerGroup={2}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },
          }}
        >
          {trainers.map(({ id, ...otherProps }) => (
            <SwiperSlide key={id}>
              <TrainerCard {...otherProps} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Trainers;
