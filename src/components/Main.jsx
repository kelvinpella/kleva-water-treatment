import React from 'react';

import Header from './Header';
import ProductCard from './ProductCard';

const productsData = [
  {
    id: 1,
    title: 'Dayliff Dispenser Mineral Water Pot',
    description: 'Dispenser ya kusafisha maji ya bomba bila kutumia umeme. Mimina maji juu na upate maji safi na salama kwenye tundu la kutolea. Hutoa takribani lita 30 kwa siku, chenye jumla ujazo wa lita 14 na nafasi ya kuhifadhi lita 9 za maji yaliyotibiwa.',
    specs: [
      'Kichujio cha Ceramic kwa kuondoa mchanga mdogo na bakteria',
      'Katriji ya hatua 5 kwa kuboresha ladha na harufu',
      'Ulainishaji wa maji unaotumia zeolite',
      'Moduli ya madini huongeza madini muhimu na ladha mpya',
      'Bomba la maji la sumaku husaidia ufyonzwaji wa virutubisho mwilini',
      'Uwezo wa jumla wa lita 14, ikiwemo lita 9 za maji yaliyotibiwa',
      'Uzalishaji wa takribani lita 30 kwa siku',
      'Toleo la dispenser hutoshea dispenser ya kawaida na kuchukua nafasi ya vyombo vya kujazia'
    ],
    price: 'TSh 110,000',
    images: ['/Picture1_1.avif', '/dispenser.webp']
  },
  {
    id: 2,
    title: 'Kit Dayliff 6-Stage Mini RO 400L/Day',
    description: 'Dayliff Mini RO, pia hujulikana kama Undersink RO, ni mfumo unaoweza kufungwa kwa urahisi chini ya sinki la kawaida nyumbani. Unatumia teknolojia ya reverse osmosis kuzalisha maji safi kabisa kutoka kwenye maji ya kisima au maji ya bomba la manispaa/jiji.',
    specs: [
      'Uchujaji wa awali wa hatua 3 kupitia vichujio vya mashapo na kaboni',
      'Usafishaji wa reverse osmosis kwa kuondoa uchafu uliobaki',
      'Hatua ya mwisho ya carbon filter kwa kuboresha ladha',
      'UV sterilizer kama hatua ya sita ya usafishaji',
      'Dayliff 10" Inline Mineralized Ball Cartridge kwa kurejesha madini muhimu',
      'Madini yaliyorejeshwa huboresha ladha na faida za kiafya za maji',
      'Membrane za Hidrotek/Filmtec',
      'Tanki la chuma lenye ujazo wa lita 10',
      'Uzalishaji wa takribani lita 400 kwa siku'
    ],
    price: 'TSh 850,000',
    images: ['/6-stage-mini-ro.webp', '/6_STAGE_MINI_RO_1.webp']
  },
  {
    id: 3,
    title: 'Dayliff 500GPD Smart RO',
    description: 'Mashine ya kusafisha maji ya bomba au maji ya kisima kwa teknolojia ya Reverse Osmosis, kinachofaa kufungwa chini ya sinki. Muundo wake usio na tanki unahitaji nafasi ndogo na hutoa maji ya RO pamoja na maji yaliyotibiwa kabla.',
    specs: [
      'Inazalisha lita 1,800 kwa siku',
      'Uchujaji wa awali wa hatua 3 kwa mashapo na kaboni',
      'Vichujio vinavyobadilishwa kwa urahisi na LED ya kukumbusha ubadilishaji',
      'Usafishaji wa reverse osmosis kwa membrane za Hidrotek',
      'Hatua ya Post Carbon kwa kuboresha hali na ladha ya maji',
      'Inakuja na pampu ya diaphragm ya 24VDC',
      'Muundo compact usio na tanki kwa nafasi ndogo',
      'Matokeo mawili: maji ya RO na maji yaliyotibiwa kabla',
      'Viwango: chlorine chini ya 0.2ppm, TDS chini ya 250ppm',
      'Joto la maji: 5° hadi 45° C'
    ],
    price: 'TSh 920,000',
    image: '/SMART_RO.webp'
  },
  {
    id: 4,
    title: 'Dayliff Mineral Water Pot',
    description: 'Water purifier cha hatua 8 kisichotumia umeme kusafisha maji ya manispaa. Mimina maji juu na upate maji safi na yenye afya kwenye tundu la kutolea. Hutoa takribani lita 30 kwa siku, chenye uwezo wa jumla wa lita 14 na nafasi ya kuhifadhi lita 9 za maji yaliyotibiwa.',
    specs: [
      'Kichujio bora cha ceramic kwa kuondoa mchanga mdogo na bakteria',
      'Katriji ya vyombo mchanganyiko yenye viwango 5 kwa kuboresha ladha na harufu',
      'Ulainishaji wa maji unaotumia zeolite',
      'Moduli ya madini huongeza madini muhimu na kutoa ladha mpya',
      'Bomba la maji la sumaku husaidia ufyonzwaji wa virutubisho na virutubisho vya ziada kwenye seli za mwili',
      'Uzalishaji wa takribani lita 30 kwa siku',
      'Uwezo wa jumla wa lita 14, ikiwemo lita 9 za maji yaliyotibiwa'
    ],
    price: 'TSh 110,000',
    images: ['/WTD-PF1.webp', '/dayliff-mineral-water-pot.webp']
  }
];

const Main = () => (
  <div className="min-h-screen bg-[#f2f0e8] text-[#101820]">
    <Header />
    <main id="vifaa" className="min-h-screen">
      <ul aria-label="Vifaa vya kutibu maji" className="m-0 list-none p-0">
      {productsData.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
      </ul>
    </main>
    <footer className="flex flex-col gap-2 border-t border-[#101820]/20 px-5 py-6 text-sm text-[#101820]/70 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <span>Kleva Water Treatment</span>
      <span>Dar es Salaam, Tanzania</span>
    </footer>
  </div>
);

export default Main;
