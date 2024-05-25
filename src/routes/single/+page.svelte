<script>
  import tarotCards from "../../data/cards.js"
  let myDeck = [...tarotCards]
  export let myPick
  const generateRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * myDeck.length)
    myPick = myDeck[randomIndex]
  }
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
  <button
    class="text-center text-2xl text-bold bg-violet-900 hover:bg-violet-700 text-white font-bold py-4 px-6 rounded mb-6"
    on:click={generateRandomCard}>Generate Random Card</button
  >

  {#if myPick != null}
    <div class="border">
      <img class="w-60 h-80" src={myPick.image} alt={myPick.name} />
    </div>
  {/if}
</div>
