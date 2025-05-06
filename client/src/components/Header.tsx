import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="font-poppins font-bold text-xl text-primary">IA<span className="text-dark">Negócios</span></span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <a 
            href="#beneficios" 
            onClick={(e) => { e.preventDefault(); scrollToSection('beneficios'); }}
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Benefícios
          </a>
          <a 
            href="#conteudo" 
            onClick={(e) => { e.preventDefault(); scrollToSection('conteudo'); }}
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Conteúdo
          </a>
          <a 
            href="#depoimentos" 
            onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); }}
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Depoimentos
          </a>
          <a 
            href="#faq" 
            onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>
        
        <a 
          href="#comprar" 
          onClick={(e) => { e.preventDefault(); scrollToSection('comprar'); }}
          className="hidden md:block bg-primary text-white font-medium px-5 py-2 rounded-lg hover:bg-primary-light transition-colors"
        >
          Comprar Agora
        </a>
        
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <FontAwesomeIcon icon="bars" className="text-xl text-gray-600" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-10">
              <a 
                href="#beneficios" 
                onClick={(e) => { e.preventDefault(); scrollToSection('beneficios'); }}
                className="font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Benefícios
              </a>
              <a 
                href="#conteudo" 
                onClick={(e) => { e.preventDefault(); scrollToSection('conteudo'); }}
                className="font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Conteúdo
              </a>
              <a 
                href="#depoimentos" 
                onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); }}
                className="font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
                className="font-medium text-gray-600 hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <a 
                href="#comprar" 
                onClick={(e) => { e.preventDefault(); scrollToSection('comprar'); }}
                className="bg-primary text-white font-medium px-5 py-2 rounded-lg hover:bg-primary-light transition-colors text-center"
              >
                Comprar Agora
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
