import { useState } from "react";
import { Calculadora3DobrasMasc, MassaMagra } from "./Calculator/Calculadoras";
import { Card } from "./Card/Card";
import { TitleCard } from "./Card/TitleCard";

export function FormTresDobras() {
    const [pescoco, setPescoco]: any = useState(0)
    const [abdominal, setAbdominal]: any = useState(0)
    const [altura, setAltura]: any = useState(0)
    const [peso, setPeso]: any = useState(0)

    return (
        <Card>
            <TitleCard title={'Calculadora Gordura Corporal - (BF %)'} />
            <div className="flex justify-center flex-wrap p-5 bg-gray-800 border-2 border-blue-700 rounded-xl h-auto">
                <form className="flex flex-nowrap w-full">
                    <legend className="mr-2 w-full">
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
                    <legend className="mr-2 w-full">
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
                    <legend className="mr-2 w-full">
                        Altura:
                        <div className="flex items-center">
                            <input
                                type="number"
                                className="p-2 rounded-l-lg w-full text-gray-800 font-base text-center"
                                placeholder="Altura"
                                onChange={event => setAltura(event.target.value)}
                            />
                            <span className="p-2 rounded-r-lg bg-blue-700 text-white">cm</span>
                        </div>
                    </legend>
                    <legend className="mr-2 w-full">
                        Peso:
                        <div className="flex items-center">
                            <input
                                type="number"
                                className="p-2 rounded-l-lg w-full text-gray-800 font-base text-center"
                                placeholder="Peso"
                                onChange={event => setPeso(event.target.value)}
                            />
                            <span className="p-2 rounded-r-lg bg-blue-700 text-white">cm</span>
                        </div>
                    </legend>
                </form>
                <span className="flex justify-center mt-5 w-full">
                    {`${Calculadora3DobrasMasc(pescoco, abdominal, altura)}`
                        ?
                        <div className="flex  justify-around w-full">
                            <div className="flex items-center bg-blue-900 p-4 rounded-xl">
                                <div className="grid mr-4">
                                    <span className="text-xl font-bold">BF</span>
                                    <span className="text-sm font-normal">Body Fat</span>
                                </div>
                                <span className="text-3xl font-bold">
                                    ~{Calculadora3DobrasMasc(pescoco, abdominal, altura)}%
                                </span>
                            </div>
                            <div className="flex items-center bg-blue-900 p-4 rounded-xl">
                                <span className="text-lg font-bold mr-4">Massa Magra</span>
                                <span className="text-3xl font-bold">
                                    {MassaMagra(Calculadora3DobrasMasc(pescoco, abdominal, altura), peso)}
                                    <span className="text-lg font-normal">Kg</span>
                                </span>
                            </div>
                        </div>
                        : 0}
                </span>
            </div>
        </Card >
    )
}