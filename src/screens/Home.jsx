import ContactUs from '../components/ContactUs.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Numbers from '../components/Numbers.jsx'
import Roadmap from '../components/Roadmap.jsx'

const Home = () => {
	return (
		<div>
			<Hero />
			<Numbers />
			<Roadmap />
			<FAQ />
			<ContactUs />
			<Footer />
		</div>
	)
}

export default Home
