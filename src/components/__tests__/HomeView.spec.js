import { render } from '@testing-library/vue'

import HomeView from '../../views/HomeView.vue'

test('it can inject data to it', () => {
    const { html, getByText } = render(HomeView, {
        global: {
            provide: {
                articles: [
                    {
                        "title": "title 1",
                        "description": "desc 1",
                        "url": "https://example.com/title-1",
                    }, {
                        "title": "title 2",
                        "description": "desc 2",
                        "url": "https://example.com/title-2"
                    },
                ],
            }
        }
    })

    expect(getByText('title 1')).toBeInTheDocument()
    expect(html()).not.toContain('desc 3')
})