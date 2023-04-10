/*
  Warnings:

  - You are about to drop the `_BookToRent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `userId` on the `Rent` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_BookToRent_B_index";

-- DropIndex
DROP INDEX "_BookToRent_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_BookToRent";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "oderId" TEXT NOT NULL,
    CONSTRAINT "Rent_oderId_fkey" FOREIGN KEY ("oderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rent" ("endDate", "id", "oderId", "startDate", "status") SELECT "endDate", "id", "oderId", "startDate", "status" FROM "Rent";
DROP TABLE "Rent";
ALTER TABLE "new_Rent" RENAME TO "Rent";
CREATE UNIQUE INDEX "Rent_oderId_key" ON "Rent"("oderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
