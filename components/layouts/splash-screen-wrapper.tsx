'use client';

import { useState } from 'react';
import SplashScreen from './splash-screen';

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

export default function SplashScreenWrapper({ children }: SplashScreenWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onOpen={handleOpen} />}
      {isOpened && children}
    </>
  );
}

