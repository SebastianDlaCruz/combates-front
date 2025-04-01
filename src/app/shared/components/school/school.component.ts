import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { School } from '@core/models/school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnChanges {

  @Input() id?: number;
  school: School | null = null;
  private schoolHttp = inject(SchoolHttpService);


  ngOnChanges(changes: SimpleChanges): void {

    if (this.id) {
      this.schoolHttp.getSchool(this.id).subscribe({
        next: (res) => {
          if (res.data) {
            this.school = res.data
          }
        }
      })
    }
  }

}
