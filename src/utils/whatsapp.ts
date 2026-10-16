const WHATSAPP_NUMBER = "2349022920617";

export function getProductWhatsAppLink(productName: string): string {
  const message = `As-sallamu'alaykum, I'm interested in the ${productName}. Please share more details.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
