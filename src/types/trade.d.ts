export interface ISocket {
    header: {
        name: string
        dialogId: string
    }
    body: any
}