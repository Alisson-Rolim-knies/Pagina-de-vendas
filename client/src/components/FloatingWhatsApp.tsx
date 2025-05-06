import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function FloatingWhatsApp() {
  // Substitua abaixo pelo seu número de WhatsApp no formato internacional: 551199999999
  const whatsappNumber = '5511987654321';
  
  return (
    <a 
      href={`https://wa.me/${whatsappNumber}`} 
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg z-50 hover:bg-green-600 transition-colors"
      aria-label="Contato via WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </a>
  );
}
