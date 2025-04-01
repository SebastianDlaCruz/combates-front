import { Boxer } from "./boxer.model";

export interface FightsResponse {
  idClashes: number;
  boxers: Boxer[];
}

export interface Fights {
  id: number;
  number: number;
  id_type_clashes: number;
  rounds: number;
  id_category: number;
  id_state: number;
}
