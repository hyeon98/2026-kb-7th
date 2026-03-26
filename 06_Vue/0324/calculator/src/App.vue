<script>
export default {
  data() {
    return {
      cur: '',
      output: '',
    };
  },
  methods: {
    operation(event) {
      const n = event.currentTarget.value;

      // C 버튼
      if (n === 'C') {
        this.clear();
        return;
      }

      // = 버튼
      if (n === '=') {
        this.calculate();
        return;
      }

      if (this.handleOperator(n)) {
        return;
      }

      this.handleNumberInput(n);
    },

    clear() {
      this.cur = '';
      this.output = '';
    },

    handleNumberInput(n) {
      // 일반 입력
      this.cur += n;
      this.output = this.cur;
    },

    handleOperator(n) {
      const lastChar = this.cur[this.cur.length - 1];

      if (!this.isOperator(n)) {
        return false;
      }

      // 처음에 연산자 입력 막기
      if (this.cur === '') {
        return true;
      }

      // 마지막이 연산자면 교체
      if (this.isOperator(lastChar)) {
        this.cur = this.cur.slice(0, -1) + n;
        this.output = this.cur;
        return true;
      }

      // 연산자 정상 입력
      this.cur += n;
      this.output = this.cur;
      return true;
    },

    calculate() {
      let operator = '';

      if (this.cur.includes('+')) {
        operator = '+';
      } else if (this.cur.includes('-')) {
        operator = '-';
      } else if (this.cur.includes('*')) {
        operator = '*';
      } else if (this.cur.includes('/')) {
        operator = '/';
      } else {
        return;
      }

      const parts = this.cur.split(operator);

      const left = Number(parts[0]);
      const right = Number(parts[1]);

      if (parts[0] === '' || parts[1] === '') {
        return;
      }

      let result = 0;

      if (operator === '+') {
        result = left + right;
      } else if (operator === '-') {
        result = left - right;
      } else if (operator === '*') {
        result = left * right;
      } else if (operator === '/') {
        if (right === 0) {
          this.output = '오류';
          this.cur = '';
          return;
        }
        result = left / right;
      }

      this.cur = String(result);
      this.output = String(result);
    },

    isOperator(value) {
      return value === '+' || value === '-' || value === '*' || value === '/';
    },

    // methods: {
    //   isOperator(),
    //   setError(),
    //   clearError(),
    //   handleEqual(),
    //   canCalculate(),
    //   computeResult(),
    //   operation()
    // }
  },
};
</script>

<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" v-model="output" name="output" readonly />

      <input type="button" class="clear" value="C" @click="operation" />
      <input type="button" class="operator" value="/" @click="operation" />
      <input type="button" value="1" @click="operation" />
      <input type="button" value="2" @click="operation" />
      <input type="button" value="3" @click="operation" />
      <input type="button" class="operator" value="*" @click="operation" />
      <input type="button" value="4" @click="operation" />
      <input type="button" value="5" @click="operation" />
      <input type="button" value="6" @click="operation" />
      <input type="button" class="operator" value="+" @click="operation" />
      <input type="button" value="7" @click="operation" />
      <input type="button" value="8" @click="operation" />
      <input type="button" value="9" @click="operation" />
      <input type="button" class="operator" value="-" @click="operation" />
      <input type="button" class="dot" value="." @click="operation" />
      <input type="button" value="0" @click="operation" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="operation"
      />
    </form>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>
