class Library {

    // Static properties
    static libraryName: string = "Central Library";
    static totalMembers: number = 0;

    // Readonly property
    readonly memberId: number;

    // Normal property
    memberName: string;

    constructor(name: string, id: number) {
        this.memberName = name;
        this.memberId = id;

        Library.totalMembers++;
    }

    // Static method
    static displayLibrary(): void {
        console.log("Library Name:", Library.libraryName);
    }

    // Instance method
    displayMember(): void {
        console.log("Member Name:", this.memberName);
        console.log("Member ID:", this.memberId);
    }
}

// Static members
Library.displayLibrary();

// Creating objects
let m1 = new Library("Anjali", 101);
let m2 = new Library("Rahul", 102);

// Display details
m1.displayMember();
m2.displayMember();

// Readonly property
console.log("Member ID:", m1.memberId);

// m1.memberId = 200;   // Error: Cannot assign to readonly property

// Static property
console.log("Total Members:", Library.totalMembers);