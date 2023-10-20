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
console.log('country',country);
  return (
	<div className="w-full mt-10">
		<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
		justify-start items-start gap-3 space-y-3">
			{
				country?.map((res , index) => {
					return(
						<div className="w-full overflow-hidden flex flex-col justify-start items-start gap-2 space-y-3 
						bg-slate-900 shadow-md rounded p-3" key={index}>
							<img className="w-full h-44 bg-cover object-center" src={res?.flags.png} alt="" />
							<hr />
							<div className=" space-y-2">
								<p className=" text-xl tracking-widest text-slate-500">Name : <span className="text-white text-lg">{res?.name?.common}</span></p>
								<p className=" text-xl tracking-widest text-slate-500">Area : <span className="text-white text-lg">{res?.area}</span></p>
								<p className=" text-xl tracking-widest text-slate-500">Population : <span className="text-white text-lg">{res?.population}</span></p>
								<p className=" text-xl tracking-widest text-slate-500">Region : <span className="text-white text-lg">{res?.region}</span></p>
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