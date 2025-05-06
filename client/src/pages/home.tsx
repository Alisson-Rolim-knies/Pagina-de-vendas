import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ContentSection from '@/components/ContentSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>IA Generativa para Negócios | Multiplique suas Vendas e Marketing</title>
        <meta 
          name="description" 
          content="Descubra como a Inteligência Artificial Generativa pode revolucionar seu marketing e vendas. Ebook completo com estratégias práticas e ferramentas para implementar IA no seu negócio." 
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <ContentSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
