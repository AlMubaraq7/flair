import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TrainerCard from "../../../components/TrainerCard/TrainerCard";
import trainers from "../../../components/trainer";
import "./trainers.scss";
class Trainers extends React.Component {
  constructor() {
    super();
    this.state = {
      trainerArr: trainers,
    };
  }
  render() {
    const { trainerArr } = this.state;
    return (
      <div className="trainers-group">
        <div className="title">
          <h1>Gym Trainers</h1>
        </div>
        <section className="trainers">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            pagination={{ clickable: true }}
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {trainerArr.map(({ id, ...otherProps }) => (
              <SwiperSlide key={id}>
                <TrainerCard {...otherProps} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    );
  }
}
export default Trainers;
