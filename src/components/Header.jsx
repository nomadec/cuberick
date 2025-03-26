import React from 'react'
// eslint-disable-next-line import/no-unresolved
import logoSvg from '/logo.svg'
import accountsSvg from '../assets/accounts.svg'

const Header = () => {
	return (
		<header>
			<div className="container flex justify-between">
				<div className="relative flex items-center border-4 border-[#390257] bg-[#612FA2] px-2.5 py-1">
					<img src={logoSvg} alt="logo" />
					<span className="font-pixel ml-2 leading-[90%] text-white uppercase">Cuberick</span>
					<div className="absolute top-0 left-0 h-1 w-1 bg-[#390257]"></div>
					<div className="absolute bottom-0 left-0 h-1 w-1 bg-[#390257]"></div>
					<div className="absolute top-0 right-0 h-1 w-1 bg-[#390257]"></div>
					<div className="absolute right-0 bottom-0 h-1 w-1 bg-[#390257]"></div>
				</div>
				<div className="flex items-center">
					<div className="relative flex items-center border-4 border-[#390257] bg-[#612FA2] px-2.5 py-1">
						<img src={accountsSvg} alt="logo" />
						<span className="font-inter ml-2 text-xs leading-[120%] text-white">
							5k player online
						</span>
						<div className="absolute top-0 left-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute bottom-0 left-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute top-0 right-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute right-0 bottom-0 h-1 w-1 bg-[#390257]"></div>
					</div>
					<div className="relative ml-3 flex h-min items-center bg-black px-8 py-2 shadow-[3px_3px_0px_0px_#1C1C1C]">
						<div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#293842] bg-[#205039]">
							<div className="h-2 w-2 rounded-full bg-[#00AA14]"></div>
						</div>
						{/* <img className="pixelated" src={greenDot} alt="dot" /> */}
						<span className="font-pixel ml-2 text-lg leading-[87%] tracking-[-1px] text-white">
							Join squad
						</span>
						<div className="absolute top-0 left-[26px] h-full w-[15px] -skew-x-[30deg] transform bg-white opacity-15"></div>
						<div className="absolute top-0 left-[48px] h-full w-2.5 -skew-x-[30deg] transform bg-white opacity-15"></div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
