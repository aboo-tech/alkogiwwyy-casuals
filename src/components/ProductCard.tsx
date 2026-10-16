import {  useCallback, useEffect, useRef, useState } from 'react';
import type { Product } from '../data/products';
import { getProductWhatsAppLink } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
const closeButtonRef = useCallback((node: HTMLButtonElement | null) => {
  if (node) {
    node.focus();
  }
}, []);
const dialogRef = useRef<HTMLElement | null>(null);
 
useEffect(() => {
  if (!isOpen) return;

  const previousOverflow = document.body.style.overflow;

 
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    setIsOpen(false);
    return;
  }

  if (event.key !== 'Tab') return;

  const dialog = dialogRef.current;
  if (!dialog) return;

  const focusableElements = Array.from(
    dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => element.getAttribute('aria-hidden') !== 'true');

  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (
    !event.shiftKey &&
    document.activeElement === lastElement
  ) {
    event.preventDefault();
    firstElement.focus();
  }
}


  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.body.style.overflow = previousOverflow;
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [isOpen]);


  // Restore focus after the modal has closed.
  useEffect(() => {
    if (isOpen || !previouslyFocusedRef.current) return;

    previouslyFocusedRef.current.focus();
    previouslyFocusedRef.current = null;
  }, [isOpen]);



  function openModal(event: React.MouseEvent<HTMLElement>) {
    previouslyFocusedRef.current = event.currentTarget;
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const price =
    product.price === null
      ? 'Contact for price'
      : `₦${product.price.toLocaleString('en-NG')}`;

  return (
    <>
      <article className="group">
        <button
          type="button"
          onClick={openModal}
          className="relative block w-full overflow-hidden bg-[#EAE2D3] text-left"
          aria-label={`View ${product.name} details`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 bg-[#F7F4ED] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-neutral-800">
            {product.category}
          </span>

          <span className="absolute inset-x-0 bottom-0 bg-black/60 py-3 text-center text-xs uppercase tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View Details
          </span>
        </button>

        <div className="flex items-start justify-between gap-3 py-4">
          <button
            type="button"
            onClick={openModal}
            className="text-left"
          >
            <h3 className="font-medium transition-colors hover:text-[#9A783D]">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">{price}</p>
          </button>

          <a
            href={getProductWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border-b border-[#9A783D] pb-1 text-xs font-medium uppercase tracking-wider hover:text-[#9A783D]"
          >
            Enquire
          </a>
        </div>

        <p className="text-sm leading-6 text-neutral-600">
          {product.description}
        </p>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <section
           ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`product-title-${product.id}`}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-[#F7F4ED] md:grid md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
            
             ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              aria-label="Close product details"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-white text-xl text-black shadow"
            >
              &times;
            </button>

            <div className="bg-[#EAE2D3]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[45vh] w-full object-cover md:max-h-full md:min-h-[480px]"
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9A783D]">
                {product.category}
              </p>

              <h2
                id={`product-title-${product.id}`}
                className="mt-4 text-2xl font-semibold md:text-3xl"
              >
                {product.name}
              </h2>

              <p className="mt-4 text-lg">{price}</p>

              <p className="mt-5 text-sm leading-7 text-neutral-600">
                {product.description}
              </p>

              <a
                href={getProductWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center bg-black px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#9A783D]"
              >
                Enquire on WhatsApp
              </a>

              <button
                type="button"
                onClick={closeModal}
                className="mt-4 text-xs uppercase tracking-widest text-neutral-500 hover:text-black"
              >
                Continue browsing
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
