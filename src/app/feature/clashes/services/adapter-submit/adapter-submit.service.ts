import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { FightsHttpService } from '@core/http/fights-http/fights-http.service';
import { Fights } from '@core/models/fights.model';
import { forkJoin, switchMap } from 'rxjs';

interface UpdateCorner {
  idOne: string;
  cornerOne: string;
  idTwo: string;
  cornerTwo: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdapterSubmitService {

  private readonly boxerHttp = inject(BoxerHttpService);
  private readonly fightsHttp = inject(FightsHttpService);


  private saveCorner(corner: UpdateCorner) {

    return forkJoin([
      this.boxerHttp.updateCorner(corner.idOne, { corner: corner.cornerOne }),
      this.boxerHttp.updateCorner(corner.idTwo, { corner: corner.cornerTwo })
    ]);

  }



  create(form: FormGroup) {

    return this.saveCorner({
      idOne: form.get('id_boxer_one')?.value,
      cornerOne: form.get('cornerBoxerOne')?.value,
      idTwo: form.get('id_boxer_two')?.value,
      cornerTwo: form.get('cornerBoxerTwo')?.value
    }).pipe(

      switchMap(() => {

        /* form.get('cornerBoxerOne')?.disable();
        form.get('cornerBoxerTwo')?.disable(); */
        form.removeControl('cornerBoxerOne');
        form.removeControl('cornerBoxerTwo');
        form.removeControl('id_boxer_three')
        console.log(form.value);
        return this.fightsHttp.create<Fights>(form.value)
      })
    )

  }

}
