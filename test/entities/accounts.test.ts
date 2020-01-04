import { Account } from '@/entities/accounts'
import { IAccount } from '~/interfaces/Account'
import { validateOrReject } from 'class-validator'

describe('Account', () => {
  let account: IAccount

  const name = 'ram'
  const email = 'ram231@x.com'
  beforeAll(() => {
    // account = new Account(name, email)
    console.log(account)
  })
  test('account should be valid', () => {
    expect(account).toMatchObject({ name, email })
  })

  test('account should not be valid', async () => {
    try {
      // const fakeAccount = new Account(name, name)
      // await validateOrReject(fakeAccount)
    } catch (err) {
      //@ts-ignore
      expect(err[0].constraints.isEmail).toMatch('Incorrect email format')
    }
  })
})
