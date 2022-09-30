import { render } from '@testing-library/vue'

import ContactView from '../../views/ContactView.vue'

test('it can inject data to it', () => {
    const { getByText } = render(ContactView, {
        global: {
            provide: {
                contact: {
                    phone: '+8801718839535',
                    email: 'itsunclexo@gmail.com',
                },
            },
        },
    })

    expect(getByText('Mobile: +8801718839535')).toBeInTheDocument()
    expect(getByText('Email: itsunclexo@gmail.com')).toBeInTheDocument()
})