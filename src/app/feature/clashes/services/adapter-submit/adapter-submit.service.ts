import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { FightsHttpService } from '@core/http/fights-http/fights-http.service';
import { forkJoin } from 'rxjs';

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


  }

}
