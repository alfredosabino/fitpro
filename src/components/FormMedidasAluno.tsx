import { useState } from "react";

import { Card } from "./Card/Card";
import { TitleCard } from "./Card/TitleCard";

import { Calculadora3DobrasMasc, CalculadoraAgua, CalculadoraIMC, CalculadoraMacros, CalculadoraTMB, MassaMagra } from "./Calculator/Calculadoras";

export function FormMedidasAluno() {
    const [nome, setNome]: any = useState('')
    const [atividade, setAtividade]: any = useState('')
    const [sexo, setSexo]: any = useState('')
    const [peso, setPeso]: any = useState('')
    const [estatura, setEstatura]: any = useState('')
    const [idade, setIdade]: any = useState('')
    const [pescoco, setPescoco]: any = useState(0)
    const [abdominal, setAbdominal]: any = useState(0)

    return (
        <div className="flex w-full">
            <Card>
                <TitleCard title={"Formulário de Avaliação"} />
                <hr className="justify-start w-[40%]"/>
                <div className="mt-4 xl:flex lg:grid md:grid sm:grid xl:flex-0 lg:flex-0 justify-between">
                    <div className="lg:mr-2">
                        <div className="flex justify-center bg-gray-800 h-auto">
                            <form>
                                <div className="flex 2xl:flex-1 xl:flex-1 lg:flex-1 md:flex-col sm:flex-col ">
                                    <legend className="border-blue-700 border p-4 w-full rounded-xl mb-3">
                                        <span className="font-semibold text-lg">Dados Pessoais:</span>
                                        <div className="dadospessoais flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-evenly items-center">
                                            <legend className="w-full m-1">
                                                Nome:
                                                <input
                                                    type="text"
                                                    className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                                                    placeholder="Nome"
                                                    onChange={event => setNome(event.target.value)}
                                                />
                                            </legend>
                                            <legend className="w-full m-1">
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
                                            <legend className="w-full m-1">
                                                Idade:
                                                <div className="flex items-center">
                                                    <input
                                                        type="number"
                                                        className="p-2 rounded-l-lg w-full text-gray-800 font-base text-center"
                                                        placeholder="Idade"
                                                        onChange={event => setIdade(event.target.value)}
                                                    />
                                                    <span className="p-2 rounded-r-lg bg-blue-700 text-white">anos</span>
                                                </div>
                                            </legend>
                                        </div>
                                    </legend>

                                    <legend className="border-blue-700 border p-4 w-full rounded-xl">
                                        <span className="font-semibold text-lg">Medidas:</span>
                                        <div className="flex flex-wrap justify-evenly">
                                            <legend className="m-1">
                                                Altura:
                                                <div className="flex items-center">
                                                    <input
                                                        type="number"
                                                        className="p-2 rounded-l-lg w-full text-gray-800 font-base text-center"
                                                        placeholder="Estatura"
                                                        onChange={event => setEstatura(event.target.value)}
                                                    />
                                                    <span className="p-2 rounded-r-lg bg-blue-700 text-white">cm</span>
                                                </div>
                                            </legend>
                                            <legend className="m-1">
                                                Peso:
                                                <div className="flex items-center">
                                                    <input
                                                        type="number"
                                                        className="p-2 rounded-l-lg w-full text-gray-800 font-base text-center"
                                                        placeholder="Peso"
                                                        onChange={event => setPeso(event.target.value)}
                                                    />
                                                    <span className="p-2 rounded-r-lg bg-blue-700 text-white">kg</span>
                                                </div>
                                            </legend>
                                            <legend className="m-1">
                                                Abdominal:
                                                <div className="flex items-center">
                                                    <input
                                                        type="number"
                                                        className="p-2 rounded-l-lg w-full text-gray-800 font-base text-center"
                                                        placeholder="Abdominal"
                                                        onChange={event => setAbdominal(event.target.value)}
                                                    />
                                                    <span className="p-2 rounded-r-lg bg-blue-700 text-white">cm</span>
                                                </div>
                                            </legend>
                                        </div>
                                        <div className="flex flex-wrap justify-evenly mt-2">
                                            <legend className="m-1">
                                                Pescoço:
                                                <div className="flex items-center">
                                                    <input
                                                        type="number"
                                                        className="p-2 rounded-l-lg w-full text-gray-800 font-base text-center"
                                                        placeholder="Pescoço"
                                                        onChange={event => setPescoco(event.target.value)}
                                                    />
                                                    <span className="p-2 rounded-r-lg bg-blue-700 text-white">cm</span>
                                                </div>
                                            </legend>
                                            <legend className="m-1">
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
                                        </div>
                                    </legend>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg text-blue-900 xl:mt-0 lg::mt-0 md:mt-4 sm:mt-4">
                        <TitleCard title={"Situação Atual"} />
                        <div className="flex justify-between p-2 md:flex-nowrap sm:flex-nowrap flex-wrap">
                            <div className="flex flex-col text-xl font-semibold">
                                <div>
                                    <span>{nome}</span>
                                    <small>{idade ? `, ${idade} anos` : null}</small>
                                </div>
                                <div>
                                    <small>{sexo === 'male' ? 'Masculino' : sexo === 'female' ? 'Feminino' : null}</small>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-end text-right">
                                <span className="bg-gray-200 rounded-xl items-center flex flex-col p-2 mr-5">
                                    <small>Peso: </small>
                                    <span className="font-bold text-2xl">{peso ? `${peso} Kg` : null}{''}</span>
                                </span>
                                <span className="bg-gray-200 rounded-xl items-center flex flex-col p-2">
                                    <small>Estatura: </small>
                                    <span className="font-bold text-2xl">{estatura ? `${estatura} cm` : null} </span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-wrap sm:flex-wrap">
                            <div className="flex flex-1 gap-2 p-2 justify-around w-full md:flex-wrap sm:flex-wrap lg:flex-nowrap">
                                <div className="border-l-4 border-blue-400 bg-gray-200 w-full rounded-r-xl">
                                    <div className="flex justify-between p-2 sm:flex-wrap md:flex-wrap">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-semibold">Água</span>
                                            <small>Consumo médio de Água</small>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span>
                                                <span className="font-bold text-2xl">{CalculadoraAgua(peso).toFixed(0)} </span>
                                                ml
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-l-4 border-green-400 bg-gray-200 w-full ml-2 md:ml-0 sm:ml-0 rounded-r-xl">
                                    <div className="flex justify-between p-2">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-semibold">IMC</span>
                                            <small>Índice de Massa Corporal</small>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span>
                                                <span className="font-bold text-2xl">{CalculadoraIMC(estatura, peso).imc} IMC</span>
                                            </span>
                                            <span className="bg-green-50 rounded-lg text-center text-sm font-bold text-white p-1">{CalculadoraIMC(estatura, peso).imcdesc}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-l-4 border-red-400 bg-gray-200 w-full ml-2 md:ml-0 sm:ml-0 rounded-r-xl">
                                    <div className="flex justify-between p-2">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-semibold">TMB</span>
                                            <small>Taxa Metabólica Basal</small>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span>
                                                <span className="font-bold text-2xl">{CalculadoraTMB(sexo, idade, estatura, peso, atividade)?.toFixed(0)} </span>
                                                Kcal
                                            </span>
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
                                        <div className="flex flex-wrap justify-around bg-gray-200 rounded-xl border-2 border-blue-700 p-3 mt-4">
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
                                })
                                }
                            </div>

                            <span className="flex justify-center mt-5 w-full">
                                {`${Calculadora3DobrasMasc(pescoco, abdominal, estatura)}`
                                    ?
                                    <div className="flex justify-between w-full">
                                        <div className="flex justify-between items-center w-full mr-1 bg-blue-900 p-4 rounded-xl text-white">
                                            <div className="grid mr-4">
                                                <span className="text-xl font-bold">BF</span>
                                                <span className="text-sm font-normal">Body Fat</span>
                                            </div>
                                            <span className="text-3xl font-bold">
                                                ~{Calculadora3DobrasMasc(pescoco, abdominal, estatura)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center w-full ml-1 bg-blue-900 p-4 rounded-xl text-white">
                                            <span className="text-lg font-bold mr-4">Massa Magra</span>
                                            <span className="text-3xl font-bold">
                                                {MassaMagra(Calculadora3DobrasMasc(pescoco, abdominal, estatura), peso)}
                                                <span className="text-lg font-normal">Kg</span>
                                            </span>
                                        </div>
                                    </div>
                                    : 0}
                            </span>
                        </div>
                    </div >
                </div>
            </Card>
        </div>
    )
}