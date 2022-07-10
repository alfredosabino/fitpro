export function CalculadoraAgua(pe: Number){
    const peso = pe
    const consumoAgua = peso * 35
    return consumoAgua
}

export function CalculadoraIMC(est: Number, pe: Number) {
    const alt = (est * 0.01)
    const imc = (pe / (alt * alt)).toFixed(1)
    const imcdesc = imc <= '18.5' ? <span className="text-blue-700">Abaixo do Peso</span>
        : imc >= '18.6' && imc <= '24.9' ? <span className="text-green-600">Peso Normal</span>
            : imc >= '25' && imc <= '29.9' ? <span className="text-yellow-600">Sobrepeso</span>
                : imc >= '30' && imc <= '34.9' ? <span className="text-orange-600">Obsesidade I</span>
                    : imc >= '35' && imc <= '39.9' ? <span className="text-red-600">Obsesidade II</span>
                        : imc >= '40' ? <span className="text-purple-600">Obesidade III</span> : null

    return { imc, imcdesc }
}

export function CalculadoraTMB(genre: String, age: Number, stature: Number, weight: Number, level_activy: String) {
    const valueActivy =
        level_activy === 'sedentario' ? 1.2
            : level_activy === 'levemente_ativo' ? 1.375
                : level_activy === 'moderadamente_ativo' ? 1.55
                    : level_activy === 'altamente_ativo' ? 1.725
                        : level_activy === 'extremamente_ativo' ? 1.9
                            : null

    const valueGenre = {
        'male': {
            'valtot': 66,
            'valpeso': 13.7 * weight,
            'valalt': 5 * stature,
            'valid': 6.8 * age
        },
        'female': {
            'valtot': 655,
            'valpeso': 9.6 * weight,
            'valalt': 1.8 * stature,
            'valid': 4.7 * age
        }
    }

    const tmb = (genre == 'male' ?
        valueActivy * (
            (valueGenre.male.valtot + (
                (valueGenre.male.valpeso) + (
                    valueGenre.male.valalt) - (
                    valueGenre.male.valid)
            )
            )
        )
        : genre == 'female' ? (valueGenre.female.valtot + (
            valueGenre.female.valpeso)
            + (
                (valueGenre.female.valalt)
                - (valueGenre.female.valid)
            )
        ) : null
    )
    return tmb

}
