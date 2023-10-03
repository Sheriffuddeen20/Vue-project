<template>
<main class="main1">
<div class="join">
<h1 class="h12"> i'm </h1>
<h1 class="h11"> Sheriff  Olawale</h1>

<div class="line"></div>
<p class="p11"> {{name}} </p>
</div>
<div>
<img src="sheriff1b.png" class="image" />
</div>
<div class="text">
<h1 class="p112">Services</h1>

<h2 class="h21"> let's build quality website in coding and design with my services </h2>
<h1 class="p113">Coding</h1>
<h2 v-if="show" class="h21">Ecommerce website, Video website, Online Class / School website and Business website</h2>
<h1 class="p113">Design</h1>
<h2 v-if="show" class="h21">Logo, Flyer, Business Card, and Invitation Card</h2>
<button v-on:click="show=!show" class="btn">Read more</button>
<div class="image2">
<img src="twwit.png" class="imagee"/>
<img src="whats.jpeg" class="imagee"/>
<img src="face.png" class="imagee"/>
<img src="linkl.png" class="imagee"/>

</div>

</div>
</main>

<main class="main2">

<div class="tagg1">
<div class="tagg">
<img src="html.png" class="imageee1"/>
<p class="pp">Html</p>
</div>
<div class="taggg">
<img src="css.png" class="imageee2"/>
<p class="pp">Css</p>
</div>
<div class="tagggg">
<img src="js.png" class="imageee3"/>
<p class="pp">Javascript</p>
</div>
<div class="taggggg">
<img src="vue.png" class="imageee4"/>
<p class="pp">Vue.js</p>
</div>
</div>
<div class="butto">
<button @click="tab='About'" class="utto">About</button>
<button @click="tab='Contact'" class="uttoo">Contact</button>

</div>
<component :is="tab" />
</main>
<h1 class="p117">Register Form</h1>
<main class="main3">
<form action="">
      <li v-for="item in error" :key="item" class="pass">
      {{item}}
      </li>
      <label for="firstname">firstname: </label>
      <input type="text" 
     v-model="form.firstname" autocomplete="on">
    
      <label for="lastname">Lastname: </label>
      <input type="text" v-model="form.lastname" autocomplete="on">
      <br>
      <label for="email">Email: </label>
      <input type="text" v-model="form.email" autocomplete="on">
      
      <label for="password">Password: </label>
      <input type="password" v-model="form.password">
      <br>
      <div class="lilss">
      <h2 class="cla">Gender: </h2>
      <label for="male">Male</label>
      <input type="radio"  value="male" name="Gender" v-model="form.
      Gender" class="lilsz">
       <br>
      <label for="female">Female</label>
      <input type="radio"  value="female" v-model="form.Gender" class="lilszi">
       </div>
      <div class="lilss">
      <h2 class="lils">Country: </h2>
      <select name="country" id="country" v-model="form.country">
      <option value="usa">Usa</option>
      <option value="Nigeria" selected>Nigeria</option>
      <option value="Morroco">Morroco</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Brazil">Brazil</option>
      <option value="Epygt">Epygt</option>
      </select>
      </div>
      <h2 class="cla">Course Register: {{count}} </h2>
      <button v-on:click="count=count+1" type="button" class="butts">click +</button>
      <button v-on:click="count=count-1" type="button" class="butts">click -</button>
      
      <h2 class="cla">Course: </h2>
      <label for="html">Html</label>
      <input type="checkbox" id="html" value="html" v-model="form.Course">
      
      <label for="css">Css</label>
      <input type="checkbox" id="css"  value="css" v-model="form.Course">
      <br>
      <label for="javascript">Javascript</label>
      <input type="checkbox" id="javascript"  value="javascript" v-model="form.Course">
      
      <label for="vue.js">Vue.js</label>
      <input type="checkbox" id="vue.js" value="vue.js" v-model="form.Course">
      <br>
      <button v-on:click="getData()" class="butt" type="button">login</button>
    </form>
      

</main>
<main class="wel"> 
<ul>
<li v-for="item in loops" :key="item" class="lill">

<Child :data="item" />

</li>
</ul>
</main>
</template>

<script>
import Child from './Child.vue'
import Contact from './Contact.vue'
import About from './About.vue'
import Education from './Education.vue'
export default {
  name: 'Home',
 components:{
    Child,
    Contact,
    About,
    Education
  },
data() {
  return {
    tab: 'about',
    name: 'A freelancer who provides services for website design and graphic design needs,for all businesses with more than 2years of experience',
    show: false,
    count: 0,
    loops: [
      {
        same:'what can i do for your needs',
        note: 'it is easier to entrust the work to the experts because they are able to provide the best results with reliable quality'
      }],
    
    form:{
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      country: '',
      Gender: '',
      Course: []
    },
     
    error: []
    }  
},
methods: {
  
  getData() {
    this.error= []
   for(const item in this.form){
    if(this.form[item]==='' || this.form[item].length===0){
      this.error.push(item)
    }
    
   }
     if(this.error.length===0){
      alert('submitted')
    }
    }
    
  },
  beforeCreate() {
    alert("welcome to sheriffuddeen portfolio")
  },
  watch:{
    count(val){
      if(this.count > 5){
        alert('stop number Register')
      }
      if(this.count < 1){
        alert('stop number Register')
      }
    }
  }
}

</script>

