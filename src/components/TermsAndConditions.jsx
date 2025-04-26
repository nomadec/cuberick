import PropTypes from 'prop-types'
import React from 'react'

import logo2dSvg from '../assets/icons/logo-2d.svg'

import Footer from './Footer.jsx'
import SecondaryHeader from './SecondaryHeader.jsx'

const TermsAndConditions = ({ data, heading, text1, text2 }) => {
	return (
		<main className="pt-6">
			<SecondaryHeader />

			<section className="container-lg mt-10 pb-[30px] sm:mt-[120px]">
				<div className="relative mx-auto flex w-fit items-center border-5 border-[#211846] bg-[#0A0617] px-3 py-3 sm:px-6 sm:py-4">
					<img className="w-5 sm:w-6" src={logo2dSvg} alt="arrow" loading="lazy" />
					<p className="font-inter ml-3 text-xs leading-[145%] font-semibold text-[#B63DE1] sm:text-base">
						{text1}
					</p>

					<div className="absolute top-0 left-0 h-[5px] w-[5px] bg-[#211846]"></div>
					<div className="absolute bottom-0 left-0 h-[5px] w-[5px] bg-[#211846]"></div>
					<div className="absolute top-0 right-0 h-[5px] w-[5px] bg-[#211846]"></div>
					<div className="absolute right-0 bottom-0 h-[5px] w-[5px] bg-[#211846]"></div>
				</div>

				<h1 className="subtitle mt-6">{heading}</h1>

				<ol className="mt-6 flex flex-col gap-8 sm:mt-20 sm:gap-14">
					{data.map((item, index) => (
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

				<h5 className="font-inter mt-8 text-base leading-[145%] font-semibold text-[#B63DE1] sm:mt-14 sm:text-2xl">
					{text2}
				</h5>
			</section>

			<Footer />
		</main>
	)
}

TermsAndConditions.propTypes = {
	heading: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.exact({ title: PropTypes.string, description: PropTypes.string })
	)
}

export default TermsAndConditions
