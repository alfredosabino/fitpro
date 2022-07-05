import { useCoachforStudantsQuery } from '../../../graphql/generated'
import { useParams } from "react-router-dom";
import { Content } from "../../Layouts/Content/Content";
import { CalculadoraIMC, CalculadoraTMB } from '../../Calculadoras';

interface DadosAlunos {
    estatura: Number
    peso: Number
}

export function Coach(props: DadosAlunos) {
    const { slug } = useParams<{ slug: string }>()
    const { data } = useCoachforStudantsQuery()

    return (
        <Content>
            <h1 className="text-2xl font-semibold text-green-300 uppercase mb-3">Alunos</h1>
            <span className='text-2xl text-gray-800'>{data?.coach?.bio}</span>
            <table className='table w-full justify-start text-gray-800 border border-collapse border-slate-400 rounded-lg'>
                <thead className='table-header-group bg-gray-200'>
                    <tr className='table-row'>
                        <th className='table-cell text-left p-2'>Aluno</th>
                        <th className='table-cell text-left'>Idade</th>
                        <th className='table-cell text-left'>Genero</th>
                        <th className='table-cell text-left'>Estatura</th>
                        <th className='table-cell text-left'>Peso</th>
                        <th className='table-cell text-left'>IMC</th>
                        <th className='table-cell text-left'>Nivel de Atividade</th>
                        <th className='table-cell text-left'>TMB</th>
                        <th className='table-cell text-left'>Situação Atual</th>
                    </tr>
                </thead>
                <tbody className='table-row-group bg-gray-100'>
                    {data?.coach?.usuarios.map(Usuarios => {
                        return (
                            <tr key={Usuarios.id}>
                                <td className='table-cell p-2'>{Usuarios.name}</td>
                                <td className='table-cell'>{Usuarios.age} anos</td>
                                <td className='table-cell'>
                                    {Usuarios.genre == 'male' ? 'Masculino' : 'female' ? 'Feminino' : null}
                                </td>
                                <td className='table-cell'>{(Usuarios.stature * 0.01).toFixed(2)} m</td>
                                <td className='table-cell'>{Usuarios.weight} kg</td>
                                <td className='table-cell'>
                                    {CalculadoraIMC(Usuarios.stature, Usuarios.weight).imc}
                                </td>
                                <td className='table-cell'>
                                    {Usuarios.taxa_atividade === 'sedentario' ? 'Sedentário'
                                        : Usuarios.taxa_atividade === 'levemente_ativo' ? 'Levemente Ativo'
                                            : Usuarios.taxa_atividade === 'moderadamente_ativo' ? 'Moderamente Ativo'
                                                : Usuarios.taxa_atividade === 'altamente_ativo' ? 'Altamente Ativo'
                                                    : Usuarios.taxa_atividade === 'extremamente_ativo' ? 'Extremamente Ativo'
                                                        : null}
                                </td>
                                <td className='table-cell'>
                                    {CalculadoraTMB(Usuarios.genre, Usuarios.age, Usuarios.stature, Usuarios.weight, Usuarios.taxa_atividade)} Kcal
                                </td>
                                <td className='table-cell font-bold'>
                                    {CalculadoraIMC(Usuarios.stature, Usuarios.weight).imcdesc}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Content>
    )
}