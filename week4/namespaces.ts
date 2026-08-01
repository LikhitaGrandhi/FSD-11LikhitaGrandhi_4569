namespace StudentUtils {

    const passMarks = 35;

    export function isPass(mark: number): boolean {
        return mark >= passMarks;
    }

    export function getGrade(mark: number): string {

        if (mark >= 90)
            return "A";

        else if (mark >= 75)
            return "B";

        else if (mark >= 60)
            return "C";

        else if (mark >= passMarks)
            return "D";

        else
            return "Fail";
    }

    export namespace Attendance {

        export function percentage(attended: number, total: number): number {
            return (attended / total) * 100;
        }

    }

}

// ----- Using Namespace -----

let marks = 82;

console.log("Pass:", StudentUtils.isPass(marks));
console.log("Grade:", StudentUtils.getGrade(marks));

let per = StudentUtils.Attendance.percentage(72, 80);

console.log("Attendance:", per + "%");

// console.log(StudentUtils.passMarks); // Error (private)