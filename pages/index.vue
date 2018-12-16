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
import { mapGetters } from 'vuex'
import { db } from '../plugins/firebase'

export default {
  data () {
    return {
      newNote: '',
    }
  },
  computed: {
    ...mapGetters({ notes: 'getNotes' })
  },
  mounted () {
    this.$store.dispatch('setNotesRef', db.collection('notes'))
  },
  methods: {
    saveNote () {
      if (!this.newNote.length) {
        return
      }

      const newNote = { content: this.newNote }
      this.newNote = ''

      db.collection('notes').add(newNote)
    },
  },
}
</script>
