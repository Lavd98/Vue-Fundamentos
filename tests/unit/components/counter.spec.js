import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {

    let wrapper

    beforeEach(() => {
        wrapper  = shallowMount( Counter )
    })
    
    // test('Debe de hacer con el snapshot', () =>{
    
    //     const wrapper = shallowMount( Counter )
    //     expect(wrapper.html()).toMatchSnapshot()

    // })

    test('h2 debe de tener el valor por defecto', () =>{

        expect (wrapper.find('h2').exists()).toBeTruthy()

        const h2 = wrapper.find('h2').text()
        
        expect(h2).toBe('Counter')
    })

    test('el valor por defecto debe ser de 100 en p', () => {
        
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('100')
    })

    test('Debee de incrementar y decrementar el contador', async() =>{
        
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        
       
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')
    })

    test('Debe de establecer el valor por defecto', () => {
        const {start} = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test('Debe de mostrar la prop title', () => {
        const title = 'Hola Mundo'
        const wrapper = shallowMount (Counter, {
            props: {
                title
            }
        })
        
        expect(wrapper.find('h2').text()).toBe(title)
    })
})