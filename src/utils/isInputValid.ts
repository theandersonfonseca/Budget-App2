import { ListType } from '../state/types'

export default function isInputValid(
  descriptionInput: string,
  amountInput: string,
  list: ListType[]
) {
  if (descriptionInput.trim().length === 0 || amountInput.trim().length === 0) {
    window.alert('Dados Inválidos!')

    return false
  }

  if (list.some((income) => income.description === descriptionInput)) {
    window.alert('Essa Descrição já Existe!')

    return false
  }

  return true
}
