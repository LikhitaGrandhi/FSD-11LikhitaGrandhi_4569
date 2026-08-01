// Student Class with Constructors

class Student {
    public name: string;
    public rollNo: number;
    public marks: number;
    public course: string;

    // Constructor Signatures
    constructor(name: string, rollNo: number);
    constructor(name: string, rollNo: number, marks: number, course: string);

    // Constructor Implementation
    constructor(name: string, rollNo: number, marks?: number, course?: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks ?? 0;
        this.course = course ?? "AI & DS";
    }

    // Method to calculate Grade
    public calculateGrade(): string {
        if (this.marks >= 90) return "A";
        else if (this.marks >= 75) return "B";
        else if (this.marks >= 60) return "C";
        else return "D";
    }

    // Display Details
    public displayDetails(): void {
        console.log("----- Student Details -----");
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Course:", this.course);
        console.log("Marks:", this.marks);
        console.log("Grade:", this.calculateGrade());
        console.log("---------------------------");
    }
}

// Object 1
const student1 = new Student("Likhita", 101);

// Object 2
const student2 = new Student("Harsha", 102, 91, "CSE");

student1.displayDetails();
student2.displayDetails();

// Updating Property
student2.marks = 96;
console.log("Updated Grade:", student2.calculateGrade());