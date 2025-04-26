import clsx from 'clsx'
import React from 'react'

import Footer from '../components/Footer.jsx'
import SecondaryHeader from '../components/SecondaryHeader.jsx'

import { MINI_APP_URL } from '../shared/consts.js'

import CoinSVG from '../assets/coin.svg'
import place1 from '../assets/competition/1-place.png'
import place2 from '../assets/competition/2-place.png'
import place3 from '../assets/competition/3-place.png'
import bestPixelArt from '../assets/competition/best-pixel-art.png'
import bestTiktok from '../assets/competition/best-tiktok.png'
import CompetitionHeroMobilePng from '../assets/competition/hero-mobile.png'
import CompetitionHeroPng from '../assets/competition/hero.png'
import mostInvites from '../assets/competition/most-invites.png'
import mostTaps from '../assets/competition/most-taps.png'
import Box from '../assets/icons/Box.jsx'

const nominations = [
	{
		id: 'most-taps',
		title: 'Top miner',
		description: (
			<>
				Smash as many cubes as you can within the contest timeframe! <br /> Only cubes broken DURING
				the contest will count—previously broken cubes. DON&apos;T COUNT!
			</>
		),
		image: mostTaps
	},
	{
		id: 'best-pixel-art',
		title: 'Pixel art master',
		description: (
			<>
				Show off your artistic skills! Post a sketch of your pixel art idea in{' '}
				<a
					className="underline font-bold"
					href="https://t.me/cuberick_chat"
					target="_blank"
					rel="noreferrer"
				>
					our chat
				</a>{' '}
				using the hashtag <span className="underline font-bold">#cuberickpixelart</span>. <br />
				Final pixel art must be at least 100x100 cubes in size. <br /> After completion, submit a
				screenshot in the chat using the SAME hashtag. We WILL verify authorship, so please — NO
				CHEATING!
			</>
		),
		image: bestPixelArt
	},
	{
		id: 'most-invites',
		title: 'Invite champion',
		description: (
			<>
				Invite as many friends as you can during the contest period! <br /> Only NEW invites count -
				old invites will NOT be considered!
			</>
		),
		image: mostInvites
	},
	{
		id: 'best-tiktok',
		title: 'TikTok star',
		description: (
			<>
				Create a viral TikTok video about Cuberick! <br /> Fill out the{' '}
				<a
					className="underline font-bold"
					href="https://docs.google.com/forms/d/e/1FAIpQLSel4tP1zWtIKit24GQ-tRGWICD0gzLAS6e9w6IU3rb1Uw8AHg/viewform"
					target="_blank"
					rel="noreferrer"
				>
					Google Form
				</a>
				. <br /> In google form include your Telegram account (EXACT THE SAME AS USED IN GAME) and
				your TikTok video link. <br /> Submit as many videos as you like - NO LIMIT ON ENTRIES!
			</>
		),
		image: bestTiktok
	}
]

const prizes = [
	{ place: 1, prize: 100, currency: 'USDT', borderColor: '#FFA016', image: place1 },
	{ place: 2, prize: 50, currency: 'USDT', borderColor: '#919ABB', image: place2 },
	{ place: 3, prize: 1000, currency: 'Telegram Stars', borderColor: '#D38853', image: place3 }
]

