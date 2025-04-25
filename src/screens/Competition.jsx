import React from 'react'
import { Link } from 'react-router'

import Footer from '../components/Footer.jsx'

import { termsOfUse } from '../shared/content.jsx'

import CoinSVG from '../assets/coin.svg'
import bestPixelArt from '../assets/competition/best-pixel-art.png'
import bestTiktok from '../assets/competition/best-tiktok.png'
import mostInvites from '../assets/competition/most-invites.png'
import mostTaps from '../assets/competition/most-taps.png'
import arrowLeftSvg from '../assets/icons/arrow-left.svg'

// eslint-disable-next-line import/no-unresolved
import logoSvg from '/logo.svg'

const nominations = [
	{ id: 'most-taps', name: 'Most Taps', image: mostTaps },
	{ id: 'most-invites', name: 'Most Invites', image: mostInvites },
	{ id: 'best-pixel-art', name: 'Best Pixel Art', image: bestPixelArt },
	{ id: 'best-tiktok', name: 'Best Tiktok/Reel', image: bestTiktok }
]

const Competition = () => {
	return (
		<main>
			<header className="pt-6">
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
					<div className="relative flex items-center border-4 border-[#390257] bg-[#612FA2] px-2.5 py-1 sm:mr-0">
						<img src={logoSvg} alt="logo" loading="lazy" />
						<span className="font-pixel ml-2 leading-[90%] text-white uppercase">Cuberick</span>
						<div className="absolute top-0 left-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute bottom-0 left-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute top-0 right-0 h-1 w-1 bg-[#390257]"></div>
						<div className="absolute right-0 bottom-0 h-1 w-1 bg-[#390257]"></div>
					</div>
				</div>
			</header>

			<section className="container-lg mt-10 pb-[30px] sm:mt-[120px]">
				<h1 className="subtitle mt-6">
					How to earn 100 USD
					<span className="relative">
						T
						<img
							src={CoinSVG}
							alt="coin icon"
							className="absolute -right-full top-1/2 -translate-y-1/2 rotate-24 coin-glow"
						/>
					</span>
				</h1>

				<ol className="mt-6 flex flex-col gap-8 sm:mt-20 sm:gap-14">
					{termsOfUse.map((item, index) => (
						<li key={item.title}>
							<h3 className="font-inter text-2xl tracking-[-1px] text-white sm:text-[40px]">
								{index + 1}. {item.title}:
							</h3>
							<p className="font-inter mt-6 text-base leading-[145%] tracking-[-1px] text-[#AAAAAA] sm:text-2xl">
								{item.description}
							</p>
						</li>
					))}
				</ol>

				<h2 className="subtitle mt-24">Nomination</h2>

				<div className="max-w-4xl w-full px-4 min-[906px]:p-0 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
					{nominations.map((nomination) => (
						<div key={nomination.id} className="w-full rounded-xl border border-[#373636]">
							<img className="w-full" src={nomination.image} alt={nomination.name} />
						</div>
					))}
				</div>
			</section>

			<Footer />
		</main>
	)
}

export default Competition
