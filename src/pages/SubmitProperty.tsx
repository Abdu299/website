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
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial Property" },
];

const conditions = [
  { value: "new", label: "New" },
  { value: "good", label: "Good" },
  { value: "needs-maintenance", label: "Needs Maintenance" },
];

const roomTypes = [
  { id: "bedrooms", label: "Bedrooms" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "kitchen", label: "Kitchen" },
  { id: "living", label: "Living Room" },
];

const extraFeatures = [
  { id: "parking", label: "Parking" },
  { id: "balcony", label: "Balcony" },
  { id: "garden", label: "Garden" },
  { id: "pool", label: "Swimming Pool" },
  { id: "elevator", label: "Elevator" },
  { id: "security", label: "Security System" },
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
      toast({ title: "Maximum 10 images", variant: "destructive" });
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
    notes: (form.elements.namedItem("notes") as HTMLTextAreaElement)?.value,
  
    requestType: "seller"
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
          <h2 className="text-2xl font-bold text-foreground mb-3">Thank you!</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your property information has been received successfully and we will contact you soon.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="mt-6 gradient-hero text-primary-foreground border-0">
            Submit another property
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Submit your property information</h1>
          <p className="text-muted-foreground text-lg">Fill out the form below and we will contact you with the best offers</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Personal Info */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input name="name" placeholder="Enter your full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input name="phone" type="tel" placeholder="+966 5XX XXX XXXX" required dir="ltr" className="text-left" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input name="email" type="email" placeholder="example@email.com" required dir="ltr" className="text-left" />
              </div>
            </div>
          </Card>

          {/* Property Info */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-5 h-5 text-primary-foreground" />
              <h2 className="text-xl font-bold text-foreground">Property Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Property Address *</Label>
                <Input name="address" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input name="city" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input name="country" required />
              </div>

              <div className="space-y-2">
                <Label>Property Type *</Label>
                <input type="hidden" name="type" value={selectedType} />
                <Select onValueChange={setSelectedType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((t) => (
                      <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Area (m²) *</Label>
                <Input name="area" type="number" placeholder="Example: 250" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rooms">Number of Rooms *</Label>
                <Input name="rooms" type="number" placeholder="Example: 5" required />
              </div>

              <div className="space-y-2">
                <Label>Property Condition *</Label>
                <input type="hidden" name="condition" value={selectedCondition} />
                <Select onValueChange={setSelectedCondition} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map((c) => (
                      <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year Built (Optional)</Label>
                <Input name="year" type="number" placeholder="Example: 2020" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Expected Price (Optional)</Label>
                <Input name="price" type="number" placeholder="Example: 500000" />
              </div>
            </div>
          </Card>

          {/* Additional details */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-primary-foreground" />
              <h2 className="text-xl font-bold text-foreground">Additional Details</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Property Description</Label>
              <Textarea name="description" placeholder="Write a detailed description of the property..." rows={4} />
            </div>
          </Card>

          {/* Images */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-5 h-5 text-primary-foreground" />
              <h2 className="text-xl font-bold text-foreground">Property Images</h2>
            </div>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-border rounded-2xl p-8 text-center cursor-pointer hover:border-primary/40 transition-colors"
            >
              <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">Click here to upload images (up to 10 images)</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </Card>

          {/* Notes */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
              <h2 className="text-xl font-bold text-foreground">Notes</h2>
            </div>
            <Textarea name="notes" placeholder="Add any additional notes or message..." rows={3} />
          </Card>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full gradient-hero text-primary-foreground font-bold text-lg py-6 rounded-xl border-0 shadow-elevated hover:opacity-90 transition-all">
            Submit Property Information
          </Button>

        </form>
      </div>
    </div>
  );
};

export default SubmitProperty;