
<template>

    <div id="contact_title_container">
        
    </div>

    <div id="contact">

        <div>
    
            <div id="contact__form">
                <div id="success" v-if="success">Your message has been successfully sent !</div>
                <div id="error" v-if="error != false">{{ error }}</div>
                <form id="contactForm" class="form" @submit.prevent="submit" novalidate>
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
        success: false,
        error: false,
        name: "",
        email: "",
        message: "",
      };
    },
    mounted() {
        this.success = false;
        this.error = false;
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
                this.success = false;
                this.error = 'Form contains empty or invalid fields!';
                return;
            }

            const { name, email, message } = this;
            let input = {name, email, message};

            let emailMessage = {  
                "sender":{  
                    "name": input['name'],
                    "email": input['email']
                },
                "to":[{  
                        "email":"gychem.baert@hotmail.com",
                        "name":"Gychem Baert"
                    }
                ],
                "subject":"Contact message from gychem.be portfolio",
                "htmlContent":`<html><head></head><body><p>${input['message']}</p></body></html>`
            }
                        
            const headers = { 
                'accept': 'application/json',
                'api-key': '',
                'content-type': 'application/json'
            };

            axios.post("https://api.sendinblue.com/v3/smtp/email", emailMessage, { headers })
            .then(response => {
                console.log(response.data);
                this.success = true;
                this.error = false;
            }).catch((error) => {
                this.success = false;
                this.error = 'Sorry, something went wrong ! Please try again later.';
                console.log(error);
            })
            
            
      },
    },
  };

  </script>
