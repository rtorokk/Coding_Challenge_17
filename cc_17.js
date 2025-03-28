// Task 1: Create Customer Class
class Customer {
    constructor(name,email) {
        this.name = name;// Customer's name
        this.email = email;// Customer's email
        this.purchaseHistory = [];// Customer's purchase history
    }
    addPurchase(purchase) {
        this.purchaseHistory.push(purchase);// Add purchase to history
    }
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);// Calculate total spent
    }
}
// Task 3: Creating VIPCustomer Class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email); // Call parent constructor
        this.vipLevel = vipLevel; // VIP level
    }
    getTotalSpent() {
        const total = super.getTotalSpent(); // Get the total spent from the parent class
        return total * 1.10; // Apply VIP bonus (10% increase)
    }
}
// Test Cases
const customer1 = new Customer("Jerry White", "jerryw@gmail.com");
customer1.addPurchase(100);
customer1.addPurchase(200);
console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`); // Customer: Jerry White, Total Spent: $300
// Test Cases for VIPCustomer
const vipCustomer = new VIPCustomer("Post Malone", "postm@gmail.com","Platinum");
vipCustomer.addPurchase(600);
console.log(`VIP Customer: ${vipCustomer.name}, Total Spent with Bonus: $${vipCustomer.getTotalSpent()}`); // VIP Customer: Post Malone, Total Spent: $660

// Task 2: Creating SalesRep Class
class SalesRep{
    constructor(name){
        this.name = name;// Sales representative's name
        this.clients = [];// List of customers
    }
    addClient(client){
        this.clients.push(client);// Add client to sales rep's list
    }
        getClientTotal(name){
        const client = this.clients.find(client => client.name === name);// Find client by name
        return client ? client.getTotalSpent() : 0;// Return total spent by client or 0 if not found
    }
}
// Test Cases
const salesRep = new SalesRep("Bobby Brown");
salesRep.addClient(customer1);
console.log(`Sales Rep: ${salesRep.name}, Client Total: $${salesRep.getClientTotal("Jerry White")}`); // Sales Rep: Bobby Brown, Client Total: $300


