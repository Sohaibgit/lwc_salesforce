import { LightningElement, track } from 'lwc';

export default class HelloWorldComponent extends LightningElement {
    name = "Sohaib Khan"
    names = ["John", "Smith", "Aslam"]
    num1 = 0
    num2 = 0

    @track
    address = {
        city: "Sacramento",
        zip: "95818",
        state: "California",
        country: "United States"
    }

    changeNameHandler(event){
        this.name = event.target.value;
    }

    changeCityHandler(event){
        this.address.city = event.target.value;
    }

    assignNum1Handler(event){
        this.num1 = Number(event.target.value);
    }

    assignNum2Handler(event){
        this.num2 = Number(event.target.value);
    }

    get firstUser(){
        return this.names[0]
    }

    get sumOfNumbers(){
        return this.num1 + this.num2
    }
}