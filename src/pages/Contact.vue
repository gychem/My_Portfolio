
<template>

    <div id="contact_title_container">
        
    </div>

    <div id="contact">

        <div>
            <span id="contact_title"></span>
            <div id="contact__form">
                <form id="contactForm" class="form" @submit.prevent="submit">
                    <div class="error-message">
                        <!-- <p v-show="!email.valid">Oh, please enter a valid email address.</p> -->
                    </div>
                    <fieldset>
                        <label for="name">Name</label><br>
                        <input type="text" id="name" required="" v-model="name"><br><br>
                        <label for="email">Email</label><br>
                        <input type="email" id="email" required="" v-model="email"><br><br>
                        <label for="message">Message</label><br>
                        <textarea id="message" name="txtname" rows="4" cols="50" required="" v-model="message"></textarea><br><br>
                        <button>Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>

        <div id="contact_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160403.62824854188!2d3.5744800586824415!3d51.08434727912516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c370e1339443ad%3A0x40099ab2f4d5140!2sGent!5e0!3m2!1snl!2sbe!4v1663448698505!5m2!1snl!2sbe" width="100%" height="103%" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "App",
    data() {
      return {
        name: "",
        email: "",
        message: "",
      };
    },
    computed: {
      formValid() {
        const { name, email, message } = this;
        return (
          name.length > 0 &&
          /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
          message.length > 0
        );
      },
    },
    methods: {
        onReset() 
        {
            this.name = "";
            this.email = "";
            this.message = "";
        },
        submit() 
        {
            if (!this.formValid) {
            return;
            }

            const { name, email, message } = this;
            let input = {name, email, message};
            console.log(input)

            let emailMessage = {  
            "sender":{  
                "name": input['name'],
                "email": input['email']
            },
            "to":[  
                {  
                    "email":"gychem.baert@hotmail.com",
                    "name":"Gychem Baert"
                }
            ],
            "subject":"Contact form - Gychem.be",
            "htmlContent":`<html><head></head><body><p>${input['message']}</p></body></html>`
            }
                        
            const headers = { 
            'accept': 'application/json',
            'api-key': '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',
            'content-type': 'application/json'
            };
        axios.post("https://api.sendinblue.com/v3/smtp/email", emailMessage, { headers })
          .then(response => this.articleId = response.data.id);
      },
    },
  };

  </script>
