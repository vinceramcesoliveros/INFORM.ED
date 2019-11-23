import { getterTree, mutationTree } from 'nuxt-typed-vuex'
import { Administrator } from 'interfaces/Administrator'
import { Item } from 'interfaces/Item'
export const state = () => ({
  width: 9999,
  title: '',
  drawer: false,
  rightDrawer: false,
  darkMode: false,
  items: [
    {
      icon: 'mdi-apps',
      title: 'Home',
      to: '/'
      //Add access role type which item belongs to.
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Subjects Taken',
      to: '/subjects'
    },
    {
      icon: 'mdi-star',
      title: 'Grades',
      to: '/grades'
    },
    {
      icon: 'mdi-notebook-outline',
      title: 'Course',
      to: '/course'
    }
  ],
  administrator: [
    {
      title: 'Accounts',
      icon: 'mdi-account',
      to: '/admin/accounts'
    },
    {
      title: 'Students',
      icon: 'mdi-folder-account',
      to: '/admin/students'
    },
    {
      title: 'Teacher',
      icon: 'mdi-teach',
      to: '/admin/teachers'
    },
    {
      title: 'Roles',
      icon: 'mdi-shield',
      to: '/admin/roles'
    },
    {
      title: 'Access Rights',
      icon: 'mdi-key-variant',
      to: '/admin/access-rights'
    },
    {
      title: 'Rooms',
      icon: 'mdi-door',
      to: '/admin/rooms'
    },
    {
      title: 'Subjects',
      icon: 'mdi-book-open-page-variant',
      to: '/admin/subjects'
    },
    {
      title: 'Syllabus',
      icon: 'mdi-notebook-outline',
      to: '/admin/syllabus'
    },
    {
      title: 'Grades',
      icon: 'mdi-star',
      to: '/admin/grades'
    }
  ]
})

export type RootState = ReturnType<typeof state>
export const mutations = mutationTree(state, {
  closeDrawer(state: RootState): void {
    state.drawer = false
    state.rightDrawer = false
  },
  updateLeftDrawer(state: RootState): void {
    state.drawer = !state.drawer
  },
  updateRightDrawer(state: RootState): void {
    state.rightDrawer = !state.rightDrawer
  },
  updateTitle(state: RootState, { title = '' }): void {
    state.title = title
  },
  updateDarkMode(state: RootState): void {
    state.darkMode = !state.darkMode
  },

  /**
   * On initial load of the page.
   * The drawer is set to false for mobile view.
   * This function will set the value of the width
   * as well as update the value of the drawer.
   * The UI will become more responsive without
   * adding the event listener.
   */
  updateWidth(state: RootState, width: number): void {
    state.width = width
    if (state.width > 1260) {
      state.drawer = true
      state.rightDrawer = true
    } else {
      state.drawer = false
      state.drawer = false
    }
  }
})

export const getters = getterTree(state, {
  getItems(state: RootState): Item[] {
    return state.items
  },
  getTitle(state: RootState): string {
    return state.title || ''
  },
  getAdministrator(state: RootState): Administrator[] {
    return state.administrator
  },
  getDarkMode(state: RootState): boolean {
    return state.darkMode
  }
})
