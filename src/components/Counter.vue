<template>
<div style="col; background-color: aliceblue; border: 1px solid black;">
  <h2>Counter</h2>
  <div style='row mx-3 justify-content-between'>
    <span class='col' style='color: red; font-weight: bold'>{{counterData}}</span>
      <div style='' class='col'>
        <button class='btn btn-primary' @click='incrementI'>Press Me</button>
        <button class='btn btn-primary' @click='addTenI'>Add 10</button>

      </div>
      <button class='btn btn-danger' @click='resetI'>Reset</button>
    </div>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {mapActions, mapGetters} from 'vuex'

@Options({
  components: {},
  props: {
    counter: 0
  },
    computed: {
      ...mapGetters({counterData: 'getCounter'})
  },
  methods: {
    ...mapActions(['incrementCounter', 'resetCounter', 'addTen']),
    incrementI(): number {
      return this.incrementCounter()

    },
    resetI(): number {
      return this.resetCounter()

    },
    addTenI(): number {
      return this.addTen()
    }
  }
})
export default class Counter extends Vue {}
</script>
