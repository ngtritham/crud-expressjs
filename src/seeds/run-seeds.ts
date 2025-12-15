import "reflect-metadata";
import { AppDataSource } from "../config/database";
import { SeedProducts1734268900000 } from "./1734268900000-SeedProducts";

async function runSeeds() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");

    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    console.log("Running seeds...");

    const seed = new SeedProducts1734268900000();
    await seed.up(queryRunner);

    console.log("Seeds completed successfully!");

    await queryRunner.release();
    await AppDataSource.destroy();
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

runSeeds();
