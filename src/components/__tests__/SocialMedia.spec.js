import { render } from "@testing-library/vue"
import SocialMedia from '../SocialMedia.vue'

test('it renders spinner when social medium links are NOT available', () => {
    const { html } = render(SocialMedia, { props: { links: null } })

    expect(html()).toContain('data-test="social-media-spinner"')
})

test('it renders social medium links when they are available', () => {
    const { getByText } = render(SocialMedia, {
        props: {
            links: [
                {
                    "title": "Twitter",
                    "icon": "twitter",
                    "url": "https://twitter.com/unclexo"
                }, {
                    "title": "LinkedIn",
                    "icon": "linkedin",
                    "url": "https://bd.linkedin.com/in/unclexo"
                }
            ]
        }
    })

    expect(getByText('Twitter')).toBeInTheDocument()
})
