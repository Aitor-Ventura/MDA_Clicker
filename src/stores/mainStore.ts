import { defineStore } from "pinia"
import constructions from "@/assets/constructions"
import upgrades from "@/assets/upgrades"
import skins from "@/assets/skins"
import achievements from "@/assets/achievements"

export const useMainStore = defineStore("main", {
    state: () => ({
        totalPoints: 0,
        pointsPerSecond: 1,
        pointsPerClick: 1,
        interval: setInterval(() => { }, 1000),
        constructions: constructions,
        upgrades: upgrades,
        skins: skins,
        achievements: achievements,
        actualSkin: skins[0].srcImage,
        maxTotalPoints: 0,
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
                this.interval = setInterval(() => {
                    this.totalPoints += 1;
                    this.storeCookie("totalPoints");
                    if(this.maxTotalPoints < this.totalPoints) {
                        this.maxTotalPoints = this.totalPoints
                    }
                }, (1/this.pointsPerSecond)*1000)
            } else {
                this.interval = setInterval(() => {
                    this.totalPoints += this.pointsPerSecond/16;
                    this.storeCookie("totalPoints");
                    if(this.maxTotalPoints < this.totalPoints) {
                        this.maxTotalPoints = this.totalPoints
                    }
                    this.skins.forEach(skin => {
                        if (this.totalPoints >= skin.minPoints) {
                            skin.available = true
                        }
                    })
                }, 62.5)
            }
        },
        setSkin(skin: string) {
            this.actualSkin = skin
        },
        getSkin() {
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
        assignCookies() {
            if(this.checkCookie("totalPoints")) {
                this.totalPoints = parseInt(this.getCookie("totalPoints"))
                this.maxTotalPoints = parseInt(this.getCookie("maxTotalPoints"))
            }
            if (this.checkCookie("pointsPerSecond")) {
                this.pointsPerSecond = parseInt(this.getCookie("pointsPerSecond"))
                this.constructions.forEach(construction => {
                    construction.pointsPerSeconds = parseInt(this.getCookie(construction.name + "PointsPerSecond"))
                    construction.purchased = parseInt(this.getCookie(construction.name + "Purchased"))
                    construction.price = parseInt(this.getCookie(construction.name + "Price"))
                });
                this.upgrades.forEach(upgrade =>{
                    upgrade.purchased =  this.getCookie(upgrade.name + "Purchased") === 'true'
                });
            }
            if(this.checkCookie("skins")) {
                this.actualSkin = this.getCookie("skins")
            }
        },
        storeCookie(cname: String) {
            switch (cname) {
                case "totalPoints": 
                    document.cookie = cname + "=" + this.totalPoints;
                    document.cookie = "maxTotalPoints=" + this.maxTotalPoints;
                    break;
                case "pointsPerSecond":
                    document.cookie = cname + "=" + this.pointsPerSecond;
                    this.constructions.forEach(construction => {
                        document.cookie = construction.name + "PointsPerSecond=" + construction.pointsPerSeconds
                        document.cookie = construction.name + "Purchased=" + construction.purchased
                        document.cookie = construction.name + "Price=" + construction.price
                    });
                    this.upgrades.forEach(upgrade =>{
                        document.cookie = upgrade.name + "Purchased=" + upgrade.purchased
                    })
                    break;
                case "skins":
                    document.cookie = "skins=" + this.actualSkin;
                    break;
            }
        },
        checkCookie(cname: String) {
            if(this.getCookie(cname) != "") {
                return true
            }
            return false
        },
    }
})