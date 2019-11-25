import { Account } from 'entities/accounts'
import { IAccount } from 'interfaces/Account'

export const addAccounts = function(account: IAccount) {}

//Params incoming controller
export const fetchAccounts = function(response: Response) {
  const { name, email }: IAccount = response.body as any // Red Flag.

  const account = new Account(name, email)
  //returns outpput controller
}
