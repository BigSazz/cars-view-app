export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': 'b33b0ed40cmsh9d6c15e14db2f16p189f57jsna53d03513632',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const res = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });

	const data = await res.json();

	return data;
}