import Messages from '@/common/loading-messages.js'

export const state = () => ({

    currentLoadingMessage: ''

})

export const mutations = {

    setCurrentLoadingMessage (state, message) {
        state.currentLoadingMessage = message
    }

}

export const actions = {

    updateLoadingMessage ({ commit }) {
        const max = Messages.length - 1
        const index = Math.floor(Math.random() * (max - 0 + 1)) + 0
        const message = Messages[index]

        commit('setCurrentLoadingMessage', message)
    }

}
