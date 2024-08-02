import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BtnContacto = ({ justify  }) => {

  const navigate = useNavigate();

  const handleClick = (event, href) => {
    event.preventDefault();
    if (href === '/') {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <div className={`lg:flex lg:flex-1 ${justify}`}>
      <a href="#contacto"
        onClick={(e) => handleClick(e, "#contacto")} 
        className="relative rounded h-9 px-4 py-1.5 overflow-hidden group bg-[#645630] hover:bg-gradient-to-r hover:from-[#b29a59ee] hover:to-[#785a28] text-white transition-all ease-out duration-300 shadow-xl"
      >
        <span className="absolute right-0 w-8 lg:h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative text-white uppercase">Contáctanos</span>
      </a>
    </div>
  );
};

export default BtnContacto;