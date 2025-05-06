import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Benefit = {
  icon: string;
  title: string;
  description: string;
}

export default function SolutionSection() {
  const benefits: Benefit[] = [
    {
      icon: 'bolt',
      title: 'Aumento na produtividade',
      description: 'Automatize tarefas e produza em horas o que levaria semanas manualmente.'
    },
    {
      icon: 'bullseye',
      title: 'Conversão de clientes maximizada',
      description: 'Crie anúncios que convertem e comunicações personalizadas que vendem.'
    },
    {
      icon: 'search-dollar',
      title: 'Redução de custos operacionais',
      description: 'Diminua gastos com contratações e tenha resultados superiores com ferramentas de IA.'
    },
    {
      icon: 'trophy',
      title: 'Vantagem competitiva',
      description: 'Saia na frente da concorrência com estratégias avançadas de IA Generativa.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <span className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">A SOLUÇÃO DEFINITIVA</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mt-4 mb-6">
            Apresentamos o Ebook <span className="text-primary">IA Generativa para Negócios</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Um guia completo e prático para implementar ferramentas de IA no seu marketing e vendas, mesmo que você não tenha conhecimento técnico.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1647427060119-08858cc5f12e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80" 
              alt="Ebook IA Generativa para Negócios" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <h3 className="font-poppins font-bold text-2xl text-dark-light mb-8 fade-in">O que você vai conquistar:</h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white text-xl">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </div>
                  <div className="ml-5">
                    <h4 className="font-poppins font-semibold text-lg text-dark">{benefit.title}</h4>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
