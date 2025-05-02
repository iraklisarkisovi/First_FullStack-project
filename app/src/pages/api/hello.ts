import axios from "axios"
import { dataType } from "..";


export const GET = async () => {
  const response = await axios.get("http://localhost:5000/users/");
  return response.data;
};

export const GETUser = async (dynamicuserid: string | undefined) => {
  const response = await axios.get(`http://localhost:5000/users/${dynamicuserid}`);
  console.log(dynamicuserid)
  return response.data;
};


export const POST = async (UserData: dataType) => {
  try{
    await axios.post("http://localhost:5000/users", UserData);
    console.log("Data posted successfully")
  }catch(err) {
    console.log(err)
  }
 
}