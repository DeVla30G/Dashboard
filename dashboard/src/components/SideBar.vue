<template>
  <div class="sidebar">
    <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item class="nav-item" active @click="hide">Active</b-nav-item>
              <b-nav-item class="nav-item" href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item class="nav-item" href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>

export default {
  name: 'SideBar'
}
</script>

<style scoped>
.sidebar{
    flex: 1;
    height: calc(100vh - 50px);
    background-color: #2b3232;
    position: sticky;
    top: 50px;
}
.nav-item{
     padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
}
.nav-item.active, .nav-item:hover{
    background-color: #6e6bbb;
   width: 80%;
   justify-content: center;
}

</style>
