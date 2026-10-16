const WHATSAPP_NUMBER = "234XXXXXXXXXX";

export function getProductWhatsAppLink(productName: string): string {
  const message = `Assalamu alaykum, I'm interested in the ${productName}. Please share more details.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
