import { FormMedidasAluno } from "../components/FormMedidasAluno";
import { Content } from "../components/Layouts/Content/Content";

export function Avaliable() {
    return (
        <Content>
            <h1 className="text-2xl font-semibold text-blue-700 uppercase mb-3">Avaliação</h1>
            <hr />
            <div className="flex">
                <div className='w-full mt-4'>
                    <FormMedidasAluno />
                </div>
            </div>
        </Content>
    )
}