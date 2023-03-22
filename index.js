// ukol 1
let justFood = (count) => {
    if (count === 1) {
        return `catering od Just Food pro ${count} člověka za ${count * 125} Kč`
    } else  {
        if (count < 5) {
            return `catering od Just Food pro ${count} lidi za ${count * 125} Kč`
        }
    }
    return `catering od Just Food pro ${count} lidí za ${count * 125} Kč`
    
}

let yourMama = (count) => {
    if (count === 1) {
        return `catering od Just Food pro ${count} člověka za ${count * 200} Kč`
    } else  {
        if (count < 5) {
            return `catering od Just Food pro ${count} lidi za ${count * 200} Kč`
        }
    }
    return `catering od Just Food pro ${count} lidí za ${count * 200} Kč`
    
}

let flavourHaven = (count) => {
    if (count === 1) {
        return `catering od Just Food pro ${count} člověka za ${count * 300} Kč`
    } else  {
        if (count < 5) {
            return `catering od Just Food pro ${count} lidi za ${count * 300} Kč`
        }
    }
    return `catering od Just Food pro ${count} lidí za ${count * 300} Kč`
    
}

let createEvent = (eventName, count, catering) => {
    return `Událost ${eventName} s ${catering(count)}`
}
// createEvent('JS', 5, yourMama)

// ukol 2
let viditelneCislo = 1
const kostka = document.querySelector('.dice')
const pootocKostkou = () => {
	viditelneCislo = viditelneCislo + 1
	if (viditelneCislo === 7) {
		viditelneCislo = 1
	}
	kostka.src = `img/side${viditelneCislo}.svg`
}
document.addEventListener('keydown', pootocKostkou)

