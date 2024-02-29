import {createStore} from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-journal-state'

journalState

const createVuexStore = (initialState) => 
    createStore({
        modules: {
            journal: {
            ...journal,
            state: {...initialState}
           }
        }
    })


describe('Vuex - Pruebas en el journal Module', () => {

    test('este es el estado inicial, debe tener este state', () => {

        const store = createVuexStore(journalState)
        const {isLoading, entries} = store.state.journal

        expect(isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)
    })
})