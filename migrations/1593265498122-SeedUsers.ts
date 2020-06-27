import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { UsersSeed } from '../seeds/users.seed'

export class SeedUsers1593265498122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        getRepository("users").save(UsersSeed)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return null
    }

}
