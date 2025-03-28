import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import caretUp from '../assets/icons/caret-up.svg'
import checkmark from '../assets/icons/checkmark.svg'
import rocket from '../assets/icons/rocket.svg'
import cubeIcon from '../assets/roadmap/3d-cube-icon.png'
import cube from '../assets/roadmap/3d-cube.png'
import adsIcon from '../assets/roadmap/ads-icon.png'
import ads from '../assets/roadmap/ads.png'
import airdropIcon from '../assets/roadmap/airdrop-icon.png'
import airdrop from '../assets/roadmap/airdrop.png'
import clansIcon from '../assets/roadmap/clans-icon.png'
import clans from '../assets/roadmap/clans.png'
import engineIcon from '../assets/roadmap/engine-icon.png'
import engine from '../assets/roadmap/engine.png'
import gameplayIcon from '../assets/roadmap/gameplay-icon.png'
import gameplay from '../assets/roadmap/gameplay.png'
import harvesterIcon from '../assets/roadmap/harvester-icon.png'
import harvester from '../assets/roadmap/harvester.png'
import lastLayerIcon from '../assets/roadmap/last-layer-icon.png'
import lastLayer from '../assets/roadmap/last-layer.png'
import listingIcon from '../assets/roadmap/listing-icon.png'
import listing from '../assets/roadmap/listing.png'
import multiplayerIcon from '../assets/roadmap/multiplayer-icon.png'
import multiplayer from '../assets/roadmap/multiplayer.png'
import onboardingIcon from '../assets/roadmap/onboarding-icon.png'
import onboarding from '../assets/roadmap/onboarding.png'
import referralsIcon from '../assets/roadmap/referrals-icon.png'
import referrals from '../assets/roadmap/referrals.png'
import season2Icon from '../assets/roadmap/season-2-icon.png'
import season2 from '../assets/roadmap/season-2.png'
import HR from './HR.jsx'

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

const currentStep = 4

const Roadmap = () => {
	return (
		<div className="relative bg-[#110E1E] py-24">
			<HR rotate />
			<div className="container-lg">
				<h2 className="subtitle">Roadmap</h2>
				<div className="relative mt-20 flex flex-col gap-[120px] md:mt-36">
					{roadmap.map((item, index) => (
						<div key={item.title}>
							<DesktopItem item={item} index={index} />
							<MobileItem item={item} index={index} />
						</div>
					))}

					<img
						className="absolute -top-8 left-2 h-6 w-6 rotate-180 transform md:-top-[106px] md:left-1/2 md:-translate-x-1/2"
						src={caretUp}
						alt="caret up icon"
					/>
					<img
						className="absolute -bottom-[42px] left-2 h-6 w-6 md:bottom-0 md:left-1/2 md:-translate-x-1/2"
						src={caretUp}
						alt="caret up icon"
					/>
					<div className="absolute -top-[10px] -bottom-5 left-[19px] border-l-3 border-dashed border-[#979797] md:-top-[85px] md:bottom-5 md:left-1/2 md:-translate-x-1/2"></div>
				</div>
			</div>
			<HR />
		</div>
	)
}

function DesktopItem({ item, index }) {
	return (
		<div className={clsx('hidden text-white md:flex', index % 2 == 1 && 'flex-row-reverse')}>
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
					'relative z-10 mx-28 flex h-[55px] min-w-[55px] items-center justify-center rounded-2xl bg-[#60A917]',
					currentStep == index && 'bg-[#FFE800]',
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
			<div className="w-full">
				<div className="h-[234px] w-full overflow-hidden border-5 border-[#2C1C5E]">
					<img
						src={item.image}
						alt={item.title}
						className="h-full w-full object-cover object-center"
					/>
				</div>
			</div>
		</div>
	)
}

DesktopItem.propTypes = {
	index: PropTypes.number,
	item: PropTypes.exact({
		title: PropTypes.string,
		description: PropTypes.string,
		timeline: PropTypes.string,
		icon: PropTypes.string,
		image: PropTypes.string
	})
}

function MobileItem({ item, index }) {
	return (
		<div key={item.title} className={'flex text-white md:hidden'}>
			<div
				className={clsx(
					'relative z-10 mt-2.5 flex h-10 min-w-10 items-center justify-center rounded-2xl bg-[#60A917]',
					currentStep == index && 'bg-[#FFE800]',
					currentStep < index && 'bg-[#9500FF]'
				)}
			>
				<img className="w-7" src={item.icon} alt={`${item.title} icon`} />
				<div
					className={clsx(
						'absolute top-1/2 h-[3px] w-[45vw] -translate-y-1/2 bg-[#60A917]',
						currentStep == index && 'bg-[#FFE800]',
						currentStep < index && 'bg-[#9500FF]',
						'left-full'
					)}
				></div>
			</div>
			<div className="flex w-full flex-col items-center px-2.5">
				<div
					className={clsx(
						'relative z-10 flex w-fit items-center justify-center gap-2.5 border-3 border-[#60A917] bg-[#0A011C] px-2.5 py-4',
						currentStep == index && 'border-[#FFE800]',
						currentStep < index && 'border-[#9500FF]'
					)}
				>
					{currentStep > index && <img className="w-5" src={checkmark} alt="check-mark" />}
					{currentStep == index && <img className="h-5 scale-140" src={rocket} alt="check-mark" />}
					<span className="font-pixel text-2xl leading-[87%] whitespace-nowrap">{item.title}</span>
				</div>
				<p className="mt-3.5 text-base leading-[130%] font-semibold tracking-[0.5px]">
					{item.timeline}
				</p>
				<p className={'mt-3 text-center text-xl leading-[140%] text-[#828282]'}>
					{item.description}
				</p>

				<div className="mt-4 h-[135px] w-full overflow-hidden border-3 border-[#2C1C5E] sm:h-[195px]">
					<img
						src={item.image}
						alt={item.title}
						className="h-full w-full object-cover object-center"
					/>
				</div>
			</div>
		</div>
	)
}

MobileItem.propTypes = {
	index: PropTypes.number,
	item: PropTypes.exact({
		title: PropTypes.string,
		description: PropTypes.string,
		timeline: PropTypes.string,
		icon: PropTypes.string,
		image: PropTypes.string
	})
}

export default Roadmap
