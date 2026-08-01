class Employee{

    public name:string="Likhita";

    private salary:number=50000;

    protected department:string="AI";

    display(){
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}

let e=new Employee();

e.display();