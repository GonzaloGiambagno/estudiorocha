// components/email-template.tsx


export const getEmailHtml = ({ nombre, email, telefono, consulta }) => (
  `
  <div>
    <h1>Consulta enviada desde la web</h1>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Consulta:</strong> ${consulta}</p>
  </div>
  `
);
