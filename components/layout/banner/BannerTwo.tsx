import Link from "next/link";
import Image from "next/image";
import faq from "@/public/img/pages/faq.png";
import bannerShape from "@/public/img/shape/banner-shape.png";

const BannerTwo = () => {
  return (
    <div className="banner__two">
      <div className="container">
        <div className="row ai-center">
          <div className="col-lg-7 lg-mb-40">
            <div className="banner__two-content">
              <h1 data-aos-duration="800"
                data-aos="fade-up" data-aos-delay="400">
                 <span>خبراء صيانة المكيفات والغسالات</span> بخدمة موثوقة في جدة
              </h1>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                في شركة <strong>مدار الكون</strong> نقدم لك خدمات صيانة احترافية للمكيفات والغسالات بجميع أنواعها، على يد فنيين مختصين. نصل إليك في أسرع وقت أينما كنت داخل المملكة، مع ضمان جودة عالية وأسعار تنافسية.
              </p>
              <div
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <Link className="button-1" href="/about">
                  تعرف على خدماتنا <i className="fa-regular fa-angle-left"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="banner__two-image "
              data-aos-duration="800"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <Image className="one" src={faq} alt="صورة بانر" priority />
              <Image
                className="shape"
                src={bannerShape}
                alt="شكل البانر"
                priority
              />
              {/* <div className="content">
                <div className="content-icon">
                  <i className="fa-light fa-rocket-launch"></i>
                </div>
                <div className="content-title">
                  <h3>
                    <span className="counter">3</span>k+
                  </h3>
                  <span>عميل راضٍ</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
