import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonDisabled:Boolean;
  @Input() value: string;
  @Output() buttonClicked = new EventEmitter();

  buttonClick(){
    this.buttonClicked.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

  buttoncss(){
    let cssclasses;
    if(this.buttonDisabled==false){
      cssclasses = "pranav-" + this.value
    }
    else{
    cssclasses = "pranav-" + this.value + "-disabled"
      }

    return cssclasses;
  }
}
