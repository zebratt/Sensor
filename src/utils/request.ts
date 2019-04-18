import fetch from 'isomorphic-fetch'

function checkHttpStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    throw new Error(response.statusText)
}

export default async function request(url: string, options: RequestInit) {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }

    options.headers = new Headers(defaultHeaders)

    const response: Response = await fetch(url, options)

    checkHttpStatus(response)

    const res = await response.json()

    if (res.success) {
        return res.result
    } else {
        throw new Error(res.message || '请求异常')
    }
}
