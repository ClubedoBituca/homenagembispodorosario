import { motion } from "framer-motion";
import { useState } from "react";

interface MantoFlipProps {
  frontSrc: string;
  backSrc: string;
  frontDescription?: string;
  backDescription?: string;
}

const MantoFlip = ({ frontSrc, backSrc, frontDescription, backDescription }: MantoFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="relative h-[80vh] md:h-screen overflow-hidden cursor-pointer group"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver ${isFlipped ? 'frente' : 'verso'} do manto`}
    >
      {/* Front image with text overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center"
        style={{
          opacity: isFlipped ? 0 : 1,
          willChange: 'opacity',
          backgroundColor: '#f5f5f5'
        }}
      >
        <img
          src={frontSrc}
          alt="Manto da Apresentação - Frente"
          className="max-w-full max-h-full object-contain"
        />
        {/* Front text overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-end pointer-events-none"
        >
          <div className="px-8 md:px-16 max-w-md mr-0 md:mr-8">
            {frontDescription && (
              <p className="font-display text-base md:text-lg leading-relaxed text-right text-gradient-sacred" style={{ WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.5)' }}>
                {frontDescription}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Back image with text overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center"
        style={{
          opacity: isFlipped ? 1 : 0,
          willChange: 'opacity',
          backgroundColor: '#f5f5f5'
        }}
      >
        <img
          src={backSrc}
          alt="Manto da Apresentação - Verso"
          className="max-w-full max-h-full object-contain"
          style={{ transform: 'scale(1.1)' }}
        />
        {/* Back text overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-end pointer-events-none"
        >
          <div className="px-8 md:px-16 max-w-md mr-0 md:mr-8">
            {backDescription && (
              <p className="font-display text-base md:text-lg leading-relaxed text-right text-gradient-sacred" style={{ WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.5)' }}>
                {backDescription}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent pointer-events-none" />

      {/* Title over image */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 md:pb-24 pointer-events-none">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-sm md:text-base tracking-[0.4em] uppercase text-primary mb-4"
        >
          A Obra-Prima
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.9]"
        >
          O Manto da
          <br />
          <span className="italic text-gradient-sacred">Apresentação</span>
        </motion.h3>
      </div>

      {/* Hint text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-8 right-8 pointer-events-none"
      >
        <p className="font-body text-xs text-white/60 tracking-wide">
          {isFlipped ? 'Clique para voltar' : 'Clique para ler mais'}
        </p>
      </motion.div>
    </div>
  );
};

const MantoSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed manto image with flip */}
      <MantoFlip
        frontSrc="/Manto frente.png"
        backSrc="/Manto verso.png"
        frontDescription="No miolo de sua obra colossal repousa o Manto da Apresentação. Feito e refeito ao longo dos anos-muitos, era a roupa lavrada para a hora do encontro com o Criador. Não é só pano e linha; é a vida inteira ali tecida. O nome dos seus, a história de marinheiro, o peso de ser vivo. A gente olha para o manto e entende, feito o povo de Sorôco vendo o trem partir: a dor, quando é grande e não cabe na palavra, vira beleza de espantar."
        backDescription="De fora, quem vê o pano lavado de escritos e enfeites, pasma. Mas é no avesso, roçando o calor da pele, que o segredo faz morada. Bispo bordou os nomes de todos aqueles que queria levar consigo no dia do acerto final com Deus. Cada ponto dado não era enfeite, era corda de salvamento. O Manto pesa, feito o fardo de quem resolve carregar o destino inteiro de um povo nas próprias costas para atravessar o fim dos tempos."
      />
    </section>
  );
};

export default MantoSection;
