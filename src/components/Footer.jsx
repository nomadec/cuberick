import React from 'react'
import { Link } from 'react-router'

import discord from '../assets/social-media/discord.png'
import instagram from '../assets/social-media/instagram.png'
import telegram from '../assets/social-media/telegram.png'
import tiktok from '../assets/social-media/tiktok.png'
import twitter from '../assets/social-media/twitter.png'
import youtube from '../assets/social-media/youtube.png'

const Footer = () => {
	return (
		<footer className="bg-[#0A061F] py-[30px] sm:py-[90px]">
			<div className="container-sm">
				<div className="flex w-full items-center">
					<div className="w-full">
						<img className="w-full" src={instagram} alt="instagram" />
					</div>
					<div className="w-full">
						<a href="https://t.me/cuberick_official" target="_blank" rel="noreferrer">
							<img className="w-full" src={telegram} alt="telegram" />
						</a>
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
					<p className="text-inter text-white opacity-70">
						Copyright © {new Date().getFullYear()} CUBERICK
					</p>
					<Link to="/privacy-policy" className="text-inter text-white opacity-70">
						Privacy Policy
					</Link>
					<Link to="terms-of-use" className="text-inter text-white opacity-70">
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
