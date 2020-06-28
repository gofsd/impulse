import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { OrdersSeed } from '../seeds/orders.seed'


export class Seeds1593287751466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        getRepository("orders").save(OrdersSeed)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return null
    }

}