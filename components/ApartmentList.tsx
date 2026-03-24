import React from 'react';

export const ApartmentList: React.FC = () => {
  return (
    <section id="mieszkania" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wybierz wygodne mieszkanie</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Znajdź układ idealnie dopasowany do Twoich potrzeb w naszej interaktywnej tabeli.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-6xl mx-auto">
          <iframe
            /* TO DO src="https://portal-raportujeceny-1wra.bolt.host/iframe/1bf56da6-1839-423d-ba54-e60c2710cb37/7154b9ae-4d1f-4454-8bae-0f7ace9e0ffe"*/
            title="Lista dostępnych mieszkań"
            className="w-full h-[80vh] min-h-[700px] border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
