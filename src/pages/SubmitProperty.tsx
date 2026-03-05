import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Upload, X, CheckCircle2, Building2, User, FileText, Camera, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const propertyTypes = [
  { value: "house", label: "منزل" },
  { value: "apartment", label: "شقة" },
  { value: "land", label: "أرض" },
  { value: "commercial", label: "عقار تجاري" },
];

const conditions = [
  { value: "new", label: "جديد" },
  { value: "good", label: "جيد" },
  { value: "needs-maintenance", label: "يحتاج صيانة" },
];

const roomTypes = [
  { id: "bedrooms", label: "غرف نوم" },
  { id: "bathrooms", label: "حمام" },
  { id: "kitchen", label: "مطبخ" },
  { id: "living", label: "صالة" },
];

const extraFeatures = [
  { id: "parking", label: "موقف سيارات" },
  { id: "balcony", label: "شرفة" },
  { id: "garden", label: "حديقة" },
  { id: "pool", label: "مسبح" },
  { id: "elevator", label: "مصعد" },
  { id: "security", label: "نظام أمان" },
];

const SubmitProperty = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [selectedType, setSelectedType] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 10) {
      toast({ title: "الحد الأقصى 10 صور", variant: "destructive" });
      return;
    }
    const newImages = [...images, ...files];
    setImages(newImages);
    const previews = files.map((f) => URL.createObjectURL(f));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  //const formData = new FormData(form);

  const data = {
  name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
  phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
  email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
  city: (form.elements.namedItem("city") as HTMLInputElement)?.value,
  country: (form.elements.namedItem("country") as HTMLInputElement)?.value,
  address: (form.elements.namedItem("address") as HTMLInputElement)?.value,

  type: selectedType,
  condition: selectedCondition,

  area: (form.elements.namedItem("area") as HTMLInputElement)?.value,
  rooms: (form.elements.namedItem("rooms") as HTMLInputElement)?.value,

  year: (form.elements.namedItem("year") as HTMLInputElement)?.value,
  price: (form.elements.namedItem("price") as HTMLInputElement)?.value,

  description: (form.elements.namedItem("description") as HTMLTextAreaElement)?.value,
  notes: (form.elements.namedItem("notes") as HTMLTextAreaElement)?.value
};

  await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  setIsSubmitted(true);
};
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="text-center max-w-md animate-scale-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-success-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">شكراً لك!</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            تم استلام معلومات عقارك بنجاح وسنتواصل معك قريباً.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="mt-6 gradient-hero text-primary-foreground border-0">
            إرسال عقار آخر
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">أرسل معلومات عقارك</h1>
          <p className="text-muted-foreground text-lg">املأ النموذج التالي وسنتواصل معك بأفضل العروض</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">المعلومات الشخصية</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل *</Label>
                <Input name="name" placeholder="أدخل اسمك الكامل" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف *</Label>
                <Input name="phone" type="tel" placeholder="+966 5XX XXX XXXX" required dir="ltr" className="text-left" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">البريد الإلكتروني *</Label>
                <Input name="email" type="email" placeholder="example@email.com" required dir="ltr" className="text-left" />
              </div>
            </div>
          </Card>

          {/* Property Info */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">معلومات العقار</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">عنوان العقار *</Label>
                <Input name="address" placeholder="" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">المدينة *</Label>
                <Input name="city" placeholder="" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">الدولة *</Label>
                <Input name="country" placeholder="" required />
              </div>
              <div className="space-y-2">
                <Label>نوع العقار *</Label>

                <input type="hidden" name="type" value={selectedType} />

                <Select onValueChange={setSelectedType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع العقار" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((t) => (
                      <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">المساحة (م²) *</Label>
                <Input name="area" type="number" placeholder="مثال: 250" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rooms">عدد الغرف *</Label>
                <Input name="rooms" type="number" placeholder="مثال: 5" required />
              </div>
              <div className="space-y-2">
                <Label>حالة العقار *</Label>
                  <input type="hidden" name="condition" value={selectedCondition} />

                  <Select onValueChange={setSelectedCondition} required>

                  <SelectTrigger><SelectValue placeholder="اختر حالة العقار" /></SelectTrigger>
                  <SelectContent>
                    {conditions.map((c) => (
                      <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Room types */}
              <div className="space-y-3 md:col-span-2">
                <Label>أنواع الغرف</Label>
                <div className="flex flex-wrap gap-4">
                  {roomTypes.map((room) => (
                    <label key={room.id} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={selectedRoomTypes.includes(room.id)}
                        onCheckedChange={(checked) => {
                          setSelectedRoomTypes(
                            checked
                              ? [...selectedRoomTypes, room.id]
                              : selectedRoomTypes.filter((r) => r !== room.id)
                          );
                        }}
                      />
                      <span className="text-sm text-foreground">{room.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">سنة البناء (اختياري)</Label>
                <Input name="year" type="number" placeholder="مثال: 2020" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">السعر المتوقع (اختياري)</Label>
                <Input name="price" type="number" placeholder="مثال: 500000" />
              </div>
            </div>
          </Card>

          {/* Additional details */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">تفاصيل إضافية</h2>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="description">وصف العقار</Label>
                <Textarea name="description" placeholder="اكتب وصفاً تفصيلياً للعقار..." rows={4} />
              </div>

              <div className="space-y-3">
                <Label>ميزات إضافية</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {extraFeatures.map((feat) => (
                    <label key={feat.id} className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                      <Checkbox
                        checked={selectedFeatures.includes(feat.id)}
                        onCheckedChange={(checked) => {
                          setSelectedFeatures(
                            checked
                              ? [...selectedFeatures, feat.id]
                              : selectedFeatures.filter((f) => f !== feat.id)
                          );
                        }}
                      />
                      <span className="text-sm text-foreground">{feat.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Images */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">صور العقار</h2>
            </div>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-border rounded-2xl p-8 text-center cursor-pointer hover:border-primary/40 transition-colors"
            >
              <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">اضغط هنا لرفع الصور (حتى 10 صور)</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-4">
                {imagePreviews.map((preview, i) => (
                  <div key={i} className="relative group aspect-square rounded-xl overflow-hidden">
                    <img src={preview} alt={`صورة ${i + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-1 left-1 w-6 h-6 rounded-full bg-destructive flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4 text-destructive-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Notes */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">ملاحظات</h2>
            </div>
            <Textarea name="notes" placeholder="أضف أي ملاحظات أو رسالة إضافية..." rows={3} />
          </Card>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full gradient-hero text-primary-foreground font-bold text-lg py-6 rounded-xl border-0 shadow-elevated hover:opacity-90 transition-all">
            إرسال معلومات العقار
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubmitProperty;
