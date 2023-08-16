import axios from "axios";
import { useQuery } from "@tanstack/react-query";
 

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;
console.log(API_BASE_URL);


export const endpointsProducts = {
  mens: "/products?category=men's clothing",
  womens: "/products?category=women's clothing",
  flash: `${API_BASE_URL}/products?_sort=title&_order=desc&_limit=8`,
};

export const cancelTokenSource = axios.CancelToken.source();

//create API client
export const apiClient = axios.create({
  //URL of API
  baseURL: API_BASE_URL,
  cancelToken: cancelTokenSource.token,
  //timeout in milliseconds
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
});
 
