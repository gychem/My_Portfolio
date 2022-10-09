<template>

    <div id="about">
    
        <!-- <div id="about_image">
            <img src="img/profile.png"/>
        </div> -->

        <div>
            <div id="about__container">
                <span id="about_title">ABOUT</span>
                <p>
                    Hey, my name is Gychem and I am a passionate web developer.<br><br>

                    My journey as a developer started in 2008.<br>
                    I've worked with several languages, frameworks and methodologies.<br><br>

                    During the years I was part of many projects, did some freelance work <br>
                    and maintained & created private servers for games in<br>
                    Node.js, TypeScript, MySQL and Pawn.<br><br>

                    After all those years I decided to go for a professional career as a web developer. <br>
                    I followed a 7 month training at BeCode where I learned everything about the latest frameworks and coding standards.
                </p>

            </div>
        </div>

        <!-- <TimeLine /> -->

        <div>   
            <div id="about_marquee_container">
                <Vue3Marquee :pauseOnHover="true">
                    <img :src="img" v-for="img in imgArray" :key="img" class="image" width="100" />
                </Vue3Marquee>
            </div>
        </div> 

    </div>

</template>

<script>
    import { Vue3Marquee } from 'vue3-marquee'
    //import TimeLine from '@/components/TimeLine.vue'
    import 'vue3-marquee/dist/style.css'

    export default {
        name: "AboutPage",
        components: {
            Vue3Marquee,
            //TimeLine,
        },
        data() {
            return {
                imgArray: [
                    "assets/icons/html5.svg",
                    "assets/icons/css3.svg",
                    "assets/icons/sass.svg",
                    "assets/icons/javascript.svg",
                    "assets/icons/typescript.svg",
                    "assets/icons/php.svg",
                    "assets/icons/mysql.svg",
                    "assets/icons/pawno.svg",
                    "assets/icons/bootstrap.svg",
                    "assets/icons/tailwindcss.svg",
                    "assets/icons/vuejs.svg",
                    "assets/icons/laravel.svg",
                    "assets/icons/opencart.svg",
                    "assets/icons/wordpress.svg",
                    "assets/icons/vscode.svg"
                ],
            };
        },
    };
</script>

<style scoped>
.image {
    font-size: 30px;
    margin: 0 10px;
}
</style>