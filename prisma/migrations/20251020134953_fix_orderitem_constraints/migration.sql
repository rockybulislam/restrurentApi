/*
  Warnings:

  - A unique constraint covering the columns `[orderId,itemId]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."OrderItem_itemId_key";

-- DropIndex
DROP INDEX "public"."OrderItem_orderId_key";

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_itemId_key" ON "OrderItem"("orderId", "itemId");
