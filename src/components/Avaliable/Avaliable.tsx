import { InputForm } from "../Inputs/InputForm";
import { Content } from "../Layouts/Content/Content";

export function Avaliable() {
    return (
        <Content>
            <h1 className="text-2xl font-semibold text-green-300 uppercase mb-3">Avaliação</h1>
            <div className="text-gray-900 gap-4 p-2">
                <form action="" className="flex flex-1">
                    <div className="p-2">
                        <img src="dsadas.png" alt="" />
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg" />
                    </div>
                    <div className="w-full p-2">
                        <div className="flex flex-1 gap-4">
                            <InputForm name={"Nome"} />
                            <InputForm name={"Nome"} />
                        </div>
                    </div>
                </form>
            </div>
        </Content>
    )
}