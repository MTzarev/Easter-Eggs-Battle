function easterEggsBattle (input){
    
    let eggsFirst = Number(input.shift()); 
        let eggsSecond = Number(input.shift()); 
        let command = input.shift(); 
        let totalEggs = eggsFirst+eggsSecond;
        let eggsLeftFirstCounter=0
        let eggsLeftSecondCounter = 0

        while (command !== "End"){
            let word=command
            switch (word){
                case "one": eggsSecond --;
                    eggsLeftFirstCounter++;
                    
                        if(eggsLeftFirstCounter>=eggsFirst){
                            console.log (`Kur Bate!`)
                        } break;
                case "two": eggsFirst --;
                eggsLeftSecondCounter ++;
                if (eggsLeftSecondCounter>=eggsSecond){
                    console.log (`You Left ${eggsLeftSecondCounter}`)
                }
                 break;
            }
        }
   
    console.log();
}
easterEggsBattle(["2","6","one","End","two"])

