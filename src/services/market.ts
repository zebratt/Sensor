import request from '@src/utils/request'

export async function fetchContracts() {
    return await request(
        '/back/api/base/main/contract/all',
        {
            method: 'get',
        },
        'back'
    )
}
