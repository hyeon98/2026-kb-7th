<!--
    조건(언제) / 동작(무엇을) / 결과(어떻게 되는지)
    
    TodoInput의 목표: 사용자가 입력 창에 할 일을 입력한 후 Enter 키를 누르거나 '등록' 버튼을 클릭하면, 입력한 내용은 저장된다.
    1. 사용자가 어떤 값을 입력했는지 알기 위해서 데이터를 정의해야 한다.
    2. v-model 디렉티브 입력창과 양방향 데이터 바인딩을 처리해야 한다.
    3. 입력창에서 Enter나 등록 버튼을 클릭하면 사용자가 어떤값을 입력했는지 


    2. 저장된 할 일은 전체 목록(List)에 표시된다.
    3. 각 할 일 항목은 checkbox를 통해 상태를 변경할 수 있다.
    4. 사용자가 checkbox를 선택하면, 해당 할 일은 ‘완료’ 상태로 변경되며 완료 탭으로 이동된다.
-->
<script>
export default {
  data() {
    return {
      inputMsg: '', // 입력 Todo 데이터 정의
    };
  },

  emits: ['addTodo'],
  methods: {
    addTodo() {
      this.$emit('addTodo', this.inputMsg); // 부모 컴포넌트 호출.
      this.inputMsg = '';
    },
  },
};
</script>

<template>
  <div class="todo__input">
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
      @keydown.enter="addTodo"
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>
