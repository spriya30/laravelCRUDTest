<template>
    <div class="card">
        <select v-model="selected">
            <option v-for="option in options" v-bind:value="option.value" :key="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>{{ selected }}</span>
        <button type="button" @click='allRecords()'>Increment: {{count}}</button>
        <p v-if="count == 5"> DOC </p>
        <p v-else-if="count == 2"> DO </p>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.options)
        },
        methods: {
            allRecords(){
                this.count++;
            }            
        },
        data() {
            return {
                selected: 'AWS',
                count: 0,
                options: [
                    { text: 'Total', value: 'AWS' },
                    { text: 'Day', value: 'DOC' },
                    { text: 'Week', value: 'SDC' },
                    { text: 'Month', value: 'VTR' }
                ]
            }
        }
    }
</script>

<style scoped>
    .card{
        height: 350px;
        width: 300px;
        border: 1px solid red;
        margin-left: 450px;
    }
    .card select{
        margin-left: 130px;
        margin-top: 20px;
    }
    .card span{
        display: flex;
        flex-flow: row-reverse wrap;
        padding: 135px;
    }
</style>
