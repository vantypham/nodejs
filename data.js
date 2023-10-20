function User(name, age) {
    this.name = name;
    this.age = age;
}
function Product(id, description) {
    this.id = id;
    this.description = description;
}
let users = [
    new User("Bod", 30),
    new User("Alice", 18)
];
let products = [
    new Product(1, "Food"),
    new Product(2, "Tobacco"),
    new Product(3, "Cloth")
];

module.exports = {users, products};