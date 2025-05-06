import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewStars from '@/components/ReviewStars';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
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
    <section className="bg-gradient-primary pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="text-white">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                Multiplique Suas Vendas com <span className="text-secondary-light">Inteligência Artificial Generativa</span>
              </h1>
              <p className="text-gray-100 text-lg md:text-xl mb-8">
                Descubra como as ferramentas de IA mais avançadas podem revolucionar seu marketing e aumentar seus resultados em vendas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('comprar')}
                  className="btn-primary font-bold text-white px-8 py-7 rounded-lg text-lg"
                >
                  Quero Transformar Meu Negócio
                </Button>
                <Button 
                  onClick={() => scrollToSection('conteudo')}
                  variant="outline"
                  className="bg-white text-primary font-bold px-8 py-7 rounded-lg text-lg hover:bg-gray-100 transition"
                >
                  Ver Conteúdo Completo
                </Button>
              </div>
              
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120&q=80" 
                    alt="Cliente" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120&q=80" 
                    alt="Cliente" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120&q=80" 
                    alt="Cliente" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    <ReviewStars rating={5} />
                    <span className="ml-2 text-white font-medium">4.9/5</span>
                  </div>
                  <p className="text-gray-100 text-sm">Mais de 2.750+ profissionais já transformaram seus negócios</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 pl-0 md:pl-10">
            <img 
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="IA Generativa para Negócios" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
