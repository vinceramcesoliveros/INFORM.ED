import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex'
import { AxiosResponse } from 'axios'

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
        const account = res.data
        commit('SET_ACCOUNTS', account)
      } catch (error) {
        console.log(error)
      }
    }
  }
)
