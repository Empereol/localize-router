import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.user = route.params.pipe(map((p: any) => p.id));
  }

}
