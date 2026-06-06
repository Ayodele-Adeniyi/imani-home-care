import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";

function createPrismaClient() {
  const url = (process.env.DATABASE_URL ?? "file:./prisma/dev.db").replace("file:", "") as ":memory:" | (string & {});
  const adapter = new PrismaBetterSqlite3({ url });
  return new PrismaClient({ adapter } as any);
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
