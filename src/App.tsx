import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import SubmitProperty from "./pages/SubmitProperty";
import NotFound from "./pages/NotFound";
import BuyProperty from "./pages/BuyProperty";

import PropertyDetail from "./pages/PropertyDetail";
import PropertyPage from "./pages/propertyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/submit" element={<SubmitProperty />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/buy" element={<BuyProperty />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
