/* eslint-disable */
<template>
  <b-tabs vertical nav-wrapper-class="nav-vertical" style="background-color: #fff; padding-top: 15px; padding-bottom: 15px; border-radius: 12px; margin-right: 0; margin-left: 0;">
    <b-tab active title="General">
      <validation-observer ref="generalValidation">
        <b-form @submit.prevent>
          <b-row>
            <b-col cols="6">
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
              <b-form-group>
                <v-select v-model="selected1" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="books" label="title">
                  <template #option="{ title, icon }">
                    <feather-icon :icon="icon" size="16" class="align-middle mr-50"/>
                    <span> {{ title }}</span>
                  </template>
                </v-select>
              </b-form-group>
            </b-col>
            <!-- reset and submit -->
            <b-col cols="12">
              <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" @click="generalForm" variant="primary" class="mr-1">Submit </b-button>
              <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="reset" variant="outline-secondary">Reset </b-button>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-tab>
    <b-tab title="API">
      <b-card-text>
        Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Biscuit ice cream halvah candy canes bear claw ice cream cake chocolate bar donut. Toffee cotton candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder sweet sesame snaps.
      </b-card-text>
      <b-card-text>
        Candy cookie sweet roll bear claw sweet roll. Cake tiramisu cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly.
      </b-card-text>
    </b-tab>
    <b-tab title="Notifications">
      <b-card-text>
        Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Biscuit ice cream halvah candy canes bear claw ice cream cake chocolate bar donut. Toffee cotton candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder sweet sesame snaps.
      </b-card-text>
      <b-card-text>
        Candy cookie sweet roll bear claw sweet roll. Cake tiramisu cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly.
      </b-card-text>
    </b-tab>
  </b-tabs>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BTabs, BTab, BCardText, BForm, BRow, BCol, BButton, BFormGroup, BInputGroup, BInputGroupPrepend, BFormInput,
} from 'bootstrap-vue'
import { required, email } from '@validations'

export default {
  components: {
    BTabs,
    BTab,
    BCardText,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      user_email: '',
      current_password: '',
      new_password: '',
      required,
      email,
    }
  },
  methods: {
    generalForm() {
      this.$refs.generalValidation.validate().then(success => {
        if (success) {
          console.log('coucou')
        }
      })
    },
  },
}
</script>
