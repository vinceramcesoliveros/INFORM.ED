import { IAccount } from 'interfaces/Account'
import { IsString, IsEmail } from 'class-validator'
export class Account implements IAccount {
  @IsString()
  name: string
  @IsEmail()
  email: string
  constructor(name: string, email: string) {
    ;(this.name = name), (this.email = email)
  }
}
