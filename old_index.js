const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

let BarWinWidth = canvas.width/6

let Bars = []
let SortingAlg = {}
let AlreadyHeights = []
let currentPos
let BarsAmmount
let BarXStored = {}
let Positions = []

class Bar{

    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 5
        this.R = 200
        this.G = 20
        this.B = 20
        this.height = 0
        this.id = 0
        this.pos = 0
        this.randomBarPos = 1
        Bars.push(this)
    }

    draw(){
        ctx.fillStyle = `rgb(${this.R},${this.G},${this.B})`
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }

}

for (let bg = 0; bg < canvas.width/6; bg++) {
    new Bar(1, 1)
}

let Bnum = -5
let Bht = 1

Bars.forEach(bar => {
    bar.x = Bnum+=5
    bar.height = Bht
    bar.id = Bht
    bar.pos = Bht
    Bht++
    Bnum++
    SortingAlg[bar.id] = {barX:bar.x, barID:bar.id, barPos:bar.pos, barHeight: bar.height}
});

function mainloop(){
    
    ctx.clearRect(0,0,canvas.width,canvas.height)

    for (let i = 0; i < BarXStored.length; i++) {
        
    }
     
    Bars.forEach(bar => {
        bar.draw()

        if(bar.R > 255){
            bar.R = 0
        }
        bar.R+=randnum(5)

        if(bar.G > 255){
            bar.G = 0
        }
        bar.G+=randnum(3)

        if(bar.B > 255){
            bar.B = 0
        }
        bar.B+=randnum(9)

        Bars.forEach(bar2 => {
            if(bar.id != bar2.id){
                
                if(bar.x == bar2.x){
                    
                }
            }
        });
    });

    requestAnimationFrame(mainloop)
}

requestAnimationFrame(mainloop)

function start(){

}

function shuffle(){
    Bars.forEach(bar => {
        bar.R = randnum(255)
        bar.G = randnum(255)
        bar.B = randnum(255)
        bar.randomBarPos = randnum(BarsAmmount)
        console.log(bar.randomBarPos)
        bar.x = BarXStored[bar.randomBarPos].Xpos

    });
}

function randnum(num){
    let ran = Math.floor(Math.random()*num)
    if (ran == 0){
        ran++
    }
    return ran
}

Bars.forEach(bar => {
    BarXStored[bar.id] = {Xpos:bar.x,Height:bar.height}
});

BarsAmmount = Bars.length