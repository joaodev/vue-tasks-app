<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <h1>
                <span>ToeDoe</span>
                <strong>List</strong>
            </h1>
            <h2 class="h3 mb-4 fw-normal">Please sign up</h2>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="name" placeholder="Enter Your name"
                    v-model="form.name" 
                    :class="{ 'is-invalid': errors.name && errors.name[0] }" />
                <label for="name">Name</label>
                <div class="invalid-feedback" v-if="errors.name && errors.name[0]">
                    {{ errors.name && errors.name[0] }}
                </div>
            </div>
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
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password_confirmation"
                    placeholder="Password Confirmation" v-model="form.password_confirmation"  />
                <label for="password_confirmation">Password Confirmation</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
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
    const { handleRegister } = store;

    const form = reactive({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
        
    });

    const handleSubmit = async () => {
        await handleRegister(form);
        if (isLoggedIn.value) {
            router.push({ name: 'tasks' });
        }
    }
</script>