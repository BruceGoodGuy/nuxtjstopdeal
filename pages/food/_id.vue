<template>
    <h3>Food {{id}}</h3>
</template>
<script>

export default({
    head: {
        title: "uTop Fake - Detail Food"
    },
    data: function(){
        return {id: this.$route.params.id}
    }
})
</script>
