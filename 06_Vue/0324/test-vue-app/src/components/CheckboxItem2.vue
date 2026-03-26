<template>
  <li>
    <input type="checkbox" :checked="idol.checked" />
    {{ idol.name }}
  </li>
</template>

<script>
export default {
  name: 'CheckboxItem2',
  props: {
    id: {
      type: [Number, String],
    },
    name: {
      type: [String],
    },
    checked: {
      type: [Boolean],
      default: false,
    },
  },
};
</script>
