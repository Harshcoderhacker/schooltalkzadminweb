import axios from "axios";

const baseURL: string = `https://schooltalkzauthentication.azurewebsites.net`;

type postDataType = {
  path: string;
  obj: object | string;
  // state: boolean;
};
type getDataType = {
  path: string;
};
const postData = async ({ path, obj }: postDataType) => {
  let res = await axios.post(`${baseURL}${path}`, obj, {
    withCredentials: true,
  });
  return res;
};

const getData = async ({ path }: getDataType) => {
  let res = await axios.get(`${baseURL}${path}`, {
    withCredentials: true,
  });
  return res;
};
export { postData, getData };
