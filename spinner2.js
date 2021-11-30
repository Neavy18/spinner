let spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let timer  = 100;

for(const item of spinner){
  timer += 200
  setTimeout(() => {
    process.stdout.write(`${item} \r`);
  }, timer);
}