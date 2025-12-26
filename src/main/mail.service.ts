import emailjs from '@emailjs/browser';

export const mailService = {
    async sendPasswordResetLink(email: string) {
        const resetLink = `http://localhost:8000/password_upload?email=${email}`;

        const templateParams = {
            to_email: email,
            reset_link: resetLink, 
            message: "Ви запитали зміну пароля. Натисніть на посилання нижче, щоб встановити новий."
        };

        return await emailjs.send(
            'service_bwc7w3l',   
            'template_86w68r9',  
            templateParams,
            {
                publicKey: 'oo2vhpTMpp57OA9Tn',
            }
        );
    }
};