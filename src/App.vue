<style>
    @import './assets/styles/reset.css';
    @import './assets/styles/main.css';
    @import './assets/styles/projects.css';
    @import './assets/styles/contact.css';
    @import './assets/styles/about.css';
</style>

<template>

<div id="app">

    <nav>
        <div id="logo-text">
            Gychem
        </div>

        <ul>
            <router-link to="/"><li>About</li></router-link>
            <router-link to="/Projects"><li>Projects</li></router-link>
            <router-link :key="$route" to="/contact"><li>Contact</li></router-link>
        </ul>

        <div id="sidebar_icons">

            <a href="https://www.linkedin.com/in/gychem-b-13512320b/" target="_new">
                <svg id="icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="#737373"></path> 
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <line x1="8" y1="11" x2="8" y2="16"></line>
                    <line x1="8" y1="8" x2="8" y2="8.01"></line>
                    <line x1="12" y1="16" x2="12" y2="11"></line>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
            </a>

            <a href="https://github.com/gychem" target="_new">
                <svg id="icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="#737373"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
            </a>

            <a href="https://stackoverflow.com/users/2892248/gych" target="_new">
                <svg id="icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-stackoverflow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="#737373"></path>
                    <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1"></path>
                    <path d="M8 16h8"></path>
                    <path d="M8.322 12.582l7.956 .836"></path>
                    <path d="M8.787 9.168l7.826 1.664"></path>
                    <path d="M10.096 5.764l7.608 2.472"></path>
                </svg>
            </a>
        </div>
        
        <footer>
            &copy; Copyright 2022
        </footer>
    </nav>

    <main>
      <router-view></router-view>
    </main>

</div>

</template>

<script>

    import Projects from './pages/Projects.vue'
    import Contact from './pages/Contact.vue'
    import About from './pages/About.vue'
    
    const routes = {
        '/': About,
        '/projects': Projects,
        '/contact': Contact
    }
    
    export default {
        data() {
        return {
            currentPath: window.location.hash
        }
        },
        computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] 
        }
        },
        mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
        },
    }
</script>