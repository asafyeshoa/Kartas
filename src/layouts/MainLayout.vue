<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-accent">
      <q-toolbar>

        <q-toolbar-title class="absolute-center" :class="loggedIn ? 'text-info' : 'barTitle text-info'">
          Kartas
        </q-toolbar-title>

        <div class="absolute-right" style="margin-top: 7px" v-if="loggedIn">

          <q-btn
            @click="logoutUser"
            icon="logout"
            size="15px"
            flat
            dense
          />

          <q-btn to="/settings" icon="settings" size="15px" flat dense>

          </q-btn>
        </div>
        <div
          class="left"
          v-if="loggedIn && this.$route.fullPath.includes( '/chatingPage')"
        >

          <q-btn v-go-back.single label="back" color="white" icon="reply"
                 size="15px" flat dense
          >
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer v-show="!this.$route.fullPath.includes('/chatingPage')" >
      <q-tabs
        class="bg-accent"
        v-if="loggedIn"


      >
        <q-route-tab class="text-info" v-for="tab in tabs" :to=tab.to exact :icon=tab.icon :label=tab.label
                     :key="tab.id"/>

      </q-tabs>


    </q-footer>
    <q-drawer
      v-if="loggedIn"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :breakpoint="767"
      :width="250"
      color="info"

    >
      <q-list dark>

        <q-item-label
          header
          class="text-info"
        >
          Navigation
        </q-item-label>

        <q-item
          v-for="nav in navs"
          clickable
          :to=nav.to
          exact
          :key="nav.id"
          class="text-info"


        >
          <q-item-section
            avatar
            class="text-info"
          >
            <q-icon :name=nav.icon color="info"/>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-info"> {{ nav.label }}</q-item-label>
            <q-item-label caption class="text-info"
            >
              {{ nav.des }}
            </q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Tasks',
          icon: 'grading',
          des: 'Create and Manage Tasks',
          to: '/',
          id: 0
        },
        {
          label: 'Net Calculator',
          icon: 'calculate',
          des: 'Calculate and manage Area Calculations',
          to: '/netCaulator',
          id: 1
        },

        {
          label: 'Chat',
          icon: 'question_answer',
          des: 'Contact Friends and App Support',
          to: '/chat',
          id: 2
        },

        {
          label: 'Settings',
          icon: 'settings',
          des: 'Custom and manage App',
          to: '/Settings',
          id: 3
        },


      ],
      tabs: [
        {
          label: 'Tasks',
          icon: 'grading',
          des: 'Create and Manage Tasks',
          to: '/',
          id: 0
        },
        {
          label: 'Net Calculator',
          icon: 'calculate',
          des: 'Calculate and manage Area Calculations',
          to: '/netCaulator',
          id: 1
        },

        {
          label: 'Chat',
          icon: 'question_answer',
          des: 'Contact Friends and App Support',
          to: '/chat',
          id: 2
        }


      ]
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>



<style scoped lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }

}

.fixed-right {
  padding: 15px
}


.barTitle {
  text-align: center

}

</style>
