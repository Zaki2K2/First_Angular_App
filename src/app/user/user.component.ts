import { Component, Input, input, Output, EventEmitter, output } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model'
import { CardComponent } from "../shared/card/card.component";



// const USERS: User[] = DUMMY_USERS;
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // @Input({ required: true }) selected!: boolean;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();



  get imagePath()
  {
    return 'assets/users/' + this.user.avatar;
  }

onSelectUser()  {
  this.select.emit(this.user.id);
 }
}
