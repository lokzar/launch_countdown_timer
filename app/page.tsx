import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col items-center bg-gradient-to-t from-[#493349] via-[#211d2b] to-[#1e1e28]">
      <div className="absolute inset-0 bg-[url('/assets/bg-stars.svg')] bg-cover bg-center opacity-80"></div>
      <div className="flex-grow">
        <h1 className="text-white text-lg text-center md:text-xl lg:text-3xl capitalize tracking-[9] pt-40">
          WE&apos;RE LAUNCHING SOON
        </h1>
      
      
      
      <div className="flex flex-row justify-center items-center gap-[0.5rem] sm:gap-[0.5rem] md:gap-[1rem] lg:gap-[1.5rem] pt-20 w-full">
      {/* DAYS */}  
        <div className="flex-col items-center">
          <div className="relative h-[1.8em] inline-flex flex-col w-full min-w-[75px] sm:min-w-[70px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem] rounded-md bg-[#1a1823] shadow-[0em_0.2em_0em_#1a1823]">
            {/* Top Container */}
            <div className="relative h-[50%] bg-[#2c2c44] rounded-md">
              {/* Top Number position */}
              <div className="relative h-full px-1 pt-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold">
                <div> 10 </div>
              </div>
            </div>
            {/* Bottom Container */}
            <div className="relative h-[50%] bg-[#34364f] rounded-md">
              {/* Bottom Number position */}
              <div className="relative flex justify-center items-end h-full pb-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold w-full">
                <div> 10 </div>
              </div>
            </div>
          </div>
          <h3 className="uppercase text-[#7c7997] text-center tracking-[3] sm:tracking-[3] md:tracking-[4] lg:tracking-[6] pt-8 text-[0.5rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1rem]">
            days
          </h3>
        </div>
        {/* HOURS */}  
        <div className="flex-col items-center">
          <div className="relative h-[1.8em] inline-flex flex-col w-full min-w-[75px] sm:min-w-[100px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem] rounded-md bg-[#1a1823] shadow-[0em_0.2em_0em_#1a1823]">
            {/* Top Container */}
            <div className="relative h-[50%] bg-[#2c2c44] rounded-md">
              {/* Top Number position */}
              <div className="relative h-full px-1 pt-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold">
                <div> 10 </div>
              </div>
            </div>
            {/* Bottom Container */}
            <div className="relative h-[50%] bg-[#34364f] rounded-md">
              {/* Bottom Number position */}
              <div className="relative flex justify-center items-end h-full pb-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold w-full">
                <div> 10 </div>
              </div>
            </div>
          </div>
          <h3 className="uppercase text-[#7c7997] text-center tracking-[3] sm:tracking-[3] md:tracking-[4] lg:tracking-[6] pt-8 text-[0.5rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1rem]">
            hours
          </h3>
        </div>
        {/* MINUTES */}  
        <div className="flex-col items-center">
          <div className="relative h-[1.8em] inline-flex flex-col w-full min-w-[75px] sm:min-w-[100px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem] rounded-md bg-[#1a1823] shadow-[0em_0.2em_0em_#1a1823]">
            {/* Top Container */}
            <div className="relative h-[50%] bg-[#2c2c44] rounded-md">
              {/* Top Number position */}
              <div className="relative h-full px-1 pt-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold">
                <div> 10 </div>
              </div>
            </div>
            {/* Bottom Container */}
            <div className="relative h-[50%] bg-[#34364f] rounded-md">
              {/* Bottom Number position */}
              <div className="relative flex justify-center items-end h-full pb-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold w-full">
                <div> 10 </div>
              </div>
            </div>
          </div>
          <h3 className="uppercase text-[#7c7997] text-center tracking-[3] sm:tracking-[3] md:tracking-[4] lg:tracking-[6] pt-8 text-[0.5rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1rem]">
            Minutes
          </h3>
        </div>

       {/* SECONDS */}  
        <div className="flex-col items-center">
          <div className="relative h-[1.8em] inline-flex flex-col w-full min-w-[75px] sm:min-w-[100px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem] rounded-md bg-[#1a1823] shadow-[0em_0.2em_0em_#1a1823]">
            {/* Top Container */}
            <div className="relative h-[50%] bg-[#2c2c44] rounded-md">
              {/* Top Number position */}
              <div className="relative h-full px-1 pt-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold">
                <div> 10 </div>
              </div>
            </div>
            {/* Bottom Container */}
            <div className="relative h-[50%] bg-[#34364f] rounded-md">
              {/* Bottom Number position */}
              <div className="relative flex justify-center items-end h-full pb-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold w-full">
                <div> 10 </div>
              </div>
            </div>
          </div>
          <h3 className="uppercase text-[#7c7997] text-center tracking-[3] sm:tracking-[3] md:tracking-[4] lg:tracking-[6] pt-8 text-[0.5rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1rem]">
            Seconds
          </h3>
        </div>

      </div>

      

      </div>
      <Footer/>
    </div>
  );
};


