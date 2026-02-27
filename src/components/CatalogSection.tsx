import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Obra {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const obras: Obra[] = [
  {
    id: 2,
    title: "Os Estandartes e Pandeirolas",
    subtitle: "As Letras de Rezar e Guardar",
    image: "https://museubispodorosario.com/wp-content/uploads/2021/05/Eu-Preciso-Destas-Palavras.-Escrita-_-Desenhos-Geometricos-face1-1024x683.jpg",
    description:
      "Como quem teme que o vento do esquecimento apague a história, Bispo dava às palavras uma carne de linha. Bordava compêndios inteiros: nomes de conhecidos, senhoras, meninas e moças, coisas que viu na vida antes da cerca do hospício. Na lida dele, se o nome está costurado bem firme no pano cru, a memória não destrambelha mais.",
  },
  {
    id: 3,
    title: "A Nau do Derradeiro Resgate",
    subtitle: "O Catálogo do Existir",
    image: "https://museubispodorosario.com/wp-content/uploads/2021/02/02.jpg",
    description:
      "Homem de mar bravio antes de ser homem de clausura, Bispo sabia de cor a sina da água: para a travessia do grande dia, a salvação pedia embarcação valente. Feito de ripas refugadas, papelão e amarrações de linha, este veleiro não foi feito para mares de sal. Nestas minúcias de marinharia triste e assombrosa, ele aprontava a frota do Juízo Final. O oceano inteiro não cabia no quarto escuro do manicómio, mas o barco estava sempre a prumo, esperando o céu mandar abrir a porta.",
  },
  {
    id: 1,
    title: "O Carrossel",
    subtitle: "A Roda do Tempo Menino",
    image: "https://midias-publicas.enciclopedia.itaucultural.org.br/ntmnjgh42f4hkl9d87p7mmk27w5i",
    description:
      "Com as sobras parcas, arames torcidos a pulso e feitura teimosa, ele erguia brinquedos para o que parecia já não ter conserto. É no giro lento do carrossel que a dor esmaece, tonta, sem ter lugar certo onde se encostar. Bispo tentava devolver a alma ao chão de menino, onde a vida ainda era uma brincadeira a dar voltas sem destino.",
  },
  {
    id: 4,
    title: "Os Objetos Embrulhados",
    subtitle: "A Amarração do Fio de Padecimento",
    image: "https://museubispodorosario.com/wp-content/uploads/2021/05/Arco-e-Flecha-1024x942.jpg",
    description:
      "Sapato estragado, caneca sem brilho, pedaço de pau qualquer. O que no mundo não servia mais nem para lixo, ele amarrava. Desfiava a própria roupa de interno — aquele azul-tristeza de doente — e enrolava os objetos, um por um, apertado, miúdo. Ao amarrar cada tralha no fio do seu padecimento, ele purificava a coisa.",
  },
];

const CatalogSection = () => {
  const [selected, setSelected] = useState<Obra | null>(null);

  return (
    <section className="py-0">
      {/* Full-width immersive grid — 2 cols on desktop, tall images */}
      <div className="grid md:grid-cols-2">
        {obras.map((obra, i) => (
          <motion.button
            key={obra.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            onClick={() => setSelected(obra)}
            className="group relative overflow-hidden h-[60vh] md:h-[70vh] text-left cursor-pointer focus:outline-none"
          >
            <img
              src={obra.image}
              alt={obra.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)' }}>
                {obra.subtitle}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-light text-foreground leading-tight">
                {obra.title}
              </h3>
            </div>

            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-primary transition-all duration-700" />
          </motion.button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex bg-background/95 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full grid md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image — full height */}
              <div className="relative h-[40vh] md:h-full overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center px-8 md:px-16 py-12 md:py-24 overflow-y-auto">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-8 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors z-10"
                >
                  Fechar ✕
                </button>

                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-4">
                  {selected.subtitle}
                </p>
                <h3 className="font-display text-4xl md:text-6xl font-light text-foreground mb-8 leading-[0.95]">
                  {selected.title}
                </h3>
                <div className="line-separator w-full mb-8" />
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CatalogSection;
