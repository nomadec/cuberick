import React from 'react'
import instagram from '../assets/social-media/instagram.png'
import telegram from '../assets/social-media/telegram.png'
import tiktok from '../assets/social-media/tiktok.png'
import discord from '../assets/social-media/discord.png'
import youtube from '../assets/social-media/youtube.png'
import twitter from '../assets/social-media/twitter.png'

const Footer = () => {
	return (
		<footer className="bg-[#0A061F] py-[90px]">
			<div className="container-sm">
				<div className="flex items-center justify-between">
					<img src={instagram} alt="instagram" />
					<img src={telegram} alt="telegram" />
					<img src={tiktok} alt="tiktok" />
					<img src={discord} alt="discord" />
					<img src={youtube} alt="youtube" />
					<img src={twitter} alt="twitter" />
				</div>
				<div className="mt-10 flex items-center justify-between">
					<p className="text-inter text-white opacity-70">Copyright © 2024 CUBERICK</p>
					<p className="text-inter text-white opacity-70">Privacy Policy</p>
					<p className="text-inter text-white opacity-70">Terms of Use</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
