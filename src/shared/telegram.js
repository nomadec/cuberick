import axios from 'axios'

const chat_id = -1002622324023
const telegram_base_api = 'https://api.telegram.org/bot'
const token = import.meta.env.VITE_TG_BOT_TOKEN

function build_url(method, params) {
	const queryString = new URLSearchParams(params).toString()
	return `${telegram_base_api}${token}/${method}?${queryString}`
}
function build_text({ name, email, message }) {
	return `Name: ${name}\n\nEmail: ${email}\n\n ${message}`
}

export async function send_message(data) {
	await axios.get(build_url('sendMessage', { chat_id, text: build_text(data) }))
}
