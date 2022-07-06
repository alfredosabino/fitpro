import { useTodosAlunosQuery } from "../../graphql/generated";
import { Content } from "../Layouts/Content/Content";

export function Studants() {
    const { data } = useTodosAlunosQuery()

    return (
        <Content>
            <h1 className="text-2xl font-semibold text-green-300 uppercase mb-3">Professores</h1>
            <table className='table w-full justify-start text-gray-800 border border-collapse border-slate-400 rounded-lg'>
                <thead className='table-header-group bg-gray-200'>
                    <tr className='table-row'>
                        <th className='table-cell text-left p-2'>Avatar</th>
                        <th className='table-cell text-left p-2'>Professor</th>
                        <th className='table-cell text-left'>E-mail</th>
                        <th className='table-cell text-left'>Data Nasc.</th>
                        <th className='table-cell text-left'>Genero</th>
                    </tr>
                </thead>
                <tbody className='table-row-group bg-gray-100'>
                    {data?.usuarios.map(Alunos => {
                        return (
                            <tr key={Alunos.id}>
                                <td className='table-cell p-2'>
                                    <img
                                        src={Alunos.picture.url}
                                        alt={Alunos.name}
                                        className='w-[50px] h-[50px] rounded-full '
                                    />
                                </td>
                                <td className='table-cell p-2'>{Alunos.name}</td>
                                <td className='table-cell'>{Alunos.email}</td>
                                <td className='table-cell'>{Alunos.data_nascimento}</td>
                                <td className='table-cell'>
                                    {Alunos.genero == 'male' ? 'Masculino' : 'female' ? 'Feminino' : null}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Content>
    )
}