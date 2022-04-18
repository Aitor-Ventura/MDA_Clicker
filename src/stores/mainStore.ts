import { defineStore } from "pinia"
import constructions from "@/assets/constructions"
import upgrades from "@/assets/upgrades"

export const useMainStore = defineStore("main", {
    state: () => ({
        totalPoints: 0,
        pointsPerSecond: 1,
        pointsPerClick: 1,
        interval: setInterval(() => { }, 1000),
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
            clearInterval(this.interval)
            if(this.pointsPerSecond < 13){
                this.interval = setInterval(() => {this.totalPoints += 1}, (1/this.pointsPerSecond)*1000)
            } else {
                this.interval = setInterval(() => {this.totalPoints += this.pointsPerSecond/16}, 62.5)
            }
            
        },
    }
})