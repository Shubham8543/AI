// import models from "../models/usermodel.js";

// export const register = async ({ email, password }) => {
//   if (!email || !password) {
//     throw new Error("Email and password are required");
//   }

//   const hashedPassword = await models.usermodel.hashPassword(password);

//   const user = await models.usermodel.create({ email, password: hashedPassword });
//   console.log(user)
//   return user;
// };
