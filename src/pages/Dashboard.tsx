import { Content } from '../components/Layouts/Content/Content'
import { Card } from '../components/Card/Card'
import { TitleCard } from '../components/Card/TitleCard'

import { FormMedidasAluno } from '../components/FormMedidasAluno'
import { CalculadoraIMC } from '../components/CalculadoraIMC'
import { CalculadoraTMB } from '../components/CalculadoraTMB'

export function Dashboard() {
    return (
        <Content>
                <h1 className="text-2xl font-semibold text-green-300 uppercase mb-3">Dashboard</h1>
                <div className="flex flex-1">
                    <FormMedidasAluno />
                    <Card>
                        <TitleCard title={"Situação Atual"} />
                        <div className="flex justify-between p-2">
                            <div className="flex flex-col text-xl font-semibold">
                                <span>Nome Aluno</span>
                                <small>Sexo, 22 anos</small>
                            </div>
                            <div className="flex flex-col text-right">
                                <span><span className="font-bold text-2xl">92,5 </span>Kg</span>
                                <span><span className="font-bold text-2xl">1,75 </span>m</span>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex flex-col gap-2 p-2 justify-around w-full">
                                <div className="border-l-4 border-blue-400 bg-gray-800 h-full">
                                    <div className="flex justify-between p-2">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-semibold">IMC</span>
                                            <small>Índice de Massa Corporal</small>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span><span className="font-bold text-2xl">88.2 </span>IMC</span>
                                            <span className="bg-blue-400 rounded-lg text-center font-bold text-white">Obesidade</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-l-4 border-red-400 bg-gray-800 h-full">
                                    <div className="flex justify-between p-2">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-semibold">TMB</span>
                                            <small>Taxa Metabólica Basal</small>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span><span className="font-bold text-2xl">2058 </span>Kcal</span>
                                            <span className="bg-red-400 rounded-lg text-center font-bold text-white">Sedentário</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="flex justify-around">
                    <div className="w-[50%] h-auto border bg-gray-500 border-gray-500 rounded-lg m-2">
                        <CalculadoraIMC />
                    </div>
                    <div className="w-[50%] h-auto border bg-gray-500 border-gray-500 rounded-lg m-2">
                        <CalculadoraTMB />
                    </div>
                </div>
        </Content>
    )
}