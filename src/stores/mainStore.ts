import { defineStore } from "pinia"
import constructions from "@/assets/constructions"
import upgrades from "@/assets/upgrades"
import skins from "@/assets/skins"

export const useMainStore = defineStore("main", {
    state: () => ({
        totalPoints: 0,
        pointsPerSecond: 1,
        pointsPerClick: 1,
        interval: setInterval(() => { }, 1000),
        constructions: constructions,
        upgrades: upgrades,
        skins: skins,
        actualSkin: "src/assets/constructionsImg/paperroll.png",
        check1: false,
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
            if(this.checkCookie("pointsPerSecond")) {
                this.pointsPerSecond = parseInt(this.getCookie("pointsPerSecond"))
            }
            clearInterval(this.interval)
            if(this.pointsPerSecond < 13){
                this.interval = setInterval(() => {this.totalPoints += 1}, (1/this.pointsPerSecond)*1000)
            } else {
                this.interval = setInterval(() => {this.totalPoints += this.pointsPerSecond/16}, 62.5)
            }
            
        },
        setSkin(skin: string) {
            this.actualSkin = skin
        },
        getSkin() {
            console.log(this.actualSkin)
            return this.actualSkin
        },
        // COOKIES //
        getCookie(cname: String) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for(let i = 0; i < ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
        },
        checkCookie(cname: String) {
            if(this.getCookie(cname) != "") {
                return true
            } else {
                return false
            }
        },
    }
})