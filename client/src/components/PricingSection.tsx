import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Countdown from '@/components/Countdown';

export default function PricingSection() {
  const features = [
    {
      icon: 'check',
      title: 'Ebook IA Generativa para Negócios',
      description: 'Guia completo com 7 capítulos e mais de 200 páginas com estratégias práticas',
      isBonus: false
    },
    {
      icon: 'check',
      title: 'Biblioteca de Prompts',
      description: '100+ prompts otimizados prontos para usar em suas campanhas',
      isBonus: false
    },
    {
      icon: 'check',
      title: 'Templates de Anúncios',
      description: 'Modelos testados e aprovados para diferentes plataformas',
      isBonus: false
    },
    {
      icon: 'gift',
      title: 'BÔNUS: Minicurso em Vídeo',
      description: '5 aulas práticas sobre implementação de IA no seu workflow',
      isBonus: true
    },
    {
      icon: 'gift',
      title: 'BÔNUS: Acesso ao Grupo VIP',
      description: 'Comunidade exclusiva para networking e dúvidas',
      isBonus: true
    }
  ];

  const paymentMethods = [
    { name: 'Visa', image: 'https://cdn.iconscout.com/icon/free/png-256/free-visa-3-226460.png' },
    { name: 'Mastercard', image: 'https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3-226462.png' },
    { name: 'American Express', image: 'https://cdn.iconscout.com/icon/free/png-256/free-american-express-3-226463.png' },
    { name: 'Pix', image: 'https://cdn.iconscout.com/icon/free/png-256/free-pix-4-675714.png' }
  ];

  return (
    <section id="comprar" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto fade-in">
          <div className="text-center mb-10">
            <span className="bg-accent text-white text-sm font-bold px-4 py-1 rounded-full">OFERTA ESPECIAL</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mt-4 mb-2">
              Transforme seu Marketing e Vendas com IA Generativa
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Acesso imediato ao ebook completo e todos os bônus exclusivos
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
            <div className="md:w-7/12">
              <h3 className="font-poppins font-bold text-xl text-dark-light mb-4">O que você receberá:</h3>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 h-6 w-6 rounded-full ${feature.isBonus ? 'bg-accent' : 'bg-primary'} flex items-center justify-center mt-1`}>
                      <FontAwesomeIcon icon={feature.icon} className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><strong>{feature.title}</strong> - {feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-light rounded-lg p-5 mb-8">
                <div className="flex items-center">
                  <FontAwesomeIcon icon="shield-alt" className="text-primary text-2xl mr-4" />
                  <div>
                    <h4 className="font-semibold text-dark">Garantia de 30 dias</h4>
                    <p className="text-gray-600 text-sm">Se você não ficar 100% satisfeito, devolvemos seu investimento integralmente.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-5/12 bg-gray-50 p-8 rounded-xl">
              <div className="text-center mb-4">
                <p className="text-gray-600 line-through">De R$ 397,00</p>
                <div className="flex items-center justify-center">
                  <span className="font-montserrat font-bold text-5xl text-dark">R$ 197</span>
                  <span className="font-montserrat font-medium text-xl text-dark ml-1">,00</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">Pagamento único - Sem mensalidades</p>
              </div>
              
              <div className="mb-6">
                <div className="animate-pulse-slow bg-accent-light p-3 rounded-lg text-center text-white font-bold mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon="clock" />
                    <span>Oferta por tempo limitado!</span>
                  </div>
                  <Countdown hours={23} minutes={59} seconds={59} />
                </div>
              </div>
              
              <a 
                href="https://pay.hotmart.com/SEU_PRODUCT_ID_AQUI" 
                className="btn-primary block text-center font-bold text-white px-8 py-4 rounded-lg text-lg mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                QUERO TRANSFORMAR MEU NEGÓCIO AGORA
              </a>
              {/* Substitua SEU_PRODUCT_ID_AQUI pelo ID fornecido no painel da Hotmart */}
              
              <p className="text-center text-gray-500 text-sm mb-6">
                Pagamento 100% seguro via Hotmart
              </p>
              
              <div className="flex justify-center gap-2">
                {paymentMethods.map((method, index) => (
                  <img 
                    key={index}
                    src={method.image} 
                    alt={method.name} 
                    className="h-8"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
