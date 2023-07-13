<template>
    <div class="card mt-2" v-if="users.length && show">
        <ul class="list-group list-group-flush">
            <User v-for="user in users" :user="user" :key="user.id" />
        </ul>
    </div>
</template>
<script setup>
    import User from './User.vue';

    defineProps({
        users: Array,
        show: {
            type: Boolean,
            default: true
        }
    });
</script>