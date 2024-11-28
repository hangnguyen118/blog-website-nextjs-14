import axios from "axios";

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
}
export default userService;