const Competition = () => {
	return (
		<main>
			<Hero />
			<section className="container mt-[60px] sm:mt-28">
				<h2 className="subtitle">Contest details:</h2>
				<p className="text-center font-inter mt-3 sm:mt-6 text-xl leading-[140%] sm:leading-[145%] sm:tracking-[-1px] text-[#AAAAAA] sm:text-2xl">
					Four thrilling categories—each with rewards for 1st, 2nd, and 3rd places
				</p>

				<div className="mt-10 flex flex-col items-end gap-[52px] sm:gap-8 sm:flex-row">
					{prizes.map((item) => (
						<div
							key={item.place}
							className={clsx(
								`relative w-full border-5 bg-cover bg-center bg-no-repeat`,
								item.place === 1 && 'sm:order-1 h-[343px]',
								item.place === 2 && 'h-[323px]',
								item.place === 3 && 'sm:order-2 h-[303px]'
							)}
							style={{ borderColor: item.borderColor, backgroundImage: `url('${item.image}')` }}
						>
							<h3 className="subtitle-fixed mt-8">{item.prize}</h3>
							<p className="font-inter mt-3 text-center text-[32px] leading-[87%] tracking-[-2.14px] text-[#828282]">
								{item.currency}
							</p>
							<div
								className={`absolute top-0 left-0 h-[5px] w-[5px]`}
								style={{ backgroundColor: item.borderColor }}
							></div>
							<div
								className={`absolute bottom-0 left-0 h-[5px] w-[5px]`}
								style={{ backgroundColor: item.borderColor }}
							></div>
							<div
								className={`absolute top-0 right-0 h-[5px] w-[5px]`}
								style={{ backgroundColor: item.borderColor }}
							></div>
							<div
								className={`absolute right-0 bottom-0 h-[5px] w-[5px]`}
								style={{ backgroundColor: item.borderColor }}
							></div>

							<div className={`absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2`}>
								<Box style={{ color: item.borderColor }} />

								<span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-pixel text-white text-4xl">
									{item.place}
								</span>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="container mt-[60px] sm:mt-28">
				{nominations.map((item, index) => (
					<div key={item.id} className={clsx(index > 0 && 'mt-10 sm:mt-20')}>
						<div className="relative mx-auto flex w-fit items-center border-5 border-[#211846] bg-[#0A0617] px-9 py-3">
							<p className="font-inter text-base leading-[145%] font-semibold text-[#B63DE1] sm:text-2xl">
								Category {index + 1}
							</p>

							<div className="absolute top-0 left-0 h-[5px] w-[5px] bg-[#211846]"></div>
							<div className="absolute bottom-0 left-0 h-[5px] w-[5px] bg-[#211846]"></div>
							<div className="absolute top-0 right-0 h-[5px] w-[5px] bg-[#211846]"></div>
							<div className="absolute right-0 bottom-0 h-[5px] w-[5px] bg-[#211846]"></div>
						</div>
						<h2 className="subtitle mt-2 sm:mt-3">{item.title}</h2>
						<p className="font-inter mt-4 sm:mt-6 text-base leading-[140%] sm:leading-[145%] sm:tracking-[-1px] text-[#AAAAAA] sm:text-2xl">
							{item.description}
						</p>

						<div className="relative mt-6 sm:mt-10 h-[234px] w-full border-5 border-[#3A3A3A] sm:h-[343px]">
							<img
								src={item.image}
								alt={item.title}
								className="h-full w-full object-cover object-center"
								loading="lazy"
							/>
							<div className="absolute top-0 left-0 h-[5px] w-[5px] bg-[#3A3A3A]"></div>
							<div className="absolute bottom-0 left-0 h-[5px] w-[5px] bg-[#3A3A3A]"></div>
							<div className="absolute top-0 right-0 h-[5px] w-[5px] bg-[#3A3A3A]"></div>
							<div className="absolute right-0 bottom-0 h-[5px] w-[5px] bg-[#3A3A3A]"></div>
						</div>
					</div>
				))}
			</section>

			<Footer />
		</main>
	)
}

function Hero() {
	return (
		<div className={`relative h-[484px] pt-8.5 sm:h-[900px] 2xl:h-[95vh]`}>
			<div
				style={{ backgroundImage: `url('${CompetitionHeroPng}')` }}
				className="absolute inset-0 -z-20 hidden sm:block bg-cover bg-center bg-no-repeat 2xl:h-[95vh]"
			></div>
			<div
				style={{ backgroundImage: `url('${CompetitionHeroMobilePng}')` }}
				className="absolute inset-0 -z-20 sm:hidden bg-cover bg-center bg-no-repeat 2xl:h-[95vh]"
			></div>

			<div className="absolute inset-0 -z-10 bg-[radial-gradient(109.56%_109.56%_at_48.68%_14.5%,_rgba(10,_6,_31,_0)_60.57%,_#0A061F_71.86%)]"></div>
			<div className="sm:hidden absolute inset-0 -z-10 bg-[linear-gradient(178.07deg,_#000000_1.63%,_rgba(0,_0,_0,_0)_35.47%)]"></div>
			<SecondaryHeader />
			<div className="absolute container left-1/2 -translate-x-1/2 bottom-[10%]">
				<h1 className="font-pixel mt-[50%] text-center text-[28px] leading-[105%] text-white sm:mt-24 sm:text-[46px] sm:leading-[87%] sm:tracking-[-0.6px]">
					EPIC CUBERICK CONTES
					<span className="relative">
						T
						<img
							src={CoinSVG}
							alt="coin icon"
							className="min-w-5 sm:min-w-11 absolute right-[100%] -top-[75%] sm:-right-[200%] sm:top-1/2 sm:-translate-y-1/2 coin-glow"
						/>
						<img
							src={CoinSVG}
							alt="coin icon"
							className="min-w-5 sm:min-w-11 rotate-12 right-[35%] -top-[70%] absolute sm:-right-[290%] sm:top-1/2 sm:-translate-y-1/2 coin-glow z-10"
						/>
						<img
							src={CoinSVG}
							alt="coin icon"
							className="min-w-5 sm:min-w-11 absolute -right-[35%] -top-[65%] sm:-right-[380%] sm:top-1/2 sm:-translate-y-1/2 coin-glow"
						/>
					</span>
				</h1>
				<p className="text-center font-inter mt-2 sm:mt-6 text-xs leading-[145%] tracking-[-1px] text-[#AAAAAA] sm:text-xl">
					We&apos;re excited to announce our FIRST competition yet! Gear up, cosmic miners,
					it&apos;s your chance to shine and win SOME MONEY!
				</p>
				<a href={MINI_APP_URL} target="_blank" rel="noreferrer">
					<div className="relative w-fit mt-3 sm:mt-6 mx-auto flex h-min items-center bg-[#FFAE00] px-4 py-2 shadow-[3px_3px_0px_0px_#C26D17] sm:shadow-[6.05px_6.05px_0px_0px_#C26D17]">
						<span className="font-pixel ml-2 font-medium sm:font-semibold text-base leading-[87%] tracking-[-1px] text-[#0A0A0A] sm:text-lg">
							Start game
						</span>
						<div className="absolute top-0 left-[26px] h-full w-[15px] -skew-x-[30deg] transform bg-white opacity-15"></div>
						<div className="absolute top-0 left-[48px] h-full w-2.5 -skew-x-[30deg] transform bg-white opacity-15"></div>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Competition
