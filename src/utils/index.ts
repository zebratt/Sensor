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

/**
 * 这里会获取hash中最后一个 / 后面的路径，当做当前tab
 */
export function getCurrentTabKey(): string{
    let key = 'market' // 默认是行情
    const matches = location.hash.match(/[^/]+(?!.*\/)/)
    const hash = matches && matches[0]

    if (hash) {
        key = hash
    }

    return key
}