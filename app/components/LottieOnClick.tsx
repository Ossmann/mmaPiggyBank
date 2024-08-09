import { Player } from '@lottiefiles/react-lottie-player';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

//need this interface to pass the onClick event. We want the piggy LottieAnimation and addVote to be triggered together
interface LottieOnClickProps {
    onClick: () => void;
}

export default function LottieOnClick({ onClick }: LottieOnClickProps) {
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
        onClick(); // Call the passed in voteClick function
    };

    return (
      <div className='relative left-28' >
          <Image
          className='absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto animate-[wiggle_1s_ease-in-out_infinite]'
              width={80}
              height={80}
              src={'/PiggyBank.svg'}
              alt="Follow us on Twitter"
          /> 
          <div className="container-player absolute -top-10 bottom-0 left-0 right-0 mx-auto my-auto" 
            onClick={() => {
            console.log('Animation button clicked');
            handleClick();
            }} 
            style={{ cursor: 'pointer' }}
            >
              <Player
                  ref={playerRef}
                  src='/piggy_Lottie_Animation.json'
                  direction={-1}
                  style={{ height: '80px', width: '80px' }}
              />
          </div>
      </div>
    );
}
