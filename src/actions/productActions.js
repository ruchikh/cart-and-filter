import { FETCH_PRODUCTS } from "./types";
let url = "db.json"

export const fetchProducts = () => (dispatch) => {
	fetch(url)
	.then(res => res.json())
		.then((data) => {
			console.log(data, 'data')
			dispatch({ type: FETCH_PRODUCTS, payload: data });
		});
}