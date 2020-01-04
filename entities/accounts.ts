import { IAccount } from 'interfaces/Account'
import {
  IsString,
  IsDefined,
  IsAlpha,
  IsEnum,
  IsMongoId,
  IsOptional
} from 'class-validator'
import { Gender } from './enums/gender'
export class Account implements IAccount {
  @IsDefined()
  @IsString()
  username: string
  @IsDefined()
  @IsString()
  password: string
  @IsDefined()
  @IsAlpha()
  @IsString()
  readonly firstName: string

  @IsDefined()
  @IsAlpha()
  @IsString()
  readonly middleName: string

  @IsDefined()
  @IsAlpha()
  @IsString()
  readonly lastName: string
  @IsDefined()
  @IsAlpha()
  @IsString()
  @IsEnum(Gender, {
    message: 'Gender must be male or female'
  })
  readonly gender: Gender
  @IsDefined()
  @IsMongoId()
  readonly role: Role | string

  @IsOptional()
  @IsString()
  readonly image?: string
}
export interface Role {
  _id: string
  name: string
}
