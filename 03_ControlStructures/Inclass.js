let products = ["A","B","C"];

for (let product of products){
    console.log(product.charAt(0));
    }

    let student={id: 1, name: "Somchai"}
    for(let key in student){
    console.log(key);
    console.log(student[key])
    }
    let rectangle ={width:5, height: 10, area:function(){return this.width*this.height}}
    rectangle.area()
    rectangle.width





    let rectangle ={width:5, height: 10, area:function(){return this.width*this.height}}
    rectangle.id = 1; //add value name id in rectangle 
    for(let key in rectangle){
        console.log(key);
        console.log(rectangle[key]);
    };          //loop value from rectangle 

    let starwar={charecter: 1, name:{firstname: "Anakin", lastname: "Skywalker"}}
    starwar.name.firstname=["Han"]
    starwar.name.lastname=["Solo"]