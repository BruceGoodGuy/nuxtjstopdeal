<template>
    <div class="col-md-3 col-12">
        <span>Danh mục</span>
        <ul class="list-group categories">
            <li class="list-group-item">
                <nuxt-link :to="{query: {cat: 1}}" :class="{'text-danger': cat == 1}">Cháo</nuxt-link>
            </li>
            <li class="list-group-item">
                <nuxt-link :to="{query: {cat: 2}}" :class="{'text-danger': cat == 2}">Cơm</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default ({
    props: ["cat"],
    computed: {
        mapState(){
            return {category};
        },
        doneTodos(){
            return this.$store.getters.getSortCategory
        }
    },
    methods: {

    },
    created: function(){

    }
})
</script>
