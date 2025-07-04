"use client";
import { useState } from "react";
import Image from "next/image";
import Counter from "../Counter";
import YoutubeEmbed from "../YoutubeEmbed";
import one from "@/public/img/pages/video.jpg";

const Solutions = ({ addClass = false }) => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <div
        className={
          (addClass ? " section-padding " : " section-padding pt-0") +
          " solutions__area"
        }
        // Added dir="rtl" for proper Arabic (Right-to-Left) text alignment
        dir="rtl"
      >
        <div className="container">
          <div className="row ai-center">
            <div className="col-lg-8 lg-mb-30">
              <div className="solutions__area-left">
                <h2>حلول متكاملة لصيانة التكييف والغسالات</h2>
                <p>
                  نحن نقدم خدمات متخصصة في صيانة وإصلاح جميع أنواع مكيفات
                  الهواء والغسالات في المملكة العربية السعودية. يضمن فريقنا
                  المحترف تشغيل أجهزتكم بكفاءة عالية لضمان راحتكم ورضاكم.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos-duration="800"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="solutions__area-right">
                <h2>
                  <span className="counter">
                    {/* Changed to reflect years of experience */}
                    <Counter value={21} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <h5>سنوات من الخبرة</h5>
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div
              className="col-lg-3 col-sm-6 mt-35"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="counter__two-item">
                <h2>
                  <span className="counter">
                    {/* More realistic number for specialized technicians */}
                    <Counter value={30} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <span>فني متخصص</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mt-35"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="counter__two-item">
                <h2>
                  <span className="counter">
                    {/* Changed to "Completed Services" */}
                    <Counter value={7500} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <span>خدمة مكتملة</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mt-35"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="counter__two-item">
                <h2>
                  <span className="counter">
                    {/* Changed to "Satisfied Clients" */}
                    <Counter value={5000} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <span>عميل راضٍ</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mt-35"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="counter__two-item">
                <h2>
                  <span className="counter">
                    {/* Changed to "Positive Reviews" */}
                    <Counter value={1500} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <span>تقييم إيجابي</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="video__area">
                <div className="video">
                  <a
                    className="video-popup ripple"
                    onClick={() => setVideoActive(true)}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="parallax-image-wrap">
                  <div className="parallax-image-inner">
                    <Image src={one} className="parallax-image" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            {/* IMPORTANT: Remember to change "embedId" to your own YouTube video ID */}
            {videoActive && <YoutubeEmbed embedId="0WC-tD-njcA" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;