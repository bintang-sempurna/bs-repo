import React, { useEffect, useState } from "react";

const loadAnimation = () => {
  return (
    <>
      <div className="preloader">
        <div className="preloader-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="128px"
            width="128px"
            viewBox="0 0 128 128"
            className="pl"
          >
            <defs>
              <linearGradient y2="1" x2="0" y1="0" x1="0" id="pl-grad">
                <stop offset="0%" stop-color="hsl(358,90%,55%)"></stop>
                <stop offset="100%" stop-color="hsl(356,100%,34%)"></stop>
              </linearGradient>
            </defs>
            <circle
              stroke-linecap="round"
              stroke-width="16"
              stroke="hsla(0,10%,10%,0.1)"
              fill="none"
              cy="64"
              cx="64"
              r="56"
              className="pl__ring"
            ></circle>
            <path
              stroke-dashoffset="10"
              stroke-dasharray="44 1111"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="16"
              stroke="url(#pl-grad)"
              fill="none"
              d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
              className="pl__worm"
            ></path>
          </svg>
          <span>Bintang Sempurna</span>
        </div>
      </div>
    </>
  );
};

export default loadAnimation;
