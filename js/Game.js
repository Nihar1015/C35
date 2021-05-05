class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data)=>{
           gameState = data.val();
        }) 
    }

    updateGameState(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount();
            form = new Form()
            form.display();
        }
    }

    play(){
        form.hide();
        Player.getPlayerDetails();
        console.log(allPlayers);
        if(allPlayers){
            var y = 150;
            for(var plr in allPlayers){
                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, y);
                y = y+20;
            }
        }

        if(keyDown(UP_ARROW) && player.index != null){
            player.distance = player.distance + 50;
            player.update();

        }
    }

}