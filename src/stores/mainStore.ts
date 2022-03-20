import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
    state: () => ({
        totalPoints: 0,
        pointsPerSecond: 1
    }),
    getters: {
        doubleTotalPoints: state => {
            state.totalPoints * 2
        }
    },
    actions: {
        // Should be triggered by a "Click" event
        addPointsPerClick() {
            this.totalPoints++
        },
        addPointsPerSecond() {
            setInterval(() => {this.totalPoints += this.pointsPerSecond}, 1000)
        }
    }
})