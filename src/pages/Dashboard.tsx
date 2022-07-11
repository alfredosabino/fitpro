import { Content } from '../components/Layouts/Content/Content'

export function Dashboard() {
    return (
        <Content>
            <h1 className="text-2xl font-semibold text-blue-700 uppercase mb-3">Dashboard</h1>
            <div className="flex text-gray-800">
                <span className='font-semibold text-2xl'>Bem Vindo ao Fitness Pro App!</span>
            </div>
        </Content>
    )
}