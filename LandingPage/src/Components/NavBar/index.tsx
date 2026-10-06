import { BsFillSuitSpadeFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <section className="items-center ml-10 mr-10 text-text-primary">
      <div className="flex items-center justify-between mt-10 bg-bg-secondary rounded-sm p-4">
        <a href="" className="flex items-center ml-2 font-medium gap-2 text-gold-primary hover:motion-preset-wobble  ">
          <BsFillSuitSpadeFill size={15}/>
          GENTLEMAN'S CLUB
        </a>

        <nav className="flex items-center gap-10">
          <a href="" className=" hover:motion-preset-seesaw ">Serviços</a>
          <a href="" className=" hover:motion-preset-seesaw ">Membership</a>
          <a href="" className="hover:motion-preset-seesaw bg-gold-primary rounded-sm p-2">Agendar</a>
          
        </nav>

      </div>
    </section>
  )
}
