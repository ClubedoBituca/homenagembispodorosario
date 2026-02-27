import { motion } from "framer-motion";

interface PillarProps {
  index: number;
  title: string;
  body: string;
  backgroundImage: string;
  accent?: boolean;
}

const PillarStripe = ({ index, title, body, backgroundImage, accent }: PillarProps) => (
  <div className="relative w-full group overflow-hidden">
    {/* Background image with overlays */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        imageRendering: 'crisp-edges'
      }}
    >
      <div className="absolute inset-0 bg-black/40 transition-colors duration-700 group-hover:bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 transition-opacity duration-700 group-hover:opacity-70" />
      <div className="absolute inset-0 bg-primary/8 transition-opacity duration-700 group-hover:bg-primary/15" />
    </div>

    {/* Content container */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="grid grid-cols-12 gap-6 items-center">
        {/* Text content - 7 columns on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 md:col-span-7"
        >
          <h3 className="font-display text-3xl md:text-4xl font-light text-white mb-6 leading-tight transition-all duration-500 group-hover:text-primary group-hover:translate-x-2">
            {title}
          </h3>
          <p className="font-body text-sm md:text-base text-white/80 leading-relaxed transition-all duration-500 group-hover:text-white">
            {body}
          </p>
        </motion.div>

        {/* Number - 5 columns on desktop, aligned right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-12 md:col-span-5 flex justify-end"
        >
          <span className={`font-display text-7xl md:text-8xl lg:text-9xl font-light transition-all duration-500 group-hover:scale-110 text-primary/15 group-hover:text-primary/25`}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>
      </div>
    </div>

    {/* Divider */}
    {index < 2 && <div className="h-px bg-white/10" />}
  </div>
);

const pillars: PillarProps[] = [
  {
    index: 0,
    title: "O Rebotalho e o Sagrado",
    body: "Caneca velha, sapato sem par, colher de alumínio, madeira gasta. O que o povo enjeitava, as sobras caídas ao rés-do-chão, ele ajuntava com reverência de santo. Santificava o rebotalho. A pobreza miúda do manicômio virava, nas mãos dele, o luxo e a ordem do universo.",
    backgroundImage: "https://acervo.oglobo.globo.com/incoming/23784116-ed4-697/imagemHorizontalFotogaleria/33153950_Rio-de-Janeiro-RJ-29-09-1982Arthur-Bispo-do-Rosario-Artista-PlasticoPintor-e-pacient-1.jpg",
  },
  {
    index: 1,
    title: "O Fio da Paciência",
    body: "Para ter com o que bordar, ele desmanchava a roupa do próprio corpo. Fio a fio, o azul da tristeza asilar virava linha de coser o tempo. Uma lida miúda, de desfiar a opressão para alinhavar a eternidade, provando que a alma, mesmo presa, acha fresta para voar.",
    backgroundImage: "https://acervo.oglobo.globo.com/incoming/23784088-1ea-03d/imagemHorizontalFotogaleria/38983215_0504.1989Lucio-MarreiroAGExclusivaArthur-Bispo-do-Rosario.jpg",
    accent: true,
  },
  {
    index: 2,
    title: "A Cantiga dos Nomes",
    body: "Como quem entoa uma cantiga que a razão não alcança, Bispo bordava palavras. Nomes de gentes, listas de coisas de valia, lembranças da infância em Sergipe. Era um jeito de abraçar o mundo com as letras. Uma reza bordada, para não deixar viva alma esquecida na hora de se apresentar a Deus.",
    backgroundImage: "https://35.bienal.org.br/wp-content/uploads/sites/2/2023/06/arthur-bispo-do-rosario-4-scaled.jpg",
  },
];

const PillarsSection = () => {
  return (
    <section className="relative">
      {/* Header background - separate from first stripe */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-top"
          style={{ 
            backgroundImage: `url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3ndW6w3n-u6_legZxJS15pLItwA7dLy-vQ6Fi5uXmQyMVCSC6I2FIrxUh8VJ04-a6ESwNffmFPASIcuLYoI9li_Hrys-GjB-CGF1CBepdplxgXsRZfjniiMH33I9hV7rjstF98NZH_TA/s1600/304095-970x600-1.jpeg)`,
            imageRendering: 'crisp-edges',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-primary/8" />
        </div>

        {/* Section header */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-16 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[0.3em] uppercase text-white"
          >
            Os Pilares da Lida
          </motion.h2>
          <div className="h-px bg-white/10 mt-8 max-w-md mx-auto" />
        </div>
      </div>

      {/* Full-bleed stripes */}
      <div className="relative">
        {pillars.map((pillar) => (
          <PillarStripe key={pillar.index} {...pillar} />
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;
