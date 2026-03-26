const output = document.querySelector("input[name='output']");
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (button.classList.contains('clear')) {
      output.value = '';
    } else if (button.classList.contains('result')) {
      try {
        output.value = eval(output.value);
      } catch (error) {
        output.value = 'Error';
      }
    } else {
      output.value += value;
    }
  });
});
