// Task 1: Create Customer Class
class Customer {
    constructor(name,email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    addPurchase(purchase) {
        this.purchaseHistory.push(purchase);
    }
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}