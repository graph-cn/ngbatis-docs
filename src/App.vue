<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { lang, setLang } from './language'
import MenuChild from './components/MenuChild.vue'
import axios from "axios"
import { useRouter, useRoute } from "vue-router";

import { useDark, useToggle, useNavigatorLanguage } from '@vueuse/core'
import { Moon, Sunny } from '@element-plus/icons-vue'

const languages = useNavigatorLanguage()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const isSunny = ref(!isDark.value)
function turnLight() {
  isDark.value = !isSunny.value
}
const prefLang = ref(lang)


let router = useRouter()
let route = useRoute()
let menus = ref([])
let defaultOpeneds = ref([])
let menu = ref(undefined as any)

defineComponent({
  name: 'app',
  components: { MenuChild }
})

function switchLang() {
  setLang(prefLang.value);
  location.reload();
}

async function getMenu() {
  const res = await axios({
    method: 'get',
    url: `./docs/${lang}/nav.json`
  })

  menus.value = await res.data
  let pathAndFile = getPathAndFile(menus.value)
  if( pathAndFile )
  menu.value = findMenu(menus.value, pathAndFile)
}

function getPathAndFile(menus) {
  let path , file;
  if( route.query.path && route.query.file ) {
    path = route.query.path;
    file = route.query.file;
    return [ path, file ]
  } else {
    let traceStr = sessionStorage.getItem('menuIndex')
    if( traceStr ) {
      let trace = JSON.parse(traceStr)
      toPage(trace[1], trace)
      return
    }
    let m = menus[0].children[0]
    toPage(m, [menus[0], m])
  }
}

function findMenu(menus, ids) {
  let id = ids.shift()
  for( let i = 0; i < menus.length; i ++ ) {
    let m = menus[i]
    if( m.id == id ) {
      if(ids.length) {
        defaultOpeneds.value.push(m);
        return findMenu(m.children, ids)
      }
      return m
    }
  }
}


function toPage(menu: any, trace: Array<any>) {
  sessionStorage.setItem('menuIndex', JSON.stringify(trace))
  router.push({ path: `/`, query: {path: trace[0].id, file: menu.id}});
}

getMenu()

</script>

<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="22">
          <span>Ngbatis</span> 
          <span class="desc">{{$t('desc')}}</span>
        </el-col>
        <el-col :span="2">
          <el-switch v-model="isSunny"
            :active-icon="Sunny"
            :inactive-icon="Moon"
            @change="turnLight"
            inline-prompt
          ></el-switch>
          <el-switch 
            v-model="prefLang"
            active-value="zhCn"
            inactive-value="en"
            active-text="En"
            inline-prompt
            style="--el-switch-on-color: var(--el-color-primary); --el-switch-off-color: var(--el-color-primary)"
            inactive-text="中"
            @change="switchLang"></el-switch>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu @select="toPage" 
          :default-active="menu" 
          :default-openeds="defaultOpeneds">
          <menu-child :menus="menus"></menu-child>
        </el-menu>
      </el-aside>
      <el-main width="100%">
        <router-view :key="$route.fullPath"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
#app .el-header {
  line-height: 52px;
  font-size: 28px;
  padding: 0 16px;
  border-bottom: 1px solid var(--el-border-color);
  flex-direction: row;
}

#app .el-header .desc {
  font-size: 16px;
}
#app .el-container .el-aside .el-menu {
  height: calc( 100vh - 60px );
}
#app .el-container {
  height: 100vh;
  width: 100vw;
}
#app .el-container .el-container {
  height: calc( 100vh - 60px );
}
#app .el-main {
  padding: 0;
  height: calc( 100vh - 60px );
}
.el-switch {
  padding: 0px 8px;
}
</style>
