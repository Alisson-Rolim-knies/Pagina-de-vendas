import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Chapter = {
  number: number;
  category: string;
  title: string;
  description: string;
  features: string[];
}

export default function ContentSection() {
  const chapters: Chapter[] = [
    {
      number: 1,
      category: 'Fundamentos',
      title: 'Introdução à IA Generativa para Negócios',
      description: 'Entenda o que é IA Generativa, como funciona e por que ela representa uma revolução para marketing e vendas.',
      features: [
        'Conceitos fundamentais sem jargão técnico',
        'Panorama das ferramentas disponíveis',
        'Como a IA está transformando o mercado'
      ]
    },
    {
      number: 2,
      category: 'Marketing',
      title: 'Criação de Conteúdo de Marketing com IA',
      description: 'Aprenda a gerar textos persuasivos, artigos de blog, emails e conteúdo para redes sociais usando IA.',
      features: [
        'Prompts otimizados para resultados superiores',
        'Templates prontos para diferentes tipos de conteúdo',
        'Técnicas de edição e refinamento de texto'
      ]
    },
    {
      number: 3,
      category: 'Publicidade',
      title: 'Potencializando Anúncios com IA',
      description: 'Domine estratégias para criar campanhas publicitárias de alto desempenho em todas as plataformas.',
      features: [
        'Headlines e descrições que convertem',
        'Segmentação inteligente de público',
        'Otimização de campanhas com IA'
      ]
    },
    {
      number: 4,
      category: 'Vendas',
      title: 'IA Generativa no Processo de Vendas',
      description: 'Transforme seu funil de vendas com automação inteligente e personalização avançada.',
      features: [
        'Scripts de vendas personalizados',
        'Automação de follow-ups e objeções',
        'Qualificação e priorização de leads'
      ]
    },
    {
      number: 5,
      category: 'Visual',
      title: 'Geração de Imagens e Design com IA',
      description: 'Crie visuais profissionais para suas campanhas sem precisar de habilidades em design.',
      features: [
        'Prompts para gerar imagens de alta qualidade',
        'Criação de identidade visual consistente',
        'Edição e personalização de imagens'
      ]
    },
    {
      number: 6,
      category: 'Atendimento',
      title: 'Suporte ao Cliente com IA Generativa',
      description: 'Implemente sistemas inteligentes que melhoram a experiência do cliente e reduzem custos.',
      features: [
        'Configuração de chatbots inteligentes',
        'Respostas personalizadas em escala',
        'Análise de sentimento e satisfação'
      ]
    }
  ];

  return (
    <section id="conteudo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <span className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">CONTEÚDO COMPLETO</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mt-4 mb-6">
            Um guia prático e passo a passo para implementar IA no seu negócio
          </h2>
          <p className="text-gray-600 text-lg">
            Dividido em 7 capítulos detalhados, nosso ebook vai do básico ao avançado, com exemplos reais e templates prontos para usar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <div key={index} className="card bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="h-3 bg-primary w-full"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-poppins font-bold text-xl text-dark-light">Capítulo {chapter.number}</h3>
                  <span className="bg-gray-100 text-primary-dark text-xs font-medium px-3 py-1 rounded-full">{chapter.category}</span>
                </div>
                <h4 className="font-poppins font-semibold text-lg mb-4">{chapter.title}</h4>
                <p className="text-gray-600 mb-4">
                  {chapter.description}
                </p>
                <ul className="space-y-2">
                  {chapter.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FontAwesomeIcon icon="check" className="text-primary mt-1 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
