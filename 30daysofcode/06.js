// Day 6: Let's Review

 S = input.split('\n');
    
    for(let i=1;i<S.length;i++){
        let word = S[i].split('');
        
        let even = '';
        let odd = '';
        
        for(let j=0;j<word.length;j++){ 
        (j % 2 === 0) ? even+=word[j] : odd+=word[j];
        }
        console.log(`${even} ${odd}`)
        }