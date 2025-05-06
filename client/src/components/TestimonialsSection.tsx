import ReviewStars from '@/components/ReviewStars';

type Testimonial = {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      content: "Em apenas 30 dias, aumentamos nossa produção de conteúdo em 4x e melhoramos nossas taxas de conversão em 37%. As estratégias de IA para criação de anúncios revolucionaram nosso marketing.",
      author: "Carlos M.",
      role: "CMO, Empresa de SaaS",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      content: "Como pequeno empreendedor, sempre tive dificuldade com marketing. Com as técnicas do ebook, consegui criar campanhas profissionais e dobrei meu faturamento em 3 meses.",
      author: "Ana L.",
      role: "Proprietária, Boutique online",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      content: "Os prompts prontos para geração de imagens e textos economizam horas do meu dia. Reduzi custos com freelancers e aumentei nossa presença online significativamente.",
      author: "Ricardo F.",
      role: "Agência de Marketing Digital",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <span className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">RESULTADOS REAIS</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mt-4 mb-6">
            O que nossos clientes estão conseguindo com IA Generativa
          </h2>
          <p className="text-gray-600 text-lg">
            Veja como profissionais e empresas estão transformando seus resultados após aplicar as estratégias do ebook.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-white p-8 rounded-xl shadow-md fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <ReviewStars rating={5} />
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-dark">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
