'use client'
import Link from "next/link";
import  Image from "next/image";
import PlaceImg from "../../public/placeholder-img.png"
import { ChangeEvent, useEffect, useState } from "react";
import { ChevronsUp, UserRound, X } from "lucide-react";

interface UserProps {
  name: string;
  cpf: string;
  phone: string;
  insurance: string;
}

export default function Home() {
const [specialty, setSpecialty] = useState("");
const [professional, setProfessional] = useState("");
const [date, setDate] = useState("");
const [name, setName] = useState(""); 
const [cpf, setCpf] = useState("");
const [phone, setPhone] = useState("");
const [insurance, setInsurance] = useState("");
const [user,setUser] = useState<UserProps>({name:"", cpf:"", phone:"", insurance:""});
const [show, setShow] = useState(false)
const [modal, setModal] = useState(false)

const specialties = [
  { id: 1, name: "Ortodontia" },
  { id: 2, name: "Endodontia" },
  { id: 3, name: "Periodontia" }
];

const professionals = [
  { id: 1, name: "Dr. João Silva", specialty: "Ortodontia" },
  { id: 2, name: "Dra. Maria Oliveira", specialty: "Endodontia" },
  { id: 3, name: "Dr. Carlos Souza", specialty: "Periodontia" },
  { id: 4, name: "Dra. Ana Costa", specialty: "Ortodontia" },
  { id: 5, name: "Dr. Pedro Lima", specialty: "Endodontia" },
  { id: 6, name: "Dra. Fernanda Rocha", specialty: "Periodontia" },
  { id: 7, name: "Dr. Lucas Pereira", specialty: "Ortodontia" },
  { id: 8, name: "Dra. Juliana Fernandes", specialty: "Endodontia" },
  { id: 9, name: "Dr. Rafael Gomes", specialty: "Periodontia" },
];

const handleUserSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setUser({name, cpf, phone, insurance});
}

const scrollTop = () => {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 }) 
}

