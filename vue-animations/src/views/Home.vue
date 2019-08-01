<template>
  <div class="row">
    <div class="col-12">
      <List />
    </div>

    <div class="floating-button">
      <transition
        name="jump"
        appear>
        <button
          v-if="showButton"
          @click="isItemInputVisible = !isItemInputVisible"
          class="btn btn-primary btn-fab">
          <transition :name="isItemInputVisible ? 'rotate-left' : 'rotate-right'" mode="out-in">
            <div v-if="isItemInputVisible" :key="'close'" class="mdi mdi-close"></div>
            <div v-else :key="'open'" class="mdi mdi-plus"></div>
          </transition>
        </button>
      </transition>
    </div>

    <ItemInput
      :isVisible="isItemInputVisible"
      @close="isItemInputVisible = false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ItemInput, List } from '@/components';

export default Vue.extend({
  name: 'home',
  components: {
    ItemInput,
    List,
  },
  data() {
    return {
      showButton: false,
      isItemInputVisible: false,
    };
  },
  mounted(): void {
    this.showButton = true;
  },
  beforeDestroy(): void {
    this.showButton = false;
  },
});
</script>

<style lang="scss" scoped>
@import 'components/dashboard';
</style>
