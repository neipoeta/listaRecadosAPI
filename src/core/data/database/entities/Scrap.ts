import {BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "./User";
@Entity()
export class Scrap extends BaseEntity{
    @PrimaryColumn()
    id?: string
    
    @Column() 
    scrap: string

    @Column()
    title: string

    @Column({name: 'id_user'})
    userId: string

    @Column({name: 'created_at'})
    createdAt?: Date

    @Column({name: 'updated_at'})
    updatedAt?: Date

    
    constructor(
            scrap: string, 
            title: string, 
            userId: string,
            createdAt?: Date, 
            updatedAt?: Date) {
        super()
        this.scrap = scrap
        this.title = title
        this.userId = userId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    
    // @ManyToOne(type => User, user => user.scrap)
    // @JoinColumn({name: 'id_suser', referencedColumnName: 'id'})
    // user?: User

    @BeforeInsert()
    private beforeInsert() {
        this.id = this.id ? this.id : uuid()
        this.createdAt = this.createdAt ? this.createdAt : new Date(Date.now())
        this.updatedAt = this.updatedAt ? this.updatedAt : new Date(Date.now())
    }

    @BeforeUpdate()
    private beforeUpdate() {
        this.updatedAt = new Date(Date.now())
    }

}

