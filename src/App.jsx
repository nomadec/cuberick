import { Navigate, Route, Routes } from 'react-router'

import Home from './screens/Home.jsx'
import PrivacyPolicy from './screens/PrivacyPolicy.jsx'
import TermsOfUse from './screens/TermsOfUse.jsx'

import ScrollToTop from './components/ScrollToTop.js'

const App = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-of-use" element={<TermsOfUse />} />

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	)
}

export default App
