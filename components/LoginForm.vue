<template>
  <div class="container login-box">
    <form>
      <div class="user-box">
        <input type="text" name="" required="">
        <label>Login</label>
      </div>
      <div class="user-box">
        <input type="text" name="" required="">
        <label>Parol</label>
      </div>
    </form>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.login-box {
  padding: 40px;
  background: rgba(0, 0, 0, .5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;
  display: flex;
  width: 100%;
  max-width: 400px;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
}

.login-box .user-box {
  width: 435px;
  height: 70px;
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}
</style>