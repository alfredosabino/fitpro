import { useState } from "react"

export function CalculadoraTMB() {
    const [atividade, setAtividade] = useState('')
    const [sexo, setSexo] = useState('')
    const [peso, setPeso] = useState('')
    const [estatura, setEstatura] = useState('')
    const [idade, setIdade] = useState('')
    const taxaAtividade = {
        sedentario: 1.2,
        levemente_ativo: 1.375,
        moderadamente_ativo: 1.55,
        altamente_ativo: 1.725,
        extremamente_ativo: 1.9
    }

    const taxaGenero = {
        masculino: {
            label: 'masculino',
            valtot: 66,
            valpeso: 13.7,
            valalt: 5,
            valid: 6.8
        },
        feminino: {
            label: 'feminino',
            valtot: 655,
            valpeso: 9.6,
            valalt: 1.8,
            valid: 4.7
        }
    }

    return (
        <div className="p-4">
            <span className="text-2xl font-semibold flex justify-center">
                Calculadora Taxa Metabólica Basal
            </span>
            <div className="flex mt-4">
                <form action="" className="flex flex-col justify-center items-center w-full ">
                    <div className="flex justify-between p-2">
                        <legend className="mr-2">
                            Genero:
                            <select
                                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                onChange={event => setSexo(event.target.value)}
                            >
                                <option value={taxaGenero.masculino.label}>Masculino</option>
                                <option value={taxaGenero.feminino.label}>Feminino</option>
                            </select>
                        </legend>
                        <legend className="ml-2">
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
                    </div>
                    <div className="flex justify-around p-2">
                        <legend className="mr-2">
                            Idade:
                            <input
                                type="number"
                                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                placeholder="Idade"
                                onChange={event => setIdade(event.target.value)}
                            />
                        </legend>
                        <legend className="ml-2">
                            Estatura:
                            <input
                                type="number"
                                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                placeholder="Estatura"
                                onChange={event => setEstatura(event.target.value)}
                            />
                        </legend>
                        <legend className="ml-2">
                            Peso:
                            <input
                                type="number"
                                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                placeholder="Peso"
                                onChange={event => setPeso(event.target.value)}
                            />
                        </legend>
                    </div>
                    <span className="pt-2 text-green-400 text-xl font-base">
                        Metabolismo basal:{' '}
                        {sexo === 'masculino' ? (atividade * (
                            taxaGenero.masculino.valtot + (
                                (taxaGenero.masculino.valpeso * peso)
                                + (
                                    (taxaGenero.masculino.valalt * estatura)
                                    - (taxaGenero.masculino.valid * idade)
                                )
                            )
                        )
                        ).toFixed(0) : 'feminino' ? (atividade * (
                            taxaGenero.feminino.valtot + (
                                (taxaGenero.feminino.valpeso * peso)
                                + (
                                    (taxaGenero.feminino.valalt * estatura)
                                    - (taxaGenero.feminino.valid * idade)
                                )
                            )
                        )
                        ).toFixed(0) : null}
                    </span>
                </form>
            </div>
        </div>
    )
}