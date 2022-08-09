<script setup lang="ts">
import { lang } from '../language'
import { defineComponent, ref } from "vue";
import { useRoute } from 'vue-router'
import axios from "axios"

let route = useRoute()

console.info(route.query.file)
console.info(route.query.path)

let mdContent = ref(undefined as string)
let mdShow = ref(false)

defineComponent({
  name: 'md-doc',
})

async function getMdText(path: String, file: String) {
  const res = await axios({
    method: 'get',
    url: `${process.env.BASE_URL}docs/${lang}/md/${path}/${file}.md`
  })
  mdContent.value = await res.data
  mdShow.value = true
}

getMdText(route.query.path as string, route.query.file as string)

</script>

<template>
  <v-md-preview v-if="mdShow" :text="mdContent" class="md"></v-md-preview>
</template>

<style scoped>
.md {
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
}
</style>
