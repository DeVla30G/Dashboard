<template>
    <div class="SideBar">
       <div class="sidebarWrapper">
         <div class="sidebarMenu">
           <h3 class="sidebarTitle">
             Dashboard
            </h3>
            <ul class="sidebarList">
              <li class="sidebartListItem">
              <img class="sidebarIcon" src="#"/> <a href="#">NIce daily quotes</a>
              </li>
              <li class="sidebartListItem">
                 <img class="sidebarIcon" src="#"/> <a href="#">Weather</a>
              </li>
               <li class="sidebartListItem">
                 <img class="sidebarIcon" src="#"/> <a href="#">News</a>
              </li>
               <li class="sidebartListItem">
                 <img class="sidebarIcon" src="#"/> <a href="#">NASA pictures</a>
              </li>
            </ul>
              <h3 class="sidebarTitle">
                Panel Board
              </h3>
            <ul class="sidebarList">
              <li class="sidebartListItem">
                 <img class="sidebarIcon" /> <a href="/users">Users</a>
              </li>
              <li class="sidebartListItem">
                <img class="sidebarIcon" src="#"/><a href="#"></a>
              </li>
            </ul>
         </div>
       </div>
    </div>
</template>
<script>

export default {
  name: 'SideBar'
}
</script>

<style scoped>
.SideBar{
    flex: 1;
    width:15%;
    height: calc(100vh - 50px);
    background-color: rgb(35, 4, 145);
    position: sticky;
    top: 50px;
}

.sidebarWrapper{
    padding: 20px;
    color: #555;
}

a{
    color: black;
}

.sidebarMenu{
    margin-bottom: 10px;
}

.sidebarTitle{
    font-size: 13px;
    color: #555;
}

.sidebarList{
    list-style: none;
    padding: 5px;
}

.sidebartListItem{
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
}

.sidebartListItem.active, .sidebartListItem:hover {
   background-color: #e4b012;
   width: 80%;
   justify-content: center;
}

.sidebarIcon{
   margin-right: 5px;
}
</style>
