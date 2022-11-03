import { useProfessoresQuery } from '../../graphql/generated'
import { Content } from "../Layouts/Content/Content";

export function Coaches() {
    const { data } = useProfessoresQuery()

    return (
        <Content>
            <h1 className="text-2xl font-semibold text-green-300 uppercase mb-3">Professores</h1>
            <table className='table tablet-auto w-full justify-start text-gray-800 border border-collapse border-slate-400 rounded-lg'>
                <thead className='table-header-group bg-gray-200'>
                    <tr className='table-row'>
                        <th className='table-cell text-left px-2'>Avatar</th>
                        <th className='table-cell text-left'>Professor</th>
                        <th className='table-cell text-left'>E-mail</th>
                        <th className='table-cell text-left'>Data Nasc.</th>
                        <th className='table-cell text-left'>Genero</th>
                    </tr>
                </thead>
                <tbody className='table-row-group bg-gray-100'>
                    {data?.coaches.map(Professores => {
                        return (
                            <tr key={Professores.usuario?.id}>
                                <td className='table-cell px-2'>
                                    <img 
                                    src={Professores.usuario?.picture.url} 
                                    alt={Professores.usuario?.name} 
                                    className='w-[40px] h-[40px] rounded-full' 
                                    />
                                </td>
                                <td className='table-cell p-2'>{Professores.usuario?.name}</td>
                                <td className='table-cell'>{Professores.usuario?.email}</td>
                                <td className='table-cell'>{Professores.usuario?.data_nascimento}</td>
                                <td className='table-cell'>
                                    {Professores.usuario?.genero == 'male' ? 'Masculino' : 'female' ? 'Feminino' : null}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Content>
    )
}