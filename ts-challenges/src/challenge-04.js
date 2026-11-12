"use strict";
const book = {
    title: 'The Pragmatic Programmer',
    author: 'Hunt & Thomas',
    pages: 352,
    published: 1999,
};
function printBookInfo(book) {
    console.log(`${book.title} by ${book.author} (${book.pages} pages)`);
}
printBookInfo(book);
