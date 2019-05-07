import request from '@src/utils/request'

export async function fetchContracts() {
    return await request(
        '/api/base/main/contract/all',
        {
            method: 'get',
        },
        'back'
    )
}
