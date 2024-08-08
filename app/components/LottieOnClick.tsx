import { Player } from '@lottiefiles/react-lottie-player';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

export function LottieOnClick() {
    const playerRef = useRef<Player>(null);

    useEffect(() => {
        if (playerRef.current) {
            // Wait until the animation is loaded
                // Set the initial frame to the last frame
                playerRef.current?.setSeeker(100);
        }
    }, []);

    const handleClick = () => {
        if (playerRef.current) {
            playerRef.current.play();
        }
    };

    return (
      <div className='relative' onClick={handleClick}>
          <Image
          className='position-absolut'
              width={100}
              height={100}
              src={'/PiggyBank.svg'}
              alt="Follow us on Twitter"
          />
          <div className="container-player" onClick={handleClick} style={{ cursor: 'pointer' }}>
              <Player
                  ref={playerRef}
                  src='/piggy_Lottie_Animation.json'
                  direction={-1}
                  style={{ position: 'relative', height: '80px', width: '80px' }}
              />
          </div>
      </div>
    );
}
