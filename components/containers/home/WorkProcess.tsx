import Image from "next/image";
import border from "@/public/img/shape/border.svg";
// TODO: Consider updating these icons to better match the new content.
// For example: 1. Phone/Calendar icon, 2. tools, 3. Shield/Checkmark icon.
import processTwo from "@/public/img/icon/process-1.svg";
import processThree from "@/public/img/icon/process-2.svg";
import process from "@/public/img/icon/process-3.svg";

const WorkProcess = ({ addClass = false }) => {
  return (
    <div
      className={
        (addClass ? " pt-0 bg-transparent" : " ") +
        " work__process section-padding"
      }
      // Added dir="rtl" for proper Arabic (Right-to-Left) text alignment
      dir="rtl"
    >
      <div className="container">
        <div className="row mb-40">
          <div className="col-xl-12">
            <div className="work__process-title">
              <h2>آلية عملنا: سهولة واحترافية</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="work__process-item">
              <Image className="shape" src={border} alt="border" priority />
              <div className="work__process-item-icon">
                <span>01</span>
                <Image src={processTwo} alt="icon" priority />
              </div>
              <h3>الحجز والفحص المبدئي</h3>
              <p>
                تواصل معنا بسهولة عبر الهاتف أو الموقع. سنقوم بتحديد المشكلة
                وتحديد موعد لزيارة فني متخصص.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="work__process-item two">
              <Image className="shape" src={border} alt="border" priority />
              <div className="work__process-item-icon">
                <span>02</span>
                <Image src={processThree} alt="icon" priority />
              </div>
              <h3>الصيانة والإصلاح الفعال</h3>
              <p>
                يصل فنيونا في الموعد المحدد مع جميع الأدوات اللازمة وقطع
                الغيار لإصلاح جهازك بكفاءة وسرعة.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="work__process-item three">
              <div className="work__process-item-icon">
                <span>03</span>
                <Image src={process} alt="icon" priority />
              </div>
              <h3>ضمان الجودة والرضا</h3>
              <p>
                بعد إتمام الإصلاح، نتأكد من أن جهازك يعمل بشكل مثالي ونقدم
                ضماناً على خدمتنا لراحة بالك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;