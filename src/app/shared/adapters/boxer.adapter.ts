import { Boxer } from "@core/models/boxer.model"

export const newBoxerModel = (boxer: Boxer) => {

  return {
    id: boxer.id,
    name: boxer.name,
    id_school: boxer.id_school,
    age: boxer.age,
    disability: boxer.disability,
    id_category: boxer.id_category,
    weight: boxer.weight,
    id_coach: boxer.id_coach,
    details: boxer.details,
    id_state: boxer.id_state,
    corner: boxer.corner,
    fights: boxer.fights,
    gender: boxer.gender

  }
}
