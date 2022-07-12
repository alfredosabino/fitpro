import { useState } from "react";

import { Card } from "./Card/Card";
import { TitleCard } from "./Card/TitleCard";

import { CalculadoraAgua, CalculadoraIMC, CalculadoraMacros, CalculadoraTMB } from "./Calculator/Calculadoras";

export function FormMedidasAluno() {
    const [nome, setNome]: any = useState('')
    const [biotipo, setBiotipo]: any = useState('')
    const [atividade, setAtividade]: any = useState('')
    const [sexo, setSexo]: any = useState('')
    const [peso, setPeso]: any = useState('')
    const [estatura, setEstatura]: any = useState('')
    const [idade, setIdade]: any = useState('')

    return (
        <div className="grid w-full md:inline-grid">
            <Card>
                <TitleCard title={"Formulário de Avaliação"} />
                <div className="flex justify-center p-5 bg-gray-800 border-2 border-blue-700 rounded-xl h-full">
                    <form className="flex justify-center item-center w-full">
                        <legend>
                            Nome:
                            <input
                                type="text"
                                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                placeholder="Nome"
                                onChange={event => setNome(event.target.value)}
                            />
                        </legend>
                        <div className="flex flex-1 items-center">
                            <legend className="w-full ml-2 mr-2">
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
                            <legend className="w-full ml-2 mr-2">
                                Biotipo:
                                <select
                                    className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                    onChange={event => setBiotipo(event.target.value)}
                                >
                                    <option>-</option>
                                    <option value='ecto'>Ectomorfo</option>
                                    <option value='meso'>Mesomorfo</option>
                                    <option value='endo'>Endomorfo</option>
                                </select>
                            </legend>
                        </div>
                        <div className="flex flex-1">
                            <legend className="w-full ml-2 mr-2">
                                Idade:
                                <input
                                    type="number"
                                    className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                    placeholder="Idade"
                                    onChange={event => setIdade(event.target.value)}
                                />
                            </legend>
                            <legend className="w-full mr-2 ml-2">
                                Estatura:
                                <input
                                    type="number"
                                    className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                    placeholder="Estatura"
                                    onChange={event => setEstatura(event.target.value)}
                                />
                            </legend>
                            <legend className="w-full ml-2 mr-2">
                                Peso:
                                <input
                                    type="number"
                                    className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                    placeholder="Peso"
                                    onChange={event => setPeso(event.target.value)}
                                />
                            </legend>
                        </div>
                        <legend className="ml-2 items-center">
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
                        <div>
                            <span>{nome}</span>
                            <small>{idade ? `, ${idade} anos` : null}</small>
                        </div>
                        <div>
                            <small>{sexo === 'male' ? 'Masculino' : sexo === 'female' ? 'Feminino' : null}</small>
                            <small>{biotipo === 'ecto' ? ', Ectomorfo' : biotipo === 'meso' ? ', Mesomorfo' : biotipo == 'endo' ? ', Endomorfo' : null}</small>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end text-right">
                        <span className="bg-blue-900 rounded-xl items-center flex flex-col p-2 mr-5">
                            <small>Peso: </small>
                            <span className="font-bold text-2xl">{peso ? `${peso} Kg` : null}{''}</span>
                        </span>
                        <span className="bg-blue-900 rounded-xl items-center flex flex-col p-2">
                            <small>Estatura: </small>
                            <span className="font-bold text-2xl">{estatura ? `${estatura} cm` : null} </span>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-1 gap-2 p-2 justify-around w-full">
                        <div className="border-l-4 border-blue-400 bg-gray-800 w-full">
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
                        <div className="border-l-4 border-green-400 bg-gray-800 w-full ml-2">
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
                        <div className="border-l-4 border-red-400 bg-gray-800 w-full ml-2">
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
                                                : atividade === 'moderadamente_ativo' ? 'Moderadamente Ativo'
                                                    : atividade === 'altamente_ativo' ? 'Altamente Ativo'
                                                        : atividade === 'extremamente_ativo' ? 'Extremamente Ativo'
                                                            : null}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {CalculadoraMacros(
                            CalculadoraTMB(sexo, idade, estatura, peso, atividade)
                        ).map(Macros => {
                            return (
                                <div className="flex justify-around bg-gray-800 rounded-xl border-2 border-blue-700 p-3 mt-4">
                                    <div className="flex flex-col items-center">
                                        <span className="font-semibold">Carboidratos</span>
                                        <span className="font-bold text-3xl">{Macros.macroCarboidrato?.toFixed(0)}g</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="font-semibold">Proteinas</span>
                                        <span className="font-bold text-3xl">{Macros.macroProteico?.toFixed(0)}g</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="font-semibold">Gorduras</span>
                                        <span className="font-bold text-3xl">{Macros.macroGordura?.toFixed(0)}g</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Card >
        </div>
    )
}