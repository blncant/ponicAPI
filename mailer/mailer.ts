import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "temps.mbc@gmail.com",
		pass: "feuldhlyebouzquc",
	},
	from: "temps.mbc@gmail.com",
});

export const sendEmail = async (to: string, code: string): Promise<void> => {
	try {
		const mailOptions = {
			from: '"Ponic" temps.mbc@gmail.com',
			to,
			subject: "Este es tu código",
			text: `
                Bienvenido/a a Ponic.
                Este es el código de verificación de un solo uso: ${code}
            `,
		};
		await transporter.sendMail(mailOptions);
		console.log("Correo electrónico enviado");
	} catch (error) {
		console.error("Error al enviar el correo electrónico", error);
	}
};
