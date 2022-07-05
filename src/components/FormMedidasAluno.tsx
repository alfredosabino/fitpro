import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "./Card/Card";
import { TitleCard } from "./Card/TitleCard";
import { InputForm } from "./Inputs/InputForm"
import { SelectForm } from "./Inputs/SelectForm";

import { CalculadoraIMC } from "./Calculadoras";

export function FormMedidasAluno() {
    const navigate = useNavigate() 
    const [aluno, setAluno] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [estatura, setEstatura] = useState('')
    const [peso, setPeso] = useState('')
    const [atividade, setAtividade] = useState('')

    const [createAvaliable, {loading}] = "teste"

    async function handerAvaliable(event: FormEvent) {
        event.preventDefault()

        await createAvaliabler({
            variables: {
                aluno,
                sexo,
                idade,
                estatura,
                peso,
                atividade
            }
        })

        navigate('/dashboard')
    }

    return (
        <Card>
            <TitleCard title={"Avaliação"} />
            <div className="flex justify-center">
                <form onSubmit={handerAvaliable} className="grid item-center w-full">
                    <div className="grid gap-3">
                        <div className="flex flex-1 gap-4">
                            <InputForm 
                            className="w-full" 
                            name={"Nome"} 
                            type={"text"}
                            onChange={
                                event => setAluno(event.target.value)
                            } />
                        </div>
                        <div className="flex flex-1 gap-4">
                            <SelectForm 
                            name={"Sexo"}
                            onChange={
                                event => setSexo(event.target.value)
                            } />
                            <InputForm 
                            name={"Idade"} 
                            type={"number"}
                            onChange={
                                event => setIdade(event.target.value)
                            } />
                        </div>
                        <div className="flex flex-1 gap-4">
                            <InputForm
                                name={"Estatura"}
                                type={"float"}
                                onChange={
                                    event => setEstatura(event.target.value)
                                } />
                            <InputForm 
                            name={"Peso"} 
                            type={"number"} 
                            onChange={
                                event => setPeso(event.target.value)
                            } />
                        </div>
                        <div className="gap-4">
                            <SelectForm 
                            name={"Nivel de Atividade"}
                            onChange={
                                event => setAtividade(event.target.value)
                            } />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-700 rounded-lg p-3 mt-4 hover:bg-blue-900 transition-colors disabled:opacity-50"
                    >
                        Calcular
                    </button>
                </form>
            </div>
        </Card>
    )
}