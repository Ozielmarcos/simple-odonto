'use client'
import Link from "next/link";
import  Image from "next/image";
import PlaceImg from "../../public/placeholder-img.png"
import { ChangeEvent, useState } from "react";

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

  return (
    <div className="font-sans bg-linear-to-r from-zinc-200 via-zinc-50 to-zinc-300 min-h-screen scroll-smooth">
      <header className="w-full py-3 px-10 shadow-lg flex justify-between items-center bg-zinc-50">
        <h1 className="text-3xl font-bold">Odonto</h1>
        <nav className="flex gap-5 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/#profissionais">Profissionais</Link>
          <Link href="/#agendamento" className="scroll-smooth">Agendamento</Link>
          <Link href="/agendamento">Acompanhar Agendamento</Link>
        </nav>
      </header>

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

        <section id="agendamento" className="max-w-7xl p-10 my-10 mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Agendamento</h2>
          <p className="text-lg leading-8 text-center">Informações sobre agendamentos serão exibidas aqui.</p>

          <div className="flex gap-5 justify-around py-10">
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

            <form onSubmit={handleUserSubmit} className="shadow-lg p-5 w-full">
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

            <div className="w-full shadow-lg p-5 rounded-lg">
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
