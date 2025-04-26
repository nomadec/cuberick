import React from 'react'
import { Link } from 'react-router'

import arrowLeftSvg from '../assets/icons/arrow-left.svg'

// eslint-disable-next-line import/no-unresolved
import logoSvg from '/logo.svg'

const SecondaryHeader = () => {
	return (
		<header>
			<div className="container flex justify-between">
				<Link to="/">
					<div className="relative flex items-center border-4 border-[#390257] bg-[#612FA2] px-2.5 py-1 sm:mr-0">
						<img src={arrowLeftSvg} alt="arrow left" loading="lazy" />
						<span className="font-inter ml-3 text-2xl leading-[120%] font-medium text-white">
							Back
						</span>
						<div className="absolute top-0 left-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute bottom-0 left-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute top-0 right-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute right-0 bottom-0 h-1 w-1 bg-[#390257]"></div>
					</div>
				</Link>
				<Link to="/">
					<div className="relative flex items-center border-4 border-[#390257] bg-[#612FA2] px-2.5 py-1 sm:mr-0">
						<img src={logoSvg} alt="logo" loading="lazy" />
						<span className="hidden sm:inline font-pixel ml-2 leading-[90%] text-white uppercase">
							Cuberick
						</span>
						<div className="absolute top-0 left-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute bottom-0 left-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute top-0 right-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute right-0 bottom-0 h-1 w-1 bg-[#390257]"></div>
					</div>
				</Link>
			</div>
		</header>
	)
}

export default SecondaryHeader
