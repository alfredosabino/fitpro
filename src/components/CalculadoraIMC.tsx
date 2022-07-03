import { useState } from "react"

export function CalculadoraIMC() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const alt = parseFloat(altura) * parseFloat(altura)
    const imc = (parseFloat(peso) / alt).toFixed(1)

    return (
        <div className="p-4">
            <span className="text-2xl font-semibold flex justify-center">Calculadora IMC</span>
            <div className="flex mt-4">
                <form action="" className="flex justify-center items-center w-full">
                    <legend className="mr-2">
                        Estatura:
                        <input
                            type="number"
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            placeholder="Sua Estatura"
                            onChange={event => setAltura(event.target.value)} />
                    </legend>
                    <legend className="ml-2">
                        Peso:
                        <input
                            type="number"
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            placeholder="Seu Peso"
                            onChange={event => setPeso(event.target.value)} />
                    </legend>
                </form>
            </div>
            <div className="flex items-center justify-between text-semibold uppercase pt-4">
                <span className="text-xl">
                    {imc <= '18.5' ? <span className="text-blue-700">Abaixo do Peso</span>
                        : imc >= '18.6' && imc <= '24.9' ? <span className="text-green-600">Peso Normal</span>
                            : imc >= '25' && imc <= '29.9' ? <span className="text-yellow-600">Sobrepeso</span>
                                : imc >= '30' && imc <= '34.9' ? <span className="text-orange-600">Obsesidade I</span>
                                    : imc >= '35' && imc <= '39.9' ? <span className="text-red-600">Obsesidade II</span>
                                        : imc >= '40' ? <span className="text-purple-600">Obesidade III</span> : null}
                </span>
                <span className="text-xl">{imc ? `IMC: ${imc} ` : <span></span>}</span>
            </div>
        </div>
    )
}