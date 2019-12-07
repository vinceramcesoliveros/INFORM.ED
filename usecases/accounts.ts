import { Account } from '@/entities/accounts'
import { IAccount } from '@/interfaces/Account'

export const addAccounts = function({
  name,
  email
}: IAccount): Account {
  return new Account(name, email)
}

//Params incoming controller
export const fetchAccounts = function(response: Response) {
  const { name, email }: IAccount = response.body as any // Red Flag.

  const account = new Account(name, email)
  //returns outpput controller
}

export const accountHeader = (key: Array<string>, accounts: any) => {
  return key.map((element, index) => {
    const newElement = accounts[index]
    if (typeof newElement[element] !== 'object') {
      return {
        text: element ? element : '',
        value: element ? element : ''
      }
    }
    return {
      text: '',
      value: ''
    }
  })
}
