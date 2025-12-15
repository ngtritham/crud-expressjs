import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedProducts1734268900000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO products (name, price, created_by, updated_by) VALUES
        ('Laptop', '999.99', 'system', 'system'),
        ('Wireless Mouse', '29.99', 'system', 'system'),
        ('Mechanical Keyboard', '149.99', 'system', 'system'),
        ('USB-C Hub', '79.99', 'system', 'system'),
        ('Monitor 27"', '349.99', 'system', 'system'),
        ('Webcam HD', '89.99', 'system', 'system'),
        ('Desk Lamp', '45.99', 'system', 'system'),
        ('Ergonomic Chair', '299.99', 'system', 'system'),
        ('Standing Desk', '599.99', 'system', 'system'),
        ('Noise Cancelling Headphones', '199.99', 'system', 'system')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM products`);
  }
}
