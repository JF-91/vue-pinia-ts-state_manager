<template >
    <div>
        Counter Vue
        <h1>Home: {{ counterStore.count }}</h1>

        <h3>{{ counterStore.numerOfChanges  }}</h3>
        <button @click="counterStore.incrementBy(5)">increment</button>

    </div>
</template>
<script setup lang="ts">  
import {useCounterStore} from '../stores/counter'

const counterStore = useCounterStore()
</script>
<style lang="scss">
    
</style>