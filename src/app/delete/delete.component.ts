import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
@Input() data: String | undefined
@Output() onCancel= new EventEmitter
@Output() onCdelete= new EventEmitter

cancel(){
  this.onCancel.emit()

}
cdelete(){
  this.onCdelete.emit(this.data)

}
}
