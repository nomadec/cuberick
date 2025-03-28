import clsx from 'clsx'
import React, { useState } from 'react'

import arrowDown from '../assets/icons/arrow-down.svg'
import { faq } from '../shared/content'

const FAQ = () => {
	const [expanded, setExpanded] = useState([])

	function toggleExpanded(question) {
		setExpanded((prev) => {
			if (prev.includes(question)) {
				return prev.filter((item) => item !== question)
			} else {
				return [...prev, question]
			}
		})
	}

	function onKeyUp(e, question) {
		if (e.keyCode == 13) {
			toggleExpanded(question)
		}
	}

	return (
		<div className="bg-[#0A061F] pt-[60px] pb-[30px] sm:py-[90px]">
			<div className="container-sm max-w-[725px]">
				<h2 className="subtitle">FAQ</h2>
				<div className="mt-8 flex flex-col gap-4 sm:mt-[60px]">
					{faq.map(({ question, answer }) => {
						const isExpanded = expanded.includes(question)

						return (
							<div
								key={question}
								className="relative flex flex-col border-5 border-[#211846] bg-[#0A0617] p-4 sm:p-6"
							>
								<div
									className="flex cursor-pointer items-center justify-between"
									onClick={() => toggleExpanded(question)}
									onKeyUp={(e) => onKeyUp(e, question)}
									role="button"
									tabIndex="0"
								>
									<p className="font-inter text:base leading-[120%] font-medium text-white sm:text-2xl">
										{question}
									</p>
									<img
										className={clsx(isExpanded && 'scale-x-[-1] rotate-180 transform')}
										src={arrowDown}
										alt="arrow"
									/>
								</div>
								<p
									className={clsx(
										'font-inter max-h-0 overflow-hidden text-xs leading-[145%] text-[#B9B9B9] transition-all duration-300 ease-in-out sm:text-lg',
										isExpanded && 'mt-3 max-h-96'
									)}
								>
									{answer}
								</p>

								<div className="absolute top-0 left-0 h-[5px] w-[5px] bg-[#211846]"></div>
								<div className="absolute bottom-0 left-0 h-[5px] w-[5px] bg-[#211846]"></div>
								<div className="absolute top-0 right-0 h-[5px] w-[5px] bg-[#211846]"></div>
								<div className="absolute right-0 bottom-0 h-[5px] w-[5px] bg-[#211846]"></div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default FAQ
