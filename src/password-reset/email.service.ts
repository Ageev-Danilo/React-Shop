// import emailjs from '@emailjs/nodejs';
import crypto from 'crypto';

const emailjs = require('@emailjs/nodejs');

emailjs.init('oo2vhpTMpp57OA9Tn'); 

const resetTokens = new Map<string, { email: string; expiresAt: Date }>();

export const emailService = {
    generateResetToken(email: string): string {
        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 година

        resetTokens.set(token, { email, expiresAt });

        this.cleanExpiredTokens();

        return token;
    },

    validateToken(token: string): string | null {
        const data = resetTokens.get(token);

        if (!data) {
            return null;
        }

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
            if (now > data.expiresAt) {
                resetTokens.delete(token);
            }
        }
    },

    async sendPasswordResetEmail(email: string) {
        console.log(email)
        const token = this.generateResetToken(email);
        
        const resetLink = `http://localhost:3000/reset_password`;

        const templateParams = {
            // to_email: email,
            // reset_link: resetLink,
            // message: "Ви запросили зміну пароля. Натисніть на посилання нижче, щоб встановити новий пароль. Посилання дійсне протягом 1 години."
            resetLink,
            from_name: "chel",
            user_email: email, // Этот email должен попасть в шаблон
            message: "Ви запросили зміну пароля. Натисніть на посилання нижче, щоб встановити новий пароль. Посилання дійсне протягом 1 години. http://localhost:3000/reset_password    "
        };

        return await emailjs.send(
            'service_lqjlkai', 
            'template_nkzhzgh',  
            templateParams,
            {   
                publicKey: 'oo2vhpTMpp57OA9Tn',
                privateKey: 'dwCCXQp5i7kcUpnYKJnJm'
            }
        );
    }
};