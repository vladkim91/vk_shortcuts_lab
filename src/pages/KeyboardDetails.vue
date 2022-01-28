<template>
  <div class="kb-details">
    KeyboardDetails
  </div>
</template>

<script>
import keyboardsData from '../keyboards'
export default {
  
  name: "KeyboardDetails",
  data : ()  => ({
    keyboards: keyboardsData
  })
}
</script>
