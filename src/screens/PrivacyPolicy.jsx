import React from 'react'

import TermsAndConditions from '../components/TermsAndConditions.jsx'

import { privacyPolicy } from '../shared/content'

const PrivacyPolicy = () => {
	return (
		<TermsAndConditions
			heading="Privacy Policy for Cuberick"
			text1="At Cuberick, your privacy is our priority. This policy outlines how we collect, use, and
						protect your personal information"
			text2="By using Cuberick, you consent to our Privacy Policy."
			data={privacyPolicy}
		/>
	)
}

export default PrivacyPolicy