useEffect(() => {
  const handleScroll = () => {
    const halfViewportHeight = window.innerHeight / 2;

    if (window.scrollY > halfViewportHeight) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="font-sans bg-linear-to-r from-zinc-200 via-zinc-50 to-zinc-300 min-h-screen relative">
      <header className="w-full py-3 px-10 shadow-lg flex justify-between items-center bg-zinc-50">
        <h1 className="text-3xl font-bold">Odonto</h1>
        <nav className="flex gap-5 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/#profissionais">Profissionais</Link>
          <Link href="/#agendamento">Agendamento</Link>
          <Link href="/agendamento">Acompanhar Agendamento</Link>
          <button 
            onClick={() => setModal(!modal)}
            className="flex items-center justify-center p-1 ml-5 border border-zinc-300 shadow-lg rounded-full hover:border-zinc-500 cursor-pointer">
              <UserRound />
          </button>
        </nav>
      </header>

      <div className={`w-96 min-h-3/12 bg-blue-50 rounded-lg z-50 fixed ${modal ? 'right-0.5' : '-right-full'} top-12 shadow-2xl p-5 transition-all duration-300 ease-linear`}>
        <button 
          onClick={() => setModal(!modal)}
          className="rounded-full shadow-lg bg-white border border-white p-1 cursor-pointer hover:bg-zinc-100 hover:border-blue-500 absolute right-2 top-2"  
        ><X color="blue"/></button>
        <h3 className="text-center font-black text-2xl text-blue-500">Login</h3>
        <form className="w-full py-10 flex flex-col gap-5">
          <div>
            <label className="block mb-1">E-mail:</label>
            <input type="email" name="email" id="email" className="shadow-xl w-full rounded-lg bg-zinc-100 p-3 focus:outline-blue-200"/>
          </div>

          <div>
            <label>Senha:</label>
            <input type="password" name="password" id="password" className="shadow-xl w-full rounded-lg bg-zinc-100 p-3 focus:outline-blue-200"/>
          </div>
          <input 
            type="submit" 
            value="Entrar" 
            className="w-full bg-amber-500 border-2 border-amber-500 text-white font-bold p-5 rounded-lg mt-10 cursor-pointer hover:bg-transparent hover:text-amber-500"/>
          <span className="text-xs text-center">Solicite acesso <Link href={'mailto:email@email.com'} className="text-blue-500">aqui!</Link></span>
        </form>
      </div>

      {/* Button scroll top */}
     {show &&  <button 
      className="w-10 h-10 flex items-center justify-center bg-blue-300 rounded-full fixed right-5 bottom-5 border-2 border-blue-300 hover:bg-transparent cursor-pointer transition-all duration-500" 
      onClick={scrollTop}
      >
        <ChevronsUp color="blue"/>
      </button>}

      <main className="py-10 my-10 mx-auto">
        <section className="max-w-7xl p-10 m-auto">
          <div className="flex gap-1">
          <Image src={PlaceImg} alt="Placeholder Image" width={600} height={400} />
          <div className="p-5">
            <h2 className="text-4xl font-bold mb-4">Welcome to Odonto</h2>
            <p className="text-lg leading-8">Your comprehensive solution for managing dental clinic operations efficiently.</p>
            <p className="text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cupiditate? Numquam ipsa dolore aperiam libero ipsam sapiente obcaecati expedita aliquam minus hic doloribus mollitia eaque, repellendus, veritatis non commodi amet quos minima quis exercitationem distinctio dolor velit?</p>
          </div>
          </div>
        </section>

        <div className="w-full bg-zinc-50 py-10">
          <section id="profissionais" className="max-w-7xl p-10 mb-10 mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Nossos Profissionais</h2>
              <p className="text-lg leading-8 text-center">Detalhes dos profissionais serão exibidos aqui.</p>
            <div className="flex gap-5 mt-10 justify-center">
              {professionals.map((pro, i) => 
              <div key={i} className="w-42 h-42 text-center">
                <Image src={PlaceImg} alt="Placeholder Image" width={150} height={150} />
                <p className="text-md mt-3 font-bold">{pro.name}</p>
                <span className="text-xs font-light">{pro.specialty}</span>
              </div>
            )}
            </div>
          </section>
        </div>

        {/* FORMULÀRIOS */}
        <section id="agendamento" className="max-w-7xl p-10 my-10 mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Agendamento</h2>
          <p className="text-lg leading-8 text-center">Informações sobre agendamentos serão exibidas aqui.</p>

          <div className="flex gap-5 justify-around py-10">
            {/* Especialidade */}
            <form className="w-full shadow-lg p-5 rounded flex flex-col justify-between">
              <div className="flex flex-col">
                <div>
                  <label className="block mb-2">Especialidade</label>
                  <select className="w-full p-2 border border-gray-300 rounded mb-4" 
                  onChange={(e:ChangeEvent<HTMLSelectElement>) => setSpecialty(e.target.value)}>
                    <option>Selecione uma especialidade</option>
                    {specialties.map((spec, i) => <option key={i} value={spec.name}>{spec.name}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Profissional</label>
                  <select className={`w-full p-2 border border-gray-300 rounded mb-4 ${!specialty ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={!specialty}
                    onChange={(e:ChangeEvent<HTMLSelectElement>) => setProfessional(e.target.value)}>
                    <option>Selecione um profissional</option>
                    {
                    specialty && professionals
                      .filter(pro => pro.specialty === specialty)
                      .map((pro, i) => <option key={i} value={pro.name}>{pro.name}</option>)
                    }
                  </select>
                </div>

                <div>
                    <label>Data</label>
                    <input 
                      type="date" 
                      className={`w-full p-2 border border-gray-300 rounded mb-4 ${!professional ? 'opacity-50 cursor-not-allowed' : ''}`} 
                      disabled={!professional}
                      onChange={(e:ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                     />
                </div>
              </div>

              <input 
                type="submit" 
                value="Agendar" 
                className={`bg-blue-500 w-full text-white px-4 py-2 mb-5 rounded cursor-pointer hover:bg-blue-600 ${!date ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!date}
              />
            </form>

              {/* Formulário cadastro de usuário */}
            <form onSubmit={handleUserSubmit} className={`shadow-lg p-5 w-full ${!specialty ? 'opacity-50 cursor-not-allowed blur-xs' : ''}`}>
              <div>
                <label className="block mb-2">Nome</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2">CPF</label>
                <input 
                  type="text" 
                  name="cpf" 
                  id="cpf" 
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2">Telefone</label>
                <input 
                  type="text" 
                  name="phone" 
                  id="phone" 
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2">Convênio</label>
                <input 
                  type="text" 
                  name="insurance" 
                  id="insurance" 
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setInsurance(e.target.value)}
                />
              </div>

              <input type="submit" value="Salvar" className="bg-blue-500 text-white w-full px-4 py-2 mb-5 rounded cursor-pointer hover:bg-blue-600"/>
            </form>

            {/* Mostrar dados do agendamento */}
            <div className={`w-full shadow-lg p-5 rounded-lg ${!user.insurance ? 'opacity-50 cursor-not-allowed blur-xs' : ''}`}>
              <h3 className="text-xl font-bold mb-4">Resumo do Agendamento</h3>
              <p className="text-lg leading-8">Especialidade: {specialty || 'N/A'}</p>
              <p className="text-lg leading-8">Profissional: {professional || 'N/A'}</p>
              <p className="text-lg leading-8">Horário: {date || 'N/A'}</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="w-full py-5 px-10 bg-zinc-50 text-center">
          <p className="text-sm text-blue-500">&copy; 2026 Odonto. Todos direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
