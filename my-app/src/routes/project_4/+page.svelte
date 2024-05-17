<script>
  // @ts-nocheck
  let inputValue = "" ?? 0;
  let previousGuess = [];
  let guessRemaining = 10;
  let randomNum = Math.floor(Math.random() * 100);
  let message = "";
  let answer = false;
  let result = 0;
  let set = false;

  function submit(inputValue) {
    message = "";
    console.log(inputValue);
    if (isNaN(Number(inputValue)) || inputValue === "") {
      message = `${inputValue} :- This is not a valid number`;
      console.log(message);
    } else {
      compareGuess(Number(inputValue));
      inputValue = "";
    }
  }

  function compareGuess(guess) {
    if (guess === randomNum) {
      result = randomNum;
      answer = true;
      set = true;
    } else if (guess < randomNum) {
      message = "Too low! Try a higher number.";
    } else {
      message = "Too high! Try a lower number.";
    }
    previousGuess = [...previousGuess, guess];
    guessRemaining--;
    inputValue = "";
    gameOver(guessRemaining);
  }

  function gameOver(remaining) {
    if (remaining === 0) {
      result = randomNum;
      answer = true;
      set = true;
      message = `You lose Try again`;
    }
  }

  function reSet() {
    message = "";
    previousGuess = [];
    guessRemaining = 10;
    randomNum = Math.floor(Math.random() * 100);
    answer = false;
    set = false;
  }

</script>

<div
  class="grid gap-5 grid-cols-1 justify-items-center items-center place-content-center h-screen bg-slate-800"
>
  <h1 class="text-3xl text-sky-800 font-bold">Guess lucky Number</h1>
  <input
    class="py-1 px-2 rounded-md bg-white border-2 border-slate-800 text-black"
    type="number"
    bind:value={inputValue}
  />
  <button
    class="text-lg text-white bg-zinc-700 rounded-xl py-1 px-2"
    type="submit"
    on:click={() => {
      submit(inputValue);
    }}>Submit guess</button
  >
  <span class="text-red-900">{message}</span>
  <span class="text-white">Previous Guess : {previousGuess.join(", ")}</span>
  <span class="text-white">Guesses Remaining : {guessRemaining}</span>
  <span class="text-white">Hint : Number lies between 1 to 100</span>
  <span class="text-slate-800 text-xl" class:text-green-700={set}
    >Congratulations! You guessed the correct number!</span
  >
  <span class="text-slate-800" class:text-white={answer}
    >Game Over : Random number was {result}</span
  >
  <button
    on:click={reSet}
    class="text-lg text-slate-800 cursor-pointer"
    class:text-white={set}>Restart</button
  >
</div>
