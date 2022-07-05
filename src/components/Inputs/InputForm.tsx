export function InputForm(props) {
    return (
        <legend className="w-full">
            {props.name}:
            <input
                type={props.type}
                className="p-2 rounded-lg w-full text-gray-800 font-base text-center"
                placeholder={props.name}
                value={props.value} />
        </legend>
    )
}