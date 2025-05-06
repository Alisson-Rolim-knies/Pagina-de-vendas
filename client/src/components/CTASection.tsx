import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CTASection() {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center fade-in">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-6 max-w-3xl mx-auto">
          Não fique para trás enquanto seus concorrentes aproveitam o poder da IA
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          O futuro do marketing e vendas já chegou. Transforme seu negócio hoje com estratégias de IA Generativa que realmente funcionam.
        </p>
        
        <button 
          onClick={() => scrollToSection('comprar')}
          className="btn-primary inline-block font-bold text-white px-10 py-5 rounded-lg text-xl mb-8"
        >
          COMEÇAR AGORA
        </button>
        
        <div className="flex justify-center items-center text-gray-500 text-sm">
          <FontAwesomeIcon icon="lock" className="mr-2" />
          <span>Pagamento 100% seguro • Garantia de 30 dias • Suporte especializado</span>
        </div>
      </div>
    </section>
  );
}
