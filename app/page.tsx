import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col items-center bg-gradient-to-t from-[#493349] via-[#211d2b] to-[#251e2f]">
      <div className="absolute inset-0 bg-[url('/assets/bg-stars.svg')] bg-cover bg-center opacity-80"></div>
      <div className="flex-grow">
        <h1 className="text-white text-sm md:text-xl lg:text-3xl font-bold capitalize tracking-[10] pt-20">
          WE&apos;RE LAUNCHING SOON
        </h1>
        
        <div>

        </div>

      </div>
      <Footer/>
    </div>
  );
};


