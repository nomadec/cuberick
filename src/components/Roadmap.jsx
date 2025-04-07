import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { roadmap } from '../shared/content.jsx'

import caretUp from '../assets/icons/caret-up.svg'
import checkmark from '../assets/icons/checkmark.svg'
import rocket from '../assets/icons/rocket.svg'

import HR from './HR.jsx'

const currentStep = 4

const Roadmap = () => {
	return (
		<div className="relative bg-[#110E1E] py-24">
			<HR rotate />
			<div className="container-lg 2xl:py-20">
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
				<img className="w-10" src={item.icon} alt={`${item.title} icon`} />
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
