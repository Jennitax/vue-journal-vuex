import {shallowMount} from '@vue/test-utils'
import MyFab from '@/modules/daybook/components/MyFab.vue'

describe('Pruebas en el FAB component', () => {

    test('debe mostrar el icono por defecto', () => {

        const wrapper = shallowMount(MyFab)
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-plus')).toBeTruthy()
    })

    test('debe mostrar el icono por argumento: fa-circle', () => {

        const wrapper = shallowMount(MyFab, {
            props: {
                icon: 'fa-circle'
            }
        })
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-circle')).toBeTruthy()
    })

    test('debe emitir el evento on:click cuando se hace click', () => {

        const wrapper = shallowMount (MyFab)

        wrapper.find('button').trigger('click')

        expect(wrapper.emitted('on:click')).toHaveLength(1)
    })
})