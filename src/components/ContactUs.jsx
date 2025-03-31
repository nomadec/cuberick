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
		formState: { errors, isValid, isDirty, isSubmitSuccessful, isSubmitting }
	} = useForm({
		mode: 'onChange',
		defaultValues
	})

	const onSubmit = (data) => {
		return send_message(data)
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
						disabled={(!isValid && isDirty) || isSubmitting || isSubmitSuccessful}
						type="submit"
						className="font-pixel relative col-span-2 cursor-pointer bg-[#BF00FF] p-3 text-center text-lg leading-[87%] tracking-[-1px] text-white shadow-[6.05px_6.05px_0px_0px_#6A17C2] hover:bg-[#921EB9] hover:shadow-[6.05px_6.05px_0px_0px_#400084] active:bg-[#D968FF] active:shadow-[6.05px_6.05px_0px_0px_#7633BD] disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center"
					>
						{isSubmitting && (
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6 animate-[spin_2s_linear_infinite]"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
									/>
								</svg>
							</>
						)}

						{isSubmitSuccessful && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
								/>
							</svg>
						)}

						{!isSubmitting && !isSubmitSuccessful && 'Send'}

						<div className="absolute top-0 left-[26px] h-full w-[15px] -skew-x-[30deg] transform bg-white opacity-15"></div>
						<div className="absolute top-0 left-[48px] h-full w-2.5 -skew-x-[30deg] transform bg-white opacity-15"></div>
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
