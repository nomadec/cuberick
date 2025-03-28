import PropTypes from 'prop-types'
import React from 'react'

import { formatNumber } from '../shared/lib'

const Numbers = ({ totalPlayers, DAU, MAU }) => {
	return (
		<div className="bg-[#0A061F] py-[60px] sm:py-28">
			<div className="container">
				<h2 className="subtitle">Cuberick in Numbers</h2>
				<div className="mt-14 flex flex-col gap-8 sm:flex-row">
					<div className="relative h-[343px] w-full border-5 border-white bg-[url('/numbers/card-bg-1.png')] bg-cover bg-center bg-no-repeat">
						<h3 className="subtitle-fixed mt-8">{formatNumber(totalPlayers)}</h3>
						<p className="font-inter mt-3 text-center text-2xl leading-[87%] tracking-[-2.14px] text-[#828282]">
							Total Users
						</p>
						<div className="absolute top-0 left-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute bottom-0 left-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute top-0 right-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute right-0 bottom-0 h-[5px] w-[5px] bg-white"></div>
					</div>
					<div className="relative h-[343px] w-full border-5 border-white bg-[url('/numbers/card-bg-2.png')] bg-cover bg-center bg-no-repeat">
						<h3 className="subtitle-fixed mt-8">{formatNumber(MAU)}</h3>
						<p className="font-inter mt-3 text-center text-2xl leading-[87%] tracking-[-2.14px] text-[#828282]">
							Monthly Active Users
						</p>
						<div className="absolute top-0 left-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute bottom-0 left-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute top-0 right-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute right-0 bottom-0 h-[5px] w-[5px] bg-white"></div>
					</div>
					<div className="relative h-[343px] w-full border-5 border-white bg-[url('/numbers/card-bg-3.png')] bg-cover bg-center bg-no-repeat">
						<h3 className="subtitle-fixed mt-8">{formatNumber(DAU)}</h3>
						<p className="font-inter mt-3 text-center text-2xl leading-[87%] tracking-[-2.14px] text-[#828282]">
							Daily Active Users
						</p>
						<div className="absolute top-0 left-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute bottom-0 left-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute top-0 right-0 h-[5px] w-[5px] bg-white"></div>
						<div className="absolute right-0 bottom-0 h-[5px] w-[5px] bg-white"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

Numbers.propTypes = {
	totalPlayers: PropTypes.number,
	DAU: PropTypes.number,
	MAU: PropTypes.number
}

export default Numbers
