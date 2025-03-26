import React from 'react'
import Header from './Header.jsx'
import HR from './HR.jsx'

const Hero = () => {
	return (
		<div className={`relative h-[800px] pt-8.5`}>
			<div className="absolute inset-0 -z-20 bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat"></div>
			<div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,6,31,0.8)_21.93%,rgba(10,6,31,0)_85.52%)]"></div>
			<Header />
			<h1 className="font-pixel text-outline container mt-24 text-center text-[100px] leading-[90%] tracking-[-1px] text-white">
				This telegram game you can&apos;t miss
			</h1>
			<HR />
		</div>
	)
}

export default Hero
