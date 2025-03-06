import React, { useState, useEffect } from 'react';

interface TimerProps {
    number: string;
    title: string;
  }

const Timer: React.FC<TimerProps> = ({ number, title }) =>{
    const [prevNumber, setPrevNumber] = useState(number);
    const [flip, setFlip] = useState(false);
  
  
    useEffect(() => {
      if (number !== prevNumber) {
        setFlip(true);
        setPrevNumber(number);
        setTimeout(() => setFlip(false), 800);
      }
    }, [number, prevNumber]);
    {/*NOTE: I Had to divide each box it into two containers, each container has the same number placed by the middle to show as it was divided by the half */}
    return(   
        <div className="flex-col items-center">
            <div className="relative inline-flex flex-col h-[1.9em] w-auto min-w-[75px] sm:min-w-[75px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem] rounded-md bg-[#1a1823] shadow-[0em_0.15em_0em_#1a1823]">
                {/* Top Container */}
                {/*NOTE: I noticed the original design has concave borders, I couldn't find documentation on how to achieve that effect using just tailwind */}
                <div className={`relative h-[50%] bg-[#2c2c44] rounded-md transition-transform duration-800 ${flip ? 'flip-up' : ''}`}>
                    {/* Top Number placement */}
                    <div className={`relative h-full px-1 pt-[0.45em] overflow-hidden leading-none text-[#d4506f] text-center font-bold transition-transform duration-800 ${flip ? 'flip-up' : ''}`}>
                        <div> {number} </div>
                    </div>
                </div>
                {/* Bottom Container */}
                <div className={`relative h-[50%] bg-[#34364f] rounded-md transition-transform duration-800 ${flip ? 'flip-down' : ''}`}>
                    {/* Bottom Number placement */}
                    <div className={`relative flex justify-center items-end h-full pb-[0.45em] overflow-hidden leading-none text-[#fb5d82] text-center font-bold w-full transition-transform duration-800 ${flip ? 'flip-down' : ''}`}>
                        <div> {number} </div>
                    </div>
                </div>
            </div>
            <h2 className="uppercase text-[#7c7997] text-center tracking-[2] sm:tracking-[2] md:tracking-[4] lg:tracking-[6] pt-3 sm:pt-3 md:pt-7 lg:pt-9 text-[0.5rem] sm:text-[0.5rem] md:text-[0.75rem] lg:text-[0.8rem]">
                {title}
            </h2>
        </div>
    );
};

export default Timer;