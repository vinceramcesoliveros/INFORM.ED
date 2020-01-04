import { Gender } from '~/entities/enums/gender'
import { Role } from '~/entities/accounts'

/**
 * This is temporary interface for
 * simplicity.
 */

export interface IAccount {
  readonly username: string
  readonly password: string
  readonly firstName: string
  readonly middleName: string
  readonly lastName: string
  readonly gender: Gender
  readonly role: Role | string | null
  readonly image?: string
}
