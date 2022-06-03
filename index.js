const listContainer = document.querySelector('[card-list]') ;

let lists = {colorCode : 000};
let color = [];
let colorNumber =  [];
let codes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let tester =  ['item1', 'item2', 'item3']; 
let codeLength = codes.length;

const zeroPad = (num, places) => {
    const numZeroes = places - num.toString().length + 1;
    if (numZeroes > 0) {
      return Array(+numZeroes).join("0") + num;
    }
    return num
  }
  
 
 
//----------- this funcion creates the list both number and letters

function createList (){

    let newColor = [];
    let ni=1;
    let i=0,j=0,k=0;
    
//the origial list without letters
// for(i; i<1000; i++){
// color.push(zeroPad(i, 3));
// cnumber.push(ni);
// ni++
// }



for(i; i<codeLength; i++){
    
newColor[0] = codes[i];

        for(j; j<codeLength; j++){
           newColor[1] = codes[j];



            for(k;k<codeLength; k++){
            
            newColor[2] = codes[k];
            

            color.push(newColor.join('')) 
            }
         
            
            
          k=0;      
        }

        // console.log(codes[pi]);
        // console.log(codes[pk]);
        // console.log(codes[pj]);
j=0;

}



colorNumber.push(ni);







// debug code /// comment when finished  !!!!!
    // console.log(color);
    // console.log(newColor);
    // console.log(colorNumber);
    // console.log(codes);
    
}






function render(){

    createList();
    clearElement(listContainer);
    
    // color.forEach(c=>{
    //     console.log(c)
    // })
    




/* <div class="colorcard">  
        <div class="cardcontent" >
            
                <div class="colors">
                    <div class="colorsample"></div>
                </div>

            <div class="colorcodes" colorcodes>
                <div class="codetitle"></div> 
                <div class="codecolor">#777</div>
            </div>

        </div>

    </div>
 */


    color.forEach(c => {
        const colorcard = document.createElement('div');

        colorcard.classList.add('colorcard');
        colorcard.style.backgroundColor = '#'+c;
        colorcard.innerText = '#'+c;
        listContainer.appendChild(colorcard);

        




        console.log('colors retreived')

     });
}



function clearElement(element){
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }

}




render();

