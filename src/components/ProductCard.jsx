import React from 'react';

const ProductCard = ({ product }) => (
  <article className="group mx-auto grid min-h-[30rem] w-full grid-cols-1 border-b border-[#101820]/20 bg-[#f2f0e8] md:min-h-[24rem] md:grid-cols-[minmax(18rem,32vw)_1fr] lg:min-h-[38rem] lg:w-[70%] lg:grid-cols-[42%_58%]">
    <div className="relative min-h-[18rem] overflow-hidden bg-[#d9e4df] md:min-h-0">
      <div className={product.images ? 'grid h-full grid-cols-2 gap-1' : 'h-full'}>
        {(product.images || [product.image]).map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${product.title} - picha ${index + 1}`}
            className="h-full min-h-[18rem] w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-[1.03] md:min-h-0"
          />
        ))}
      </div>
      <span className="absolute left-4 top-4 bg-[#d8f23f] px-2 py-1 font-['Montserrat',_sans-serif] text-[10px] font-bold uppercase tracking-[0.16em] text-[#101820]">
        Kifaa {String(product.id).padStart(2, '0')}
      </span>
    </div>
    <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:p-0">
      <div className="w-full lg:border-b lg:border-[#101820]/20 lg:px-10 lg:py-8">
        <h2 className="max-w-xl font-['Montserrat',_sans-serif] text-4xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-5xl">
          {product.title}
        </h2>
      </div>
      <div className="w-full lg:border-b lg:border-[#101820]/20 lg:px-10 lg:py-7">
        <p className="mt-5 max-w-lg text-base leading-7 text-[#101820]/70 sm:text-lg">
          {product.description}
        </p>
      </div>
      <div className="w-full lg:border-b lg:border-[#101820]/20 lg:px-10 lg:py-7">
        <ul className="mt-7 grid max-w-xl grid-cols-1 gap-x-8 gap-y-2 border-t border-[#101820]/20 pt-4 text-sm text-[#101820]/80 sm:grid-cols-2 lg:mt-0 lg:max-w-none lg:border-t-0 lg:p-0">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[#1769aa]" />
              {spec}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full shrink-0 flex-col items-start gap-5 lg:border-b lg:border-[#101820]/20 lg:px-10 lg:py-6">
        <p className="border-l-4 border-[#1769aa] pl-4 text-2xl font-bold tracking-[-0.03em] text-[#1769aa] sm:text-3xl">
          {product.price}
        </p>
      </div>
      <div className="flex w-full shrink-0 flex-col items-start gap-5 pt-5 lg:px-10 lg:py-7 lg:pt-7">
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://wa.me/255651359011?text=${encodeURIComponent(`Habari, naomba maelezo kuhusu ${product.title}.`)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1da851] focus:outline-none focus:ring-2 focus:ring-[#101820] focus:ring-offset-2"
          >
            <span aria-hidden="true" className="text-base">◉</span>
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/kleva_mashine_za_maji_kariakoo/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#101820] px-4 py-3 text-sm font-bold transition hover:bg-[#101820] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#101820] focus:ring-offset-2"
          >
            <span aria-hidden="true" className="text-base">◎</span>
            Instagram
          </a>
        </div>
      </div>
    </div>
  </article>
);

export default ProductCard;
