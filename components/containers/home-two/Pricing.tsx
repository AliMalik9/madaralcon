import Link from "next/link";

const Pricing = () => {
  return (
    <div className="pricing__one section-padding">
      <div className="container">
        <div className="row mb-20 ai-end">
          <div className="col-lg-7">
            <h2>خطط صيانة مرنة تناسب احتياجاتك</h2>
          </div>
          <div
            className="col-lg-5"
            data-aos-duration="800"
            data-aos="fade-left"
            data-aos-delay="500"
          >
           <p>
  اختر من بين باقات مدار ألكون المصممة خصيصًا لتوفير أفضل خدمات صيانة المكيفات والغسالات بجودة عالية وأسعار مناسبة في جدة.
</p>

          </div>
        </div>
        <div className="row">
          {/* Basic Plan */}
          <div
            className="col-xl-4 col-md-6"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="pricing__one-item topy-tilt">
              <div className="pricing__one-item-title">
                <h3>الأساسية</h3>
                <h2>99<span>ر.س</span></h2>
              </div>
              <div className="pricing__one-item-list">
                <ul>
                  <li><i className="fa-solid fa-chevrons-right"></i>فحص شهري للأجهزة</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>صيانة دورية للمكيفات</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>استجابة خلال 48 ساعة</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>دعم فني عبر الهاتف</li>
                </ul>
              </div>
              <div className="pricing__one-item-button">
                <Link className="button-5" href="/contact">
                  اشترك الآن<i className="fa-regular fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div
            className="col-xl-4 col-md-6"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="pricing__one-item topy-tilt">
              <div className="pricing__one-item-title">
                <h3>المتقدمة</h3>
                <h2>199<span>ر.س</span></h2>
              </div>
              <div className="pricing__one-item-list">
                <ul>
                  <li><i className="fa-solid fa-chevrons-right"></i>زيارة فنية كل شهر</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>صيانة السباكة والكهرباء</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>استجابة خلال 24 ساعة</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>خصم 10٪ على قطع الغيار</li>
                </ul>
              </div>
              <div className="pricing__one-item-button">
                <Link className="button-5" href="/contact">
                  اشترك الآن<i className="fa-regular fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div
            className="col-xl-4 col-md-6"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="pricing__one-item topy-tilt">
              <div className="pricing__one-item-title">
                <h3>المميزة</h3>
                <h2>299<span>ر.س</span></h2>
              </div>
              <div className="pricing__one-item-list">
                <ul>
                  <li><i className="fa-solid fa-chevrons-right"></i>زيارتان شهريًا للصيانة</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>خدمة طوارئ على مدار الساعة</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>خصم 20٪ على قطع الغيار</li>
                  <li><i className="fa-solid fa-chevrons-right"></i>أولوية في مواعيد الخدمة</li>
                </ul>
              </div>
              <div className="pricing__one-item-button">
                <Link className="button-5" href="/contact">
                  اشترك الآن<i className="fa-regular fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;