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
                    <span>Call Now</span>
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
                    <span>Quick Email</span>
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
              <h4>Quick links</h4>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                    <Link href="/services">Services</Link>{" "}
                  </li>
                  <li>
                    <Link href="/about">About</Link>{" "}
                  </li>
                  <li>
                    <Link href="/projects">Our Work</Link>{" "}
                  </li>
                  <li>
                    <Link href="/faq">FAQ&apos;s</Link>{" "}
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
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
              <h4>Services</h4>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                    <Link href="/services-details/ac-installation">
                      تركيب وصيانة المكيفات
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details/ac-repair">
                      إصلاح فوري للمكيفات
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details/ac-cleaning">
                      تنظيف وتعقيم المكيفات
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details/washing-machine-repair">
                      إصلاح وصيانة الغسالات
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details/washing-machine-solutions">
                      حلول مشاكل الغسالات
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details/washing-machine-installation">
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
              <h4>Working Time</h4>
              <div className="footer__one-widget-hour">
                <p>Mon - Fri : 9:00 AM - 5:00 PM</p>
                <p>Sat : 10:00 AM - 6:00 PM</p>
                <p>Sunday Close</p>
                <div className="social__icon">
                  <ul>
                    <li>
                      <Link href="https://facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://behance.net" target="_blank">
                        <i className="fab fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://linkedin.com" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
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
                      &copy; <Link href="/">Pipepro</Link> {currentYear} | All
                      Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="copyright__one-menu t-right lg-t-center lg-mt-5">
                    <ul>
                      <li>
                        <Link href="contact">Privacy & Policy</Link>
                      </li>
                      <li>
                        <Link href="contact">Terms and Conditions</Link>
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
