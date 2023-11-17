import { client } from "~/shared";
import { Products, FullProductInfo } from "~/entities";
import { AxiosResponse } from "axios";

export const getProducts = (
  count: number = 0
): Promise<
  AxiosResponse<{
    products: Products;
    total: number;
    skip: number;
    limit: number;
  }>
> =>
  client.get("products", {
    params: {
      limit: count,
    },
  });

export const getProduct = (
  id: number | string
): Promise<AxiosResponse<FullProductInfo>> => client.get(`products/${id}`);

export const createProduct = (
  data: Omit<FullProductInfo, "id">
): Promise<AxiosResponse<FullProductInfo>> => client.post("products/add", data);
