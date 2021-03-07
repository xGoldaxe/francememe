import { gsap } from "gsap"


export default function subBoxAnimation(block, onComplete, reverse = false) {
    //eazeaz
    let x,y
    if(block === 0) {
        x = 0;
        y = 0;
    } else if (block === 1) {
        x = -1;
        y = 0;
    } else if (block === 2) {
        x = 0;
        y = -1;
    }
    else if (block === 3) {
        x = -1;
        y = -1;
    }
    //azeaze
    var tl = gsap.timeline({
        onComplete: function(){
            onComplete()
        },
        onReverseComplete: function(){
            onComplete()
        }
    });
    let blocks = document.querySelectorAll(".subBox__box")
    let subBox = document.querySelector('.subBox')
    tl.addLabel('firstLabel')
    tl.fromTo(blocks[block], {
        width: 321.5,
        height: 160.5,
        x: 0,
        y: 0,
        zIndex: 2
    },{
        width: 657,
        height: 335,
        x: (657-321.5)*x,
        y: (335-160.5)*y,
        zIndex: 2,
        duration: 0.5
    }, 'firstLabel')
    blocks.forEach((blockI,i) => {
        if(blockI !== blocks[block]) {
            let ratio = getBlockRelPosition(2,block,i)
            tl.fromTo(blockI, {x:0,y:0}, {
                x: (657-321.5)*ratio.x,
                y: (335-160.5)*ratio.y
            }, 'firstLabel')
        }
    })
    //reversing
    if(reverse) {
        tl.reverse(0)
    }
}

function getBlockRelPosition(nCol,block, testBlock) {
    let blockCord = getCord(nCol, block)
    let testBlockCord = getCord(nCol, testBlock)
    let ratio = {x:0, y:0}
    ratio.x = isMove(blockCord.x, testBlockCord.x)
    ratio.y = isMove(blockCord.y, testBlockCord.y)
    return ratio
}

function isMove(blockCord, testBlockCord) {
    if(testBlockCord === blockCord) {
        return 0
    } else if(testBlockCord > blockCord) {
        return 1
    } else if(testBlockCord < blockCord) {
        return -1
    }
}

function getCord(nCol,block) {
    let blockCord = {}
    blockCord.x = (block)%nCol
    blockCord.y = Math.floor(block/nCol)
    return blockCord
}