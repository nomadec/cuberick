import React from 'react'
import arrowDown from '../assets/icons/arrow-down.svg'

const questions = [
	{ question: 'How to start playing?1', answer: "I don't know" },
	{ question: 'How to start playing?2', answer: "I don't know" },
	{ question: 'How to start playing?3', answer: "I don't know" },
	{ question: 'How to start playing?4', answer: "I don't know" },
	{ question: 'How to start playing?5', answer: "I don't know" }
]

const FAQ = () => {
	return (
		<div className="bg-[#0A061F] py-[90px]">
			<div className="container-sm max-w-[725px]">
				<h2 className="subtitle">FAQ</h2>
				<div className="mt-[60px] flex flex-col gap-4">
					{questions.map(({ question, _answer }) => (
						<div
							key={question}
							className="flex items-center justify-between border-5 border-[#211846] bg-[#0A0617] px-6 py-5"
						>
							<p className="font-inter text-2xl leading-[120%] font-medium text-white">
								{question}
							</p>
							<img src={arrowDown} alt="arrow" />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FAQ
