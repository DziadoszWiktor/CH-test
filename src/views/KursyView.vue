<template>
    <h1 class="p-2">Tabela kursów NBP z dnia {{ data[0].effectiveDate }}</h1>

    <table class="table w-50">
        <thead>
        <tr>
            <th>Waluta</th>
            <th>Kod</th>
            <th>Kurs</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="rate of data[0].rates">
            <td>{{ rate.currency }}</td>
            <td>{{ rate.code }}</td>
            <td>{{ rate.mid }}</td>
        </tr>
        </tbody>
    </table>

    <!-- <p v-for = "rate of data[0].Rates"> {{ rate.Currency }}</p>-->
</template>
  
<script setup>
    import { useFetch } from '../composable/useFetch'
    const { data, fetchData } = useFetch('https://api.nbp.pl/api/exchangerates/tables/a/')
</script>