// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

export default {
	safelist: [
		...[...Array(101).keys()].flatMap((i) => [
			`w-[${i}%]`,
			`h-[${i}%]`,
			`left-[${i}%]`,
			`bottom-[${i}%]`
		])
	],
	content: ['./js/**/*.js', '../lib/cube_web.ex', '../lib/cube_web/**/*.*ex'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				pixel: ['cofo-sans-pixel', 'sans-serif']
			},
			fontSize: {
				title: [
					'21px',
					{
						lineHeight: '23.52px',
						fontWeight: '400'
					}
				],
				subtile: [
					'16px',
					{
						lineHeight: '17.92px',
						fontWeight: '400'
					}
				],
				'card-subtitle': [
					'14px',
					{
						lineHeight: '16.94px',
						fontWeight: '600'
					}
				],

				regular: [
					'12px',
					{
						lineHeight: '14.52px',
						fontWeight: '400'
					}
				],
				'regular-bold': [
					'12px',
					{
						lineHeight: '14.52px',
						fontWeight: '700'
					}
				],
				small: [
					'10px',
					{
						lineHeight: '12.1px',
						fontWeight: '400'
					}
				],
				'small-bold': [
					'10px',
					{
						lineHeight: '12.1px',
						fontWeight: '700'
					}
				]
			},
			colors: {
				brand: '#FD4F00',
				card: '#060A23',
				'input-field': '#251F45',
				navbar: '#060A23',
				white: '#FCFCFC',
				gray: '#A9A9A9',
				'light-purple': '#8939DD',
				'dark-purple': '#692CA9'
			},
			boxShadow: {
				'inner-task': '0px 5px 36px 6px #BD8EF01A inset',
				'inner-card': 'inset 0px 5px 36px 6px rgba(189, 142, 240, 0.1)',
				'inner-navbar':
					'inset 0px 1.61px 7.24px 0px rgba(25, 11, 57, 1), inset 0px 8.05px 19.64px 9.66px rgba(189, 142, 240, 0.1)',
				'action-btn': '0px 1px 7.3px -1px #00000080 inset',
				medal: '0px 3.32px 8.58px 0px #F6764B inset',
				unknown: '0px 1px 7.3px -1px #00000080 inset',
				input: '0px 1px 4.5px 0px #190B39 inset',
				logo: '0px 0px 44.27px 0px #BE00FF80',
				leagues: '0px 0px 60px 0px #8939DD66',
				'task-btn': '0px 0px 4px 0px #FECE6966',
				'task-reward': '0px 1px 7.24px 0px #7A00FF inset, 0px 8.05px 19.64px 9.66px #7A00FF1A inset'
			},
			backgroundImage: {
				'yellow-gradient':
					'linear-gradient(0deg, #FCC53E, #FCC53E), linear-gradient(89.1deg, #F9AA3C 8.95%, #FFD774 102.98%)',
				'dark-gradient': 'linear-gradient(-166.432deg, #05071e 0%, #0f0622 50%, #030309 100%)',
				'action-btn': 'linear-gradient(225.92deg, #B77FF7 11.2%, #715EE0 88.8%)',
				'action-btn-disabled':
					'linear-gradient(215.64deg, #BE82FA 1.93%, #6659DC 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
				'purple-gradient': 'linear-gradient(213.12deg, #5C09B6 -59.25%, #AB5DFF 80.26%)',
				'yellow-btn': 'linear-gradient(226.4deg, #F3AA35 20.55%, #FECE69 74.82%)',
				'yellow-btn-disabled': 'linear-gradient(226.4deg, #AD7823 20.55%, #C69F4E 82.43%)',
				'discount-yellow': 'linear-gradient(54.87deg, #F3AA35 20.2%, #FECE69 105.41%)',
				'task-btn': 'linear-gradient(265.44deg, #FF9D00 43.02%, #FECE69 99.34%)',
				'task-progress-full': 'linear-gradient(86.37deg, #F3AA35 4.53%, #FECE69 85.64%)',

				medal: 'linear-gradient(0deg, #B6096B -52.78%, #FF5DB9 100%)',
				unknown: 'linear-gradient(0deg, #555254 -52.78%, #7A7A7A 100%)',
				tabbar: 'linear-gradient(225.92deg, #B77FF7 11.2%, #715EE0 88.8%)',
				'header-blur':
					'linear-gradient(180deg, #060A23 0%, #060A23 47.03%, rgba(6, 10, 35, 0) 94.06%)'
			},
			keyframes: {
				chaoticSpin: {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(60deg) scale(1.05)' },
					'20%': { transform: 'rotate(-30deg) scale(0.95)' },
					'30%': { transform: 'rotate(45deg) scale(1.1)' },
					'60%': { transform: 'rotate(110deg) scale(1.05)' },
					'40%': { transform: 'rotate(-45deg) scale(0.9)' },
					'50%': { transform: 'rotate(270deg) scale(1)' },
					'70%': { transform: 'rotate(150deg) scale(0.95)' },
					'80%': { transform: 'rotate(-90deg) scale(1.1)' },
					'90%': { transform: 'rotate(180deg) scale(0.9)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				}
			},
			animation: {
				chaoticSpin: 'chaoticSpin 10s infinite'
			}
		}
	}
}
