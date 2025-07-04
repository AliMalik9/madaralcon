"use client";
import { useState } from "react";
import Link from "next/link";

const Services = () => {
  const [active, setActive] = useState(1);

  // Store service card data in an array for cleaner code
  const servicesData = [
    {
      id: 0,
      title: "إصلاح فوري للمكيفات",
      description: "فريقنا جاهز لإصلاح جميع أعطال المكيفات بشكل سريع وفعال لتعود للعمل كأنها جديدة.",
      icon: "fa-solid fa-wind",
      delay: "600",
    },
    {
      id: 1,
      title: "تركيب وصيانة المكيفات",
      description: "نقدم خدمات تركيب وصيانة احترافية لجميع أنواع المكيفات لضمان أفضل أداء وتبريد.",
      icon: "fa-solid fa-snowflake",
      delay: "400",
    },
    {
      id: 2,
      title: "إصلاح وصيانة الغسالات",
      description: "خبراء في صيانة وإصلاح جميع ماركات الغسالات الأوتوماتيكية والعادية بأسعار تنافسية.",
      icon: "fa-solid fa-washer",
      delay: "400",
    },
  ];

  return (
    // Added dir="rtl" for proper Arabic (Right-to-Left) text alignment
    <div className="services__two section-padding" dir="rtl">
      <div className="container">
        <div className="row mb-20">
          <div className="col-xl-12">
            <div className="services__two-title">
              <h2>نقدم حلولاً مبتكرة لصيانة الأجهزة المنزلية</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Use map() to create cards dynamically from the data array */}
          {servicesData.map((service) => (
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
                  {/* Changed icon to fa-angle-left for proper RTL direction */}
                  عرض المزيد <i className="fa-regular fa-angle-left"></i>
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

export default Services;