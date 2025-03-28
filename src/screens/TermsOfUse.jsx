import React from 'react'

import TermsAndConditions from '../components/TermsAndConditions.jsx'

import { termsOfUse } from '../shared/content'

const TermsOfUse = () => {
	return (
		<TermsAndConditions
			heading="Terms of Use for Cuberick"
			text1="Welcome to Cuberick. By accessing or using our mini-app, you agree to the following terms:"
			text2="By using Cuberick, you acknowledge that you have read, understood, and agree to these Terms of Use."
			data={termsOfUse}
		/>
	)
}

export default TermsOfUse
