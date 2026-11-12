interface Book {
    title: string,
    author: string,
    pages: number,
    published: number,
}

const book: Book = {
    title: 'The Pragmatic Programmer',
    author: 'Hunt & Thomas',
    pages: 352,
    published: 1999,
} 

function printBookInfo(book: Book): void {
    console.log(`${book.title} by ${book.author} (${book.pages} pages)`);
}

printBookInfo(book);