<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as fs from 'fs-extra'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    modifyLocalJsonFile () {
      const filePath = './path/to/your.json' // JSON文件路径

      try {
        const data = fs.readJsonSync(filePath) // 读取原始JSON内容

        // 对data进行修改或更新
        // ...

        fs.writeJsonSync(filePath, data) // 将修改后的数据写回到JSON文件

        console.log('已成功修改本地JSON文件')
      } catch (error) {
        console.error('修改本地JSON文件时发生错误', error)
      }
    }
  }
}
</script>
