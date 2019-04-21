import fetch from 'isomorphic-fetch'

function checkHttpStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    throw new Error(response.statusText)
}

function format(res: any, type?: string) {
    if (type === 'back') {
        return {
            result: res.data,
            success: res.rtnCode === 200,
        }
    } else {
        return res
    }
}

/**
 * @param url
 * @param options
 * @param type 根据type类型格式化response
 */
export default async function request(url: string, options: RequestInit, type?: string) {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }

    options.headers = new Headers(defaultHeaders)

    const response: Response = await fetch(url, options)

    checkHttpStatus(response)

    const res = await response.json().then(value => format(value, type))

    if (res.success) {
        return res.result
    } else {
        throw new Error(res.message || '请求异常')
    }
}
