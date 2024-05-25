<script>
  import tarotCards from "../../data/cards.js"
  let myDeck = [...tarotCards]
  let myPicks = []
  const generateRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * myDeck.length)
    myPicks.push(myDeck[randomIndex])
    myDeck.splice(randomIndex, 1)
    myDeck = myDeck
    myPicks = myPicks
  }

  const reshuffleDeck = () => {
    myDeck = [...tarotCards]
    myPicks = []
  }
</script>

{#if myPicks != null && myPicks.length > 0}
  <div class="grid grid-cols-3 grid-rows-3 m-4 gap-4">
    <div
      class="col-start-2 col-span-1 row-start-1 row-span-1 grid grid-cols-3 gap-4"
    >
      {#each myPicks.slice(0, 3) as card (card.name)}
        <div class="border">
          <img class="w-full h-auto" src={card.image} alt={card.name} />
        </div>
      {/each}
    </div>
    <div
      class="col-start-2 col-span-1 row-start-3 row-span-1 grid grid-cols-3 gap-4"
    >
      {#each myPicks.slice(3, 6) as card (card.name)}
        <div class="border">
          <img class="w-full h-auto" src={card.image} alt={card.name} />
        </div>
      {/each}
    </div>
    <div
      class="col-start-1 col-span-1 row-start-2 row-span-1 grid grid-cols-3 gap-4"
    >
      {#each myPicks.slice(6, 9) as card (card.name)}
        <div class="border">
          <img class="w-full h-auto" src={card.image} alt={card.name} />
        </div>
      {/each}
    </div>
    <div
      class="col-start-3 col-span-1 row-start-2 row-span-1 grid grid-cols-3 gap-4"
    >
      {#each myPicks.slice(9, 12) as card (card.name)}
        <div class="border">
          <img class="w-full h-auto" src={card.image} alt={card.name} />
        </div>
      {/each}
    </div>
    <div
      class="flex flex-col justify-center items-center col-start-2 col-span-1 row-start-2 row-span-1 gap-4 mb-4 text-center"
    >
      <button
        class="text-center text-2xl text-bold bg-violet-900 hover:bg-violet-700 text-white font-bold py-4 px-6 rounded"
        on:click={generateRandomCard}>PICK!</button
      >
      <button
        class="text-center text-2xl text-bold bg-violet-900 hover:bg-violet-700 text-white font-bold py-4 px-6 rounded"
        on:click={reshuffleDeck}>RESTART</button
      >
    </div>
  </div>
{:else}
  <div class="flex justify-center m-6">
    <button
      class="text-center text-4xl text-bold bg-violet-900 hover:bg-violet-700 text-white font-bold py-4 px-6 rounded"
      on:click={generateRandomCard}>Start Tarotlisk Reading</button
    >
  </div>
{/if}
