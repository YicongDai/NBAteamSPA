<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">
            <div class="form-group">
              <label class="form-label">Name</label>
              <input id="name" name="name" class="form-control" type="text" v-model="name">
            </div>
            <div class="error" v-if="!$v.name.required">Name is Required</div>
            <div class="form-group">
              <label class="form-label">City</label>
              <input id="city" name="city" class="form-control" type="text" v-model="city">
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.numPlayer.$error }">
              <label class="form-control-label" name="numPlayer">numPlayer (Enter a number between 0 and 1000)</label>
              <input class="form__input" type="number" v-model.trim="numPlayer"/>
            </div>
            <div class="error" v-if="!$v.numPlayer.between">Amount must be between 0 and 1000</div>
            <div class="form-group" :class="{ 'form-group--error': $v.championships.$error }">
              <label class="form-control-label" name="championships">champions (Enter a number between 0 and 100)</label>
              <input class="form__input" type="number" v-model.trim="championships"/>
            </div>
            <div class="error" v-if="!$v.championships.between">championships must be between 0 and 100</div>
            <div class="form-group" :class="{ 'form-group--error': $v.rank.$error }">
              <label class="form-control-label" name="rank">rank (Enter a number between 1 and 50)</label>
              <input class="form__input" type="number" v-model.trim="rank"/>
            </div>
            <div class="error" v-if="!$v.rank.between">rank must be between 1 and 50</div>
            <div class="form-group" :class="{ 'form-group--error': $v.message.$error }">
              <label class="form__label">Personal Message</label>
              <input class="form__input" v-model.trim="$v.message.$model"/>
            </div>
            <div class="error" v-if="!$v.message.required">Message is Required</div>
            <div class="error" v-if="!$v.message.minLength">Message must have at least {{$v.message.$params.minLength.min}} letters.</div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Create a team</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Successfully add a team!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import TeamService from '@/services/TeamService'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Add a team',
  data () {
    return {
      messagetitle: ' Add a team ',
      message: '',
      name: '',
      city: '',
      numPlayer: 0,
      championships: 0,
      rank: 0,
      team: {},
      submitStatus: null
    }
  },
  validations: {
    name: {
      required
    },
    message: {
      required,
      minLength: minLength(5)
    },
    numPlayer: {
      required,
      between: between(0, 1000)
    },
    championships: {
      required,
      between: between(0, 100)
    },
    rank: {
      required,
      between: between(1, 50)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var team = {
            name: this.name,
            city: this.city,
            numPlayer: this.numPlayer,
            championships: this.championships,
            rank: this.rank,
            message: this.message
          }
          this.team = team
          console.log('Submitting in TeamForm : ' + JSON.stringify(this.team, null, 5))
          this.submitTeam(this.team)
        }, 500)
      }
    },
    submitTeam: function (team) {
      console.log('submitTeam!')
      console.log('Submitting in submitTeam : ' + team)
      TeamService.postTeam(team)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
