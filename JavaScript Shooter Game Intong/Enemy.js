export default class Enemy{
    constructor(x, y, color, health){
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        // sa shield ni siya
        if (this.health > 1) {
            ctx.strokeStyle = "white";
        }
        else{
            ctx.strokeStyle = this.color;
        }
        ctx.fillRect(this.x, this.y, this.width, this.heigth);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    
        // Text para sa hp na makita
        ctx.fillStyle = "Grey";
        ctx.font = "25px Roboto, sans-serif";
        ctx.fillText(
            this.health,
            this.x + this.width / 3.5,
            this.y + this.height / 1.5
        );
    
}
    takeDamage(damage){
        this.health -= damage
}
}