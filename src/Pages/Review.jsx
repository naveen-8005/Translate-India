import React from "react";

const Review = () => {
  return (
    <div className="flex flex-col p-6 sm:p-10 md:p-16">
      <h1 className="text-center mb-10 text-3xl sm:text-4xl md:text-6xl font-medium text-[#1976d2]">
        Excellence That Truly Sets Us Apart
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Image Section */}
        <div className="relative w-full md:w-[40%] h-[40vh] sm:h-[50vh] md:h-[60vh] z-10">
          <img
            src="cart.jpg"
            alt="image"
            className="w-full h-full object-cover rounded-2xl shadow-lg top-20"
          />
        </div>

        {/* Content Section */}
        <div className="content w-full md:w-[50%]">
          
          <div className="property1 mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold mb-3 text-[#3f51b5]">
              Unmatched Quality, Every Time
            </h1>
            <span className="text-zinc-600 text-[15px] sm:text-[16.1px] leading-relaxed">
              We follow a strict quality-first approach where every project goes through multiple levels of review, proofreading, and accuracy checks. Our experts ensure that every detail is refined, precise, and aligned with your goals. For us, quality isn’t just a requirement—it’s a commitment we deliver in every single task.
            </span>
          </div>

          <div className="property2 mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold mb-3 text-[#3f51b5]">
              Fast, Reliable & Always On Time
            </h1>
            <span className="text-zinc-600 text-[15px] sm:text-[16.1px] leading-relaxed">
              We understand that speed matters. Our optimized workflow allows us to complete tasks quickly without losing accuracy or consistency. Even under tight timelines, our team maintains efficiency and delivers polished results.
            </span>
          </div>

          <div className="property3 mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold mb-3 text-[#3f51b5]">
              Expert Team With Real Experience
            </h1>
            <span className="text-zinc-600 text-[15px] sm:text-[16.1px] leading-relaxed">
              Our team is built with industry professionals who bring years of hands-on experience across multiple sectors—from technical documentation and legal content to business communication and creative copy.
            </span>
          </div>

          <div className="property4 mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold mb-3 text-[#3f51b5]">
              End-to-End Support
            </h1>
            <span className="text-zinc-600 text-[15px] sm:text-[16.1px] leading-relaxed">
              We don’t just complete tasks—we guide you throughout the entire journey. From understanding requirements to polishing output, we ensure a smooth, stress-free experience.
            </span>
          </div>

          <div className="property5 mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold mb-3 text-[#3f51b5]">
              Trusted by Clients Worldwide
            </h1>
            <span className="text-zinc-600 text-[15px] sm:text-[16.1px] leading-relaxed">
              We have worked with individuals, startups, and global businesses who rely on our consistency and dedication. Our quality, communication, and reliability have earned us trust across countries and industries.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Review;
