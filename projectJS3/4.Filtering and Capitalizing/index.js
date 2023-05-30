let books = [
  { name: "book1", author: "jatin", publication: 2010 },
  { name: "book1", author: "nitin", publication: 2008 },
  { name: "book1", author: "lavi", publication: 2012 },
  { name: "book1", author: "shivani", publication: 2015 },
  { name: "book1", author: "shalu", publication: 2003 },
  { name: "book1", author: "ravish", publication: 2002 }
];

function capitalizing(books){
    let arr1=[];
   books.forEach((a)=>{                                                                         // we can use forEach and map both here
    if(a.publication<=2010){
        arr1.push({name:a.name,author:a.author.toUpperCase(),publication:a.publication})
    }
   })
   console.log(arr1);
}
capitalizing(books);
