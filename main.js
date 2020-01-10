function keyHandler(key){
    let speed = 30
    if(key == 1){       // Up
        apple_pie.setVelocityX(speed)      
    }
    else if(key == 2){  // Right
        apple_pie.setVelocityY(speed)      
    }
    else if(key == 3){ // Dpwn
        apple_pie.setVelocityX(-speed)   
    }
    else if(key == 4){ // Dpwn
        apple_pie.setVelocityY(-speed)   
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    width: 300,
    height: 300,
    physics: {
        default: 'arcade',
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var cursors;
var player;

var game = new Phaser.Game(config);

function preload (){
    this.load.image('apple_pie', 'images/apple_pie.png');
}

function create (){
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.image(150, 150, 'apple_pie');
    player.scale = 5
    player.setCollideWorldBounds(true);
}

function update (){
    player.setVelocity(0);

    if (cursors.left.isDown){
        player.setVelocityX(-300);
    }
    else if (cursors.right.isDown){
        player.setVelocityX(300);
    }

    if (cursors.up.isDown){
        player.setVelocityY(-300);
    }
    else if (cursors.down.isDown){
        player.setVelocityY(300);
    }
}
