import { LightningElement } from 'lwc';

export default class ForEachLoopDirective extends LightningElement {
    cars = ["BMV", "Nissan", "Ford", "Toyota", "KIA Motors"]
    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Sundar Pichai",
            role: "Managing Director"
        },
        {
            id: 2,
            company: "Microsoft",
            name: "Bill Gates"
        },
        {
            id: 3,
            company: "Facebook",
            name: "Mark Zuckerberg"
        },
        {
            id: 4,
            company: "Amazon",
            name: "Jeff Bezos"
        },
        {
            id: 5,
            company: "Alphabet",
            name: "Jack Dorsey"
        }
    ]
}