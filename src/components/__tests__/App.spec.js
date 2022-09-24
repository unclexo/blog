import {vi} from "vitest"
import axiosMock from "axios"
import { render, screen } from "@testing-library/vue"

import { createRouter, createWebHistory } from "vue-router"
import App from "../../App.vue"
import Home from "../../views/HomeView.vue"
import About from "../../views/AboutView.vue"

vi.mock('axios')

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
    const { html } = mouteApp()

    expect(html()).toContain('data-test="header"')
})

test('it populate data to the app via ajax get request', async () => {
    axiosMock.get.mockResolvedValueOnce({
        data: {
            welcomeMsg: 'Welcome!',
        }
    })

    mouteApp()

    expect(axiosMock.get).toHaveBeenCalledTimes(2)
    expect(axiosMock.get).toHaveBeenCalledWith('https://raw.githubusercontent.com/unclexo/data/main/blog/index.json')

    expect(
        await screen.findByText('Welcome!')
    ).toBeInTheDocument()
})

