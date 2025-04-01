import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Boxer } from '@core/models/boxer.model';
import { Fights } from '@core/models/fights.model';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { CoachComponent } from '@shared/components/coach/coach.component';
import { SchoolComponent } from '@shared/components/school/school.component';
import { StateBoxerComponent } from '@shared/components/state-boxer/state-boxer.component';
import { StateFightsComponent } from '@shared/components/state-fights/state-fights.component';
import { addIcons } from 'ionicons';
import { personAdd, settingsSharp } from 'ionicons/icons';
import { AdapterParticipantsService } from './services/adapter-participants/adapter-participants.service';
@Component({
  selector: 'app-items-fights',
  templateUrl: './items-fights.component.html',
  styleUrls: ['./items-fights.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, StateBoxerComponent, StateFightsComponent, SchoolComponent, CoachComponent]
})
export class ItemsFightsComponent implements OnChanges {

  private adapterParticipants = inject(AdapterParticipantsService);


  @Input() fight: Fights | null = null;

  boxerOne: Boxer | null = null;
  boxerTwo: Boxer | null = null;
  state = "";
  constructor() {
    addIcons({ personAdd, settingsSharp });
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.fight) {
      this.adapterParticipants.getBoxersParticipants(this.fight.id).subscribe({
        next: (res) => {
          if (res[0]) {

            this.boxerOne = res[0].data ?? null;
            console.log('this.boxerOne', res[0].data)
          }
          if (res[1]) {
            this.boxerTwo = res[0].data ?? null;
          }
        }
      })


    }

  }



}
