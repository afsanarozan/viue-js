<template>
    <div>
        <div class="container">
      <div class="myCard">
        <div class="row">
          <div class="col-md-6">
            <div class="myLeftCtn">

              <form class="myForm text-center" v-on:submit.prevent="loginUser">
                <header>Login</header>
                    <div class="form-group">
                      <i class="fas fa-user"></i>
                      <input 
                      type="text" 
                      class="myInput" 
                      placeholder="username"
                      v-model="name"
                      required>
                      <div class="invalid-feedback">please fill out this file</div>
                    </div>
                    <div class="form-group">
                      <i class="fas fa-user"></i>
                      <input 
                      type="password" 
                      class="myInput" 
                      placeholder="password"
                      v-model="password"
                      required>
                      <div class="invalid-feedback">please fill out this file</div>
                    </div>
                    <div class="form-group">
                        <div class="remember">
                            <input type="checkbox">Remember Me
                        </div>
                    </div>

                    <input type="submit" class="butt" value="login">
                    <div class="d-flex justify-content-center links">
                        Don't have an account?<router-link to="/register"> Sign Up </router-link>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="myRightCtn">
              <div class="box">
                <header>Coffee Cafe</header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio sunt ratione facilis sapiente fugit laborum aliquid id doloremque consequatur soluta quia blanditiis, eveniet pariatur non, odio iusto dolore inventore. Sequi.</p>
                <input type="button" class="butt_out" value="Learn more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    data: function () {
      return {
        name: "",
        password: "",
        wrongCred: false 
      }
    },
    methods: {
      loginUser () {
            axios
            .post(`${process.env.VUE_APP_URL}/auth`, {
            name: this.name,
            password: this.password,
            })
            .then((res) => {
                console.log(res.data.result[0].msg)
                if (res.data.result[0].msg == "Token created, login success") {
                    localStorage.setItem("token", res.data.result[0].token);
                    localStorage.setItem("token", res.data.result[0].refreshToken);
                    alert("Login Berhasil");
                    this.$router.push({ name: "home" });
                } else {
                    alert(res.data.message);
                }
            });
        },
      },
  }
</script>

<style scoped>
body{
    background: #fbf3ff;
}

.container{
    max-width: 800px;
    height: 500px;
    margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.myRightCtn{
    position: relative;
    background-image: linear-gradient(45deg, #f046ff, #9b00e8);
    border-radius: 25px;
    height: 100%;
    padding: 25px;
    color: #fbf3ff;
    color: rgb 192, 192, 192, 192;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.myLeftCtn{
    position: relative;
    background: #fff;
    border-radius: 25px;
    height: 100%;
    padding: 25px;
    padding-left: 50px;
}

.myLeftCtn header {
    color: blueviolet;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
}

.row {
    height: 100%;
}

.myCard{
    position: relative;
    background: #fff;
    height: 100%;
    border-radius: 25px;
    -webkit-box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.7);
}

.myRightCtn header{
    color: #fff;
    font-size: 44px;
}


.box{
    position: relative;
    margin: 20px;
    margin-bottom: 100px;
}

.myLeftCtn .myInput {
    width: 300px;
    border-radius: 25px;
    padding: 10px;
    padding-left: 50px;
    border: none;
    -webkit-box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
}

.myLeftCtn .myInput:focus {
    outline: none;
}

.myForm {
    position: relative;
    margin-top: 50px;
}

.myLeftCtn .butt {
    background: linear-gradient(45deg, #bb36fd, #9b00e8);
    color: #fff;
    width: 230px;
    border: none;
    border-radius: 25px;
    padding: 10px;
    -webkit-box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
}

.myLeftCtn .butt:hover {
    background: linear-gradient(45deg, #c85bff, #b726ff);
}

.myLeftCtn .butt:focus {
    outline: none;
}

.myLeftCtn .fas {
    position: relative;
    color: #bb36fd;
    left: 36px;
}

.butt_out {
    background: transparent;
    color: #fff;
    width: 120px;
    border: 2px solid#fff;
    border-radius: 25px;
    padding: 10px;
    -webkit-box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.7);
}

.butt_out:hover{
    border: 2px solid#eecbff
}

.butt_out:focus{
    outline: none;
}

.remember{
color: black;
}
.remember input
{
width: 20px;
height: 15px;
margin-left: -160px;
margin-top: 5px;
}

.links{
color: black;
margin-top: 25px;
}
.links a{
margin-left: 4px;
}
.text-muted{
    color: Black !important;
}


</style>