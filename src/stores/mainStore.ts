import { defineStore } from "pinia"
import constructions from "@/assets/constructions"
import upgrades from "@/assets/upgrades"

export const useMainStore = defineStore("main", {
    state: () => ({
        totalPoints: 0,
        pointsPerSecond: 1,
        pointsPerClick: 1,
        constructions: constructions,
        upgrades: upgrades,
    }),
    getters: {
        doubleTotalPoints: state => {
            state.totalPoints * 2
        }
    },
    actions: {
        // Should be triggered by a "Click" event
        addPointsPerClick() {
            this.totalPoints += this.pointsPerClick;
        },
        addPointsPerSecond() {
            setInterval(() => {this.totalPoints += this.pointsPerSecond}, 1000)
        },
    }
})