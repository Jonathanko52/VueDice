<template>
  <div id="DiceApp">
    <p>
      Give it a try!
    </p>

    <h3>Dices</h3>
    <button
      class="rollButton"
      v-on:click="roll"
    >
      ROLL
    </button>
    <span> First die is {{dice[0]}}, second die is {{dice[1]}} </span>
    <div class=diceContainer>
      <div v-if="dice[0] === 1">
        <img alt="Vue logo" src="./../assets/One.jpg" />
      </div>
      <div v-else-if="dice[0] === 2">
        <img alt="Vue logo" src="./../assets/Two.jpg" />
      </div>
      <div v-else-if="dice[0] === 3">
        <img alt="Vue logo" src="./../assets/Three.jpg" />
      </div>
      <div v-if="dice[0] === 4">
        <img alt="Vue logo" src="./../assets/Four.jpg" />
      </div>
      <div v-else-if="dice[0] === 5">
        <img alt="Vue logo" src="./../assets/Five.jpg" />
      </div>
      <div v-else-if="dice[0] === 6">
        <img alt="Vue logo" src="./../assets/Six.jpg" />
      </div>
      <div v-if="dice[1] === 1">
        <img alt="Vue logo" src="./../assets/One.jpg" />
      </div>
      <div v-else-if="dice[1] === 2">
        <img alt="Vue logo" src="./../assets/Two.jpg" />
      </div>
      <div v-else-if="dice[1] === 3">
        <img alt="Vue logo" src="./../assets/Three.jpg" />
      </div>
      <div v-if="dice[1] === 4">
        <img alt="Vue logo" src="./../assets/Four.jpg" />
      </div>
      <div v-else-if="dice[1] === 5">
        <img alt="Vue logo" src="./../assets/Five.jpg" />
      </div>
      <div v-else-if="dice[1] === 6">
        <img alt="Vue logo" src="./../assets/Six.jpg" />
      </div>
    <div class=diceTotal>
    {{ dice[0]+ dice[1]}}
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "DiceApp",
  data: function () {
    return {
      dice: [1,1]
    }
  },
  methods:{
    roll: function(){
      let result = this.axios.get('https://localhost:5001/WeatherForecast',
      { headers: {
	      'Access-Control-Allow-Origin': '*',
	    }}).then((response) => {
        let result = [response.data[0].dice,response.data[1].dice]
        console.log(result)
        return result
      }).then((response) => {
        console.log(response)
         this.dice = response
      }).catch((error)=>{alert(error)})
    }
  }
  };
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .rollButton {
    border-radius: 50%;
    background-color: black;
    border: none;
    color: white;
    height: 4em;
    width: 4em;
    font-weight: 900;
    box-shadow: 0 0 4px 0px black;
    margin: 1em;
  }
  .diceTotal{
    border: 1px solid black;
    font-size: 2em;
    padding: 0.5em 1em;
    margin: 1em 0.7em;
    text-align: center;
    border-radius: 25px;
  }
  .diceContainer{
    display:flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
