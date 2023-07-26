<template>
    <div>
        <h1>Email</h1>
        <p v-if="activationSuccess">Ваша сторінка успішно активована!</p>
        <button v-if="activationSuccess" @click="redirectToPersonalCabinet"> Перейти до особистого кабінету
        </button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: "EmailActivation",
    data() {
        return {
            activationSuccess: false,
        };
    },
    methods: {
        ...mapActions([
            'GET_CURRENT_URL'
        ]),
        redirectToPersonalCabinet() {
            this.$router.push("/");
        },
    },
    mounted() {
        console.log(this.$route.path);
        this.$store.dispatch('GET_CURRENT_URL', this.$route.path.substring(1));
        this.$store.dispatch('EMAIL_ACTIVATION')
            .then(data => {
                console.log('Дані з API:', data);
                this.activationSuccess = true;
            })
            .catch(error => {
                console.error('Помилка отримання даних з API:', error);
            });
    }
}
</script>
<style lang="scss">
    h1 {
        color: $main-text;
    }
</style>