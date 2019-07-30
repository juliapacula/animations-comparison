<template>
  <div class="row">
    <div class="col-12">
      <List />
    </div>

    <div class="floating-button">
      <button
        @click="isItemInputVisible = !isItemInputVisible"
        class="btn btn-primary btn-fab">
        <i class="mdi mdi-plus"></i>
      </button>
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
      isItemInputVisible: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'components/dashboard';
</style>
