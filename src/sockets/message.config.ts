export function createLoginMessage(id: string, username: string, password: string) {
    return `
        {
            "header":{
                "name":"Login",
                "dialogId":"${id}"
            },
            "body":{
                "clientNo":"${username}",
                "password":"${password}"
            }
        }
    `
}

export function createLogoutMessage(id: string, username: string){
    return `
        {
            "header":{
                "name":"Logout",
                "dialogId":"${id}"
            },
            "body":{
                "clientNo":"${username}"
            }
        }
    `
}
