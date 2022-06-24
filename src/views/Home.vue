<template>
    <el-container>
        <el-aside width="200px">
            <SideMenu></SideMenu>
        </el-aside>
        <el-container>

            <el-header>
                <strong>VueAdmin Background management system</strong>
                <div class="header-avatar">

                    <el-avatar :src="userInfo.avatar"></el-avatar>

                    <el-dropdown>
                        <span class="el-dropdown-link">
                            {{ userInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">

                            <el-dropdown-item>
                                <router-link :to="{ name: 'UserCenter' }">personal center</router-link>
                            </el-dropdown-item>

                            <el-dropdown-item @click.native="logout">log out</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <el-link href="https://twitter.com/home">twitter</el-link>
                    <el-link href="https://www.facebook.com/">facebook</el-link>
                </div>
            </el-header>

            <el-main>
                <Tabs></Tabs>
                <div style="margin: 0 15px;">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import SideMenu from "./inc/SideMenu.vue"
import Tabs from "./inc/Tabs.vue"
export default {
    name: "Home",
    components: {
        SideMenu,Tabs
    },
    data() {
        return {
            userInfo: {
                id: "",
                username: "",
                avatar: ""
            }
        }
    },
    created() {
        this.getUserInfo()
    },
    methods: {
        getUserInfo() {
            this.$axios.get("/sys/userInfo").then(res => {
                this.userInfo = res.data.data
            })
        },
        logout() {
            this.$axios.post("/logout").then(res => {
                localStorage.clear()
                sessionStorage.clear()

                this.$store.commit("resetState")
                this.$router.push("/login")
            })
        }
    },
}
</script>
<style scoped>
.header-avatar {
    float: right;
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.el-header {
    background-color: #90dfff;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #bcbbff;
    color: #333;
    line-height: 200px;
}

.el-main {
    background-color: #effcff;
    color: #333;
    padding: 0;
}

.el-container {
    height: 100vh;
}

a {
    text-decoration: none;
}
</style>