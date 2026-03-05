import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";
import property5 from "@/assets/property5.jpg";
import property6 from "@/assets/property6.jpg";

export interface Property {
  id: string;
  title: string;
  city: string;
  address: string;
  price: number;
  rooms: number;
  bathrooms: number;
  area: number;
  floor: number | null;
  type: "شقة" | "منزل" | "أرض";
  description: string;
  images: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    title: "شقة فاخرة بإطلالة بحرية",
    city: "الدار البيضاء",
    address: "شارع الكورنيش، عين الذئاب",
    price: 1850000,
    rooms: 3,
    bathrooms: 2,
    area: 145,
    floor: 7,
    type: "شقة",
    description: "شقة عصرية فاخرة تتميز بإطلالة بانورامية على المحيط الأطلسي. تضم صالون واسع ومطبخ مجهز بالكامل وشرفة كبيرة. موقع متميز قريب من جميع المرافق والخدمات.",
    images: [property1, property4, property5],
  },
  {
    id: "2",
    title: "فيلا عصرية مع حديقة",
    city: "الرباط",
    address: "حي الرياض، سويسي",
    price: 4200000,
    rooms: 5,
    bathrooms: 3,
    area: 320,
    floor: null,
    type: "منزل",
    description: "فيلا راقية بتصميم عصري في أرقى أحياء الرباط. تحتوي على حديقة خضراء واسعة ومسبح خاص وكراج لسيارتين. مثالية للعائلات الباحثة عن الراحة والخصوصية.",
    images: [property2, property4, property1],
  },
  {
    id: "3",
    title: "أرض للبناء بإطلالة جبلية",
    city: "مراكش",
    address: "طريق أوريكا، كلم 15",
    price: 950000,
    rooms: 0,
    bathrooms: 0,
    area: 500,
    floor: null,
    type: "أرض",
    description: "قطعة أرض مسطحة جاهزة للبناء بموقع استراتيجي على طريق أوريكا. تتمتع بإطلالة خلابة على جبال الأطلس. مناسبة لبناء فيلا أحلامك أو مشروع سياحي.",
    images: [property3, property3, property3],
  },
  {
    id: "4",
    title: "شقة واسعة في وسط المدينة",
    city: "فاس",
    address: "شارع محمد الخامس، فيل نوفيل",
    price: 780000,
    rooms: 4,
    bathrooms: 2,
    area: 160,
    floor: 3,
    type: "شقة",
    description: "شقة فسيحة ومشرقة في قلب مدينة فاس الجديدة. تتميز بتشطيبات عالية الجودة وأرضيات خشبية فاخرة. قريبة من المدارس والمستشفيات والمراكز التجارية.",
    images: [property4, property1, property5],
  },
  {
    id: "5",
    title: "بنتهاوس فاخر مع تراس",
    city: "طنجة",
    address: "مالاباطا، الكورنيش",
    price: 3500000,
    rooms: 4,
    bathrooms: 3,
    area: 220,
    floor: 12,
    type: "شقة",
    description: "بنتهاوس استثنائي في الطابق الأخير مع تراس خاص بإطلالة 360 درجة على مضيق جبل طارق والمدينة. تصميم فريد ومواد فاخرة وخدمات راقية.",
    images: [property5, property1, property4],
  },
  {
    id: "6",
    title: "رياض تقليدي مرمم",
    city: "مراكش",
    address: "المدينة القديمة، باب دكالة",
    price: 2800000,
    rooms: 6,
    bathrooms: 4,
    area: 280,
    floor: null,
    type: "منزل",
    description: "رياض أصيل تم ترميمه بعناية فائقة مع الحفاظ على الطابع المعماري التقليدي. يضم فناء داخلي بنافورة وأقواس مزخرفة وزليج بلدي أصيل. مثالي كمنزل عائلي أو مشروع ضيافة.",
    images: [property6, property6, property6],
  },
];
