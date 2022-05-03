<template>
  <div class="col col-auto">
      <button @click="buttonGlobal" class="btn btn-info" type="button"> Home </button>
    </div>

</template>

<script>

export default {

  methods: {
    buttonGlobal () {
      this.$router.push('/account')
    }

  }

}

</script>

<style scoped>
button {
border-radius: 20px;
border: 1px solid rgb(100, 77, 228);
background-color: white;
color: rgb(100, 77, 228);
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
margin-top: 10px;
}
</style>
