import React from 'react'
import HR from './HR.jsx'
import caretUp from '../assets/icons/caret-up.svg'
import checkmark from '../assets/icons/checkmark.svg'
import rocket from '../assets/icons/rocket.svg'
import cubeIcon from '../assets/roadmap/3d-cube-icon.png'
import cube from '../assets/roadmap/3d-cube.png'
import multiplayerIcon from '../assets/roadmap/multiplayer-icon.png'
import multiplayer from '../assets/roadmap/multiplayer.png'
import referralsIcon from '../assets/roadmap/referrals-icon.png'
import referrals from '../assets/roadmap/referrals.png'
import engineIcon from '../assets/roadmap/engine-icon.png'
import engine from '../assets/roadmap/engine.png'
import onboardingIcon from '../assets/roadmap/onboarding-icon.png'
import onboarding from '../assets/roadmap/onboarding.png'
import harvesterIcon from '../assets/roadmap/harvester-icon.png'
import harvester from '../assets/roadmap/harvester.png'
import gameplayIcon from '../assets/roadmap/gameplay-icon.png'
import gameplay from '../assets/roadmap/gameplay.png'
import clansIcon from '../assets/roadmap/clans-icon.png'
import clans from '../assets/roadmap/clans.png'
import adsIcon from '../assets/roadmap/ads-icon.png'
import ads from '../assets/roadmap/ads.png'
import lastLayerIcon from '../assets/roadmap/last-layer-icon.png'
import lastLayer from '../assets/roadmap/last-layer.png'
import airdropIcon from '../assets/roadmap/airdrop-icon.png'
import airdrop from '../assets/roadmap/airdrop.png'
import listingIcon from '../assets/roadmap/listing-icon.png'
import listing from '../assets/roadmap/listing.png'
import season2Icon from '../assets/roadmap/season-2-icon.png'
import season2 from '../assets/roadmap/season-2.png'
import clsx from 'clsx'

const roadmap = [
	{
		title: '3D Cube',
		description: 'Dropping the first-ever multiplayer game engine in TMA',
		timeline: 'Early December',
		icon: cubeIcon,
		image: cube
	},
	{
		title: 'Multiplayer',
		description: 'Get ready to squad up and dive in together',
		timeline: 'Mid December',
		icon: multiplayerIcon,
		image: multiplayer
	},
	{
		title: 'Referral System, Tasks',
		description: 'Dropping the first-ever multiplayer game engine in TMA',
		timeline: 'End of December',
		icon: referralsIcon,
		image: referrals
	},
	{
		title: 'New 3D Engine',
		description: 'Smoother experience for all devices',
		timeline: 'End of December',
		icon: engineIcon,
		image: engine
	},
	{
		title: 'Onboarding Mechanics',
		description: 'Dropping the first-ever multiplayer game engine in TMA',
		timeline: 'End of December',
		icon: onboardingIcon,
		image: onboarding
	},
	{
		title: 'Passive Gameplay',
		description: 'Harvesters and new tools; earn while you chill',
		timeline: 'End of December',
		icon: harvesterIcon,
		image: harvester
	},
	{
		title: 'Enhanced Gameplay',
		description: 'TNT, space anomalies, customizations, skins – full upgrade mode',
		timeline: 'End of December',
		icon: gameplayIcon,
		image: gameplay
	},
	{
		title: 'Clans',
		description: 'Form your squads and roll out together',
		timeline: 'End of December',
		icon: clansIcon,
		image: clans
	},
	{
		title: 'Ads',
		description: 'Bringing in that sponsored hype on every layer!',
		timeline: 'End of December',
		icon: adsIcon,
		image: ads
	},
	{
		title: 'MEGA last  layer Event',
		description: 'Form your squads and roll out together',
		timeline: 'End of December',
		icon: lastLayerIcon,
		image: lastLayer
	},
	{
		title: 'AirDrop',
		description: 'Free loot raining down',
		timeline: 'End of December',
		icon: airdropIcon,
		image: airdrop
	},
	{
		title: 'Listing',
		description: 'Exchange listing coming your way',
		timeline: 'End of December',
		icon: listingIcon,
		image: listing
	},
	{
		title: 'Season 2',
		description: 'Token Utility',
		timeline: 'End of December',
		icon: season2Icon,
		image: season2
	}
]

const currentStep = 3

const Roadmap = () => {
	return (
		<div className="relative bg-[#110E1E] py-24">
			<HR rotate />
			<div className="container-lg">
				<h2 className="subtitle">Roadmap</h2>
				<div className="relative mt-36 mb-[70px] flex flex-col gap-[120px]">
					{/* TODO align vertical line */}
					{roadmap.map((item, index) => (
						<div
							key={item.title}
							className={clsx(
								'z-10 flex content-center text-white',
								index % 2 == 1 && 'flex-row-reverse'
							)}
						>
							<div className="w-full">
								<div
									className={clsx(
										'flex items-center justify-center gap-2.5 border-3 border-[#60A917] bg-[#0A011C] p-2.5',
										currentStep == index && 'border-[#FFE800]',
										currentStep < index && 'border-[#9500FF]'
									)}
								>
									{currentStep > index && <img src={checkmark} alt="check-mark" />}
									{currentStep == index && <img src={rocket} alt="check-mark" />}
									<span className="font-pixel text-[40px] leading-[87%]">{item.title}</span>
								</div>
								<p
									className={clsx(
										'mt-5 text-[32px] leading-[140%] text-[#828282]',
										index % 2 == 1 && 'text-right'
									)}
								>
									{item.description}
								</p>
							</div>
							<div
								className={clsx(
									'relative mx-28 flex h-[55px] min-w-[55px] items-center justify-center rounded-2xl bg-[#60A917]',
									currentStep == index && 'bg-[#9500FF]',
									currentStep < index && 'bg-[#9500FF]'
								)}
							>
								<img src={item.icon} alt={`${item.title} icon`} />
								<div
									className={clsx(
										'absolute top-1/2 h-[3px] w-28 -translate-y-1/2 bg-[#60A917]',
										currentStep == index && 'bg-[#FFE800]',
										currentStep < index && 'bg-[#9500FF]',
										index % 2 == 1 ? 'left-full' : 'right-full'
									)}
								></div>
								<p className="absolute -bottom-7.5 left-1/2 -translate-x-1/2 text-2xl leading-[130%] font-semibold tracking-[0.5px] whitespace-nowrap">
									{item.timeline}
								</p>
							</div>
							<div className="h-[234px] w-full overflow-hidden border-5 border-[#2C1C5E]">
								<img
									src={item.image}
									alt={item.title}
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
					))}

					<img
						className="absolute -top-[106px] left-1/2 h-6 w-6 -translate-x-1/2 rotate-180 transform"
						src={caretUp}
						alt="caret up icon"
					/>
					<img
						className="absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2"
						src={caretUp}
						alt="caret up icon"
					/>
					<div className="absolute -top-[85px] bottom-5 left-1/2 -translate-x-1/2 border-l-3 border-dashed border-[#979797]"></div>
				</div>
			</div>
			<HR />
		</div>
	)
}

export default Roadmap
