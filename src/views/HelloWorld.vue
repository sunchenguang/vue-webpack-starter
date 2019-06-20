<template>
    <div class="hello">
        Hello World!
        <el-button type="primary">buttonCont</el-button>
        <el-tag type="success">标签二</el-tag>
    </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    mixins: [],
    props: {},
    components: {},
    created() {
    },
    data() {

      return {}
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>

<style scoped lang="scss">
    .hello {
        color: red;
    }
</style>
