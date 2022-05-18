const app = new Vue({

    el: '#app',

    data: {

        progressbars: [
            {"name": "Einreise", "value": 0},
            {"name": "Waffenladen", "value": 100},
            {"name": "Friseurladen", "value": 100},
            {"name": "Kleidungsladen", "value": 100},
            {"name": "Einkaufsladen", "value": 100},
            {"name": "Fahrzeugladen", "value": 100},
            {"name": "Tankstellen", "value": 35},
            {"name": "Waffenfabrik", "value": 25},
            {"name": "Laptop", "value": 35},
            {"name": "Smartphone", "value": 80},
            {"name": "Spielerinteratkionen", "value": 65},
            {"name": "Allgemeine Synchronisation", "value": 55},
            {"name": "Level System", "value": 100},
            {"name": "Garagen System", "value": 100},
            {"name": "Immobilien System", "value": 15},
            {"name": "Waffen System", "value": 90},
            {"name": "Farming System", "value": 100},
            {"name": "Paintball System", "value": 0},
            {"name": "Kleidungs System", "value": 100},
            {"name": "Kleiderschrank System", "value": 95},
            {"name": "Inventar System", "value": 95},
            {"name": "Kofferraum System", "value": 100},
            {"name": "Lager System", "value": 100},
            {"name": "Voice System", "value": 90},
            {"name": "Minijob System", "value": 0},
            {"name": "Staats-Fraktion System", "value": 20},
            {"name": "Bad-Fraktion System", "value": 50},
            {"name": "Fraktions-Gangwar System", "value": 0},
            {"name": "Dealer System", "value": 0},
        ]
    },

    methods: {

        getTotalProgress() {
            return Math.round(((this.getProgressFromAllItems()/(this.progressbars.length*100))*100));
        },

        getProgressFromAllItems() {

            let progressbar = 0;

            for (let i = 0; i < this.progressbars.length; i++) {
                progressbar += this.progressbars[i].value;
            }

            return progressbar;
        }
    }
});