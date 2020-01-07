import { Gender } from '~/entities/enums/gender'

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
  readonly role: string | null
  readonly image?: string
}
