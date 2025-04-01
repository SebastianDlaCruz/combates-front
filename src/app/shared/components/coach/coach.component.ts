import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CoachHttpService } from '@core/http/coach-http/coach-http.service';
import { Coach } from '@core/models/coach.model';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss'],
})
export class CoachComponent implements OnChanges {

  @Input() id?: number;
  coach: Coach | null = null;
  private coachHttp = inject(CoachHttpService);

  ngOnChanges(changes: SimpleChanges): void {

    if (this.id) {
      console.log('id', this.id)
      this.coachHttp.getCoach(this.id).subscribe({
        next: (res) => {
          if (res.data) {
            this.coach = res.data
          }
        }
      });

    }

  }

}
