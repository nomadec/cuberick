import PropTypes from 'prop-types'
import React from 'react'

import HR from './HR.jsx'
import Header from './Header.jsx'

const Hero = ({ connection, playersOnline }) => {
	return (
		<div className={`relative h-[484px] pt-8.5 sm:h-[800px]`}>
			<div className="absolute inset-0 -z-20 bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat"></div>
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,6,31,0.8)_21.93%,rgba(10,6,31,0)_85.52%)]"></div>
			<Header connection={connection} playersOnline={playersOnline} />
			<h1 className="font-pixel text-outline container mt-10 text-center text-[40px] leading-[105%] text-white sm:mt-24 sm:text-[100px] sm:leading-[90%] sm:tracking-[-1px]">
				This telegram game you can&apos;t miss
			</h1>
			<HR />
		</div>
	)
}

Hero.propTypes = {
	connection: PropTypes.bool,
	playersOnline: PropTypes.number
}

export default Hero
