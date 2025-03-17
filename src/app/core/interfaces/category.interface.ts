import { Category } from "@core/models/category.model";
import { ResponseRequest } from "@core/models/response-request.model";
import { Observable } from "rxjs";
import { ICrud } from "./crud.interface";

export interface ICategory extends ICrud {
  getCategory(id: number): Observable<ResponseRequest<Category>>
}
