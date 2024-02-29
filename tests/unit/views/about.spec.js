import {shallowMount} from '@vue/test-utils'
import About from '@/views/AboutView'

describe ('pruebas en el About View',() => {

    test ( 'debe de rednderizar el componente correctamente', () =>{

        const wrapper = shallowMount (About)
        expect (wrapper.html()).toMatchSnapshot()
    })

}) 
    