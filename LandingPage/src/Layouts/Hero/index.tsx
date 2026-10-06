import { IoIosStar } from "react-icons/io";

export default function Hero() {
  return (
    <section className="flex flex-col items-center p-10 font-milesdane">
      <div className="flex flex-col items-center p-8 bg-bg-secondary text-text-primary border-6 border-gold-primary rounded-sm w-300 ">
        <p className=" flex items-center text-2xl mb-2 text-gold-hover">
          <IoIosStar size={15} className="mr-8" />
          CLUBE MASCULINO EXCLUSIVO
          <IoIosStar size={15} className="ml-8" />
        </p>
        <h1 className="text-5xl font-bold">ROYAL & HERITAGE</h1>
        <p className="text-2xl mt-2 text-gold-hover">
          BARBER CLUB & LOUNGE EST 1974
        </p>
      </div>

      <div className="flex flex-col items-center m-8 p-8 bg-[#ffff] text-bg-primary border-6 border-gold-primary rounded-sm w-300 ">
        <h1 className="text-5xl mb-2">Um Refúgio de Distinção e Tradição</h1>
        <p className="text-2xl mb-4">
          Criado para homens de bom gosto que valorizam o ritual impecável. da
          barbearia artesanal. Atendimento exclusivo sob agendamento prévio,
          acompanhado dos mais finos destilados e charutos.
        </p>

        <button className="bg-bg-secondary text-text-secondary p-4 text-2xl font-black rounded-sm border-3 border-gold-primary hover:bg-gold-primary hover:text-text-primary">RESERVAR HORÁRIO DE MEMBRO</button>
      </div>
    </section>
  );
}
