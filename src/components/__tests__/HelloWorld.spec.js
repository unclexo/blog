import { render } from '@testing-library/vue'
import HelloWorld from '../HelloWorld.vue'

test('it renders properly', () => {
  const { getByText } = render(HelloWorld, {
    props: {
      msg: 'Hello unclexo!',
      desc: 'To the tiny home of #unclexo'
    }
  })

  expect(getByText('Hello unclexo!')).toBeInTheDocument()
  expect(getByText('To the tiny home of #unclexo')).toBeInTheDocument()
})
