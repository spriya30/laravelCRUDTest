<template>
    <div class="card">
        <button :type="type" class="my-button" v-text="test.name"></button>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.post('api/vue', {})
                .then(response => {
                    this.test = response.data;
                });
            console.log(this.options)
        },
        props:[
            'text',
            'type'
        ],
        data() {
            return {
                test:null,
            }
        }
    }
</script>

<style scoped>
    .my-button{
        background-color: antiquewhite;
        color: blueviolet;
        padding: 10px 20px;
        font-weight: bold;
    }
</style>
