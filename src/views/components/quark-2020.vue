<template></template>
<script>
function imagify(colour) {
  var out =
    `<img src="img/brand/quark_` +
    colour +
    `white.png" id="white_png" width="400px" class="img-fluid" />`;
  return out;
}

export default {
  name: "quark",
  data() {
    return {};
  }
};
</script>

