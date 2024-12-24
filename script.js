const chordEl = document.getElementById('chord')
const chordBtn = document.getElementById('chordBtn')

chordBtn.addEventListener('click', generateChord)
generateChord()

// USING ASYNC/AWAIT
async function generateChord() {

  function random(array) {
    let i = Math.floor(Math.random() * array.length);
    let result = array[i];
    return result;
  }

  function basicSeventhChords() {
    const letters = [ 'C','D','E','F','G','A','B']
    const accidentals = ['','♭','♯']
    const qualities = ['Δ7','7','m7','ø']
    const bassNotes = ['','III','V','VII']

    let letter = random(letters);
    let accidental = random(accidentals);
    let quality = random(qualities);
    let bassNote = random(bassNotes);
    

    let chordName = "chordName"
    if (bassNote != '') {
      chordName = letter + accidental + quality + "/" + bassNote
    } else {
      chordName = letter + accidental + quality 
    }


    console.log(chordName)
    return chordName;

    }

  result = basicSeventhChords();

  chordEl.innerHTML = result;
}

