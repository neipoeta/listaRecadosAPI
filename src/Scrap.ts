import { v4 as uuidGenerator } from 'uuid'

export default class Scrap {
    public id: string
    public scrap: string
    public title: string
    public userId: number


    constructor(title: string, scrap: string, userId: number) {
        this.id = uuidGenerator()
        this.title = title;
        this.scrap = scrap;
        this.userId = userId;
    }
}