import { IoIosStar } from "react-icons/io";
import { RiPokerDiamondsFill } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="flex flex-col items-center p-10 font-milesdane">
      <div className="flex flex-col items-center p-8 bg-bg-secondary text-text-primary border-3 border-border-gold-solid rounded-sm w-300 ">
        <p className=" flex items-center text-2xl mb-2 text-gold-hover">
          <IoIosStar size={15} className="mr-8" />
          CLUBE MASCULINO EXCLUSIVO
          <IoIosStar size={15} className="ml-8" />
        </p>
        <h1 className="text-5xl font-bold">ROYAL & HERITAGE</h1>
        <p className="text-2xl mt-2 text-gold-hover">
          BARBER CLUB & LOUNGE EST. 1974
        </p>
      </div>

      <div className="flex flex-col items-center m-8 p-8 bg-text-primary text-bg-primary border-3 border-border-gold-solid rounded-sm w-300 ">
        <h1 className="text-5xl mb-2 font-black">
          Um Refúgio de Distinção e Tradição
        </h1>
        <p className="text-2xl mb-4">
          Criado para homens de bom gosto que valorizam o ritual impecável. da
          barbearia artesanal. Atendimento exclusivo sob agendamento prévio,
          acompanhado dos mais finos destilados e charutos.
        </p>

        <button className="bg-bg-secondary text-text-secondary p-4 text-2xl font-black rounded-sm border-gold-primary hover:bg-gold-primary hover:text-text-primary">
          RESERVAR HORÁRIO DE MEMBRO
        </button>
      </div>

      <section className="mt-5">
        <h1 className="flex items-center text-5xl font-bold">
          <RiPokerDiamondsFill size={15} className="mr-2" />
          EXPERIÊNCIAS EXCLUSIVAS
          <RiPokerDiamondsFill size={15} className="ml-2" />
        </h1>

        <div className="flex items-center mt-8 gap-10">
          <div>
            <h1>ATENDIMENTO PRIVADO</h1>
          </div>

          <div>
            <h1>BAR DE MALTE</h1>
          </div>

          <div>
            <h1>VISAGISMO REAL</h1>
          </div>
        </div>

      </section>
    </section>
  );
}
