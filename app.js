const canvas = document.getElementById("canvas");
canvas.height = 320;
canvas.width = 320;
const ctx = canvas.getContext("2d");
const unit = 20;
const column = canvas.height / unit;
const row = canvas.width / unit;
console.log(column, row);
let snakeLocation = [];
snakeLocation[0] = {
  x: 80,
  y: 0,
};
snakeLocation[1] = {
  x: 60,
  y: 0,
};
snakeLocation[2] = {
  x: 40,
  y: 0,
};
snakeLocation[3] = {
  x: 20,
  y: 0,
};
if (canvas) {
  console.log("true");
  for (let i = 0; i < snakeLocation.length; i++) {
    if (i == 0) {
      ctx.fillStyle = "lightGreen";
    } else {
      ctx.fillStyle = "lightBlue";
    }
    ctx.strokeStyle = "white"; // 设置边框颜色为白色
    ctx.fillRect(snakeLocation[i].x, snakeLocation[i].y, unit, unit);
    ctx.strokeRect(snakeLocation[i].x, snakeLocation[i].y, unit, unit);
  }
}
