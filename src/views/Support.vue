<template>
  <vs-row>
    <div class="vx-col col-2 mb-base">
      <vs-button
        class="float-left mt-4"
        icon-pack="feather"
        icon="icon-edit"
        @click="activePrompt = true"
      >
        Create Ticket
      </vs-button>
    </div>

    <!-- OPEN TICKET -->
    <vs-prompt
      class="w-full"
      title="Open Ticket"
      accept-text="Submit"
      :is-valid="validateForm"
      :active.sync="activePrompt"
      @cancel="clearFields"
      @accept="sendTicket"
      @close="clearFields"
    >
      <component
        :is="scrollbarTag"
        :key="$vs.rtl"
        class="scroll-area p-4"
      >
        <form
          class="p-4"
          @submit.prevent
        >
          <vs-input
            v-model="ticketSubject"
            v-validate="'required|alpha_num'"
            name="ticketSubject"
            label="Subject"
            class="w-full mb-6"
          />
          <vs-select
            v-model="TicketDepartement"
            name="TicketDepartement"
            class="w-full select-large mb-base"
            label="Departement"
          >
            <vs-select-item
              v-for="(item,index) in DepartementOptions"
              :key="index"
              :value="item.value"
              :text="item.text"
              class="w-full"
            />
          </vs-select>
          <vs-textarea
            v-model="ticketMessage"
            v-validate="'required|alpha_num'"
            name="ticketMessage"
            rows="5"
            label="Your message"
            class="w-full mb-base"
          />
        </form>
      </component>
    </vs-prompt>

    <!-- LIST TICKET -->
    <div class="vx-col col-10 mb-base">
      <vs-table
        v-model="selected"
        pagination
        max-items="5"
        search
        :data="ticket"
      >

        <template slot="header">
          <h3>Your tickets</h3>
        </template>

        <template slot="thead">
          <vs-th sort-key="idticket">
            Ticket ID
          </vs-th>
          <vs-th sort-key="subject">
            Subject
          </vs-th>
          <vs-th sort-key="departement">
            Departement
          </vs-th>
          <vs-th sort-key="status">
            Status
          </vs-th>
          <vs-th sort-key="createdate">
            Create Date
          </vs-th>
          <vs-th sort-key="action">
            Action
          </vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr
            v-for="(tr, indextr) in data"
            :key="indextr"
            :data="tr"
          >
            <vs-td :data="data[indextr].idticket">
              {{ data[indextr].idticket }}
            </vs-td>
            <vs-td :data="data[indextr].subject">
              {{ data[indextr].subject }}
            </vs-td>
            <vs-td :data="data[indextr].departement">
              {{ data[indextr].departement }}
            </vs-td>
            <vs-td :data="data[indextr].status">
              {{ data[indextr].status }}
            </vs-td>
            <vs-td :data="data[indextr].createdate">
              {{ data[indextr].createdate }}
            </vs-td>
            <vs-td>
              <vs-button
                color="primary"
                type="filled"
                icon-pack="feather"
                icon="icon-send"
                @click.prevent="replyTicket(data[indextr].idticket)"
              >
                Reply
              </vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>

    <!-- VIEW TICKET -->
    <vs-prompt
      class="w-full"
      title="Ticket ID: #"
      accept-text="Send Message"
      :is-valid="validateForm2"
      :active.sync="activePrompt2"
      @cancel="clearFields2"
      @accept="answerTicket"
      @close="clearFields2"
    >
      <component
        :is="scrollbarTag"
        :key="$vs.rtl"
        class="scroll-area"
      >
        <form @submit.prevent>
          <div class="vx-col w-full">
            <vx-card class="overflow-hidden">
              <template slot="no-body">
                <div class="chat-card-log">
                  <component
                    :is="scrollbarTag"
                    ref="chatLogPS"
                    :key="$vs.rtl"
                    class="scroll-area"
                  >
                    <ul ref="chatLog">
                      <li
                        v-for="(msg, index) in chatLog"
                        :key="index"
                        class="flex items-start"
                        :class="{'flex-row-reverse': msg.isSent, 'mt-4': index}"
                      >
                        <vs-avatar
                          size="40px"
                          class="m-2 flex-shrink-0"
                          :class="msg.isSent ? 'ml-3' : 'mr-3'"
                          :src="msg.senderImg"
                        />
                        <div
                          class="msg relative bg-white shadow-md py-3 px-4 mb-2 mt-1 rounded-lg max-w-md"
                          :class="{'chat-sent-msg bg-primary-gradient text-white': msg.isSent, 'border border-solid d-theme-border-grey-light': !msg.isSent}"
                        >
                          <span>{{ msg.msg }}</span>
                        </div>
                      </li>
                    </ul>
                  </component>
                </div>
                <div class="flex bg-white p-6 chat-input-container">
                  <vs-input
                    v-model="chatMsgInput"
                    class="mr-3 w-full"
                    placeholder="Type Your Message"
                  />
                </div>
              </template>
            </vx-card>
          </div>
        </form>
      </component>
    </vs-prompt>

  </vs-row>
</template>

<script>

export default {
  data: () => ({

    // Data table
    selected: [],
    log: [],
    ticket: [
      {
        id: 1,
        idticket: '#54654',
        subject: 'Gateway down',
        departement: 'Technical Support',
        status: 'Open',
        createdate: 'Sunday, December 13th, 2020 (01:18)',
      },
    ],

    // Create Ticket Prompt
    activePrompt: false,
    ticketSubject: '',
    ticketMessage: '',
    TicketDepartement: 'sales',
    DepartementOptions: [
      { text: 'Sales', value: 'sales' },
      { text: 'Billings', value: 'billings' },
      { text: 'Technical Support', value: 'technical' },
    ],

    // Answser Ticket Prompt
    activePrompt2: false,
    chatLog: [{ isSent: 'dqs', msg: 'dqsqsdqsd' }, { msg: 'dqsqsdqsd' }], // senderImg: '' tu peux rajouter la source de l'avatar :)
    chatMsgInput: '',

  }),
  computed: {
    validateForm() {
      return !this.errors.any() && this.ticketSubject !== '' && this.ticketMessage !== ''
    },
    validateForm2() {
      return !this.errors.any() && this.chatMsgInput !== ''
    },
    scrollbarTag() { return this.$store.getters.scrollbarTag },
  },
  methods: {
    clearFields() {
      this.$nextTick(() => {
        this.ticketSubject = ''
        this.ticketMessage = ''
      })
    },
    clearFields2() {
      this.$nextTick(() => {
        this.chatMsgInput = ''
      })
    },
    answerTicket() {
      // Answer Ticket
    },
    sendTicket() {
      // Send Ticket
    },
    replyTicket(properties) {
      // console.log(`click on ${properties}`)
      // TRANSMETTRE LES DONNEES POUR SAVOIR L'ID (MARCHE PAS A CHECK)
      Object.assign(this.activePrompt2, properties)
      this.activePrompt2 = true
    },
    mounted() {
      const scrollEl = this.$refs.chatLogPS.$el || this.$refs.chatLogPS
      scrollEl.scrollTop = this.$refs.chatLog.scrollHeight
    },
  },
}
</script>
