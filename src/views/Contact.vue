<template>
  <div class="vx-row">

    <div class="vx-col col-6 mb-base">
      <vx-card>

        <div slot="no-body">
          <v-badge class="float-right badge badge-success">
            {{ statut_online }}
          </v-badge>
          <vs-button
            class="float-right mr-3"
            style="margin-top: 1.5rem !important;"
          >
            <vx-tooltip
              text="We are online"
              position="top"
            >
              {{ number }}
            </vx-tooltip>
          </vs-button>
          <!--<img
            :src="require('/src/assets/images/logo/french_flag.png').default"
            class="p-4 img-fluid w-32 responsive"
          >-->
        </div>

      </vx-card>
    </div>

    <div class="vx-col col-6 mb-base">
      <vx-card>

        <div slot="no-body">
          <v-badge class="float-right badge badge-danger">
            {{ statut_offline }}
          </v-badge>
          <vs-button
            class="float-right mr-3"
            style="margin-top: 1.5rem !important;"
          >
            <vx-tooltip
              text="We are offline"
              position="top"
            >
              {{ number }}
            </vx-tooltip>
          </vs-button>
          <!--<img
            :src="require('@/assets/images/logo/french_flag.png').default"
            class="p-4 img-fluid w-32 responsive"
          >-->
        </div>

      </vx-card>
    </div>
    <div class="vx-col col-12 mb-base">
      <vx-card>

        <div slot="no-body">
          <vs-button
            class="float-right mr-3"
            style="margin-top: 1.5rem !important;"
          >
            <vx-tooltip
              text="We are online"
              position="top"
            >
              {{ number }}
            </vx-tooltip>
          </vs-button>
          <!--<img
          :src="require('@/assets/images/logo/french_flag.png').default"
          class="p-4 img-fluid w-32 responsive"
        >-->
        </div>

      </vx-card>
    </div>

    <div class="vx-col col-3 col-offset-9 mb-base">
      <vx-card>

        <div slot="no-body">
          <!--<img
            :src="require('@/assets/images/logo/french_flag.png').default"
            class="mx-auto d-block p-4 img-fluid w-64 responsive card-img-top"
          >-->
        </div>
        <div class="flex justify-content-center flex-wrap">
          <vs-button class="text-center">
            {{ number }}
          </vs-button>
        </div>

      </vx-card>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      number: '0649145284',
      statut_offline: 'OFFLINE',
      statut_online: 'ONLINE',
      flag: 'french',
    }
  },
}
</script>
