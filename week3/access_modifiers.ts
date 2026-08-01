class OnlineAccount {

    // Public
    public userName: string;

    // Private
    private accountBalance: number;
    private password: string;

    // Protected
    protected rewardPoints: number = 0;

    constructor(name: string, balance: number, pass: string) {
        this.userName = name;
        this.accountBalance = balance;
        this.password = pass;
    }

    // Public method
    public purchase(amount: number, pass: string): void {

        if (this.checkPassword(pass)) {

            if (this.accountBalance >= amount) {
                this.accountBalance -= amount;
                console.log("Purchase Successful");
                console.log("Remaining Balance: ₹" + this.accountBalance);
            }
            else {
                console.log("Insufficient Balance");
            }

        }
        else {
            console.log("Wrong Password");
        }

    }

    // Private method
    private checkPassword(pass: string): boolean {
        return this.password === pass;
    }

}

// Child class
class PremiumAccount extends OnlineAccount {

    public addRewards(): void {
        this.rewardPoints += 50;
        console.log("Reward Points: " + this.rewardPoints);
    }

}

let user = new OnlineAccount("Rahul", 5000, "abcd");

console.log("User Name: " + user.userName);

// user.accountBalance;      // Error
// user.checkPassword("abcd"); // Error

user.purchase(1200, "abcd");

let premium = new PremiumAccount("Sneha", 8000, "1234");
premium.addRewards();