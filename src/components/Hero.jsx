import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router'

import CoinSVG from '../assets/coin.svg'

import HR from './HR.jsx'
import Header from './Header.jsx'

const Hero = ({ connection, playersOnline }) => {
	return (
		<div className={`relative h-[484px] pt-8.5 sm:h-[900px] 2xl:h-[95vh]`}>
			<div className="absolute inset-0 -z-20 hidden sm:block bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat 2xl:h-[95vh]"></div>
			<div className="absolute inset-0 -z-20 sm:hidden bg-[url('/hero-mobile.png')] bg-cover bg-center bg-no-repeat 2xl:h-[95vh]"></div>
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,6,31,0.8)_21.93%,rgba(10,6,31,0)_85.52%)]"></div>
			<Header connection={connection} playersOnline={playersOnline} />
			<div className="absolute container left-1/2 -translate-x-1/2 bottom-[10%] sm:bottom-[30%]">
				<h1 className="font-pixel hero-text-outline mt-[50%] text-center text-[32px] leading-[105%] text-white sm:mt-24 sm:text-[50px] sm:leading-[87%] sm:tracking-[-0.68px]">
					Earn 100 USDT in Cuberic
					<span className="relative mr-10">
						k
						<img
							src={CoinSVG}
							alt="coin icon"
							className="min-w-8 sm:min-w-11 absolute -right-[200%] top-1/2 -translate-y-1/2 coin-glow"
						/>
					</span>
				</h1>
				<Link to="/competition">
					<div className="relative w-fit mt-3 sm:mt-10 mx-auto flex h-min items-center bg-[#FFAE00] px-4 py-2 shadow-[6.05px_6.05px_0px_0px_#C26D17]">
						<span className="font-pixel ml-2 text-base leading-[87%] tracking-[-1px] text-[#0A0A0A] sm:text-lg">
							Learn more
						</span>
						<div className="absolute top-0 left-[26px] h-full w-[15px] -skew-x-[30deg] transform bg-white opacity-15"></div>
						<div className="absolute top-0 left-[48px] h-full w-2.5 -skew-x-[30deg] transform bg-white opacity-15"></div>
					</div>
				</Link>
			</div>
			<HR />
		</div>
	)
}

Hero.propTypes = {
	connection: PropTypes.bool,
	playersOnline: PropTypes.number
}

export default Hero
