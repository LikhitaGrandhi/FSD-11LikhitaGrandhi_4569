class Container<T> {

    constructor(private data: T) {}

    show(): void {
        console.log("Stored Value:", this.data);
    }

    update(value: T): void {
        this.data = value;
        console.log("Value Updated");
    }
}

// Number
let marks = new Container<number>(85);

marks.show();

marks.update(95);

marks.show();


// String
let city = new Container<string>("Hyderabad");

city.show();

city.update("Bangalore");

city.show();


// Boolean
let st = new Container<boolean>(true);

st.show();

st.update(false);

st.show();


// Object
interface Car{
    model:string;
    year:number;
}

let car = new Container<Car>({
    model:"Creta",
    year:2024
});

car.show();

// car.update("BMW");   // Error