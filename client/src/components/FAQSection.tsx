import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FaqItem = {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FaqItem[] = [
    {
      question: "Preciso ter conhecimento técnico para aplicar as estratégias do ebook?",
      answer: "Não! O ebook foi especialmente desenvolvido para não-técnicos. Todas as estratégias são explicadas passo a passo, com exemplos práticos e capturas de tela. Você não precisa saber programação ou ter conhecimentos avançados em tecnologia para implementar as técnicas apresentadas."
    },
    {
      question: "Quanto tempo vou levar para ver resultados?",
      answer: "Muitos de nossos clientes começam a ver resultados imediatos na produtividade, conseguindo criar conteúdos e materiais em uma fração do tempo habitual. Quanto aos resultados em vendas e marketing, isso depende do seu negócio e do quanto você implementar as estratégias, mas a maioria dos nossos clientes relata melhorias significativas em 30-60 dias após a implementação."
    },
    {
      question: "Quais ferramentas de IA são abordadas no ebook?",
      answer: "O ebook aborda as principais ferramentas de IA Generativa disponíveis atualmente, incluindo ChatGPT, Claude, Gemini, Midjourney, DALL-E, Stable Diffusion, entre outras. São apresentadas tanto ferramentas gratuitas quanto pagas, além de estratégias para aproveitar ao máximo cada uma delas, com foco específico em aplicações de marketing e vendas."
    },
    {
      question: "O conteúdo é adequado para qualquer tipo de negócio?",
      answer: "Sim! As estratégias apresentadas são flexíveis e adaptáveis para diferentes modelos de negócio, desde e-commerces e produtos digitais até serviços profissionais e empresas B2B. O ebook inclui exemplos específicos para diversos segmentos e orientações sobre como adaptar as técnicas para o seu nicho específico."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos uma garantia incondicional de 30 dias. Se por qualquer motivo você não ficar satisfeito com o conteúdo, basta solicitar o reembolso diretamente pela plataforma Hotmart dentro desse período, e devolveremos 100% do seu investimento, sem questionamentos. Nossa prioridade é sua satisfação."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Tire suas dúvidas sobre o ebook IA Generativa para Negócios
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto fade-in">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-6 border-b border-gray-200 pb-6">
                <AccordionTrigger className="flex items-center justify-between w-full text-left font-poppins font-semibold text-lg text-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-3 text-gray-600">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
