import React, { useState, useEffect } from 'react';

interface TimerProps {
    number: string;
    title: string;
  }

const Timer: React.FC<TimerProps> = ({ number, title }) =>{
    const [prevNumber, setPrevNumber] = useState(number);
    const [flip, setFlip] = useState(false);
  
    // Detectamos cuando el número cambia para activar el flip
    useEffect(() => {
      if (number !== prevNumber) {
        setFlip(true);
        setPrevNumber(number);
        setTimeout(() => setFlip(false), 700); // Duración de la animación
      }
    }, [number, prevNumber]);
    
    return(
    
    <div className="flex-col items-center">
        <div className="relative h-[1.8em] inline-flex flex-col w-full min-w-[75px] sm:min-w-[70px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem] rounded-md bg-[#1a1823] shadow-[0em_0.2em_0em_#1a1823]">
            {/* Top Container */}
            <div className={`relative h-[50%] bg-[#2c2c44] rounded-md transition-transform duration-700 ${flip ? 'flip-up' : ''}`}>
                {/* Top Number placement */}
                <div className={`relative h-full px-1 pt-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold transition-transform duration-700 ${flip ? 'flip-up' : ''}`}>
                    <div> {number} </div>
                </div>
            </div>
            {/* Bottom Container */}
            <div className={`relative h-[50%] bg-[#34364f] rounded-md transition-transform duration-700 ${flip ? 'flip-down' : ''}`}>
                {/* Bottom Number placement */}
                <div className={`relative flex justify-center items-end h-full pb-[0.4em] overflow-hidden leading-none text-[#d4506f] text-center font-bold w-full transition-transform duration-700 ${flip ? 'flip-down' : ''}`}>
                    <div> {number} </div>
                </div>
            </div>
        </div>
        <h3 className="uppercase text-[#7c7997] text-center tracking-[3] sm:tracking-[3] md:tracking-[4] lg:tracking-[6] pt-8 text-[0.5rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1rem]">
            {title}
        </h3>
    </div>

);
};

export default Timer;