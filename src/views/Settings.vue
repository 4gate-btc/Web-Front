/* eslint-disable */
<template>
  <b-tabs vertical nav-wrapper-class="nav-vertical" style="background-color: #fff; padding-top: 15px; padding-bottom: 15px; border-radius: 12px; margin-right: 0; margin-left: 0;">
    <b-tab active title="General">
      <validation-observer ref="generalValidation">
        <b-form @submit.prevent>
          <b-row>
            <b-col col-lg-6 col-md-12 col-sm-12>
              <!-- email user -->
              <b-form-group label="Email" label-for="user_email">
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="MailIcon"/>
                  </b-input-group-prepend>
                  <b-form-input id="email" v-model="user_email" type="email" name="user_email" readonly/>
                </b-input-group>
              </b-form-group>

              <!-- current password -->
              <b-form-group label="Current Password" label-for="current_password">
                <validation-provider #default="{ errors }" name="Current Password" rules="required">
                  <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid':null">
                    <b-input-group-prepend is-text>
                      <feather-icon icon="LockIcon"/>
                    </b-input-group-prepend>
                    <b-form-input id="current_password" v-model="current_password" :state="errors.length > 0 ? false:null" name="current_password" type="password" placeholder="Current Password"/>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- new password -->
              <b-form-group label="New Password" label-for="new_password">
                <validation-provider #default="{ errors }" name="New Password" rules="required">
                  <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid':null">
                    <b-input-group-prepend is-text>
                      <feather-icon icon="LockIcon" />
                    </b-input-group-prepend>
                    <b-form-input id="new_password" v-model="new_password" :state="errors.length > 0 ? false:null" name="new_password" type="password" placeholder="New Password"/>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- 2FA -->
                <b-form-group label="2FA" label-for="country">
                <v-select id="country" v-model="two_FA" :options="two_FAValues" :selectable="option => ! option.value.includes('select_value')" label="text"/>
              </b-form-group>
            </b-col>
            <b-col col-lg-6 col-md-12 col-sm-12>
              <div class="card bg-primary text-white">
                <div class="card-body">
                  <h4 class="card-title text-white"> Why use 2FA Protection ?</h4>
                  <p class="card-text"> Some quick example text to build on the card title and make up. </p>
                </div>
              </div>
            </b-col>
            <!-- reset and submit -->
            <b-col cols="12">
              <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" @click="generalValidation" variant="primary" class="mr-1">Submit </b-button>
              <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="reset" variant="outline-secondary">Reset </b-button>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-tab>
    <b-tab title="API">
      <b-form @submit.prevent>
        <b-row>
          <b-col col-lg-6 col-md-12 col-sm-12>
            <!-- API Username -->
            <b-form-group label="API Key" label-for="api_key">
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="UserIcon"/>
                </b-input-group-prepend>
                <b-form-input id="api_key" v-model="api_key" type="text" name="api_key" readonly/>
              </b-input-group>
            </b-form-group>
            <!-- API Password -->
            <b-form-group label="API Password" label-for="api_password">
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="LockIcon"/>
                </b-input-group-prepend>
                <b-form-input id="api_password" v-model="api_password" type="text" name="api_password" readonly/>
              </b-input-group>
            </b-form-group>
            <!-- API Permission -->
            <b-form-group label="Permission">
              <b-form-checkbox v-model="allow_withdraw" class="custom-control-primary ml-1">
                Allow withdraw
              </b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col col-lg-6 col-md-12 col-sm-12>
            <div class="card bg-primary text-white">
              <div class="card-body">
                <h4 class="card-title text-white"> Checkout API Documentation</h4>
                <p class="card-text"> Some quick example text to build on the card title and make up. </p>
              </div>
            </div>
          </b-col>
          <!-- reset and submit -->
          <b-col cols="12">
            <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" @click="APIValidation" variant="primary" class="mr-1">Submit </b-button>
            <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="reset" variant="outline-secondary">Reset </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-tab>
    <b-tab title="Notifications">
      <b-form @submit.prevent>
        <b-row>
          <b-col col-lg-6 col-md-12 col-sm-12>
            <!-- Notify Activity -->
            <b-form-group label="Activity">
              <b-form-checkbox v-model="connect" class="custom-control-primary ml-1">
                Email me when someone connect to my account
              </b-form-checkbox>
              <b-form-checkbox v-model="withdraw" class="custom-control-primary ml-1">
                Email me when someone withdraw my fund
              </b-form-checkbox>
            </b-form-group>
            <!-- Notify API -->
            <b-form-group label="API">
              <b-form-checkbox v-model="payment" class="custom-control-primary ml-1">
                Email me when someone done success payment
              </b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col col-lg-6 col-md-12 col-sm-12>
            <div class="card bg-primary text-white">
              <div class="card-body">
                <h4 class="card-title text-white"> Checkout API Documentation</h4>
                <p class="card-text"> Some quick example text to build on the card title and make up. </p>
              </div>
            </div>
          </b-col>
          <!-- reset and submit -->
          <b-col cols="12">
            <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" @click="NotificationsValidation" variant="primary" class="mr-1">Submit </b-button>
            <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="reset" variant="outline-secondary">Reset </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-tab>
  </b-tabs>
</template>

<script>
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BTabs, BTab, BForm, BRow, BCol, BButton, BFormGroup, BInputGroup, BInputGroupPrepend, BFormInput, BFormCheckbox,
} from 'bootstrap-vue'
import { required, email } from '@validations'

export default {
  components: {
    BTabs,
    BTab,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    BFormCheckbox,
    ValidationProvider,
    ValidationObserver,
    vSelect,
  },
  data() {
    return {
      two_FA: '',
      two_FAValues: [
        { value: 'yes', text: 'Activate' },
        { value: 'no', text: 'Disabled' },
      ],
      user_email: '',
      current_password: '',
      new_password: '',
      api_password: '',
      api_key: '',
      allow_withdraw: false,
      connect: false,
      withdraw: false,
      payment: false,
      required,
      email,
    }
  },
  methods: {
    generalValidation() {
      this.$refs.generalValidation.validate().then(success => {
        if (success) {
          console.log('coucou')
        }
      })
    },
    APIValidation() {
    },
    NotificationsValidation() {
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
