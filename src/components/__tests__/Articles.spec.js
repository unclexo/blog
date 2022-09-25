import { render } from '@testing-library/vue'
import Articles from '../Articles.vue'

test('it renders spinner when articles are NOT available', () => {
    const { html } = render(Articles, { props: { articles: null } })

    expect(html()).toContain('data-test="articles-spinner"')
})

test('it renders articles when they are available', () => {
    const { getByText } = render(Articles, {
        props: {
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
        },
    })

    expect(getByText('title 1')).toBeInTheDocument()
    expect(getByText('title 2')).toBeInTheDocument()
})