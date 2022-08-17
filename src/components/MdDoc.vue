<script setup lang="ts">
import { lang } from '../language'
import { defineComponent, ref } from "vue";
import { useRoute } from 'vue-router'
import axios from "axios"
import { ElLoading } from 'element-plus'

let route = useRoute()

console.info(route.query.file)
console.info(route.query.path)

let mdContent = ref(undefined as string)
let mdShow = ref(false)

defineComponent({
  name: 'md-doc',
})

async function getMdText(path: String, file: String) {
  const loadingInstance1 = ElLoading.service({ fullscreen: false, target: '.j_doc' })
  try {
    const res = await axios({
      method: 'get',
      url: `./docs/${lang}/md/${path}/${file}.md`
    })
    mdContent.value = await res.data
    mdShow.value = true
  } catch (e) {}
  loadingInstance1.close()
}

getMdText(route.query.path as string, route.query.file as string)

</script>

<template>
  <div class="j_doc">
    <v-md-preview v-if="mdShow" :text="mdContent" class="md"></v-md-preview>
  </div>
</template>

<style scoped>
.md {
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
}
</style>
