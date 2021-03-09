function processData(input) {
    
    input = input.split('\n');
    
    let addressBook = {};
    let n = input[0];
    n++;
    for (let i= 1; i<n; i++){
        let contact = input[i].split(' ')
        addressBook[contact[0]] = parseInt(contact[1])
    }
    
    for (let i=n;i<input.length;i++){
        addressBook[input[i]] ? console.log(input[i]+'='+addressBook[input[i]] ): console.log('Not found')
    }
} 