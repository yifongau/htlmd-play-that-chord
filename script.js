const chordEl = document.getElementById('chord')
const chordBtn = document.getElementById('chordBtn')
const chrdParams = new Object(); // possible chord parameters
    chrdParams.letters = ['C','D','E','F','G','A','B']
    chrdParams.accidentals = ['','♭','♯']
    chrdParams.qualities = ['Δ7','7','m7','ø']
    chrdParams.bassNotes = ['','/III','/V','/VII']

let chordCache = generateChords(chrdParams) // possible chords
const printChord = function() {  
  print(random(chordCache))
}
chordBtn.addEventListener('click', printChord)
printChord()

function generateChords(params) {
  letters = params.letters
  accidentals = params.accidentals
  qualities = params.qualities
  bassNotes = params.bassNotes

  let array = []
  let chord = ''
  for (i in letters) {
    for (j in accidentals) {
      for (k in qualities) {
        for (l in bassNotes) {
          chord = letters[i] + accidentals[j] + qualities[k] + bassNotes[l]
          array.push(chord)
        }
      }
    }
  }

  return array
}


// functions
function random(array) {
    let i = Math.floor(Math.random() * array.length);
    let result = array[i];
    return result;
  }

function print(string) {
  chordEl.innerHTML = string
}

