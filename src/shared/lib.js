const truncate = (num, decimals) => {
	const factor = 10 ** decimals
	return (Math.floor(num * factor) / factor).toFixed(decimals)
}

export const formatNumber = (input) => {
	const num = typeof input === 'string' ? Number(input) : input
	if (isNaN(num)) throw new Error(`Invalid number format: ${input}`)
	const abs = Math.abs(num),
		sign = num < 0 ? '-' : ''
	if (abs < 1000) return sign + (abs % 1 === 0 ? abs : truncate(abs, 2))
	const units = [
		{ divider: 1e12, suffix: 't' },
		{ divider: 1e9, suffix: 'b' },
		{ divider: 1e6, suffix: 'm' },
		{ divider: 1e3, suffix: 'k' }
	]
	const { divider, suffix } = units.find((u) => abs >= u.divider)
	const value = abs / divider
	const decimals = value >= 10 ? 1 : 2
	return sign + (value % 1 === 0 ? value.toFixed(0) : truncate(value, decimals)) + suffix
}
