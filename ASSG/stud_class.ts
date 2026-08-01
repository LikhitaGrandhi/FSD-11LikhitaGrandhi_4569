class Student{

    constructor(public name:string, public age:number){}

    display(){
        console.log(this.name);
        console.log(this.age);
    }
}

let s=new Student("Likhita",20);

s.display();