import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const encryptPassword = async (newUser) => {
    const salt = await bcryptjs.genSaltSync(10);
    newUser.password = await bcryptjs.hash(newUser.password, salt);
};
export const compareLogin = async(password, userFound)=>{
    const passwordSucces = await bcryptjs.compare(
        password,
        userFound.password
    );
    return passwordSucces;
}
export const createToken =(user, SECRET_KEY, expiresIn)=>{
    const { back_user_id,user_role_id, first_name,last_name, email, username } = user;
    const payload = {
        back_user_id,
        user_role_id,
        first_name,
        last_name,
        email,
        username
    }
    return jwt.sign(payload,SECRET_KEY,{ expiresIn } );
}
