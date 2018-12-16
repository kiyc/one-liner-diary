<template>
  <v-layout
    justify-center
    align-center
    row
    wrap>
    <v-flex
      xs12
      mb-2>
      <v-text-field
        v-model="newNote"
        label="日記を書こう！"
        @keyup.enter="saveNote"
      ></v-text-field>
      <v-btn
        color="success"
        @click="saveNote">
        Send
      </v-btn>
    </v-flex>
    <v-flex
      v-for="(note, i) in notes"
      :key="i"
      xs12
      mb-2>
      <v-card>
        <v-card-text>
          {{ note.content }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      newNote: '',
    }
  },
  computed: mapState(['notes']),
  methods: {
    saveNote () {
      if (!this.newNote.length) {
        return
      }

      const newNote = this.newNote
      this.newNote = ''

      this.$store.dispatch('saveNote', newNote)
    },
  },
}
</script>
