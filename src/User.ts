import { v4 as uuidGenerator } from 'uuid'

export default class User {
    public id: string
    public name: string
    public password: string


    constructor(name: string, password: string) {
        this.id = uuidGenerator()
        this.name = name
        this.password = password
    }
}

