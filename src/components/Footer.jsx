import React from 'react'
import instagram from '../assets/social-media/instagram.png'
import telegram from '../assets/social-media/telegram.png'
import tiktok from '../assets/social-media/tiktok.png'
import discord from '../assets/social-media/discord.png'
import youtube from '../assets/social-media/youtube.png'
import twitter from '../assets/social-media/twitter.png'

const Footer = () => {
	return (
		<footer className="bg-[#0A061F] py-[30px] sm:py-[90px]">
			<div className="container-sm">
				<div className="flex w-full items-center">
					<div className="w-full">
						<img className="w-full" src={instagram} alt="instagram" />
					</div>
					<div className="w-full">
						<img className="w-full" src={telegram} alt="telegram" />
					</div>
					<div className="w-full">
						<img className="w-full" src={tiktok} alt="tiktok" />
					</div>
					<div className="w-full">
						<img className="w-full" src={discord} alt="discord" />
					</div>
					<div className="w-full">
						<img className="w-full" src={youtube} alt="youtube" />
					</div>
					<div className="w-full">
						<img className="w-full" src={twitter} alt="twitter" />
					</div>
				</div>
				<div className="mt-6 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-inter text-white opacity-70">Copyright © 2024 CUBERICK</p>
					<p className="text-inter text-white opacity-70">Privacy Policy</p>
					<p className="text-inter text-white opacity-70">Terms of Use</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
