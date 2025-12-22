import { userRepository } from "./user.repository";

export const userService = {
    async register(data: any) {
        const existing = await userRepository.findByEmail(data.email);
        if (existing) throw new Error("CONFLICT");
        return await userRepository.create(data);
    },

    async login(email: string) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error("UNAUTHORIZED");
        return user;
    },

    async updatePassword(email: string, password: string) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error("NOT_FOUND");
        return await userRepository.updatePassword(email, password);
    }
};