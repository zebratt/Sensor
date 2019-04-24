interface IFormatOptions {
    precision: number
}
type TValue = string | number
export function format(value: TValue, options?: IFormatOptions) {
    const v = Number(value)
    let result = null

    const opts = Object.assign(
        {
            precision: 2,
        },
        options
    )

    if (Number.isNaN(v)) {
        return value
    } else {
        result = v.toFixed(opts.precision)

        return result
    }
}
