import { useState } from "react";

import { Card } from "./Card/Card";
import { TitleCard } from "./Card/TitleCard";

import { CalculadoraAgua, CalculadoraIMC, CalculadoraTMB } from "./Calculadoras";

export function FormMedidasAluno() {
    const [nome, setNome] = useState('')
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
            label: 'masculino'
        },
        feminino: {
            label: 'feminino'
        }
    }

    return (
        <div className="flex w-full">
            <Card>
                <TitleCard title={"Avaliação"} />
                <div className="flex justify-center">
                    <form className="grid item-center w-full">
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
                                <option value='male'>Masculino</option>
                                <option value='female'>Feminino</option>
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
                                <option>-</option>
                                <option value='sedentario'>Sedentário</option>
                                <option value='levemente_ativo'>Levemente ativo</option>
                                <option value='moderadamente_ativo'>Moderadamente ativo</option>
                                <option value='altamente_ativo'>Altamente ativo</option>
                                <option value='extremamente_ativo'>Extremamente ativo</option>
                            </select>
                        </legend>
                    </form>
                </div>
            </Card>

            <Card>
                <TitleCard title={"Situação Atual"} />
                <div className="flex justify-between p-2">
                    <div className="flex flex-col text-xl font-semibold">
                        <span>{nome}</span>
                        <div>
                            <small>{sexo == 'male' ? 'Masculino' : sexo == 'female' ? 'Feminino' : null}</small>
                            <small>{idade ? `, ${idade} anos` : null}</small>
                        </div>
                    </div>
                    <div className="flex flex-col text-right">
                        <span>
                            <small>Peso: </small>
                            <span className="font-bold text-2xl">{peso ? `${peso} Kg` : null}{''}</span>
                        </span>
                        <span>
                            <small>Estatura: </small>
                            <span className="font-bold text-2xl">{estatura ? `${estatura} cm` : null} </span>
                        </span>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col gap-2 p-2 justify-around w-full">
                        <div className="border-l-4 border-blue-400 bg-gray-800 h-full">
                            <div className="flex justify-between p-2">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-semibold">Água</span>
                                    <small>Consumo médio de Água</small>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span><span className="font-bold text-2xl">{CalculadoraAgua(peso)} </span>ml</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-l-4 border-green-400 bg-gray-800">
                            <div className="flex justify-between p-2">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-semibold">IMC</span>
                                    <small>Índice de Massa Corporal</small>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span>
                                        <span className="font-bold text-2xl">{CalculadoraIMC(estatura, peso).imc} IMC</span>
                                    </span>
                                    <span className="bg-green-200 rounded-lg text-center font-bold text-white p-1">{CalculadoraIMC(estatura, peso).imcdesc}</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-l-4 border-red-400 bg-gray-800">
                            <div className="flex justify-between p-2">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-semibold">TMB</span>
                                    <small>Taxa Metabólica Basal</small>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span><span className="font-bold text-2xl">{CalculadoraTMB(sexo, idade, estatura, peso, atividade)?.toFixed(0)} </span>Kcal</span>
                                    <span className="bg-red-400 rounded-lg text-center font-bold text-white p-1">
                                        {atividade === 'sedentario' ? 'Sedentário'
                                            : atividade === 'levemente_ativo' ? 'Levemente Ativo'
                                                : atividade === 'moderadamente_ativo' ? 'Levemente Ativo'
                                                    : atividade === 'altamente_ativo' ? 'Levemente Ativo'
                                                        : atividade === 'extremamente_ativo' ? 'Levemente Ativo'
                                                            : null}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card >
        </div>
    )
}