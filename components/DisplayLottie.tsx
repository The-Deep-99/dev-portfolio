import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

type Props = {
  animationPath: string;
};

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const GreetingLottie = ({ animationPath }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  if (!isClient) {
    return <div onClick={() => null} />;
  }

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
