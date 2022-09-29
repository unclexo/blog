import { vi } from 'vitest'
import axiosMock from 'axios'
import { createPinia } from 'pinia'
import {render, screen } from '@testing-library/vue'

import About from '../../views/AboutView.vue'

vi.mock('axios')

const aboutWrapper = () => {
    return render(About, {
        global: {
            plugins: [createPinia()]
        }
    })
}

test('it renders spinner if data is NOT available for this page', () => {
    const { html } = aboutWrapper()

    expect(html()).toContain('data-test="about-spinner"')
})

test('it populate data to the page via ajax get request', async () => {
    axiosMock.get.mockResolvedValueOnce({
        data: '<h1 class="text-4xl mb-4">Hello there!</h1>'
    })

    aboutWrapper()

    expect(axiosMock.get).toHaveBeenCalledTimes(2)
    expect(axiosMock.get).toHaveBeenCalledWith('https://raw.githubusercontent.com/unclexo/data/main/blog/about.html')

    expect(
        await screen.findByText('Hello there!')
    ).toBeInTheDocument()
})