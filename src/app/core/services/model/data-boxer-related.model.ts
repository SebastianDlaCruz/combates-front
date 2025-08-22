import { Category } from "@core/models/category.model";
import { Coach } from "@core/models/coach.model";
import { School } from "@core/models/school.model";
import { StateBoxer } from "@core/models/state-boxer.model";

export interface DataBoxerRelated {
  schools: School[];
  categories: Category[];
  couches: Coach[];
  stateBoxer: StateBoxer[];
}
