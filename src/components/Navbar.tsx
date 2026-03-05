import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">عقارك</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
            الرئيسية
          </Link>
          <Link to="/submit" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/submit' ? 'text-primary' : 'text-muted-foreground'}`}>
            أرسل عقارك
          </Link>
            <Link to="/buy" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/buy' ? 'text-primary' : 'text-muted-foreground'}`}>
              طلب شراء عقار
            </Link>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/property"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              العقارات
            </Link>

          <Button asChild size="sm" className="gradient-hero text-primary-foreground border-0 hover:opacity-90">
            <Link to="/submit">أرسل معلومات عقارك</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 py-4 space-y-3 animate-fade-in">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary">الرئيسية</Link>
          <Link 
            to="/buy" 
            onClick={() => setIsOpen(false)} 
            className="block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            أبحث عن عقار
          </Link>
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/property"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            العقارات
          </Link>
            
          <Link to="/submit" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary">أرسل عقارك</Link>
          <Button asChild size="sm" className="w-full gradient-hero text-primary-foreground border-0">
            <Link to="/submit" onClick={() => setIsOpen(false)}>أرسل معلومات عقارك</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
