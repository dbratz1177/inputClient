<template>
    <div>
        <h1 class="title">Units</h1>
        <action-nav :is-edit.sync="isEdit" :is-create.sync="isCreate"></action-nav>
        <edit v-if="isEdit"></edit>
        <create v-if="isCreate"></create>
    </div>
</template>

<script>
import ActionNav from './lib/ActionNav.vue'
import Create from './UnitsPage/Create'
import Edit from './UnitsPage/Edit'

export default {
    components: {
        ActionNav,
        Create,
        Edit
    },
    data: function() {
        return {
            isEdit: false,
            isCreate: true
        }
    }
}
</script>

<style scoped>

</style>
