'use client'

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function LoginModal() {
    const [modal, setModal] = useState(false)
    return (
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
    )
    
}