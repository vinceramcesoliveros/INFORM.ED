import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex'
import { IAccount } from 'interfaces/Account'
import { AxiosResponse } from 'axios'
import { validateOrReject } from 'class-validator'
import { plainToClass } from 'class-transformer'
import { Account } from '~/entities/accounts'

export const state = () => ({
  accounts: [] as Account[],
  error: '' as string
})
export type RootState = ReturnType<typeof state>
export const mutations = mutationTree(state, {
  SET_ACCOUNTS(state: RootState, accounts: Account[]) {
    //This example below is just an overkill, but if we create a
    //factory function that handles the callback, then we'll use this
    //state.accounts = TableMixins.makeTable(account, items => items)
    state.accounts = accounts.map(account => {
      return {
        ...account,
        //@ts-ignore
        role: account.role.name
      }
    })
    console.log(state.accounts)
  },

  /**
   * We use validator from 'class-validator'
   * which you can read from  [entities](../../entities/accounts.ts)
   */
  ADD_ACCOUNT(state: RootState, account: Account) {
    state.accounts.push(account)
  },
  SET_ACCOUNT_ERROR(state: RootState, { err }) {
    state.error = err.toString()
  },
  CLEAR_ERROR(state: RootState) {
    state.error = ''
  },
  CLEAR_ACCOUNTS(state: RootState) {
    state.accounts = []
  }
})

export const getters = getterTree(state, {
  GET_ACCOUNTS(state: RootState) {
    return state.accounts
  },
  GET_ACCOUNT_ERRORS(state: RootState) {
    return state.error
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async FETCH_ACCOUNTS({ commit }) {
      try {
        const res: AxiosResponse<Account[]> = await this.$axios.get(
          `${this.$axios.defaults.baseURL}/accounts`
        )
        const account = plainToClass(Account, <Account[]>res.data)
        commit('SET_ACCOUNTS', account)
      } catch (error) {
        console.log(error)
      }
    },
    async validateAccount(
      { commit },
      {
        username,
        password,
        firstName,
        lastName,
        middleName,
        gender,
        role,
        image
      }: IAccount
    ) {
      try {
        const objAccount = {
          username,
          password,
          firstName,
          lastName,
          middleName,
          gender,
          role,
          image
        }
        const newAccount = plainToClass(Account, objAccount)

        await validateOrReject(newAccount)
        commit('ADD_ACCOUNT', newAccount)
      } catch (err) {
        console.log(err)
        commit('SET_ACCOUNT_ERROR', { err: err[0].constraints.isEmail })
      }
    }
  }
)
