import React, { useState } from 'react'
import arrowDown from '../assets/icons/arrow-down.svg'
import clsx from 'clsx'

const questions = [
	{
		question: 'How to start playing?1',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Felis bibendum egestas sem rutrum quam amet nisi. Elementum pharetra proin laoreet feugiat at vulputate purus purus vitae. Sodales diam arcu eget condimentum amet a at aenean nibh. Vestibulum odio sodales eu nunc enim ac cras malesuada morbi.'
	},
	{ question: 'How to start playing?2', answer: "I don't know" },
	{
		question: 'How to start playing?3',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Felis bibendum egestas sem rutrum quam amet nisi. Elementum pharetra proin laoreet feugiat at vulputate purus purus vitae. Sodales diam arcu eget condimentum amet a at aenean nibh. Vestibulum odio sodales eu nunc enim ac cras malesuada morbi.'
	},
	{ question: 'How to start playing?4', answer: "I don't know" },
	{ question: 'How to start playing?5', answer: "I don't know" }
]

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
		<div className="bg-[#0A061F] py-[90px]">
			<div className="container-sm max-w-[725px]">
				<h2 className="subtitle">FAQ</h2>
				<div className="mt-[60px] flex flex-col gap-4">
					{questions.map(({ question, answer }) => {
						const isExpanded = expanded.includes(question)

						return (
							<div
								key={question}
								onClick={() => toggleExpanded(question)}
								onKeyUp={(e) => onKeyUp(e, question)}
								className="relative flex cursor-pointer flex-col border-5 border-[#211846] bg-[#0A0617] px-6 py-5"
								role="button"
								tabIndex="0"
							>
								<div className="flex items-center justify-between">
									<p className="font-inter text-2xl leading-[120%] font-medium text-white">
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
										'font-inter max-h-0 overflow-hidden text-lg leading-[145%] text-[#B9B9B9] transition-all duration-500 ease-in-out',
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
