import React from "react";

const Card = () => {
  return (
    <>
      <h1 className="text-center mt-8 md:mt-5 text-[36px] md:text-6xl font-bold text-blue-600 px-4">
        Our Services
      </h1>

      <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 place-items-center mt-6 md:mt-5">
        {/* Card 1 */}
        <div className="bg-[#e5ebf4] w-full max-w-[340px] md:w-[21vw] h-auto md:h-[40vh] rounded-xl flex flex-col items-center shadow-md cursor-pointer  hover:shadow-lg  pb-5">
          <img
            src="Card1.jpg"
            className="w-[85%] md:w-[15vw] h-[280px] md:h-[30vh] mt-5 md:mt-6 mb-4 md:mb-5 rounded-xl imageShadow object-cover"
            alt="card1"
          />
          <div className="content">
            <h1 className="text-gray-800 text-[22px] md:text-[20px] font-semibold hover:underline text-center">
              Translation
            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#e5ebf4] w-full max-w-[340px] md:w-[21vw] h-auto md:h-[40vh] rounded-xl flex flex-col items-center hover:shadow-lg shadow-md pb-5">
          <img
            src="Card2.jpg"
            className="w-[85%] md:w-[15vw] h-[280px] md:h-[30vh] mt-5 md:mt-6 mb-4 md:mb-5 rounded-xl imageShadow object-cover"
            alt="card2"
          />
          <div className="content">
            <h1 className="text-gray-800 text-[22px] md:text-[20px] font-semibold hover:underline text-center">
              Transcription
            </h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#e5ebf4] w-full max-w-[340px] md:w-[21vw] h-auto md:h-[40vh] rounded-xl flex flex-col items-center shadow-md cursor-pointer  hover:shadow-lg  pb-5">
          <img
            src="Card3.jpg"
            className="w-[85%] md:w-[15vw] h-[280px] md:h-[30vh] mt-5 md:mt-6 mb-4 md:mb-5 rounded-xl imageShadow object-cover"
            alt="card3"
          />
          <div className="content">
            <h1 className="text-gray-800 text-[22px] md:text-[20px] font-semibold hover:underline text-center">
              Proof Reading
            </h1>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#e5ebf4] w-full max-w-[340px] md:w-[21vw] h-auto md:h-[40vh] rounded-xl flex flex-col items-center shadow-md cursor-pointer  hover:shadow-lg  pb-5">
          <img
            src="Card4.jpg"
            className="w-[85%] md:w-[15vw] h-[280px] md:h-[30vh] mt-5 md:mt-6 mb-4 md:mb-5 rounded-xl imageShadow object-cover"
            alt="card4"
          />
          <div className="content">
            <h1 className="text-gray-800 text-[22px] md:text-[20px] font-semibold hover:underline text-center">
              Desktop Publication
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;