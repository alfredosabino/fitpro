import { useState } from "react"

export function CalculadoraTMB() {
    const [atividade, setAtividade] = useState('')
    const [sexo, setSexo] = useState('')
    const [peso, setPeso] = useState('')
    const [estatura, setEstatura] = useState('')
    const [idade, setIdade] = useState('')

    const taxaAtividade =
    {
        sedentario: 1.2,
        levemente_ativo: 1.375,
        moderadamente_ativo: 1.55,
        altamente_ativo: 1.725,
        extremamente_ativo: 1.9
    }

    const taxaGenero = {
        masculino: {
            valtot: 66,
            valpeso: 13.7,
            valalt: 5,
            valid: 6.8
        },
        feminino: {
            valtot: 655,
            valpeso: 9.6,
            valalt: 1.8,
            valid: 4.7
        }
    }

    const calcPeso = 13.7 * peso
    const calcAlt = 5 * estatura
    const calcIdade = 6.8 * idade
    const tmb = (atividade * (66 + (calcPeso + (calcAlt - calcIdade)))).toFixed(0)
    console.log(atividade)

    return (
        <div className="p-4">
            <span className="text-2xl font-semibold flex justify-center">
                Calculadora Taxa Metabólica Basal
            </span>
            <div className="flex mt-4">
                <form action="" className="flex flex-col justify-center items-center w-full ">
                    <legend>
                        Nivel de Atividade:
                        <select
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            onChange={event => setAtividade(event.target.value)}
                        >
                            <option value={taxaAtividade.sedentario}>Sedentário</option>
                            <option value={taxaAtividade.levemente_ativo}>Levemente ativo</option>
                            <option value={taxaAtividade.moderadamente_ativo}>Moderadamente ativo</option>
                            <option value={taxaAtividade.altamente_ativo}>Altamente ativo</option>
                            <option value={taxaAtividade.extremamente_ativo}>Extremamente ativo</option>
                        </select>
                    </legend>
                    <div className="flex justify-around p-2">
                        <legend className="mr-2">
                            Sua Idade:
                            <input
                                type="number"
                                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                placeholder="Idade"
                                onChange={event => setIdade(event.target.value)}
                            />
                        </legend>
                        <legend className="ml-2">
                            Seu Estatura:
                            <input
                                type="number"
                                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                placeholder="Estatura"
                                onChange={event => setEstatura(event.target.value)}
                            />
                        </legend>
                        <legend className="ml-2">
                            Seu Peso:
                            <input
                                type="number"
                                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                placeholder="Peso"
                                onChange={event => setPeso(event.target.value)}
                            />
                        </legend>
                    </div>
                    <span className="pt-2 text-green-400 text-xl font-base">
                        {tmb >= '100' ? `Taxa Metabólica Basal estimada: ${tmb} Kcal` : null}
                    </span>
                </form>
            </div>
        </div>
    )
}