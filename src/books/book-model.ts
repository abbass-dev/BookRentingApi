export interface Book{
    id :string,
    title:string,
    author:string,
    isbn:string,
    quantity: number
}
export interface findBookQuery{
    offset?:Number,
    limit?:Number,
    title?: string
    author?:string
}


export type BookCreateRequest = Pick<Book,'isbn'|'author'|'title'> & Partial<Pick<Book,'quantity'>>
export type BookResponse = Pick<Book,'title'|'author'|'isbn'|'quantity'>
