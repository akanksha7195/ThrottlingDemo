let btn = document.getElementById("btn");

const expensive = () => {
  console.log("Expensive");
};

const throttle = function (fn, limit) {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    } else return;
  };
};

btn.addEventListener("click", throttle(expensive, 3000));
