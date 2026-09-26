import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

export default function WhatsappFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink("Hello Peshawar Trading Co., I'd like to know more about your vehicles.")}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
