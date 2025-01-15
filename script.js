// globals
const chordEl = document.getElementById('chord')
const chordBtn = document.getElementById('chordBtn')

const chordParams = new Object();
chordParams.letters = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
chordParams.accidentals = ['', '♭', '♯']
chordParams.qualities = ['Δ7', '7', 'm7', 'ø7', 'o7']
chordParams.bassNotes = ['', 'III', 'V', 'VII']
chordParams.exclusions = { rareEnharmonics: ['B♯', 'E♯', 'C♭', 'F♭'] }

console.log(chordParams)

// program execution
const printChord = function () { chordElOutput(random(chordCache)) }
let chordCache = generateChords(chordParams, chordConstructor, chordFilter)
printChord()
chordBtn.addEventListener('click', printChord)

// function definitions
function chordElOutput(string) {
  chordEl.innerHTML = string
}


function random(array) {
  item = array[Math.floor(Math.random() * array.length)]
  return item
}


function chordConstructor(letter, accidental, quality, bassNote) {
  if (bassNote) {
  chord = letter + accidental + quality + "/" + bassNote
  } else {
  chord = letter + accidental + quality 
    }
  return chord
}

function chordFilter(chord, exclusions) {
  for (let exclusion in exclusions) {
    substrings = exclusions[exclusion]
    for (i in substrings) {
      substring = substrings[i]
      if (chord.includes(substring)) {
        return 
      }
    }
  }
return chord

}

function generateChords(params, constructor, filter) {
  letters = params.letters
  accidentals = params.accidentals
  qualities = params.qualities
  bassNotes = params.bassNotes
  exclusions = params.exclusions

  let array = []
  let chord = ''
  for (i in letters) {
    let letter = letters[i]
    for (j in accidentals) {
      let accidental = accidentals[j]
      for (k in qualities) {
        let quality = qualities[k]
        for (l in bassNotes) {
          let bassNote = bassNotes[l]
          chord = filter(constructor(letter, accidental, quality, bassNote), exclusions)
          if (chord) { array.push(chord) }
        }
      }
    }
  }
  console.log(array)
  return array
}


