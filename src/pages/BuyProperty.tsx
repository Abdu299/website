import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Upload, X, CheckCircle2, Building2, FileText, Camera, } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Mail, MapPin, DollarSign, MessageSquare } from "lucide-react";

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
      budget: (form.elements.namedItem("budget") as HTMLInputElement)?.value,
      notes: (form.elements.namedItem("notes") as HTMLInputElement)?.value,
      country: (form.elements.namedItem("country") as HTMLInputElement)?.value,
      type: (form.elements.namedItem("type") as HTMLInputElement)?.value,
      requestType: "buyer"
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
                <User />
                <Input name="name" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Phone />
                <Input name="phone" type="tel" placeholder="+966 5XX XXX XXXX" required dir="ltr" className="text-left" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email Address *</Label>
                <Mail />
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
              <h2 className="text-xl font-bold text-foreground">Property Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <MapPin />
                <Input name="city" placeholder="" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <MapPin />
                <Input name="country" placeholder="" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Property Type *</Label>
                <Input name="type" placeholder="" required />
              </div>
 
              <div>
                <Label>Approximate Budget</Label>
                <div className="flex gap-2">
                  <DollarSign />
                  <Input name="budget" placeholder="For example: 100000 USD" required />
                </div>
              </div>
            </div>
          </Card>

          {/* Notes */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Notes</h2>
              <MessageSquare />
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