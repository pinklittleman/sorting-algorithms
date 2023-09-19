const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

let BarWinWidth = canvas.width/6

let Bars = []
let SortingAlg = {}
let AlreadyHeights = []
let currentPos

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
    
    Bars.forEach(bar => {
        bar.draw()
        // bar.x -= 1
        // bar.height = Math.floor(Math.random()*100)
    });

    requestAnimationFrame(mainloop)
}

requestAnimationFrame(mainloop)

async function start(){

    // Bars.forEach(bar => {
    //     setTimeout(() => {
    //         bar.R = 20
    //         bar.G = 200
    //         setTimeout(() => {
    //             Bar.R = 200
    //             Bar.G = 20   
    //         }, 1000);
            
    //     }, 1000);
    // });

    // for (let i = 0; i < Bars.length; i++) {
    //     Bars[i].R = 20
    //     Bars[i].G = 200
                
    // }
    

    // for now this shall do just moving x index lol


    // for (let i = 0; i < Bars.length; i++) {
    //     let Ran1 = Math.floor(Math.random()*Bars.width)
    //     let Ran2 = Math.floor(Math.random()*Bars.width)
    //     Bars[Ran1].x = Ran2
    //     Bars[Ran2].x = Ran1
        
    // }

}

function shuffle(){
    Bars.forEach(bar => {
        
    });
}

function randnum(num){
    let ran = Math.floor(Math.random()*num) 
    return ran
}