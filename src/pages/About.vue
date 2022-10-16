<template>

    <div id="about">
    
        <!-- <div id="about_image">
            <img src="img/profile.png"/>
        </div> -->

        <div>
            <span id="about_title">Hey, Welcome to my portfolio!</span> 
            <div id="about__container">
                <p>
                    My journey as a web developer started as a hobby in 2008. <br><br>
                    During the years I've learned to work with several languages, frameworks and methodologies.<br>
                    I was part of multiple projects, did some freelance work and maintained/configurated game servers & basic hosting solutions.<br><br>

                    I have listed some demo's of my latest work on the projects page.<br><br>
                    Want to get in touch? Contact me via LinkedIn or the contact page.
                </p>
            </div>
        </div>

        <div>   
            <span id="about_title">Projects</span> 
            <div id="about_marquee_container">
                <Vue3Marquee :pauseOnHover="true">
                    <router-link to="/Projects"><img height="150" class="image" :key="project.id" v-for="project in projects" :src="project.image"/></router-link>
                </Vue3Marquee>
            </div>
        </div> 

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
    import {projects} from '../projects.js';
    import { Vue3Marquee } from 'vue3-marquee';
    import 'vue3-marquee/dist/style.css';
   // import TimeLine from '../components/TimeLine.vue';

    export default {
        name: "AboutPage",
        components: {
            Vue3Marquee,
         //   TimeLine,
        },
        data() {
            return {
                projects: projects,
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