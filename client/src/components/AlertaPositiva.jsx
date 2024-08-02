import { MailCheck } from 'lucide-react';


// eslint-disable-next-line react/prop-types
const Alerta = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-teal-100 border-t-4 z-50 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div className="flex gap-2 items-center">
        <div className="p-2">
            <MailCheck className='text-teal-500' />
        </div>
        <div>
          <p className="font-bold">Consulta enviada correctamente</p>
          <p className="text-sm">Aguarde y nos contactaremos lo antes posible</p>
        </div>
      </div>
    </div>
  );
};

export default Alerta;
