import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'wouter';

export default function Footer() {
  const linkItems = [
    { name: 'Blog', href: '#' },
    { name: 'Políticas de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'Sobre Nós', href: '#' },
    { name: 'Contato', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: ['fab', 'facebook-f'], href: '#' },
    { name: 'Instagram', icon: ['fab', 'instagram'], href: '#' },
    { name: 'LinkedIn', icon: ['fab', 'linkedin-in'], href: '#' },
    { name: 'YouTube', icon: ['fab', 'youtube'], href: '#' }
  ];

  const contactInfo = [
    { icon: 'envelope', text: 'contato@ianegocios.com.br' },
    { icon: 'phone-alt', text: '(11) 98765-4321' },
    { icon: 'map-marker-alt', text: 'São Paulo, SP - Brasil' }
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="font-poppins font-bold text-xl text-white">IA<span className="text-primary">Negócios</span></span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transformando empresas e profissionais com soluções de Inteligência Artificial para marketing e vendas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors" aria-label={social.name}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              {linkItems.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon icon={info.icon} className="mt-1 mr-3 text-primary" />
                  <span className="text-gray-400">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} IA Negócios. Todos os direitos reservados.</p>
          <p className="mt-2">
            <small>Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade do produto. A existência de um produto e sua aquisição, através da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado. A compra deste produto não garante sucesso ou geração de lucro. Ao adquiri-lo o comprador declara estar ciente dessas informações.</small>
          </p>
        </div>
      </div>
    </footer>
  );
}
