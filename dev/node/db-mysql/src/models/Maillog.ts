import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Maillog {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    src_ip: string

    @Column()
    src_port: number

    @Column()
    helo_name: string

    @Column()
    sender: string

    @Column()
    recipients: string
}
