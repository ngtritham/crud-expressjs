import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  price: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @Column({ type: "varchar", length: 255, nullable: true })
  created_by: string;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @Column({ type: "varchar", length: 255, nullable: true })
  updated_by: string;
}
