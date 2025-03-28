import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import pixelatedHR from '../assets/pixelated-hr.png'

const HR = ({ rotate = false }) => {
	return (
		<img
			className={clsx('absolute w-full', rotate ? 'top-0 rotate-180' : 'bottom-0')}
			src={pixelatedHR}
			alt="pixelated-hr"
		/>
	)
}

export default HR

HR.propTypes = {
	rotate: PropTypes.bool
}
