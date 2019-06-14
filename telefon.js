function Telefon (brand,model,battery,price,ram,capacity,camera,os){
    this.brand = brand;
    this.model = model;
    this.battery = battery;
    this.price = price;
    this.ram = ram;
    this.capacity = capacity;
    this.camera = camera;
    this.os = os;
    this.balance = 45;
    this.getInfo = function(){
        return "Brand : " + this.brand + " | model: " + this.model + " | price: " +  this.price + " | Battery: " + this.battery + " | Ram: " + this.ram + " | Capacity: " + this.capacity + " | Camera: " + this.camera + " | OS: " + this.os
    };
    this.getBalance = function() {
        return this.balance
    }
    this.chargeBalance = function(){
        return "You were charged " + Math.floor(Math.random() * 11) + " AZN" +  "  ||  Now your balance is: " +  Math.floor(Math.random() * 50) + " AZN"

        // Balansdan random olaraq pul chixir
    }
    
}

var samsung = new Telefon("Samsung","Galaxy s10","4000mAh","1000$","4gb","64gb","24px","Android");
var nokia = new Telefon("Nokia","Lumia","3500mAh","700$","3gb","32gb","16px","Android");

console.log(samsung.getInfo())
console.log(nokia.getInfo())

console.log(nokia.chargeBalance()) // Balansdan pul chixmasi metodu