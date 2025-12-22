import { client } from "../client/client";
import { UserCreateInput } from "./user.types";

export const userRepository = {
    async findByEmail(email: string) {
        return await client.user.findUnique({ where: { email } });
    },

    async create(data: UserCreateInput) {
        return await client.user.create({ data });
    },

    async updatePassword(email: string, newPassword: string) {
        return await client.user.update({
            where: { email },
            data: { password: newPassword }
        });
    }
};