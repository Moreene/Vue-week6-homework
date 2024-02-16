<template>
    <h1 class="h5 fw-bold text-center my-5">後台登入</h1>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-3">
                <form id="form" class="form-signin">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email" required autofocus
                            v-model="username">
                        <label for="email">信箱</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="password" placeholder="Password" required
                            v-model="password">
                        <label for="password">密碼</label>
                    </div>
                    <button class="btn btn-primary w-100 mt-5" type="button" @click="login">
                        登入
                    </button>
                    <router-link to="/" class="btn btn-secondary w-100 mt-3" type="button">
                        回到前台
                    </router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            if (!this.username || !this.password) {
                this.$swal({
                    icon: "error",
                    title: "請輸入信箱或密碼!",
                    showConfirmButton: true,
                });
                return;
            } else {
                axios.post(`${VITE_URL}/admin/signin`, {
                    "username": this.username,
                    "password": this.password
                })
                    .then(res => {
                        const { token, expired } = res.data;
                        document.cookie = `myToken=${token}; expires=${new Date(expired)};`;
                        form.reset();
                        this.$router.push('/admin');
                    })
                    .catch(err => {
                        this.$swal({
                            icon: "error",
                            title: err.response.data.message,
                            showConfirmButton: true,
                        });
                    });
            };
        }
    },
}
</script>