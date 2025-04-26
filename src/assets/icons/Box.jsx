import React from 'react'

const Box = ({ ...rest }) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M5 2.5V0H35V2.5H37.5V5H40V35H37.5V37.5H35V40H5V37.5H2.5V35H0V5H2.5V2.5H5Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default Box
