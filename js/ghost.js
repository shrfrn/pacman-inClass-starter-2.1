'use strict'

const GHOST = '&#9781'
var gGhosts = []

var gIntervalGhosts

function createGhosts(board) {
    // TODO: 3 ghosts and an interval
}

function createGhost(board) {
    // TODO: set arbitrary start pos & currCellContent
}

function moveGhosts() {
    // TODO: loop through ghosts
}

function moveGhost(ghost) {
    // TODO: figure out moveDiff, nextLocation, nextCell

    // TODO: return if cannot move
    // TODO: hitting a pacman? call gameOver

    // TODO: moving from current location:
    // TODO: update the model (restore prev cell contents)
    // TODO: update the DOM
    // TODO: Move the ghost to new location:
    // TODO: update the model (save cell contents so we can restore later)
    // TODO: update the DOM
}

function getMoveDiff() {
    const randNum = getRandomIntInclusive(1, 4)

    switch (randNum) {
        case 1: return { i: 0,  j: 1  }
        case 2: return { i: 1,  j: 0  }
        case 3: return { i: 0,  j: -1 }
        case 4: return { i: -1, j: 0  }
    }
}

function getGhostHTML(ghost) {
    return `<span>${GHOST}</span>`
}