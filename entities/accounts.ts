import { IAccount } from 'interfaces/Account'
import { IsString, IsEmail } from 'class-validator'
export class Account implements IAccount {
  @IsEmail(
    {},
    {
      message: 'Incorrect email format'
    }
  )
  email: string
  @IsString()
  name: string
  constructor(name: string, email: string) {
    this.name = name
    this.email = email
  }
}
