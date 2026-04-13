import React from 'react';
import { MapPin, Car, Train, TreePine, ShoppingCart, Layers, Shield, Droplets, Grid, Flame, Wind, VolumeX, Building2, School, Waves, Bus, Plus, Store, Baby } from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';
import { InteractiveEstateMap } from './InteractiveEstateMap';
import ogrod from "../assets/widok_4.jpg";
import widok from "../assets/widok_02.jpg";
import zima from "../assets/widok_zima.jpg";

export const VisualNavigator: React.FC = () => (
  <section id="nawigator" className="py-20 bg-gray-50 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nawigator Osiedla</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:whitespace-nowrap">
          Zobacz statusy mieszkań na interaktywnej wizualizacji. Wybierz swój wymarzony dom.
        </p>
      </div>
      
      {/* Kontener dla interaktywnej mapy osiedla */}
      <div className="max-w-6xl mx-auto bg-white p-2 rounded-2xl shadow-lg">
        <InteractiveEstateMap />
      </div>
    </div>
  </section>
);

export const LocationSection: React.FC = () => (
  <section id="lokalizacja" className="py-20 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-4">Lokalizacja</div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Tylko 30 minut <br/>od serca Wrocławia</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Osiedle Sosnowe to inwestycja skierowana do osób, które poszukują spokojnego miejsca, oddalonego od miejskiego zgiełku, ale zarazem w bliskiej odległości od miasta.
        </p>
        <div className="space-y-4">
          <LocationCard icon={<Store size={20} />} title="Centrum Pogodne- Galeria Handlowa" time="5 minut samochodem" />
          <LocationCard icon={<Plus size={20} />} title="Zakład Opieki Zdrowotnej Zdrowie" time="5 minut samochodem" />
          <LocationCard icon={<Store size={20} />} title="Centrum handlowe Korona we Wrocławiu" time="34 minuty samochodem" />
          <LocationCard icon={<School size={20} />} title="Szkoła Podstawowa nr. 6" time="6 minut samochodem" />
          <LocationCard icon={<Baby size={20} />} title="Przedszkole Montessori Fasolka" time="6 minut samochodem" />
        </div>
      </div>
      
      {/* Interactive Map Component Container */}
      <div className="h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
         <InteractiveMap />
      </div>
    </div>
  </section>
);

const LocationCard = ({ icon, title, time }: { icon: React.ReactNode, title: string, time: string }) => (
  <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100">
    <div className="text-primary-600 mr-4 p-2 bg-white rounded-lg shadow-sm">{icon}</div>
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

export const InfrastructureSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cała infrastruktura na wyciągnięcie ręki</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nie musisz rezygnować z wygód miasta. W pobliżu inwestycji znajdziesz wszystko, co niezbędne do komfortowego życia.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfraCard icon={<Store className="w-8 h-8 text-primary-600" />} title="Centrum Pogodne- Galeria Handlowa" desc="5 minut samochodem" />
        <InfraCard icon={<TreePine className="w-8 h-8 text-primary-600" />} title="Szkoła Podstawowa nr. 6" desc="6 minut samochodem" />
        <InfraCard icon={<ShoppingCart className="w-8 h-8 text-primary-600" />} title="Przedszkole Montessori Fasolka" desc="6 minut samochodem" />
      </div>
    </div>
  </section>
);

const InfraCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
    <div className="flex justify-center mb-6">
      <div className="p-4 bg-primary-50 rounded-xl">{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-primary-700 font-medium bg-primary-50 inline-block px-3 py-1 rounded-full text-sm">{desc}</p>
  </div>
);

export const StandardsSection: React.FC = () => (
  <section id="o-inwestycji" className="scroll-mt-20">
    {/* Section 1 */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
           <img src={widok}  alt="Osiedle" className="rounded-2xl shadow-lg" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-12 h-1 bg-primary-600 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Bezczynszowe mieszkania na kameralnym osiedlu</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Nowoczesne, bezczynszowe mieszkania w zabudowie bliźniaczej zostały zaprojektowane z myślą o wygodzie i funkcjonalności. Podwyższony standard wykończenia zapewnia komfort codziennego życia.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<Flame size={20} />} text="Ogrzewanie podłogowe" />
             <StandardListItem icon={<Shield size={20} />} text="Drzwi antywłamaniowe" />
          </ul>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-12 h-1 bg-primary-600 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Nowoczesna architektura i miejsca postojowe</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Stawiamy na nowoczesny design i najwyższej klasy materiały.
            Każdy lokal posiada przypisane dwa wygodne miejsca postojowe bezpośrednio przed budynkiem.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<Car size={20} />} text="2 miejsca postojowe w cenie" />
             <StandardListItem icon={<Layers size={20} />} text="Wysokiej jakości materiały" />
          </ul>
        </div>
        <div>
           <img src= {zima} />
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
           <img src={ogrod} alt="Ogród" className="rounded-2xl shadow-lg" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-12 h-1 bg-primary-600 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Prywatny ogródek do każdego mieszkania na parterze</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Mieszkania posiadają bezpośrednie wyjście 
            na ogród z salonu, idealne na grilla czy zabawę dla dzieci.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<TreePine size={20} />} text="Ogródki do 100m²" />
             <StandardListItem icon={<TreePine size={20} />} text="Duża przestrzeń mieszkania" />
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const StandardListItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
    <span className="mr-3 text-primary-600 bg-primary-50 p-2 rounded-md">{icon}</span>
    <span className="font-medium">{text}</span>
  </li>
);

export const TechSpecs: React.FC = () => (
  <section className="py-20 bg-gray-900 text-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Specyfikacja Techniczna</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TechItem icon={<Flame />} text="Dobra lokalizacja" />
        <TechItem icon={<VolumeX />} text="Ściany wykonane z wysokiej jakości materiałów" />
        <TechItem icon={<Layers />} text="Chodnik" />
        <TechItem icon={<Grid />} text="Pompa ciepła z modułem WiFi" />
        <TechItem icon={<Flame />} text="Ogrzewanie podłogowe" />
        <TechItem icon={<Shield />} text="Antywłamaniowe drzwi wejściowe" />
        <TechItem icon={<Car />} text="2 miejsca postojowe" />
        <TechItem icon={<Layers />} text="Internet Światłowodowy" />
      </div>
    </div>
  </section>
);

const TechItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
    <div className="flex-shrink-0 text-primary-400 p-2 bg-gray-700 rounded-lg">{icon}</div>
    <span className="font-medium text-gray-100">{text}</span>
  </div>
);

export const LayoutInfo: React.FC = () => (
  <section className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Szeroki wybór funkcjonalnych wnętrz
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Nasze projekty są elastyczne. Oferujemy mieszkania o zróżnicowanych metrażach,
        które możesz dostosować do swoich potrzeb.
      </p>
    </div>

    {/* JEDNA KARTA */}
    {/* <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Komfortowe mieszkanie rodzinne
      </h3>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Przemyślany układ pomieszczeń zapewnia maksymalną funkcjonalność
        i wygodę codziennego życia. Duża strefa dzienna, komfortowe sypialnie
        oraz dodatkowa przestrzeń użytkowa pozwalają dopasować wnętrze
        do indywidualnych potrzeb domowników.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li className="flex items-center gap-3 text-gray-700">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          TO DO
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          TO DO
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          TO DO
        </li>
        <li className="flex items-center gap-3 text-gray-700">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          TO DO
        </li>
      </ul>

    </div> */}
  </div>
</section>
);