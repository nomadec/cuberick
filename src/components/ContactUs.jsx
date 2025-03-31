import { clsx } from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

import { send_message } from '../shared/telegram'

const formValidation = {
	name: {
		required: 'Enter your name please',
		minLength: { value: 2, message: "Your name can't consist of 1 symbol" },
		maxLength: { value: 20, message: 'Too long name you can shorten it' }
	},
	email: {
		required: 'Enter your email',
		pattern: {
			value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
			message: 'Enter valid email'
		}
	},
	message: {
		required: 'Leave a message, mate',
		minLength: { value: 10, message: 'Too short' },
		maxLength: { value: 500, message: 'Shorted the text' }
	}
}

const defaultValues = {
	name: '',
	email: '',
	message: ''
}
const ContactUs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isDirty }
	} = useForm({
		mode: 'onChange',
		defaultValues
	})

	const onSubmit = (data) => {
		send_message(data)
	}

	return (
		<div className="bg-[#0A061F] py-[30px] sm:py-[30px]">
			<div className="container-sm">
				<h2 className="subtitle">Contact us</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mt-8 grid grid-cols-2 gap-3 sm:mt-[60px]"
				>
					<div className="col-span-2 sm:col-span-1">
						<input
							{...register('name', formValidation.name)}
							autoComplete="given-name"
							placeholder="Name"
							className={clsx(
								'font-inter w-full border-4 border-[#2C1C5E] bg-[#110932] px-6 py-[14px] text-base tracking-[3.5px] text-[#AA8FFF] uppercase focus:border-[#7259C1] sm:py-6 sm:text-2xl sm:tracking-[6px]',
								errors.name && 'border-[#FF5656]'
							)}
							type="text"
						/>
						{errors.name && <p className="mt-1 text-sm text-[#FF5656]">{errors.name.message}</p>}
					</div>
					<div className="col-span-2 sm:col-span-1">
						<input
							{...register('email', formValidation.email)}
							autoComplete="email"
							placeholder="E-mail"
							className={clsx(
								'font-inter w-full border-4 border-[#2C1C5E] bg-[#110932] px-6 py-[14px] text-base tracking-[3.5px] text-[#AA8FFF] uppercase focus:border-[#7259C1] sm:py-6 sm:text-2xl sm:tracking-[6px]',
								errors.email && 'border-[#FF5656]'
							)}
							type="email"
						/>
						{errors.email && <p className="mt-1 text-sm text-[#FF5656]">{errors.email.message}</p>}
					</div>

					<div className="col-span-2">
						<textarea
							{...register('message', formValidation.message)}
							placeholder="Message"
							className={clsx(
								'font-inter field-sizing-content min-h-32 w-full border-4 border-[#2C1C5E] bg-[#110932] px-6 py-[14px] text-base tracking-[3.5px] text-[#AA8FFF] uppercase focus:border-[#7259C1] sm:min-h-96 sm:py-6 sm:text-2xl sm:tracking-[6px]',
								errors.message && 'border-[#FF5656]'
							)}
							type="text"
							defaultValue=""
						/>
						{errors.message && (
							<p className="mt-1 text-sm text-[#FF5656]">{errors.message.message}</p>
						)}
					</div>

					<button
						disabled={!isValid && isDirty}
						type="submit"
						className="font-pixel relative col-span-2 cursor-pointer bg-[#BF00FF] p-3 text-center text-lg leading-[87%] tracking-[-1px] text-white shadow-[6.05px_6.05px_0px_0px_#6A17C2] hover:bg-[#921EB9] hover:shadow-[6.05px_6.05px_0px_0px_#400084] active:bg-[#D968FF] active:shadow-[6.05px_6.05px_0px_0px_#7633BD] disabled:cursor-not-allowed disabled:opacity-50"
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
