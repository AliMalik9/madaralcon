"use client";
import Link from "next/link";

const Contact = ({ addClass = false }) => {
  return (
    <div
      className={(addClass ? " section-padding pt-0" : " ") + " contact__one text-end rtl"}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact__one-area">
              <div className="row ai-center">
                <div className="col-lg-6 lg-mb-30">
                  <div className="contact__one-area-left">
                    <h2>أرسل طلبك عبر الرسالة</h2>
                    <div
                      className="info"
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <div className="info-item">
                        <div className="info-item-content">
                          <span>اتصل الآن</span>
                          <h5>
                            <Link href="tel:+966541243428">
                              824 43 412 9665+
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="info-item-content">
                          <span>عنوان المكتب</span>
                          <h5>
                            <Link
                              href="https://maps.google.com"
                              target="_blank"
                            >
                              جدة، المملكة العربية السعودية
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="info-item-content">
                          <span>البريد الإلكتروني</span>
                          <h5>
                            <Link href="mailto:contact@madaralcon.con">
                              contact@madaralcon.com
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="contact__one-area-right"
                    data-aos-duration="800"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6 mb-30">
                          <div className="contact__form-area-item">
                            <input
                              type="text"
                              name="name"
                              placeholder="الاسم الكامل"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-30">
                          <div className="contact__form-area-item">
                            <input
                              type="email"
                              name="email"
                              placeholder="البريد الإلكتروني"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-30">
                          <div className="contact__form-area-item">
                            <input
                              type="text"
                              name="subject"
                              placeholder="الموضوع"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-30">
                          <div className="contact__form-area-item">
                            <textarea
                              name="message"
                              placeholder="اكتب رسالتك هنا"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="contact__form-area-item">
                            <button className="button-1" type="submit">
                              إرسال الرسالة
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default Contact;
