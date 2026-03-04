import emailjs from '@emailjs/browser';
import crypto from 'crypto';

const resetTokens = new Map<string, { email: string; expiresAt: Date }>();

export const emailService = {
    generateResetToken(email: string): string {
        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
        resetTokens.set(token, { email, expiresAt });
        this.cleanExpiredTokens();
        return token;
    },

    validateToken(token: string): string | null {
        const data = resetTokens.get(token);
        if (!data) return null;
        if (new Date() > data.expiresAt) {
            resetTokens.delete(token);
            return null;
        }
        return data.email;
    },

    deleteToken(token: string): void {
        resetTokens.delete(token);
    },

    cleanExpiredTokens(): void {
        const now = new Date();
        for (const [token, data] of resetTokens.entries()) {
            if (now > data.expiresAt) resetTokens.delete(token);
        }
    },

    async sendPasswordResetEmail(email: string): Promise<string> {
        const token = this.generateResetToken(email);

        const resetLink = `http://localhost:3000/reset-password?token=${token}`;

        const templateParams = {
            to_email: email,
            reset_link: resetLink,
            message: "Ви запросили зміну пароля. Натисніть на посилання нижче, щоб встановити новий пароль. Посилання дійсне протягом 1 години."
        };

        await emailjs.send(
            'service_lqjlkai',
            'template_nkzhzgh',
            templateParams,
            { publicKey: 'oo2vhpTMpp57OA9Tn' }
        );

        return resetLink; 
    }
};