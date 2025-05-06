import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Problem = {
  icon: string;
  title: string;
  description: string;
}

export default function ProblemSection() {
  const problems: Problem[] = [
    {
      icon: 'clock',
      title: 'Perdendo tempo com tarefas repetitivas',
      description: 'Criação de conteúdo manual, respostas individuais para clientes e análise de dados que poderia ser automatizada.'
    },
    {
      icon: 'money-bill-wave',
      title: 'Gastando muito em marketing sem resultados',
      description: 'Investindo em campanhas genéricas que não convertem e contratando profissionais para tarefas que a IA poderia fazer.'
    },
    {
      icon: 'chart-line',
      title: 'Ficando para trás na competição',
      description: 'Enquanto outros já usam IA para criar conteúdo otimizado, gerar leads qualificados e personalizar jornadas.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-6">
            Você está deixando dinheiro na mesa se ainda não usa IA no seu negócio
          </h2>
          <p className="text-gray-600 text-lg">
            Enquanto seus concorrentes automatizam e escalam operações com inteligência artificial, você ainda está...
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="text-accent text-4xl mb-4">
                <FontAwesomeIcon icon={problem.icon} />
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3 text-dark-light">{problem.title}</h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
