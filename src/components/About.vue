<template>
<h1 class="abou">About me</h1>
<p class="abouu">my name is Odukoya Sheriff  Olawale i was born in the year 2000 in lagos state. i study in delilis academy during my primary school and  continued my secondary school in community junior / senior grammar school before graduating into laspotech polytechnic as a ON Diploma in the year 2019. Am a Frontend developer and also a Graphic designer, i can't explain much in this content. 
<br>    One of my goal is to be a programmer, that think about how to run a code and to solve a problem with code. i didn't know how interesting coding was before running into it, i found myself in the myth of code which i feel happy whenever am on code which express my feeling. i struggle through my dream to be who i want to be, but there are sometime that i face obstacles which i can't explain with a text. hardship comes with ease and ease state should be prepare for hardship  </p>
<div class="clas">
<div class="two">
<ul>

<li class="aboutt">
Hobby
<p class="about">Reading</p>
<p class="about">Football</p>
<p class="about">listen to Recitation</p>
</li>
</ul>
<ul>
<li class="aboutt">
Religion
<p class="about">Al - Islam</p>
</li>
</ul>
</div>
<ul>
<li v-for="item in user" :key="item.skill" class="aboutt"> {{item.country}}
<p class="abous"> {{item.city}}</p>
</li>
</ul>
</div>

 
</template>

<script>
export default {
  name: 'About',
   data() {
    return{
      user:[{
      country: 'Country: Nigeria',
      },
      {
         city: 'City: ikeja / surulere'
      
  }]}}
}
</script>