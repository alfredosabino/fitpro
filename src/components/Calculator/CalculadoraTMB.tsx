import { useState } from "react"

export function CalculadoraTMB() {
    const [nome, setNome]: any = useState('')
    const [atividade, setAtividade]: any = useState('')
    const [sexo, setSexo]: any = useState('')
    const [peso, setPeso]: any = useState('')
    const [estatura, setEstatura]: any = useState('')
    const [idade, setIdade]: any = useState('')
    const taxaAtividade: any = {
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
                <form action="" className="flex flex-col justify-center w-full ">
                    <legend>
                        Nome:
                        <input
                            type="text"
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            placeholder="Nome"
                            onChange={event => setNome(event.target.value)}
                        />
                    </legend>
                    <legend>
                        Genero:
                        <select
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            onChange={event => setSexo(event.target.value)}
                        >
                            <option>-</option>
                            <option value={taxaGenero.masculino.label}>Masculino</option>
                            <option value={taxaGenero.feminino.label}>Feminino</option>
                        </select>
                    </legend>
                    <legend>
                        Idade:
                        <input
                            type="number"
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            placeholder="Idade"
                            onChange={event => setIdade(event.target.value)}
                        />
                    </legend>
                    <legend>
                        Estatura:
                        <input
                            type="number"
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            placeholder="Estatura"
                            onChange={event => setEstatura(event.target.value)}
                        />
                    </legend>
                    <legend>
                        Peso:
                        <input
                            type="number"
                            className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                            placeholder="Peso"
                            onChange={event => setPeso(event.target.value)}
                        />
                    </legend>
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
                    <span className="mt-4 text-green-400 text-xl font-base flex justify-center">
                        Metabolismo Basal:{' '}
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
                        ).toFixed(0) : <span></span>}
                    </span>
                </form>
            </div>
        </div>
    )
}