<template>
<header>
<div><img src="logo sheriff ex 2.png" class="logo"/></div>

<router-link to="/" class="to">
Home
</router-link>

<router-link to="/profile" class="too">Profile</router-link>
<a href="mailto:odukoyasheriff@gmail.com"><div class="log">Email: odukoyasheriff@gmail.com</div></a>
<a href="tel:07012554154"><div class="logg"><img src="pho1.png" class="logog"/><div class="logos"></div>07012554154</div></a>

</header>
<div class="h222">
<h1 :class="{green : colorful}" class="h22">Sheriff Portfolio</h1>
<button v-on:click="colorful=!colorful" type="button" class="buttl">Change</button>
</div>
 <router-view />
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      colorful: true
    }
  }
}

</script>

