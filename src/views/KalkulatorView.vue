<template>
    <h1 class="p-2">Kalkulator Walutowy</h1>
    <h2 class="p-2">Chcę wymienić</h2>
    <form>
        <div class="form-group p-2">
            <label for="kwota">Kwota</label>
            <input type="number" class="form-control w-25" id="kwota">
            <label for="w">W walucie:</label>
            <select class="form-control w-25" id="w">
                <option>PLN - polski złoty</option>
                <option v-for="rate of sortedRates" :key="rate.code">{{ rate.code }} - {{ rate.currency }}</option>
            </select>
            <label for="na">Na walutę:</label>
            <select class="form-control w-25" id="na">
                <option>PLN - polski złoty</option>
                <option v-for="rate of sortedRates" :key="rate.code">{{ rate.code }} - {{ rate.currency }}</option>
            </select>  
        </div>
    </form>
    <h2 class="p-2">Wynik:</h2>
    <!--<h2 class="p-2">{{ result }}</h2>-->
</template>
  
<script setup>
    import { useFetch } from '../composable/useFetch'
    import { computed } from 'vue';

    const { data } = useFetch('http://api.nbp.pl/api/exchangerates/tables/a/')

    const sortedRates = computed(() => {
        const rates = data.value[0]?.rates
        return rates.slice().sort((a, b) => a.code.localeCompare(b.code))
    })

    /*
    const amount = ref(0);
    const fromCurrency = ref('');
    const toCurrency = ref('');

    const result = computed(() => {
        const fromRate = sortedRates.value.find(rate => rate.code === fromCurrency.value)?.mid || 1;
        const toRate = sortedRates.value.find(rate => rate.code === toCurrency.value)?.mid || 1;
        return (amount.value / fromRate * toRate).toFixed(4);
    });*/
</script>