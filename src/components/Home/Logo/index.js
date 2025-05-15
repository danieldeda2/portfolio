import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {

    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 900) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M580 8906 c-5 -15 -7 -130 -3 -283 4 -190 3 -264 -6 -281 -11 -21
            -15 -22 -269 -24 l-257 -3 -2 -465 c-1 -256 2 -1223 7 -2150 5 -927 11 -2279
            14 -3005 3 -726 9 -1616 12 -1978 l7 -658 1206 4 c1327 4 1226 0 1551 71 111
            24 326 105 466 175 113 56 300 177 391 254 169 141 270 243 399 402 45 55 110
            127 145 161 35 33 102 96 148 140 210 198 344 367 511 644 152 252 320 648
            408 965 57 203 70 257 111 450 31 148 74 429 91 586 63 618 55 1378 -21 1904
            -126 877 -367 1541 -756 2085 -358 499 -883 859 -1416 970 -271 56 -194 53
            -1510 57 l-1217 4 -10 -25z m2367 -96 c583 -45 1053 -260 1461 -668 150 -150
            228 -245 350 -428 254 -379 462 -889 571 -1399 12 -55 26 -118 31 -140 40
            -178 87 -540 111 -850 17 -213 17 -936 1 -1125 -52 -596 -146 -1068 -300
            -1511 -116 -334 -302 -698 -477 -934 -275 -371 -544 -601 -910 -780 -164 -80
            -350 -144 -505 -175 -253 -50 -256 -50 -1471 -50 l-1139 0 0 203 c0 281 -18
            4678 -26 6419 l-6 1438 548 3 c1392 6 1647 6 1761 -3z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
