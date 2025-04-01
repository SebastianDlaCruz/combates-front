import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StateBoxerHttpService } from '@core/http/state-boxer-http/state-boxer-http.service';
import { StateBoxer } from '@core/models/state-boxer.model';

@Component({
  selector: 'app-state-boxer',
  templateUrl: './state-boxer.component.html',
  styleUrls: ['./state-boxer.component.scss'],
})
export class StateBoxerComponent implements OnChanges {

  @Input() id: number | null = null;

  stateBoxer: StateBoxer | null = null;

  private stateBoxerHttp = inject(StateBoxerHttpService);


  ngOnChanges(changes: SimpleChanges): void {
    if (this.id) {
      this.stateBoxerHttp.getStateBoxer(this.id).subscribe({
        next: (res) => {
          if (res.data) {
            this.stateBoxer = res.data;
          }
        }
      })
    }
  }


}
