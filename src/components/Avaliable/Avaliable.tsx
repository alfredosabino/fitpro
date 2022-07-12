import { FormMedidasAluno } from "../FormMedidasAluno";
import { InputForm } from "../Inputs/InputForm";
import { Content } from "../Layouts/Content/Content";

export function Avaliable() {
    return (
        <Content>
            <h1 className="text-2xl font-semibold text-green-300 uppercase mb-3">Avaliação</h1>
                <hr/>
            <div className='w-full mt-4'>
                <div className="flex container">
                    <FormMedidasAluno />
                </div>
            </div>
        </Content>
    )
}