export function CalculadoraAgua(pe: number) {
    const peso = pe
    const consumoAgua = peso * 35
    return consumoAgua
}

export function CalculadoraIMC(est: number, pe: number) {
    const alt = (est * 0.01)
    const imc = (pe / (alt * alt)).toFixed(1)
    const imcdesc = imc <= '18.5' ? <span className="text-blue-700">Abaixo do Peso</span>
        : imc >= '18.6' && imc <= '24.9' ? <span className="text-green-600">Peso Normal</span>
            : imc >= '25' && imc <= '29.9' ? <span className="text-yellow-600">Sobrepeso</span>
                : imc >= '30' && imc <= '34.9' ? <span className="text-orange-600">Obsesidade I</span>
                    : imc >= '35' && imc <= '39.9' ? <span className="text-red-600">Obsesidade II</span>
                        : imc >= '40' ? <span className="text-purple-600">Obesidade III</span> : <span></span>

    return { imc, imcdesc }
}

export function CalculadoraTMB(genre: String, age: number, stature: number, weight: number, level_activy: String) {
    const valueActivy: any =
        level_activy === 'sedentario' ? 1.2
            : level_activy === 'levemente_ativo' ? 1.375
                : level_activy === 'moderadamente_ativo' ? 1.55
                    : level_activy === 'altamente_ativo' ? 1.725
                        : level_activy === 'extremamente_ativo' ? 1.9
                            : <span></span>

    const valueGenre: any = {
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

    const tmb = (genre === 'male' ?
        valueActivy * (
            (valueGenre.male.valtot + (
                (valueGenre.male.valpeso) + (
                    valueGenre.male.valalt) - (
                    valueGenre.male.valid)
            )
            )
        )
        : genre === 'female' ?
            valueActivy * (
                (valueGenre.female.valtot + (
                    (valueGenre.female.valpeso) + (
                        valueGenre.female.valalt) - (
                        valueGenre.female.valid)
                )
                )
            ) : 0
    )
    return tmb

}

export function CalculadoraMacros(tmb: number) {
    const macroCarboidrato = ((tmb * 40) / 100) / 4
    const macroProteico = ((tmb * 40) / 100) / 4
    const macroGordura = ((tmb * 20) / 100) / 9

    return [{ macroCarboidrato, macroProteico, macroGordura, tmb }]
}

export function Calculadora3DobrasMasc(pescoco: string, abdominal: string, altura: string) {

    const pesc = parseInt(pescoco)
    const abs = parseInt(abdominal)
    const alt = parseInt(altura)
    const gc = (1.033 - ((0.191 * getBaseLog(10, (abs - pesc)))) + (0.155 * getBaseLog(10, alt)))
    const porcentGorduraCoporal = ((495 / gc) - 450)

    function getBaseLog(x: number, y: number) {
        return Math.log(y) / Math.log(x)
    }

    return porcentGorduraCoporal.toFixed(2)
}

export function MassaMagra(massaGorda: any, peso: any){
    const pes = parseInt(peso)
    return pes - massaGorda 
}