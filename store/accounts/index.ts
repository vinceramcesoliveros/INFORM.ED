import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex'
import { IAccount } from 'interfaces/Account'
import { AxiosResponse } from 'axios'
import { validateOrReject } from 'class-validator'
import { addAccounts } from '~/usecases/accounts'

export const state = () => ({
  accounts: [] as IAccount[],
  error: '' as string
})
export type RootState = ReturnType<typeof state>
export const mutations = mutationTree(state, {
  SET_ACCOUNTS(state: RootState, accounts: IAccount[]) {
    //This example below is just an overkill, but if we create a
    //factory function that handles the callback, then we'll use this
    //state.accounts = TableMixins.makeTable(account, items => items)
    state.accounts = accounts
  },

  /**
   * We use validator from 'class-validator'
   * which you can read from  [entities](../../entities/accounts.ts)
   */
  ADD_ACCOUNT(
    state: RootState,
    { name, email }: { name: string; email: string }
  ) {
    state.accounts.push({
      name,
      email,
      id: Math.floor(Math.random() * 100 + 1)
    })
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
        const res: AxiosResponse<IAccount[]> = await this.$axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )

        commit('SET_ACCOUNTS', res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async validateAccount(
      { commit },
      { name, email }: { name: string; email: string }
    ) {
      try {
        const account = addAccounts({ name, email })

        await validateOrReject(account)
        commit('ADD_ACCOUNT', { name: account.name, email: account.email })
      } catch (err) {
        console.log(err)
        commit('SET_ACCOUNT_ERROR', { err: err[0].constraints.isEmail })
      }
    }
  }
)
