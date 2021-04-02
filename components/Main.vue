<template>
<div class="col-md-9 col-12">
    <span>All</span>
    <div class="row">
        <Food></Food>
    </div>
</div>
</template>
<script>
import Food from '../components/Food';
import { mapGetters, mapState } from "vuex";
export default ({
    computed: mapState(["articles"]),
    mounted: async function(){
        await this.$store.dispatch("fetchArticles");
        console.log(this.articles)
    }
})
</script>