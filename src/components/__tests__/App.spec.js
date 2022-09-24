import { render } from "@testing-library/vue"

import { createRouter, createWebHistory } from "vue-router"

import App from "../../App.vue"
import Home from "../../views/HomeView.vue"
import About from "../../views/AboutView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        }, {
            name: 'about',
            path: '/about',
            component: About,
        }
    ],
})

const mouteApp = () => {
    return render(App, {
        global: {
            plugins: [router],
        },
    })
}

test('it renders properly', () => {
    const { getByText } = mouteApp()

    expect(getByText('You did it!')).toBeInTheDocument()
})

