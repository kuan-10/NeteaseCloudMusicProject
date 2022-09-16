<template>
    <div>
        <div class="borderBox">
 <iconpark-icon name="zuojiantou" class="leftArrow" @click="$router.go(-1)"></iconpark-icon>
      <p>欢迎登陆</p>
      <input placeholder="请输入用户名" type="text" class="username">
      <input placeholder="请输入密码" type="password" class="password">
      <button class="loginButton">登录</button>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
div{
    width: 100vw;
    height: 100vh;
    .borderBox{
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
   position: relative;
   .leftArrow{
    position: absolute;
    left: 20px;
    top:20px;
    font-size: .7rem;
    border: 2px solid white;
    background-color: aliceblue;
    border-radius: 5px;
   }
    p{
        color:white;
        font-size: .7rem;
    }
    .username{
      height: 40px;
      width: 70%;
      margin-top: -100px;
    }
    .password{
       
       height: 40px;
         width: 70%;
          margin-top: -80px;
    }
    .loginButton{
        width: 50px;
        height: 30px;
       margin-top: -100px;
    }
}
}

</style>