import { ISocket } from '@src/types/trade'
import { createLoginMessage, createLogoutMessage } from './message.config'

function timeout(reject: any) {
    setTimeout(() => {
        reject('请求超时')
    }, 3000)
}

interface ICommand {
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
        return new Promise<any>((resolve, reject) => {
            const messageId = String(new Date().valueOf())

            this.ensureCanMutateNextCommands()
            this.nextCommands.push({
                messageId,
                resolver: resolve,
            })
            this.ws.send(createLoginMessage(messageId, username, password))
            timeout(reject)
        })
    }
    public logout(username: string) {
        return new Promise<any>((resolve, reject) => {
            const messageId = String(new Date().valueOf())

            this.ensureCanMutateNextCommands()
            this.nextCommands.push({
                messageId,
                resolver: resolve,
            })
            this.ws.send(createLogoutMessage(messageId, username))
            timeout(reject)
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

            if (data.header.dialogId === command.messageId) {
                command.resolver(data.body)
                resolvedIndexes.push(i)
            }
        }
        this.nextCommands = this.currentCommands.filter((v, i) => resolvedIndexes.indexOf(i) === -1)
    }
}
