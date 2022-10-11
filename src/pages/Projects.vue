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

</template>

<script>
import {projects} from '../projects.js';

export default {
    name: 'ProjectsPage',
    data (){
        return {
            projects: projects,
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


