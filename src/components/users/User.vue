<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <span>{{user.name}}</span>
        </div>
    </li>
</template>
<script setup>
    const props = defineProps({
        user: Object
    });
</script>