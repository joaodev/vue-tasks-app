<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <Users :users="usersList" />
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
    import { computed, onMounted, ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useUserStore } from '../stores/user';

    import Users from '../components/users/Users.vue';

    const store = useUserStore();
    const { usersList } = storeToRefs(store);
    const { fetchAllUsers } = store;

    onMounted(async() => {
        await fetchAllUsers();
    });
</script>