import { Entity, BaseEntity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, OneToMany} from "typeorm";
import { v4 as uuid } from 'uuid'
@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id?: string
    
    @Column() 
    name: string

    @Column()
    password: string

    @Column({name: 'created_at'})
    createdAt?: Date

    @Column({name: 'updated_at'})
    updatedAt?: Date

    constructor(
            name: string, 
            password: string, 
            createdAt?: Date, 
            updatedAt?: Date) {
        super()
        this.name = name
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

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