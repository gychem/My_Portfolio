<template>

<div id="projects_container">
  <div v-for="project in projects" :key="project.slug">
      <div class="card" v-on:click="openProject(project)">
        <div class="card_title">{{ project.name }}</div>
        <img :src="project.image"/>
      </div>
  </div>
</div>

<div id="project">
    <div id="projectviewer">
        <div id="iframeContainer">
            <div id="alert_overlay">
                <div id="alert_message">
                    '{{currentProject.name}}' is currently not available in this viewer.<br>
                    Click <button v-on:click="openTab(currentProject)">Here</button> to open the project in a new tab.
                </div>
            </div>
            <iframe id="iframe" src="" width="96%" allowtransparency="true" frameborder="0"></iframe>
        </div>

        <div id="side_buttons">
            <div v-on:click="closeProject()" id="goBack">❌</div>
            <div v-on:click="showInfo()" id="info">i</div>
        </div>

        <div id="info_container">
           <header>{{ currentProject.name }}</header>
           <div id="languages">
            <div v-for="language in currentProject.languages" :key="language.id">   
                <div id="language" :class="language">{{ language }}</div>
            </div>
           </div>
            
        </div>
    </div>
    
    <div id="projectviewer_prevNext">
        <button v-on:click="previousProject()">Previous</button>
        <button v-on:click="nextProject()">Next</button>
    </div>

</div>


<!-- <div id="projects_topbar">
  <h2></h2>
  <div id="projects_filter">
    <button id="button_html">HTML</button>
    <button id="button_css">CSS</button>
    <button id="button_javascript">JavaScript</button>
    <button id="button_php">PHP</button>
    <button id="button_mysql">MY<font color="#E58E00">SQL</font></button>
  </div>
</div> -->

</template>

<script>


export default {
  name: 'ProjectsPage',
  data (){
    return {
      projects: [
        { 
            "id": 1,
            "name": "BlackJack", 
            "slug": "blackjack",
            "openInViewer": true,
            "url": "https://www.gychem.be/sites/blackjack",
            "image": "img/projects/blackjack.png",
            "categories": ["game", "games", "casino", "blackjack", "fun"] , 
            "languages": ["javascript", "html", "css"] 
        },
        { 
            "id": 2,
            "name": "Pac-Man in Pirate Style", 
            "slug": "pirate-pacman",
            "openInViewer": true,
            "url": "https://www.gychem.be/sites/pirate-pacman",
            "image": "img/projects/pirate-pacman.png",
            "categories": ["game", "games", "pirate", "pacman", "fun"] , 
            "languages": ["javascript", "html", "css"] 
        },
        { 
            "id": 3,
            "name": "Memory Game", 
            "slug": "memory-game",
            "openInViewer": true,
            "url": "https://www.gychem.be/sites/memory-game",
            "image": "img/projects/memory-game.png",
            "categories": ["game", "games", "memory", "animals", "fun"] , 
            "languages": ["javascript", "html", "css"] 
        },
        { 
            "id": 4,
            "name": "Weather Forecast", 
            "slug": "weather-api",
            "openInViewer": true,
            "url": "https://www.gychem.be/sites/weather-api",
            "image": "img/projects/weatherapi.png",
            "categories": ["weather", "api"] , 
            "languages": ["javascript", "html", "css"] 
        },
        { 
            "id": 5,
            "name": "Geocaching Tools", 
            "slug": "geocaching",
            "openInViewer": true,
            "url": "https://www.gychem.be/sites/geocaching",
            "image": "img/projects/geocaching.png",
            "categories": ["geocaching", "converter"] , 
            "languages": ["javascript", "html", "css"] 
        },
        { 
            "id": 6,
            "name": "Geocaching Cordinate Formulas", 
            "slug": "cord-formules",
            "openInViewer": true,
            "url": "https://www.gychem.be/sites/cord-formules",
            "image": "img/projects/cord-formules.png",
            "categories": ["geocaching", "converter", "cords", "coördinaten", "cordinates", "formule", "formula"] , 
            "languages": ["javascript", "php", "mysql", "html", "css"] 
        },       
        { 
            "id": 7,
            "name": "Movie Collection", 
            "slug": "movie-collection",
            "openInViewer": true,
            "url": "https://www.gychem.be/sites/movie-collection",
            "image": "img/projects/moviecollection.png",
            "categories": ["movies", "collection", "cards", "youtube", "json"], 
            "languages": ["javascript", "html", "css"] 
        },
        { 
            "id": 8,
            "name": "Food Order Checkout", 
            "slug": "food-order-checkout",
            "openInViewer": false,
            "url": "https://www.gychem.be/sites/food-order-checkout",
            "image": "img/projects/order-process.png",
            "categories": ["order", "checkout", "food", "delivery"] , 
            "languages": ["php", "html", "css"] 
        },
        { 
            "id": 9,
            "name": "CMS (Work In Progress)", 
            "slug": "cms",
            "openInViewer": false,
            "url": "https://www.cms.gychem.be/",
            "image": "img/projects/cms.png",
            "categories": ["order", "checkout", "food", "delivery"] , 
            "languages": ["laravel", "php", "html", "css"] 
        },
        { 
            "id": 10,
            "name": "Ahiru (Work In Progress)", 
            "slug": "ahiru",
            "openInViewer": false,
            "url": "https://www.ahiru.be/",
            "image": "img/projects/ahiru.png",
            "categories": ["music", "platform", "collaborate", "release"] , 
            "languages": ["laravel", "php", "html", "css", "vue"] 
        },
        // { 
        //     "id": 9,
        //     "name": "🥫 Food Delivery Template", 
        //     "slug": "food-delivery",
        //     "image": "img/projects/fooddelivery.png",
        //     "categories": ["food", "delivery", "template"] , 
        //     "languages": ["css", "html"] 
        // },
      ],
      currentProject: Object,
    }
  },
  methods: {
    openTab: function(project) {
        window.open(project.url, "_blank");
    },
    openProject: function(project) 
    {
        document.querySelector('#iframe').src = project.url;
        document.querySelector('#project').style.display = `block`;
        document.querySelector('#projects_container').style.display = `none`;

        if(project.openInViewer == false) {
            document.querySelector('#alert_overlay').style.display = `flex`; 
        } else {
            document.querySelector('#alert_overlay').style.display = `none`; 
        }

        this.currentProject = project;
    },
    previousProject: function() {
        let previousProject = this.projects.find(project => project.id === this.currentProject.id-1);
        if(previousProject) {
            this.openProject(previousProject);
        }
    },
    nextProject: function() {
        let nextProject = this.projects.find(project => project.id === this.currentProject.id+1);
        if(nextProject) {
            this.openProject(nextProject);
        }
    },
    closeProject: function() {
        document.querySelector('#project').style.display = `none`;
        document.querySelector('#projects_container').style.display = `grid`;
    },
    showInfo() {
        const infoContainer =  document.querySelector('#info_container');
        if(infoContainer.style.display == 'none') {
            infoContainer.style.display = 'block';
        } else {
            infoContainer.style.display = 'none';
        }   
    }
  },
  mounted() {
        document.querySelector('#info_container').style.display = 'none';
        const iframe = document.querySelector('#iframe');
        if(iframe) {
            iframe.height = "";
            let height = iframe.contentWindow.parent.document.body.scrollHeight + "px";
            height = parseInt(height);
            height -= 90;
            iframe.height = height + "px";
        }   
    }
}
</script>


