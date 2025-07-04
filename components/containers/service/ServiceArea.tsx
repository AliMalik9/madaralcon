"use client";
import { useState } from "react";
import Link from "next/link";

const ServiceArea = () => {
  const [active, setActive] = useState(1);

  // Service data in an array to make it easier to manage and map over.
  const services = [
    {
      id: 0,
      title: "تركيب وصيانة المكيفات",
      description: "نقدم خدمات تركيب وصيانة احترافية لجميع أنواع المكيفات لضمان أفضل أداء وتبريد.",
      icon: "fa-solid fa-snowflake",
      delay: "400",
    },
    {
      id: 1,
      title: "إصلاح فوري للمكيفات",
      description: "فريقنا جاهز لإصلاح جميع أعطال المكيفات بشكل سريع وفعال لتعود للعمل كأنها جديدة.",
      icon: "fa-solid fa-wind",
      delay: "600",
    },
    {
      id: 2,
      title: "نظيف وتعقيم المكيفات",
      description: "خدمة تنظيف عميق وتعقيم للمكيفات لتحسين جودة الهواء والحفاظ على صحتكم.",
      icon: "fa-solid fa-fan",
      delay: "900",
    },
    {
      id: 3,
      title: "إصلاح وصيانة الغسالات",
      description: "خبراء في صيانة وإصلاح جميع ماركات الغسالات الأوتوماتيكية والعادية بأسعار تنافسية.",
      icon: "fa-solid fa-washer",
      delay: "400",
    },
    {
      id: 4,
      title: "حلول مشاكل الغسالات",
      description: "نعالج جميع مشاكل الغسالات، من تسريب المياه إلى الأعطال الإلكترونية، مع ضمان على الخدمة.",
      icon: "fa-solid fa-screwdriver-wrench",
      delay: "600",
    },
    {
      id: 5,
      title: "تركيب وتوصيل الغسالات",
      description: "نوفر خدمة تركيب وتوصيل آمنة وسريعة للغسالات الجديدة لضمان تشغيلها بشكل مثالي.",
      icon: "fa-solid fa-shirt",
      delay: "900",
    },
  ];

  return (
    // Added dir="rtl" for proper Arabic (Right-to-Left) text alignment
    <div className="services__two section-padding-three" dir="rtl">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-xl-4 col-md-6"
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div
                className={
                  "services__two-item active_hover topy-tilt" +
                  (active === service.id ? " active" : " ")
                }
                onMouseEnter={() => setActive(service.id)}
              >
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link href="services-details">
                  عرض المزيد<i className="fa-regular fa-angle-left"></i> {/* Changed to angle-left for RTL */}
                </Link>
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;