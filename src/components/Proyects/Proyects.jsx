import { motion } from "framer-motion";

import pardosera from "../../assets/proyects/pardosera.png";
import ecommerceJs from "../../assets/proyects/ecommerceJS.png";
import ecommerceReact from "../../assets/proyects/ecommerceReact.png";
import Rickymorty from "../../assets/proyects/rickAndMorty.png";
import pokemon from "../../assets/proyects/pokemon.png";
import cineGo from "../../assets/proyects/cineGo.png";
import ruslux from "../../assets/proyects/ruslux.png";
import teza from "../../assets/proyects/teza.png";

const projects = [
  {
    name: "TezaShoes - Ecommerce",
    image: teza,
    url_github: "https://github.com/Majomon/TezaShoes",
    url_deploy: "https://teza-shoes.vercel.app/",
  },
  {
    name: "Ruslux - Inmobiliaria",
    image: ruslux,
    url_github: "https://github.com/Majomon/InmobiliariaApp",
    url_deploy: "https://inmobiliaria-client.vercel.app",
  },
  {
    name: "CineGo",
    image: cineGo,
    url_github: "https://github.com/Majomon/CineGo-v2-dev",
    url_deploy: "https://cine-go-v2-client.vercel.app",
  },
  {
    name: "Pokeapi",
    image: pokemon,
    url_github: "https://github.com/Majomon/PI-Pokemon",
    url_deploy: "https://pokemon-client-five.vercel.app/",
  },
  {
    name: "Rick & Morty",
    image: Rickymorty,
    url_github: "https://github.com/Majomon/rickAndMorty",
    url_deploy: "https://rick-and-morty-client-vert.vercel.app/",
  },
  {
    name: "Ecommerce React",
    image: ecommerceReact,
    url_github: "https://github.com/Majomon/jabones-y-velas-monzon-mauricio",
    url_deploy: "https://jabones-y-velas.vercel.app/",
  },
  {
    name: "Ecommerce Js",
    image: ecommerceJs,
    url_github: "https://github.com/Majomon/ProyectoFinalJS",
    url_deploy: "https://proyecto-final-js-zeta.vercel.app/",
  },
  {
    name: "Pardosera - HTML/CSS",
    image: pardosera,
    url_github: "https://github.com/Majomon/pardosera",
    url_deploy: "https://pardosera.vercel.app/",
  },
];

const Proyects = () => {
  return (
    <div className="Proyects">
      <div className="w-full flex flex-col items-center">
        <h2 className="w-72 text-center text-yellow-400 dark:text-yellow-400 text-5xl pb-2 mb-6 mx-auto border-b-4 border-yellow-400">
          Proyectos
        </h2>
        <h4 className="pb-8 text-center ">Algunos de mis trabajos recientes</h4>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", duration: 1 }}
            className="relative mx-2 group flex flex-col justify-center items-center rounded-lg  hover:bg-slate-900  border-2 border-slate-300 dark:border-yellow-400"
            key={index}
          >
            <img
              className="opacity-100 group-hover:opacity-0 rounded-lg"
              src={project.image}
              alt={project.name}
            />
            {project.url_github && (
              <>
                <motion.h2 className="absolute opacity-0 pl-2 select-none group-hover:opacity-100 text-white border-l-8 border-yellow-400">
                  {project.name}
                </motion.h2>

                {/* Boton Github */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", duration: 3 }}
                  className="absolute opacity-0 group-hover:opacity-100 left-0 bottom-0 m-4 hover:bg-white/70 stroke-white hover:stroke-black hover:dark:stroke-black rounded-full p-1"
                  type="button"
                >
                  <a
                    href={project.url_github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                </motion.button>

                {/* Boton Deploy */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", duration: 0.3 }}
                  className="absolute opacity-0 group-hover:opacity-100 right-0 bottom-0 m-4 hover:bg-white/70 stroke-white hover:stroke-black hover:dark:stroke-black rounded-full p-1"
                  type="button"
                >
                  <a
                    href={project.url_deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-external-link"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                      <path d="M11 13l9 -9" />
                      <path d="M15 4h5v5" />
                    </svg>
                  </a>
                </motion.button>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
