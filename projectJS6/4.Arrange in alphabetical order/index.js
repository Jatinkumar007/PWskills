let books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

let callback=(ans)=>{
   for(let i of ans){
    console.log(i);
   }
}

function accepts(books,callback){
    let ans= books.map((el)=>{
        return el.title;
    });
    let sorted= ans.sort();
    callback(sorted);
}

accepts(books,callback);