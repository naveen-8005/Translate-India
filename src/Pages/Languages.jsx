import React from "react";

const Languages = () => {
  return (
    <div className="languages flex flex-col items-center justify-center gap-4 md:gap-5 mt-6 md:mt-7 px-4">
      <h1 className="mt-4 md:mt-5 text-[36px] md:text-6xl font-bold text-blue-600 text-center">
        Languages
      </h1>
      <div className="w-full md:w-[90vw] p-4 md:p-10">

        {/* Indian */}
        <div className="flex flex-col md:flex-row mb-8 md:mb-10 items-center gap-6 md:gap-10">
          <div className="img w-full md:w-auto">
            <img
              src="indian.jpg"
              alt="india"
              className="w-full md:w-[80vw] h-[250px] md:h-[50vh] shadow-2xl rounded-2xl object-cover"
            />
          </div>
          <div className="text text-base md:text-xl text-justify text-zinc-600 leading-relaxed">
            <h1 className="mb-3 md:mb-5 text-2xl md:text-3xl font-bold text-orange-400">
              Indian Languages
            </h1>
            We offer translation support for multiple Indian languages including
            Hindi, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati, Punjabi,
            Odia and many others. Communicate your message in the language
            people trust and understand.
          </div>
        </div>

        {/* Asian */}
        <div className="flex flex-col md:flex-row-reverse mb-8 md:mb-10 items-center gap-6 md:gap-10">
          <div className="img w-full md:w-auto">
            <img
              src="asian.jpg"
              alt="asian"
              className="w-full md:w-[80vw] h-[250px] md:h-[50vh] shadow-2xl rounded-2xl object-cover"
            />
          </div>
          <div className="text text-base md:text-xl text-justify text-zinc-600 leading-relaxed">
            <h1 className="mb-3 md:mb-5 text-2xl md:text-3xl font-bold text-blue-600">
              Asian Languages
            </h1>
            We offer translation support for widely spoken Asian languages such
            as Mandarin, Japanese, Korean, Arabic, Thai, Vietnamese, Indonesian,
            Filipino, Malay, and more. Communicate clearly with audiences across
            East Asia, Southeast Asia, and the Middle East.
          </div>
        </div>

        {/* European */}
        <div className="flex flex-col md:flex-row mb-8 md:mb-10 items-center gap-6 md:gap-10">
          <div className="img w-full md:w-auto">
            <img
              src="europian.jpg"
              alt="europe"
              className="w-full md:w-[80vw] h-[250px] md:h-[50vh] shadow-2xl rounded-2xl object-cover"
            />
          </div>

          <div className="text text-base md:text-xl text-justify text-zinc-600 leading-relaxed">
            <h1 className="mb-3 md:mb-5 text-2xl md:text-3xl font-bold text-violet-500">
              European Languages
            </h1>
            We provide translation support for widely spoken European languages including English,
            French, German, Spanish, Italian, Portuguese, Russian, Dutch, Greek, and many others.
            Strengthen your communication across all regions of Europe with clear and reliable translations.
          </div>
        </div>

        {/* African */}
        <div className="flex flex-col md:flex-row-reverse mb-8 md:mb-10 items-center gap-6 md:gap-10">
          <div className="img w-full md:w-auto">
            <img
              src="african.jpg"
              alt="africa"
              className="w-full md:w-[80vw] h-[250px] md:h-[50vh] shadow-2xl rounded-2xl object-cover"
            />
          </div>
          <div className="text text-base md:text-xl text-justify text-zinc-600 leading-relaxed">
            <h1 className="mb-3 md:mb-5 text-2xl md:text-3xl font-bold text-red-600">
              African Languages
            </h1>
            We offer translation support for widely spoken African languages including Swahili, Arabic,
            Amharic, Hausa, Yoruba, Zulu, Igbo, Somali, Shona, and many others. Reach diverse audiences
            with clear, meaningful, and reliable translations.
          </div>
        </div>

        {/* American */}
        <div className="flex flex-col md:flex-row mb-8 md:mb-10 items-center gap-6 md:gap-10">
          <div className="img w-full md:w-auto">
            <img
              src="american.jpg"
              alt="america"
              className="w-full md:w-[80vw] h-[250px] md:h-[50vh] shadow-2xl rounded-2xl object-cover"
            />
          </div>

          <div className="text text-base md:text-xl text-justify text-zinc-600 leading-relaxed">
            <h1 className="mb-3 md:mb-5 text-2xl md:text-3xl font-bold text-rose-400">
              American Languages
            </h1>
            The Americas are home to international languages like English, Spanish, and Portuguese,
            as well as indigenous languages such as Quechua, Guarani, Navajo, Mapudungun, Aymara, and more.
            We support high-quality translations across both global and tribal languages.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Languages;