import axios from 'axios'
import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
    state: () => {
        return {
            content: '',
        }
    },

    actions: {
        async getContent(url) {
            const response = await axios.get(url)
            if (response && response.data) {
                this.content = response.data
            }
        },
    }
})