import { useState, useEffect } from 'react'
import { DataUsers } from '../types/api'

export const useFetch = (url: string) => {
	const [data, setData] = useState<DataUsers | null>(null)

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setData(data))
	}, [url])

	return { data }
}
