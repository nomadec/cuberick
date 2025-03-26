import React from 'react'

const ContactUs = () => {
	function onSubmit(e) {
		e.preventDefault()
	}
	return (
		<div className="bg-[#0A061F] py-[30px]">
			<div className="container-sm">
				<h2 className="subtitle">Contact us</h2>
				<form onSubmit={onSubmit} className="mt-[60px] grid grid-cols-2 gap-3">
					<input
						placeholder="Name"
						className="font-inter border-4 border-[#2C1C5E] bg-[#110932] p-6 text-2xl tracking-[5px] text-[#AA8FFF] uppercase"
						type="text"
					/>
					<input
						placeholder="E-mail"
						className="font-inter border-4 border-[#2C1C5E] bg-[#110932] p-6 text-2xl tracking-[5px] text-[#AA8FFF] uppercase"
						type="text"
					/>
					<textarea
						placeholder="Message"
						className="font-inter col-span-2 field-sizing-content min-h-96 border-4 border-[#2C1C5E] bg-[#110932] p-6 text-2xl tracking-[5px] text-[#AA8FFF] uppercase"
						type="text"
					/>

					<button
						type="submit"
						className="font-pixel relative col-span-2 cursor-pointer bg-[#BF00FF] p-3 text-center text-lg leading-[87%] tracking-[-1px] text-white shadow-[6.05px_6.05px_0px_0px_#6A17C2]"
					>
						Send
						<div className="absolute top-0 left-[26px] h-full w-[15px] -skew-x-[30deg] transform bg-white opacity-15"></div>
						<div className="absolute top-0 left-[48px] h-full w-2.5 -skew-x-[30deg] transform bg-white opacity-15"></div>
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
