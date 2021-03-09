<template>
  <q-page class="flex column pageChat" ref="pageChat">
    <q-banner class="text-white bg-red text-center" v-if="!otherUserDetails.online">
      {{ otherUserDetails.name }} is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end"  :class="{'invisible' : !showMessages}">

      <q-chat-message
        v-for="(message, key) in messages"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :text="[message.text]"
        :key=key
        :sent="message.from == 'me' ? true : false"
      />

    </div>

    <q-footer elevated class="bg-accent q-mt-lg">
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <q-input ref="newMessage" v-model="newMessage" bg-color="white" rounded outlined label="Message" dense>
            <template>
              <q-btn color="black" type="submit" round dense flat icon="send"/>
            </template>
          </q-input>
        </q-form>

      </q-toolbar>
    </q-footer>

  </q-page>

</template>

<script>
import {mapState, mapActions} from 'vuex'
import mixingOtherUser from '../mixins/mixing-other-user-details'


export default {
  mixins: [mixingOtherUser],
  name: "ChatingPage",
  data() {
    return {
      newMessage: '',
      showMessages: false
    }
  },
  computed: {
    ...mapState('chat', ['messages', 'users']),
    ...mapState('auth', ['userDetails']),


  },
  methods: {
    ...mapActions('chat', ['firebaseGetMessages', 'stopGettingMessages', 'firebaseSendMessage']),
    sendMessage() {
      if (this.newMessage === '') return

      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: 'me'
        },
        otherUserId: this.$route.params.uid

      })
      this.newMessage = ''
      this.$refs.newMessage.focus()
    },
    scrollToBottom() {
      let pageChat = this.$refs.pageChat.$el
      setTimeout(() => {
        window.scrollTo(0, pageChat.scrollHeight)

      },50)

    }
  },
  mounted() {
    this.firebaseGetMessages(this.$route.params.uid)
  },
  destroyed() {
    this.stopGettingMessages()
  },
  watch: {
    messages: function (val) {
      if (Object.keys(val).length) {
      this.scrollToBottom()
        setTimeout(()=> {
          this.showMessages = true
        }, 300)
      }
    }
  }
}
</script>

<style scoped>




</style>
