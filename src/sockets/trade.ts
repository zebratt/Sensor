import { ISocket } from '@src/types/trade'

interface ICommand {
    target: string
    messageId: string
    resolver: (...args: any) => void
}
export class TradeSocket {
    private ws: WebSocket
    private currentCommands: ICommand[] = []
    private nextCommands: ICommand[] = this.currentCommands
    constructor() {
        this.ws = new WebSocket('ws://116.62.130.69:8002')
        this.ws.onmessage = this.onMessage.bind(this)
    }
    public login(username: string, password: string) {
        return new Promise<any>(resolve => {
            const messageId = String(new Date().valueOf())

            this.ensureCanMutateNextCommands()
            this.nextCommands.push({
                target: 'OnLogin',
                messageId,
                resolver: resolve,
            })
            this.ws.send(`
                {
                    "header":{
                        "name":"Login",
                        "dialogId":"${messageId}"
                    },
                    "body":{
                        "clientNo":"${username}",
                        "password":"${password}"
                    }
                }
            `)
        })
    }
    private ensureCanMutateNextCommands() {
        if (this.nextCommands === this.currentCommands) {
            this.nextCommands = this.currentCommands.slice()
        }
    }
    private onMessage(eve: MessageEvent) {
        const data: ISocket = JSON.parse(eve.data)
        const commands = (this.currentCommands = this.nextCommands)
        const resolvedIndexes: number[] = []

        for (let i = 0; i < commands.length; i++) {
            const command = commands[i]

            if (data.header.name === command.target && data.header.dialogId === command.messageId) {
                command.resolver(data.body)
                resolvedIndexes.push(i)
            }
        }
        this.nextCommands = this.currentCommands.filter((v, i) => resolvedIndexes.indexOf(i) === -1)
    }
}
