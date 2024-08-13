import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    questions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question2",
            question: "Which of the file is invald in LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question3",
            question: "WHich one of the following is not a directive?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },

            correctAnswer: "c"
        }
    ];
    selected = {};
    correctAnswers = 0;
    isSubmitted = false

    get allSelected(){
        return !(Object.keys(this.selected).length === this.questions.length);
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.questions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    changeHandler(event){
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]:value};
    }

    submitHandler(event){
        event.preventDefault();
        const correctSelected = this.questions.filter(question => {
            return this.selected[question.id] === question.correctAnswer;
        });
        this.correctAnswers = correctSelected.length;
        console.log("correctAnswers: ", this.correctAnswers);
        this.isSubmitted = true;
    }

    resetHandler(event){
        this.correctAnswers = 0;
        this.selected = {};
        this.isSubmitted = false;
    }
}