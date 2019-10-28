

export const state = (): RootState => ({
    title: '',
    drawer: true,
    items: [
        {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
        },
        {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
        },
        {
            icon: "mdi-github",
            title: "GitHub",
            to: "/github"
        }
    ],
    categories: [{
        icon: '',
        title: '',
        items: [
            {
                title: '',
                icon: '',
                to: '',

            }
        ]
    }
    ]
})

export const mutations: MutationState = {
    updateDrawer(state: RootState): void {
        state.drawer = !state.drawer;
    },
    updateTitle(state: RootState, { title = "" }): void {
        state.title = title;
    }
}


export const getters = {
    getItems(state: RootState): Item[] {
        return state.items;
    },
    getTitle(state: RootState): string {
        return state.title;
    }
}



type RootState = {
    drawer: boolean;
    items: Item[];
    categories: Category[];
    title?: string;
}

type Item = {
    icon: string;
    title: string;
    to: string
}
type Category = {
    icon: string,
    title: string,
    items: Item[]
}

type MutationState = {
    updateDrawer: Function;
    updateTitle: Function;
}
