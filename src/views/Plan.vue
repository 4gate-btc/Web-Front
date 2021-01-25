<template>
  <div>
    <vx-card>
      <vs-row>
        <vs-col
          vs-lg="6"
          vs-xs="12"
          class="lg:border-r-1 border-solid border-grey-light p-3"
        >
          <h5>
            Choose a name for your project
          </h5>

          <vx-input-group class="mt-3">
            <vs-input
              v-model="name"
              v-validate="'required|min:6|max:32|alpha_num'"
              type="text"
              placeholder="Short name of your project"
              name="name"
            />

            <template slot="append">
              <div
                class="append-text"
                :class="{ 'bg-danger': errors.has('name'), 'bg-success': !errors.has('name') }"
              >
                <span>{{ name.length }}/32</span>
              </div>
            </template>
          </vx-input-group>
          <span
            v-show="errors.has('name')"
            class="text-danger text-sm"
          >{{ errors.first('name') }}</span>

        </vs-col>
        <vs-col
          vs-lg="6"
          vs-xs="12"
          class="p-3"
        >
          This name will be used to identify your project, choose it wisely you won't be able to edit it after.
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col
          vs-lg="6"
          vs-xs="12"
          class="lg:border-r-1 border-solid border-grey-light px-3 py-5"
        >
          <h5>
            What type of infrastructure do you need ?
          </h5>
          <div class="flex justify-between mt-3 px-5">
            <vs-radio
              v-model="infrastructure"
              vs-value="public"
            >
              Public
            </vs-radio>
            <vs-radio
              v-model="infrastructure"
              vs-value="private"
            >
              Private <small>(+50€)</small>
            </vs-radio>
            <vs-radio
              v-model="infrastructure"
              vs-value="company"
            >
              Company
            </vs-radio>
          </div>
        </vs-col>
        <vs-col
          vs-lg="6"
          vs-xs="12"
          class=" px-3 py-5"
        >
          You can choose between 3 types of infrastructure.
          <ul>
            <li><b>Public:</b> This is the default type of infrastructure, you are on a server with other people and you share the server.</li>
            <li><b>Private:</b> With this infrastructure you will be alone on your server which can speed things up.</li>
            <li><b>Company:</b> This type of infrastructure the price will be determinate from your need. This is only for company.</li>
          </ul>
        </vs-col>
      </vs-row>

      <vs-button
        type="filled"
        class="mt-5 block"
        @click.prevent="submitForm"
      >
        Submit
      </vs-button>
    </vx-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infrastructure: 'public',
      siteNumber: 1,
      fees: 5,
      privateNetwork: false,
      backup: false,
      name: '',
    }
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
