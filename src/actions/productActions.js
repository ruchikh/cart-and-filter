import { FETCH_PRODUCTS } from "./types";
let url = "https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json";

export const fetchProducts = () => (dispatch) => {
	fetch(url)
	.then(res => res.json())
	.catch((err) =>
			fetch("db.json")
				.then((res) => res.json())
				.then((data) => data.products)
		)
		.then((data) => {
			console.log(data, 'data')
			dispatch({ type: FETCH_PRODUCTS, payload: data });
		});
}