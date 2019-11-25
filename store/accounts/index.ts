import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex'
import { IAccount } from 'interfaces/Account'
import { AxiosResponse } from 'axios'
import TableMixins from 'mixins/TableMixins'
export const state = () => ({
  accounts: [] as IAccount[]
})
export type RootState = ReturnType<typeof state>
export const mutations = mutationTree(state, {
  SET_ACCOUNTS(state: RootState, accounts: IAccount[]) {
    //This example below is just an overkill, but if we create a
    //factory function that handles the callback, then we'll use this
    //state.accounts = TableMixins.makeTable(account, items => items)
    state.accounts = accounts
  },
  ADD_ACCOUNT(
    state: RootState,
    { name, email }: { name: string; email: string }
  ) {
    state.accounts.push({
      name,
      email,
      id: Math.floor(Math.random() * 100 + 1)
    })
  }
})

export const getters = getterTree(state, {
  GET_ACCOUNTS(state: RootState) {
    return state.accounts
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
    }
  }
)
