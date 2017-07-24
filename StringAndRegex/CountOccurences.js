function count(key,input) {
    let counter = 0;
    let index = input.indexOf(key);
    while (index > -1){
        counter++;
        index = input.indexOf(key,index + 1);
    }
    console.log(counter);

}

count('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')