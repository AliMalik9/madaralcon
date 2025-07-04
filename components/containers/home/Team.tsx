"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/team/team-4.jpg"; // Image for Shah Saood
import two from "@/public/img/team/team-5.jpg"; // Image for Muhammad Ahmad Mahboob

const Team = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="team__two section-padding">
      <div className="container">
        <div className="row ai-center">
          <div className="col-xl-4 xl-mb-30">
            <div className="team__two-title">
              <h2>تعرف على أعضاء فريقنا الرائعين</h2>
              <p>
                نفتخر بفريقنا المتخصص في صيانة المكيفات والغسالات، وتقديم خدمات
                عالية الجودة في جميع أنحاء المملكة العربية السعودية.
              </p>
              <Link className="button-1" href="">
                عرض المزيد <i className="fa-regular fa-angle-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-8"
            data-aos-duration="800"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="team__two-right">
              {/* Card 1: Shah Saood (Now appears first on the left) */}
              <div
                className={
                  "team__two-item team_active_hover " +
                  (active === 0 ? " active" : "")
                }
                onMouseEnter={() => setActive(0)}
              >
                <Image src={one} alt="Shah Saood" priority />
                <div className="team__two-item-social">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="team__two-item-content">
                  <div className="info">
                    <h5>شاه سعود</h5>
                    <span>مساعد فني</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Muhammad Ahmad Mahboob (Now second on the right) */}
              <div
                className={
                  "team__two-item team_active_hover " +
                  (active === 1 ? " active" : "")
                }
                onMouseEnter={() => setActive(1)}
              >
                <Image src={two} alt="Muhammad Ahmad Mahboob" priority />
                <div className="team__two-item-social">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="team__two-item-content">
                  <div className="info">
                    <h5>محمد أحمد محبوب</h5>
                    <span>المالك ومقدم الخدمة الرئيسي</span>
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

export default Team;
