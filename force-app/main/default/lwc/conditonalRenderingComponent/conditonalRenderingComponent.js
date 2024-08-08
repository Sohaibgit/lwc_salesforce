import { LightningElement } from 'lwc';

export default class ConditonalRenderingComponent extends LightningElement {
    isVisible = false
    text = ''

    handleClick(){
        if(this.isVisible){
            this.isVisible = false
        }else{
            this.isVisible = true
        }
    }

    changeHandler(event){
        this.text = event.target.value;
    }

    get hello(){
        return this.text === 'hello';
    }
}