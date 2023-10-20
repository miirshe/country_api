import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
const Countries = () => {
	const [country , setCountry ] = useState([])

	useEffect(()=>{

		const fetchData = async () => {
			const country_data = await axios.get('https://restcountries.com/v3.1/all');
			setCountry(country_data.data)
		}

		fetchData();

	},[])

  return (
	<div className="w-full mt-10">
		<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
		justify-start items-start gap-3 space-y-3">
			{
				country?.map((res , index) => {
					return(
						<div className="w-full overflow-hidden flex flex-col justify-start items-start gap-2 space-y-3" key={index}>
							<img src={res?.flags.png} alt="" />
							<div className=" space-y-2">

							</div>
						</div>
					)
				})
			}

		</div>
	</div>
  )
}

export default Countries