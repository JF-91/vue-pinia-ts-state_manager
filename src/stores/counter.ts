import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: ()=>{
        return {
            count: 0,
            numerOfChanges: 0,
        }
    },

    actions:{
        incrementBy (value:number) {
            this.count += value;
            this.numerOfChanges++;
        }
    },

})