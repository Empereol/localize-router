import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.user = route.params.pipe(map((p: any) => p.id));
  }
}
