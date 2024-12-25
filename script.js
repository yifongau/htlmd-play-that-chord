const chordEl = document.getElementById('chord')
const chordBtn = document.getElementById('chordBtn')

const chrdParams = new Object(); // possible chord parameters
    chrdParams.letters = ['C','D','E','F','G','A','B']
    chrdParams.accidentals = ['','♭','♯']
    chrdParams.qualities = ['Δ7','7','m7','ø']
    chrdParams.bassNotes = ['','III','V','VII']

let chordCache = generateChords(chrdParams, chordConstructor) // possible chords
const printChord = function() { print(random(chordCache)) }
printChord()
chordBtn.addEventListener('click', printChord)

function chordConstructor(letter, accidental, quality, bassNote) {
  chord = letter + accidental + quality + bassNote
  return chord
  console.log(chord)
}

function generateChords(params, constructor) {
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
          chord = constructor(letters[i], accidentals[j], qualities[k], bassNotes[l])
          constructor(letters[i], accidentals[j], qualities[k], bassNotes[l])
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

