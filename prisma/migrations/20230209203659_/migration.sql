/*
  Warnings:

  - You are about to drop the `Rent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Rent";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "RentedBooks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startDate" DATETIME NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "ReturnDate" DATETIME NOT NULL,
    "oderId" TEXT NOT NULL,
    CONSTRAINT "RentedBooks_oderId_fkey" FOREIGN KEY ("oderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RentedBooks_oderId_key" ON "RentedBooks"("oderId");
