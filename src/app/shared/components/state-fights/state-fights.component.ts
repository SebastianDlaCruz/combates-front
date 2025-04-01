import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StateFightsHttpService } from '@core/http/state-fights-http/state-fights-http.service';
import { StateFights } from '@core/models/state-fights.model';

@Component({
  selector: 'app-state-fights',
  templateUrl: './state-fights.component.html',
  styleUrls: ['./state-fights.component.scss'],
})
export class StateFightsComponent implements OnChanges {

  stateFights: StateFights | null = null;
  @Input() id: number | null = null;

  private stateFightsHttp = inject(StateFightsHttpService);

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id) {
      this.stateFightsHttp.getStateFights(this.id).subscribe({
        next: (res) => {
          if (res.data) {
            this.stateFights = res.data;
          }
        }
      })
    }
  }


}
