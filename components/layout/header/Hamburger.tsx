import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo-2.png";

interface HamburgerProps {
  hamburger: boolean;
  setHamburger: (value: boolean) => void;
  handleHamburger: () => void;
}

const Hamburger = ({ hamburger, setHamburger }: HamburgerProps) => {
  return (
    <>
      <div
        className={
          (hamburger ? " active" : " ") + " header-one__right-sidebar-popup"
        }
      >
        <div className="sidebar-close-btn" onClick={() => setHamburger(false)}>
          <i className="fal fa-times"></i>
        </div>
        <div className="header-one__right-sidebar-popup-logo">
          <Link href="/">
            <Image src={logo} alt="logo" priority />
          </Link>
        </div>
        <p>
         خدمة صيانة موثوقة لجميع أنواع المكيفات والغسالات في جدة. بقيادة محمد
          أحمد محبوب وفريق متخصص، نصل إليك بسرعة أينما كنت داخل المدينة.
        </p>
        <div className="header-one__right-sidebar-popup-contact">
          <h4 className="mb-30">Contact Info</h4>
          <div className="header-one__right-sidebar-popup-contact-item">
            <div className="header-one__right-sidebar-popup-contact-item-icon">
              <i className="fal fa-phone-alt icon-animation"></i>
            </div>
            <div className="header-one__right-sidebar-popup-contact-item-content">
              <span>Call Now</span>
              <h6>
                <Link href="tel:+966541243428">+9665 412 43 428</Link>
              </h6>
            </div>
          </div>
          <div className="header-one__right-sidebar-popup-contact-item">
            <div className="header-one__right-sidebar-popup-contact-item-icon">
              <i className="fal fa-envelope"></i>
            </div>
            <div className="header-one__right-sidebar-popup-contact-item-content">
              <span>Quick Email</span>
              <h6>
                <Link href="mailto:contact@madaralcon.com">
                  contact@madaralcon.com
                </Link>
              </h6>
            </div>
          </div>
          <div className="header-one__right-sidebar-popup-contact-item">
            <div className="header-one__right-sidebar-popup-contact-item-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="header-one__right-sidebar-popup-contact-item-content">
              <span>Office Address</span>
              <h6>
                <Link href="https://google.com/maps" target="_blank">
                  جدة، المملكة العربية السعودية
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="header-one__right-sidebar-popup-social social__icon">
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
      <div
        className={(hamburger ? " show" : " ") + " sidebar-overlay"}
        onClick={() => setHamburger(false)}
      ></div>
    </>
  );
};

export default Hamburger;
