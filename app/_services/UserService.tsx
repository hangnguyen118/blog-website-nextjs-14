import axios from "axios";
import { getCookie } from "./CookieService";

const userService = {
  getData: async (token: string) => {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me?populate=*`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  updateProfile: async (id:string, username: string, email: string) => {
    const token = await getCookie('jwt');
    return await axios.put(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/${id}`,
      {
        username,
        email
      },
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }
}
export default userService;