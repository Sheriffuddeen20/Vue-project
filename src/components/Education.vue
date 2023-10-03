<template>

<div class="container">
      <div class="scont">
        <div>
          <img src="sheriff.jpg" class="myima" />
        </div>
        <p class="myimaaa">name: <p class="myimaak">Odukoya Sheriff Olawale</p></p>
        <p class="myimaaa">marital: <p class="myimaaks">single</p></p>
        <p class="myimaaa">number: <p class="myimaaks">07012554154 09150965341</p></p>
        <router-link to="/homee" class="tos">
        Home
        </router-link>
        <router-link to="/education" class="tos">
        Education
        </router-link>
        <router-link to="/skill" class="tos">
        Skill
        </router-link>
      </div>

      <div class="tcont">
    <table>

      <tbody>
      <tr>
          <th>School</th>
          <th>level</th>
          <th>grade</th>
      </tr>
      <tr>
          <td>delilis academy</td> 
          <td>primary school</td>
          <td>common entrance</td>
      </tr>
      <tr>
      <td>community junior / senior grammar school</td>
      <td>secondary school</td>
      <td>waec / gce</td>
      </tr>
      <tr>
      <td>laspotech polytechnic</td>
      <td>polytechnic</td>
      <td>upper class</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
</template>

<script>
export default {
  name: 'Education',
  beforeCreate() {
    alert("beforecreate")
  }
}
</script>