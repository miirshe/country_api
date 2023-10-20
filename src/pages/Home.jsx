import Countries from "../components/countries/Countries"

const Home = () => {
	return (
		<div className="w-full p-5">
			<div className="w-[80%] mx-auto p-5">
				<div className="w-full">
					<h1 className="text-xl text-white tracking-widest p-2">🗺️ Countries </h1>
				</div>
				<Countries />
			</div>
		</div>
	)
}

export default Home