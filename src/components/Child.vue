<template>
<div class="alls">
<div class="all">
<div class="class">
<h1 class="haboutzs">{{data.same}}</h1>
<p class="aboutzs">{{data.note}}</p>
<div class="clasi">
<div class="class">
<p class="aboutzi">{{calCulate}}%</p>
<p class="aboutz">completion of project</p>
<p class="aboutzi">{{calCulate}}+</p>
<p class="aboutz">trustworthy in project</p>
</div>
<div class="clase">
<p class="aboutzi">{{calCulates}}+</p>
<p class="aboutz">Days of project</p>
<p class="aboutzi">{{calCulate}} %</p>
<p class="aboutz">unlimited of knowledge</p>
</div>
</div>
</div>
</div>

<slot><div class="cour">
<div class="cours">
<img src="front.png" class="imagk"/>
<p class="coursk"> frontend Developer</p>
</div>
<div class="cours">
<img src="ui.png" class="imagk"/>
<p class="coursk">UI/UX Design</p>
</div>
</div>
</slot>
</div>
<ul>
<li v-for="item in list" :key="item">
{{item}}
</li>
</ul>
<main class="foote">
<footer>
<p class="foote">design by odukoya sheriffuddeen olawale</p>
<p  class="foot">&copy; August 2023</p>
</footer>
</main>
</template>


<script>
import axios from "axios"
export default {
  name: 'Child',

  props:{
    data: Object
  },
  data(){
    return{
      dollar: '200',
    naira: '40',
    usa: '100',
    list: []
    }
  },
  computed: {
    calCulate() {
      return (this.dollar*this.naira) - 7900
    },
    calCulates() {
      return (this.dollar*this.naira) - 7990
    }
  },

  async mounted() {
    const result = await axios.get("http://127.0.0.1:5501/Api.html")
      this.list = result.data.data
      console.log(result.data.data)
    }
}
</script>