Vue.component('chuck-card', {
    props: ['icon_url', 'value'],
    template: `
      <div class="card mb-3">
        <img :src="icon_url" class="card-img-top" alt="Chuck Norris">
        <div class="card-body">
          <p class="card-text">{{ value }}</p>
        </div>
      </div>
    `
  });
  
  var app = new Vue({
    el: '#app',
    data: {
      chuck: [
        { icon_url: "https://3.bp.blogspot.com/-VGvVEqcATlY/TxnA7vRUnAI/AAAAAAAAADo/f3hLcUUl73s/s1600/AVATAR%2B-%2B%2BChuck%2BNorris%2BColorado2.jpg", value: "Chuck Norris can skydive into outer space." },
        { icon_url: "https://3.bp.blogspot.com/-VGvVEqcATlY/TxnA7vRUnAI/AAAAAAAAADo/f3hLcUUl73s/s1600/AVATAR%2B-%2B%2BChuck%2BNorris%2BColorado2.jpg", value: "The chief export of Chuck Norris is pain." },
        { icon_url: "https://3.bp.blogspot.com/-VGvVEqcATlY/TxnA7vRUnAI/AAAAAAAAADo/f3hLcUUl73s/s1600/AVATAR%2B-%2B%2BChuck%2BNorris%2BColorado2.jpg", value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
        { icon_url: "https://3.bp.blogspot.com/-VGvVEqcATlY/TxnA7vRUnAI/AAAAAAAAADo/f3hLcUUl73s/s1600/AVATAR%2B-%2B%2BChuck%2BNorris%2BColorado2.jpg", value: "Time waits for no man. Unless that man is Chuck Norris." },
        { icon_url: "https://3.bp.blogspot.com/-VGvVEqcATlY/TxnA7vRUnAI/AAAAAAAAADo/f3hLcUUl73s/s1600/AVATAR%2B-%2B%2BChuck%2BNorris%2BColorado2.jpg", value: "If you spell Chuck Norris in Scrabble, you win. Forever." }
      ]
    }
  });
  