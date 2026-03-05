import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { User, Phone, Mail, MapPin, DollarSign, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BuyProperty = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      city: (form.elements.namedItem("city") as HTMLInputElement)?.value,
      budget: (form.elements.namedItem("budget") as HTMLInputElement)?.value,
      notes: (form.elements.namedItem("notes") as HTMLInputElement)?.value,
      country: (form.elements.namedItem("country") as HTMLInputElement)?.value,
      requestType: "seller"
    };

    console.log(data);

    toast({
      title: "تم إرسال الطلب",
      description: "سنقوم بالتواصل معك قريباً",
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex justify-center mt-20">
        <Card className="p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">تم استلام طلبك</h2>
          <p>سيتم التواصل معك عندما نجد العقار المناسب.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-10">
      <Card className="w-full max-w-2xl p-8 space-y-6">

        <h1 className="text-2xl font-bold text-center">
          طلب شراء عقار
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <Label>الاسم الكامل</Label>
            <div className="flex gap-2">
              <User />
              <Input name="name" required />
            </div>
          </div>

          <div>
            <Label>رقم الهاتف</Label>
            <div className="flex gap-2">
              <Phone />
              <Input name="phone" required />
            </div>
          </div>

          <div>
            <Label>البريد الإلكتروني</Label>
            <div className="flex gap-2">
              <Mail />
              <Input name="email" type="email" />
            </div>
          </div>

          <div>
            <Label>الدولة المطلوبة</Label>
            <div className="flex gap-2">
              <MapPin />
              <Input name="country" placeholder="" required />
            </div>
          </div>

          <div>
            <Label>المدينة أو المنطقة المطلوبة</Label>
            <div className="flex gap-2">
              <MapPin />
              <Input name="city" placeholder="" required />
            </div>
          </div>

          <div>
            <Label>الميزانية التقريبية</Label>
            <div className="flex gap-2">
              <DollarSign />
              <Input name="budget" placeholder="مثلاً 100000 دولار" required />
            </div>
          </div>

          <div>
            <Label>ملاحظات إضافية</Label>
            <div className="flex gap-2">
              <MessageSquare />
              <Textarea name="notes" placeholder="أي تفاصيل إضافية عن العقار الذي تبحث عنه" />
            </div>
          </div>

          <Button className="w-full" type="submit">
            إرسال الطلب
          </Button>

        </form>

      </Card>
    </div>
  );
};

export default BuyProperty;