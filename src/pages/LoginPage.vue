<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <h1>
                <span>Linked </span>
                <strong>Dreams</strong>
            </h1>
            <h2 class="h3 mb-4 fw-normal">Faça o Login</h2>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" 
                    v-model="form.email"
                    :class="{ 'is-invalid': errors.email && errors.email[0] }" />
                <label for="email">Email</label>
                <div class="invalid-feedback" v-if="errors.email && errors.email[0]">
                    {{ errors.email && errors.email[0] }}
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" 
                    v-model="form.password" 
                    :class="{ 'is-invalid': errors.password && errors.password[0] }" />
                <label for="password">Password</label>
                <div class="invalid-feedback" v-if="errors.password && errors.password[0]">
                    {{ errors.password && errors.password[0] }}
                </div>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        </form>
    </main>
</template>
<style scoped>
    .auth-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 60vh;
        margin-top: 2rem;
    }

    .auth-form {
        width: 400px;
    }
</style>
<script setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '../stores/auth';
    import { storeToRefs } from 'pinia';

    const router = useRouter();
    const store = useAuthStore();
    const { isLoggedIn, errors } = storeToRefs(store); 
    const { handleLogin } = store;

    const form = reactive({
        email: '',
        password: ''
    });

    const handleSubmit = async () => {
        await handleLogin(form);
        if (isLoggedIn.value) {
            router.push({ name: 'tasks' });
        }
    }
</script>