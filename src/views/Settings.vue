<template>
  <vs-tabs
    id="profile-tabs"
    :key="isSmallerScreen"
    :position="isSmallerScreen ? 'top' : 'left'"
    class="tabs-shadow-none"
  >

    <!-- GENERAL -->
    <vs-tab
      icon-pack="feather"
      icon="icon-user"
      :label="!isSmallerScreen ? 'General' : ''"
    >
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <vx-card
          no-shadow
          title="General"
          subtitle="Don't share this information to anyone!"
        >

          <div class="vx-row">
            <vs-input
              v-model="email"
              class="w-full col-6 mb-base"
              type="email"
              icon-pack="feather"
              icon="icon-mail"
              name="email"
            />
            <vs-input
              v-model="phone"
              class="w-full col-6 mb_base"
              type="number"
              icon-pack="feather"
              icon="icon-phone"
              name="phone"
            />

            <div class="flex col-12 items-center mb-4">
              <vs-switch
                v-model="fa_code"
                name="fa_code"
                icon-pack="feather"
                vs-icon="icon-check"
              />
              <span class="ml-4">Activate 2FA</span><span class="badge badge-primary float-right ml-2 mb-5">Recommended</span>
            </div>
          </div>

          <!-- Save & Reset Button -->
          <div class="flex flex-wrap items-center justify-end">
            <vs-button
              class="ml-auto mt-2"
              type="filled"
              @click.prevent="submitForm"
            >
              Save Changes
            </vs-button>
            <vs-button
              class="ml-4 mt-2"
              type="border"
              color="warning"
            >
              Reset
            </vs-button>
          </div>

        </vx-card>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-lock"
      :label="!isSmallerScreen ? 'Change Password' : ''"
    >
      <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
        <vx-card
          no-shadow
          title="Change Password"
          subtitle="Don't share this information to anyone!"
        >

          <vs-input
            v-model="old_password"
            v-validate="'required'"
            class="w-full mb-base"
            type="password"
            icon-pack="feather"
            icon="icon-lock"
            label-placeholder="Old Password"
            name="old_password"
          />
          <vs-input
            v-model="new_password"
            v-validate="'required'"
            class="w-full mb-base"
            type="password"
            icon-pack="feather"
            icon="icon-lock"
            label-placeholder="New Password"
            name="new_password"
          />
          <vs-input
            v-model="confirm_new_password"
            v-validate="'required'"
            class="w-full mb-base"
            type="password"
            icon-pack="feather"
            icon="icon-lock"
            label-placeholder="Confirm Password"
            name="confirm_new_password"
          />

          <!-- Save & Reset Button -->
          <div class="flex flex-wrap items-center justify-end">
            <vs-button
              class="ml-auto mt-2"
              type="filled"
              @click.prevent="submitForm"
            >
              Save Changes
            </vs-button>
            <vs-button
              class="ml-4 mt-2"
              type="border"
              color="warning"
            >
              Reset
            </vs-button>
          </div>

        </vx-card>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-info"
      :label="!isSmallerScreen ? 'API' : ''"
    >
      <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
        <div id="page-clipboard">
          <vx-card
            title="API Informations"
            subtitle="Don't share this information to anyone!"
          >

            <div class="vx-row">
              <vs-input
                v-model="api_key"
                icon-pack="feather"
                icon="icon-globe"
                class="w-full col-6 mb-base"
                disabled
              />
              <vs-input
                v-model="api_key_password"
                icon-pack="feather"
                icon="icon-lock"
                class="w-full col-6 mb-base"
                disabled
              />
            </div>

            <div class="mb-base mt-3">
              <h6 class="mb-4">
                Permission
              </h6>
              <div class="flex items-center mb-4">
                <vs-switch
                  v-model="allow_withdraw"
                  name="allow_withdraw"
                  icon-pack="feather"
                  vs-icon="icon-check"
                />
                <span class="ml-4">Allow withdraw</span>
              </div>
            </div>

            <!-- Save & Reset Button -->
            <div class="flex flex-wrap items-center justify-end">
              <vs-button
                class="ml-auto mt-2"
                type="filled"
                @click.prevent="submitForm"
              >
                Save Changes
              </vs-button>
              <vs-button
                class="ml-4 mt-2"
                type="border"
                color="warning"
              >
                Reset
              </vs-button>
            </div>
          </vx-card>
        </div>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-bell"
      :label="!isSmallerScreen ? 'Notifications' : ''"
    >
      <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
        <vx-card
          no-shadow
          title="Notifications"
          subtitle="Enabled notification to stay informed"
        >

          <div class="mb-base">
            <h6 class="mb-4">
              Activity
            </h6>

            <div class="flex items-center mb-4">
              <vs-switch
                v-model="connect"
                name="connect"
                icon-pack="feather"
                vs-icon-off="icon-bell"
                vs-icon-on="icon-check"
              />
              <span class="ml-4">Email me when someone connect to my account</span>
            </div>
            <div class="flex items-center mb-4">
              <vs-switch
                v-model="withdraw"
                name="withdraw"
                icon-pack="feather"
                vs-icon-off="icon-bell"
                vs-icon-on="icon-check"
              />
              <span class="ml-4">Email me when someone withdraw my fund</span>
            </div>
          </div>

          <div>
            <h6 class="mb-4">
              API
            </h6>

            <div class="flex items-center mb-4">
              <vs-switch
                v-model="payment"
                name="payment"
                icon-pack="feather"
                vs-icon-off="icon-bell"
                vs-icon-on="icon-check"
              />
              <span class="ml-4">Email me when someone done success payment</span>
            </div>
          </div>

          <!-- Save & Reset Button -->
          <div class="flex flex-wrap items-center justify-end">
            <vs-button
              class="ml-auto mt-2"
              type="filled"
              @click.prevent="submitForm"
            >
              Save Changes
            </vs-button>
            <vs-button
              class="ml-4 mt-2"
              type="border"
              color="warning"
            >
              Reset
            </vs-button>
          </div>

        </vx-card>
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  data() {
    return {

      // GENERAL
      email: 'iconqsdsqdqsd@gmx.fr',
      phone: '0612324578',
      fa_code: false,

      // PASSWORD
      old_password: '',
      new_password: '',
      confirm_new_password: '',

      // API KEY / 2FA
      api_key: 'your_api_key',
      api_key_password: 'your_api_key_password',
      allow_withdraw: false,

      // NOTIFICATION
      connect: false,
      withdraw: false,
      payment: false,
    }
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768
    },
  },
  methods: {
    submitForm() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // if form have no errors
          // alert('form submitted!')
        }
      })
    },
  },
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
