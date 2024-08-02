const { Resend } = require('resend');
const dotenv = require('dotenv');


dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (nombre, email, telefono, consulta) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'Consulta WEB <send@rochayasoc.com>',
      to: ['giambagno.gonzalo@gmail.com'],
      subject: 'Nueva Consulta ',
      html: `
          <h1>Consulta desde la web</h1>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Consulta:</strong> ${consulta}</p>
        `,
    });

    if (error) {
      console.error('Error al enviar el correo:', error);
      throw new Error(error);
    }

    return data;
  } catch (error) {
    console.error('Error en el envío del correo:', error);
    throw error;
  }
};

module.exports = { sendEmail };

