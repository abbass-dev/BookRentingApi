"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["APPROVED"] = "APPROVED";
    OrderStatus["DECLINED"] = "DECLINED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
/*
model Order {
  id          String   @id @default(cuid())
  user        User     @relation(fields: [userId], references: [id])
  book        Book     @relation(fields: [bookId], references: [id])
  status      String   //Enum
  requestDate DateTime @default(now())
  userId      String
  bookId      String
}


*/ 
