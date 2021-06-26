import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cards: {
            namespaced: true,
            state: () => ({
                cards: [],
                editedCard:null
            }),
            getters: {
                getCards: state => state.cards,
                getEditedCard: state => state.editedCard
            },
            mutations: {
                setCards(state, card) {
                    state.cards.push(card)
                },
                deleteCards(state, index){
                    state.cards.splice(index, 1)
                    state.editedCard = null
                },
                editCards(state, card){
                     state.editedCard= card
                },
                resetTheStore(state){
                    state.editedCard = null
                }
            }
        }
    }
})