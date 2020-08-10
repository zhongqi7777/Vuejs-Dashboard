

let LinkedList = require('../linkedlist').LinkedList;

let slideShow = new LinkedList();
    
slideShow.add('image-001', 0);
slideShow.add('image-002', 1);
slideShow.add('image-003', 2);

console.log(slideShow);

console.log(JSON.stringify(slideShow));

