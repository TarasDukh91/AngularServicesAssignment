import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {
  activeUsers = this.usersService.activeUsers
  inactiveUsers = this.usersService.inactiveUsers
  clicks: number = this.counterService.clicks
  
  
  constructor(
    private usersService: UsersService,
    private counterService: CounterService) {}

}
