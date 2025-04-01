import { inject, Injectable } from '@angular/core';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { ParticipantsHttpService } from '@core/http/participants-http/participants-http.service';
import { forkJoin, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdapterParticipantsService {

  private participantsHttp = inject(ParticipantsHttpService);
  private boxerHttp = inject(BoxerHttpService);


  getBoxersParticipants(id_clashes: number) {
    return this.participantsHttp.getAllByIdClashes(id_clashes).pipe(
      switchMap(res => {
        return forkJoin(res.data?.map(item => this.boxerHttp.getBoxer(item.id_boxer)) ?? [])
      })
    )
  }

}
