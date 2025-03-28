import { Route, Routes } from 'react-router'

import ScrollToTop from './components/ScrollToTop.js'
import Home from './screens/Home.jsx'
import PrivacyPolicy from './screens/PrivacyPolicy.jsx'
import TermsOfUse from './screens/TermsOfUse.jsx'

const App = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-of-use" element={<TermsOfUse />} />
			</Routes>
		</>
	)
}

export default App
