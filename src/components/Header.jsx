import React from 'react';

const Header = () => (
  <header className="flex items-center justify-between bg-black px-5 py-3 sm:px-8 lg:px-12">
    <a href="#vifaa" aria-label="Kleva vifaa vya kutibu maji">
      <img src="/k.jpg" alt="Kleva" className="h-12 w-24 object-cover object-center sm:h-14 sm:w-28" />
    </a>
    <p className="font-['Montserrat',_sans-serif] text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
      Vifaa vya maji
    </p>
  </header>
);

export default Header;
