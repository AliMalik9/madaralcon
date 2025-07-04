"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import one from "@/public/img/brand/client-1.svg";
// import two from "@/public/img/brand/client-2.svg";
// import three from "@/public/img/brand/client-3.svg";
// import four from "@/public/img/brand/client-4.svg";
// import five from "@/public/img/brand/client-5.svg";
import quote from "@/public/img/icon/quote.svg";

const Testimonial = () => {
  return (
    <div className="testimonial__two section-padding" dir="rtl">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial__two-area">
              {/* <div className="row">
                <div className="col-xl-12">
                  <div className="testimonial__two-area-brand">
                    <div className="slide__area">
                      <div className="sliders scroll">
                        {[one, two, three, four, five].map((img, i) => (
                          <div
                            key={`slide-top-${i}`}
                            className="testimonial__two-area-brand-slide-item"
                          >
                            <Image src={img} alt="logo" priority />
                          </div>
                        ))}
                      </div>
                      <div className="sliders scroll">
                        {[one, two, three, four, five].map((img, i) => (
                          <div
                            key={`slide-bottom-${i}`}
                            className="testimonial__two-area-brand-slide-item"
                          >
                            <Image src={img} alt="logo" priority />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="row mb-60">
                <div className="col-xl-12">
                  <div className="testimonial__two-area-title">
                    <h2>جودة عالية واهتمام رائع بالتفاصيل</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12">
                  <div className="swiper testimonial_slider_two">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      speed={2000}
                      loop={true}
                      roundLengths={true}
                      modules={[Autoplay, Pagination]}
                      autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        el: ".testimonial_pagination",
                        clickable: true,
                      }}
                      breakpoints={{
                        992: {
                          slidesPerView: 2,
                        },
                      }}
                      className="swiper-wrapper"
                    >
                      <SwiperSlide>
                        <div className="testimonial__two-area-item swiper-slide">
                          <div className="testimonial__two-area-item-client">
                            <div className="testimonial__two-area-item-client-title">
                              <h4>أحمد الزهراني</h4>
                              <span>عميل في جدة</span>
                            </div>
                            <Image src={quote} alt="quote" priority />
                          </div>
                          <p>
                            كانت الخدمة ممتازة وتم إصلاح المكيف في نفس اليوم.
                            فريق محترف وسريع الاستجابة.
                          </p>
                          <div className="testimonial__two-area-item-reviews">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial__two-area-item swiper-slide">
                          <div className="testimonial__two-area-item-client">
                            <div className="testimonial__two-area-item-client-title">
                              <h4>سارة الحربي</h4>
                              <span>ربة منزل</span>
                            </div>
                            <Image src={quote} alt="quote" priority />
                          </div>
                          <p>
                            قام الفريق بصيانة الغسالة بسرعة وكفاءة. أنصح بخدماتهم
                            بشدة لأي أحد يبحث عن الجودة.
                          </p>
                          <div className="testimonial__two-area-item-reviews">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial__two-area-item swiper-slide">
                          <div className="testimonial__two-area-item-client">
                            <div className="testimonial__two-area-item-client-title">
                              <h4>فيصل الدوسري</h4>
                              <span>صاحب شقة مفروشة</span>
                            </div>
                            <Image src={quote} alt="quote" priority />
                          </div>
                          <p>
                            تعامل ممتاز وخدمة في الوقت المناسب. أقدر التزامهم
                            بالمواعيد والشفافية في الأسعار.
                          </p>
                          <div className="testimonial__two-area-item-reviews">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className="row mt-60">
                <div className="testimonial__two-pagination">
                  <div className="testimonial_pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
