import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo-2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer__one">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-5 col-md-6 xl-mb-30">
            <div
              className="footer__one-widget"
              data-aos-duration="800"
              data-aos="fade-up"
            >
              <div className="logo">
                <Link href="/">
                  <Image src={logo} alt="logo" priority />
                </Link>
              </div>
              <div className="info">
                <div className="info-item">
                  <div className="info-item-icon">
                    <i className="fal fa-phone-alt icon-animation"></i>
                  </div>
                  <div className="info-item-content">
                    <span>اتصل الآن</span>
                    <h6>
                      <Link href="tel:+966541243428">824 43 412 9665+</Link>
                    </h6>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="info-item-content">
                    <span>البريد الإلكتروني السريع</span>
                    <h6>
                      <Link href="mailto:contact@madaralcon.com">
                        contact@madaralcon.com
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
            <div
              className="footer__one-widget ml-60 xl-ml-0"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4>روابط سريعة</h4>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                    <Link href="/services">الخدمات</Link>{" "}
                  </li>
                  <li>
                    <Link href="/about">من نحن</Link>{" "}
                  </li>
                    {/* <li>
                    <Link href="/projects">أعمالنا</Link>{" "}
                  </li> */}
                  <li>
                    <Link href="/faq">الأسئلة الشائعة</Link>{" "}
                  </li>
                  <li>
                    <Link href="/contact">اتصل بنا</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 md-mb-30">
            <div
              className="footer__one-widget"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4>الخدمات</h4>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                    <Link href="/contact">
                      تركيب وصيانة المكيفات
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      إصلاح فوري للمكيفات
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      تنظيف وتعقيم المكيفات
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      إصلاح وصيانة الغسالات
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      حلول مشاكل الغسالات
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      تركيب وتوصيل الغسالات
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div
              className="footer__one-widget"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4>ساعات العمل</h4>
              <div className="footer__one-widget-hour">
                <p>الاثنين: 10 صباحًا - 10 مساءً</p>
                <p>الثلاثاء: 10 صباحًا - 10 مساءً</p>
                <p>الأربعاء: 10 صباحًا - 10 مساءً</p>
                <p>الخميس: 10 صباحًا - 10 مساءً</p>
                <p>الجمعة: 4 مساءً - 10 مساءً</p>
                <p>السبت: 10 صباحًا - 10 مساءً</p>
                <p>الأحد: 10 صباحًا - 10 مساءً</p>
                <div className="social__icon">
                  <ul>
                    {/* <li>
                      <Link href="https://facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="https://www.snapchat.com/@madaralcon" target="_blank">
                        <i className="fa-brands fa-snapchat"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.tiktok.com/@madaralcon" target="_blank">
                        <i className="fab fa-tiktok"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/madar.alcon" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="copyright__one">
              <div className="row">
                <div className="col-lg-6">
                  <div className="copyright__one-left lg-t-center">
                    <p>
                      &copy; <Link href="/">مدار ألكون</Link> {currentYear} | جميع الحقوق محفوظة
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="copyright__one-menu t-right lg-t-center lg-mt-5">
                    <ul>
                      <li>
                        <Link href="contact">سياسة الخصوصية</Link>
                      </li>
                      <li>
                        <Link href="contact">الشروط والأحكام</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
