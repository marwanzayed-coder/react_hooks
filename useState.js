function useState(value) {
  let val = value;
  let setVal = (newVal) => {
    val = newVal
  }
  return [val, setVal];
}

let [count, setCount] = useState(1);
console.log(count); // 1
setCount(count++);
console.log(count); // 2
