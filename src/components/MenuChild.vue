

<script setup lang="ts">
  import { defineComponent } from 'vue';
  defineComponent({
    name: 'menu-child',
  })

  let props = defineProps(['menus', 'text'])
  let nameField = props.text ?? 'text'
</script>

<template>
  <template v-for="menu in menus">
    <ElSubMenu v-if="menu.children" :index="menu" :key="menu.id">
      <template #title>{{menu[nameField]}}</template>
      <MenuChild :menus="menu.children" :index="menu" :text="nameField"></MenuChild>
    </ElSubMenu>
    <ElMenuItem v-else :key="menu.id" :index="menu">
      {{menu[nameField]}}
    </ElMenuItem>
  </template>
</template>


<style scoped>
</style>