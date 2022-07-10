import { Content } from '../components/Layouts/Content/Content'
import { Card } from '../components/Card/Card'

import { FormMedidasAluno } from '../components/FormMedidasAluno'
import { CalculadoraIMC } from '../components/CalculadoraIMC'
import { CalculadoraTMB } from '../components/CalculadoraTMB'

export function Dashboard() {
    return (
        <Content>
            <h1 className="text-2xl font-semibold text-blue-700 uppercase mb-3">Dashboard</h1>
            <div className="flex">
                <div className='w-full'>
                    <div className="flex">
                        <FormMedidasAluno />
                    </div>
                </div>
            </div>
        </Content>
    )
}