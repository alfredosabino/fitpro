import { useState } from "react"
import { CalculadoraAgua } from "./Calculadoras"

export function CalculadoraIMC() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const altu = (altura * 0.01)
    const imc = (peso / (altu * altu)).toFixed(1)

    return (
        <div className="">
            <span className="text-2xl font-semibold flex justify-center">Calculadora IMC</span>
            <div className="flex mt-4">
                <form action="" className="flex flex-col justify-center w-full">
                    <legend>
                        Estatura:
                        <input
                            type="number"
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            placeholder="Sua Estatura"
                            onChange={event => setAltura(event.target.value)} />
                    </legend>
                    <legend className="mt-2">
                        Peso:
                        <input
                            type="number"
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            placeholder="Seu Peso"
                            onChange={event => setPeso(event.target.value)} />
                    </legend>
                </form>
            </div>
            <div className="flex items-center justify-between text-semibold uppercase mt-4">
                <span className="text-xl">
                    {imc <= '15.9' ? <span className="text-blue-700">Magreza grave</span>
                        : imc >= '16.0' && imc <= '16.9' ? <span className="text-blue-700">Magreza moderada</span>
                            : imc >= '17.0' && imc <= '18.4' ? <span className="text-blue-700">Magreza leve</span>
                                : imc >= '18.5' && imc <= '24.9' ? <span className="text-green-600">Saudável</span>
                                    : imc >= '25.0' && imc <= '29.9' ? <span className="text-yellow-600">Sobrepeso</span>
                                        : imc >= '30.0' && imc <= '34.9' ? <span className="text-orange-600">Obsesidade I</span>
                                            : imc >= '35' && imc <= '39.9' ? <span className="text-red-600">Obsesidade II</span>
                                                : imc >= '40' ? <span className="text-purple-600">Obesidade III</span> : <span></span>}
                </span>
                {imc ?
                    <div>
                        <span className="text-xl font-semibold">
                            {imc}
                        </span> <small className="font-base">IMC</small>
                    </div>
                    : <span></span>
                }
            </div>
        </div>
    )
}