<template>
  <div class="home">
      <h4>Page 2</h4>
        <Counter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Counter from '../components/Counter.vue'


@Options({
  components: {Counter

  },
})
export default class Page2 extends Vue {}
</script>
