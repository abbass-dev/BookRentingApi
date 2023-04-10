import { User, UserResponse } from "../users/user-model";
import { Book, BookResponse } from "../books/book-model";

export enum OrderStatus{
    PENDING = "PENDING",
    APPROVED='APPROVED',
    DECLINED='DECLINED'
}

export interface Order{
    id:string,
    user:Partial<UserResponse>,
    books : Partial<BookResponse>[]
    status:OrderStatus|string,
    requestDate : Date
}

export type OrderQuery = Pick<Order,'id'|'books'|'status'|'requestDate'>
export type OrderResponse = Pick<Order,'user'|'books'|'status'|'requestDate'>

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