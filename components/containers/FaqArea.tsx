"use client";
import { useState } from "react";

const  FaqArea = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="faq-page section-padding" id="accordionExample">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div
            className="col-lg-6 lg-mb-20"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="faq__two-right">
              {[
                {
                  id: "One",
                  question: "كم يستغرق وقت صيانة المكيف أو الغسالة؟",
                  answer:
                    "يعتمد الوقت على نوع العطل، لكن عادةً تستغرق عملية الصيانة من 30 إلى 90 دقيقة حسب الحالة.",
                },
                {
                  id: "Two",
                  question: "هل تقدمون زيارات منزلية داخل جدة؟",
                  answer:
                    "نعم، نقدم زيارات منزلية لجميع أحياء جدة خلال نفس اليوم في معظم الحالات.",
                },
                {
                  id: "Three",
                  question: "هل توفرون ضمان بعد الصيانة؟",
                  answer:
                    "نعم، نقدم ضمان على الخدمة وقطع الغيار (إن وجدت) لمدة 30 يومًا لضمان رضا العميل.",
                },
                {
                  id: "Seven",
                  question: "هل تعملون في عطلة نهاية الأسبوع؟",
                  answer:
                    "نعم، نحن متاحون طوال أيام الأسبوع بما في ذلك الجمعة للحالات الطارئة أو حسب الطلب.",
                },
                {
                  id: "Eight",
                  question: "هل تقدمون خدمة تنظيف المكيفات؟",
                  answer:
                    "نعم، نقدم خدمة تنظيف داخلية وخارجية للمكيفات باستخدام أدوات آمنة وفعالة لتحسين الأداء.",
                },
                {
                  id: "Nine",
                  question: "ما هي أنواع الغسالات التي تقومون بصيانتها؟",
                  answer:
                    "نقوم بصيانة جميع أنواع الغسالات: أوتوماتيك، نصف أوتوماتيك، تحميل أمامي وأعلى.",
                },
              ].map((item, index) => (
                <div className="faq__area-item" key={index}>
                  <h5
                    className={(active === index ? "" : "collapsed") + " icon"}
                    onClick={() => setActive(active === index ? -1 : index)}
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                  >
                    <span>{`${index + 1}`}</span>
                    {item.question}
                  </h5>
                  <div
                    id={`collapse${item.id}`}
                    className={`faq__area-item-body text-end collapse${
                      active === index ? " show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div
            className="col-lg-6"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="faq__two-right">
              {[
                {
                  id: "Four",
                  question: "ما هي أسعار خدمات الصيانة؟",
                  answer:
                    "الأسعار تختلف حسب نوع العطل والجهاز، لكننا نقدم أسعارًا مناسبة مع جودة عالية وخدمة سريعة.",
                },
                {
                  id: "Five",
                  question: "هل تستخدمون قطع غيار أصلية؟",
                  answer:
                    "نعم، نستخدم قطع غيار أصلية أو بدائل عالية الجودة حسب توفرها ونوضح التفاصيل للعميل قبل التركيب.",
                },
                {
                  id: "Six",
                  question: "هل يمكن إصلاح الجهاز في نفس اليوم؟",
                  answer:
                    "في أغلب الحالات نعم، حيث نصلح الجهاز في نفس الزيارة إذا كانت القطع متوفرة معنا.",
                },
                {
                  id: "Ten",
                  question: "هل يمكنني الدفع عبر التحويل البنكي أو مدى؟",
                  answer:
                    "نعم، نوفر عدة وسائل دفع تشمل الكاش، مدى، أو التحويل البنكي لتسهيل المعاملة.",
                },
                {
                  id: "Eleven",
                  question: "هل تقدمون خدمة الطوارئ؟",
                  answer:
                    "نعم، نوفر خدمة الطوارئ لبعض الأعطال الحرجة خاصة في فصل الصيف لمشاكل التبريد.",
                },
                {
                  id: "Twelve",
                  question: "كيف يمكنني حجز موعد؟",
                  answer:
                    "يمكنك حجز موعد عبر الاتصال المباشر، إرسال رسالة واتساب، أو تعبئة نموذج الحجز على الموقع.",
                },
              ].map((item, index) => {
                const adjustedIndex = index + 6;
                return (
                  <div className="faq__area-item" key={adjustedIndex}>
                    <h5
                      className={
                        (active === adjustedIndex ? "" : "collapsed") + " icon"
                      }
                      onClick={() =>
                        setActive(active === adjustedIndex ? -1 : adjustedIndex)
                      }
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                    >
                      <span>{`${adjustedIndex + 1}`}</span>
                      {item.question}
                    </h5>
                    <div
                      id={`collapse${item.id}`}
                      className={`faq__area-item-body text-end collapse${
                        active === adjustedIndex ? " show" : ""
                      }`}
                      data-bs-parent="#accordionExample"
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqArea;
