import React from 'react'

const Numbers = () => {
	return (
		<div className="bg-[#0A061F] py-28">
			<div className="container">
				<h2 className="subtitle">Cuberick in Numbers</h2>
				<div className="mt-14 flex gap-8">
					<div className="h-[343px] w-full border-5 border-white">
						<h3 className="subtitle mt-8">490 k</h3>
						<p className="font-inter mt-3 text-center text-2xl leading-[87%] tracking-[-2.14px] text-[#828282]">
							Total Users
						</p>
					</div>
					<div className="h-[343px] w-full border-5 border-white">
						<h3 className="subtitle mt-8">300 k</h3>
						<p className="font-inter mt-3 text-center text-2xl leading-[87%] tracking-[-2.14px] text-[#828282]">
							Monthly Active Users
						</p>
					</div>
					<div className="h-[343px] w-full border-5 border-white">
						<h3 className="subtitle mt-8">80 k</h3>
						<p className="font-inter mt-3 text-center text-2xl leading-[87%] tracking-[-2.14px] text-[#828282]">
							Daily Active Users
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Numbers
