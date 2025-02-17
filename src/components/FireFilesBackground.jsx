"use client"
import React, { useEffect, useState } from "react";

// Create 1 function random object ngẫu nhiên.
const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random()*100}%`,   // Random a number in khoảng 1 -> 1000
  left: `${Math.random()*100}%`,
  animationDuration: `${Math.random()*5 + 5}s`
})

const FireFilesBackground = () => {
 
  const [fireflies, setFireFlies] = useState([]) 

  useEffect(() => {
    // Hiệu ứng add firefly bay ngẫu nhiên.
    const addFireFlyPeriodically = () => {
      const newFirefly = createFirefly();
      // slice(-14) => giới hạn 14 elements dc tạo ra.
      setFireFlies(currentFirefly => 
        [ 
          ...currentFirefly.slice(-14), 
          newFirefly
        ]);
    }

    // Set khoảng tg gọi lại hàm
    const interval = setInterval(addFireFlyPeriodically, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
		<div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* RENDER fireflies List */}
			{fireflies.map((firefly) =>{
        return (
          <div 
            key={firefly.id}
            className='absolute rounded-full bg-firefly-radial w-[15px] h-[15px]'
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`
            }}
          >
          </div>
        )
      })}
		</div>
	);
};

export default FireFilesBackground;
