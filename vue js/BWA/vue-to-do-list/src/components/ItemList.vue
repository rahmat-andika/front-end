<template>
    <div>
        <div class="form-check">
            <input v-on:click="done" class="form-check-input" type="checkbox" value="">
            <label class="form-check-label" v-bind:class="{'item-done':tugasSaya.isFalse}" for="defaultCheck1">
                {{ tugasSaya.namaTugas }}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "ItemList",
    props: ["tugasSaya"],
    methods: {
        done: function() {
            this.tugasSaya.isFalse = !this.tugasSaya.isFalse;
        }
    }
}
</script>

<style scoped>
.item-done{
    color: chartreuse;
}
</style>