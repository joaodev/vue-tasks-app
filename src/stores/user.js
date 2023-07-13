import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { allUsers } from '../http/users-api';

export const useUserStore = defineStore('userStore', () => {
    const users = ref([]);

    const usersList = computed(() => users.value);

    const fetchAllUsers = async () => {
        const { data } = await allUsers();
        users.value = data.data;
    };

    return {
        users,
        usersList,
        fetchAllUsers
    }
});