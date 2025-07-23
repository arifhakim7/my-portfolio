import { useEffect, useRef } from "react";

const VantaWavesBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const scriptThree = document.createElement("script");
    scriptThree.src = "/three.r134.min.js";
    scriptThree.async = true;

    const scriptVanta = document.createElement("script");
    scriptVanta.src = "/vanta.waves.min.js";
    scriptVanta.async = true;

    document.body.appendChild(scriptThree);

    scriptThree.onload = () => {
      document.body.appendChild(scriptVanta);

      scriptVanta.onload = () => {
        // Use window.VANTA.WAVES only after both scripts loaded
        window.VANTA.WAVES({
          el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xa0b0b,
            shininess: 74.00,
            waveHeight: 11.50,
            waveSpeed: 0.90,
            zoom: 1.49
        });
      };
    };

    return () => {
      // Cleanup if needed
      if (vantaRef.current?.vantaEffect) {
        vantaRef.current.vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

export default VantaWavesBackground;
