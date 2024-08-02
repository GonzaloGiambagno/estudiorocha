
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from "lucide-react"
import { useRef, useState } from 'react'
import { fadeOpacity } from '../hooks/animation'
import useWhileInView from '../hooks/useWhileInView'
import Alerta from './AlertaPositiva'



const FormContacto = () => {
    const ref = useRef(null)
    const controlAnimation = useWhileInView(ref)
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        consulta: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const validateForm = () => {
        const { nombre, email, telefono, consulta } = formData;
        if (!nombre || !email || !telefono || !consulta) {
            return 'Todos los campos son obligatorios.';
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return 'El email no es válido.';
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
          setAlertMessage(validationError);
          setAlertVisible(true);
          setTimeout(() => setAlertVisible(false), 5000);
          return;
        }
      
        try {
          const response = await fetch('https://rochayasoc.com/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          const result = await response.json();
          if (result.ok) {
            setAlertMessage('Consulta enviada correctamente.');
            setFormData({
              nombre: '',
              email: '',
              telefono: '',
              consulta: '',
            });
          } else {
            setAlertMessage('Ocurrió un error al enviar la consulta.');
          }
        } catch (error) {
          setAlertMessage('Ocurrió un error al enviar la consulta.');
          console.log(error);
        }
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 5000);
      };
    
  return (
    <section className="h-full w-full relative" id="contacto">
      <div className="absolute -z-10 w-full h-full bg-[radial-gradient(#EBEEF2_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_100%,transparent_50%)]"></div>
        <motion.div 
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeOpacity}
            className="max-w-7xl mx-auto py-14 flex flex-wrap px-4 xl:px-0 md:justify-center lg:justify-between gap-10 lg:gap-0">
            <div className="relative md:w-1/2">
              <h3 className="text-blue-950 text-3xl font-extrabold">Dejanos tu consulta</h3>
              <p className="text-lg text-gray-600 mt-3">No dudes en contactarte. Te responderemos lo antes posible.</p>

              <div className="mt-6">
                  <h2 className="text-blue-950 text-base font-semibold">Contáctos adicionales</h2>
                  <ul className="mt-2 space-y-4">
                      <li >
                            <a href="mailto:estudiojuridico.rocha@hotmail.com" className="flex items-center hover:underline underline-offset-4 decoration-gray-950">
                            <div className="h-10 w-10 rounded flex items-center justify-center shrink-0">
                                <Mail className="h-6 w-6 text-[#c2a34e]" />
                            </div>
                            <p>estudiojuridico.rocha@hotmail.com</p>
                            </a>
                      </li>
                      <li className="flex items-center">
                          <div className="h-10 w-10 rounded flex items-center justify-center shrink-0">
                            <MapPin className="h-6 w-6 text-[#bba25d]" />
                          </div>
                          <p>Av. 44 766, La Plata, Provincia de Buenos Aires</p>
                      </li>
                      <li className="flex items-center">
                          <div className="h-10 w-10 rounded flex items-center justify-center shrink-0">
                            <Phone className="h-6 w-6 text-[#bba25d]" />
                          </div>
                          <p className='select-all cursor-pointer'>+54 221 527-8385</p>
                      </li>

                  </ul>
              </div>

              <div className="mt-8">
                  <h3 className="text-blue-950 text-base font-bold">Saca tu turno:</h3>

                  <ul className="flex mt-2 space-x-4">
                      {/* <li className="h-10 w-10 rounded flex items-center justify-center shrink-0">
                          <a href="" aria-label="Perfil linkedn">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#bba25d'
                                  viewBox="0 0 511 512">
                                  <path
                                      d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                      data-original="#000000" />
                              </svg>
                          </a>
                      </li> */}
                      <li className="rounded flex items-center justify-center shrink-0 ">
                            <a href="https://wa.me/2213526308" aria-label="chat de whatsapp" className='flex gap-2 hover:underline underline-offset-4 decoration-gray-950'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24px" height="24px" fill='#bba25d'><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                                </svg>
                                <p className='text-gray-950'>Hacenos tus consultas por WhatsApp</p>
                            </a>
                      </li>
                  </ul>
              </div>
              <div className="absolute mt-5 xl:mt-0 xl:right-0 xl:bottom-0 w-full xl:w-1/4 h-1 bg-gradient-to-r from-[#b29a5963] to-[#b98e44]"></div>
            </div>

            <div className="md:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='nombre' 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    placeholder='Apellido y Nombre'
                    className="w-full rounded py-3 px-4 bg-gray-100 text-blue-950 text-md outline-blue-950 placeholder:text-black/90 border" 
                />
                <input 
                    type='email' 
                    name='email' 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder='Email'
                    className="w-full rounded py-3 px-4 bg-gray-100 text-blue-950 text-md outline-blue-950 placeholder:text-black/90 border" 
                />
                <input 
                    type='text' 
                    name='telefono' 
                    value={formData.telefono} 
                    onChange={handleChange} 
                    placeholder='Telefono'
                    className="w-full rounded py-3 px-4 bg-gray-100 text-blue-950 text-md outline-blue-950 placeholder:text-black/90 border" 
                />
                <textarea 
                    name='consulta'
                    value={formData.consulta}
                    onChange={handleChange}
                    placeholder='Dejanos tu consulta' 
                    rows="6"
                    className="w-full rounded px-4 bg-gray-100 text-blue-950 text-md pt-3 outline-blue-950 placeholder:text-black/90 border"
                />
                <div className="w-full md:flex justify-end">
                    <button 
                    type='submit'
                    className="text-white bg-blue-950 hover:bg-blue-950/80 tracking-wide rounded px-4 py-3 md:w-1/3 !mt-6 w-full "
                    >
                    Enviar Consulta
                    </button>
                    {alertVisible && <Alerta mensaje={alertMessage} />}
                </div>
                </form>
            </div>
        </motion.div>
        <Alerta visible={alertVisible} />
    </section>
  )
}

export default FormContacto 