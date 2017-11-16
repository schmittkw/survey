import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Poll } from '../poll';
import { Router, ActivatedRoute } from '@angular/router';
import { PollService } from '../poll.service';
import { OptionService } from '../option.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css']
})
export class PollShowComponent implements OnInit, OnDestroy {

  currentUser: User = new User();
  poll: Poll = new Poll();
  poll_id: string;
  subscription: Subscription;

  constructor(
    private _userService: UserService,
    private _pollService: PollService,
    private _optionService: OptionService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.subscription = this._route.params.subscribe(params => this.poll_id = params.id);
    console.log(this.poll_id);
    this.getPoll()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  setCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    if (this.currentUser === null){
      this._router.navigateByUrl('/');
    }
  }

  getPoll() {
    this._pollService.show(this.poll_id, poll => this.poll = poll);
  }

  update(option_id: string) {
    this._optionService.update(option_id, res => this.getPoll());
  }

}
