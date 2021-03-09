export default {
  computed: {
    otherUserDetails() {
      if(this.$store.state.chat.users[this.$route.params.uid]){
        return this.users[this.$route.params.uid]

      }
      return {}
    }
  }
}
