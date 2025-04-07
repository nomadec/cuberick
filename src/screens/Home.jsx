import axios from 'axios'
import { useEffect, useState } from 'react'

import ContactUs from '../components/ContactUs.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Numbers from '../components/Numbers.jsx'
import Roadmap from '../components/Roadmap.jsx'

import { BASE_URL } from '../shared/consts.js'

function getMockData() {
	const data = {
		online_players_count: 4000,
		total_players_count: 1000123,
		daily_active_users: 13982,
		monthly_active_users: 55873
	}
	return new Promise((res) => {
		setTimeout(() => {
			res({ data })
		}, 1500)
	})
}

const Home = () => {
	const [connection, setConnection] = useState(false)
	const [playersOnline, setPlayersOnline] = useState(0)
	const [totalPlayers, setTotalPlayers] = useState(0)
	const [DAU, setDAU] = useState(0)
	const [MAU, setMAU] = useState(0)

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(`${BASE_URL}/metrics/summary`)
				// const { data } = await getMockData()

				setConnection(true)
				setPlayersOnline(data.online_players_count)
				setTotalPlayers(data.total_players_count)
				setDAU(data.daily_active_users)
				setMAU(data.monthly_active_users)
			} catch (e) {
				setConnection(false)
			}
		}

		fetchData()

		const intervalId = setInterval(fetchData, 5000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div>
			<Hero connection={connection} playersOnline={playersOnline} />
			<Numbers totalPlayers={totalPlayers} DAU={DAU} MAU={MAU} />
			<Roadmap />
			<FAQ />
			<ContactUs />
			<Footer />
		</div>
	)
}

export default Home
