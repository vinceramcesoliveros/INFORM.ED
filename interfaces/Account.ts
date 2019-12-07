/**
 * This is temporary interface for
 * simplicity.
 */

export interface IAccount {
  id?: number
  accountID?: number
  name: string
  // firstname: string
  // middlename?: string | ''
  // lastname: string
  gender?: Gender
  email: string
  img_profile?: any
}

enum Gender {
  male,
  female
}
