<template>
    <div>
         
    <!-- Navbar -->
    
            <nav class="navbar  navbar-light food">
                
                <div class="container-fluid">
                    <span style="font-size: 2em; position:absolute; left: 20px; cursor: pointer; ">
                        <i class="fas fa-bars"></i>
                    </span> 
                    <a href=""></a>
                <a class="navbar-brand font-weight-bold font-food text-center" href="#">History</a>
                    <a href=""></a>
            </div>
              
            </nav>         
        
 

    <div class="row">
        <div class="col-md-1 bg-white" style="background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);">
            <img src="img/clipboard.png" alt="" srcset="" class="leftbar" style="position:absolute; left: 30%; top: 32px; cursor: pointer;">
            <img src="img/fork.png" alt="" class="mt-2 leftbar" style="position:absolute; left: 30%; top: 131px; cursor: pointer;">
              <span style="font-size: 2em; color: green; position:absolute; left: 40%; top: 232px; cursor: pointer;">
                      <a data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus leftbar"></i></a>
              </span>
            </div>
            <div class="container col-md-10" >
              <div class="row">
                
                <div class="col-sm-4 mt-3">
                  <div class="card bg-danger">
                    <div class="card-body">
                      <h5 class="card-title">Today Income</h5>
                      <h4>Rp : 1.000.000</h4>
                      <p class="card-text">+2% Yesterday</p>
                     
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mt-3">
                  <div class="card bg-primary">
                    <div class="card-body">
                      <h5 class="card-title">Orders</h5>
                      <h4>3.270</h4>
                      <p class="card-text">+last week</p>
                      
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mt-3">
                    <div class="card bg-success">
                      <div class="card-body">
                        <h5 class="card-title">This Year Income</h5>
                        <h4>Rp : 100.000.000.000</h4>
                        <p class="card-text">+10% Last Year</p>
                        
                      </div>
                    </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12 mt-3">
                    <div class="card" style="background-color: white ;  ">

                      <div class="card-body">
                      <h3>Revenue</h3>
                      <canvas id="myChart"></canvas>
                    </div>
                    </div>
                    </div>
              </div>
              <table class="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col">INVOICE</th>
                      <th scope="col">CASHIER</th>
                      <th scope="col">DATE</th>
                      <th scope="col">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">#10928</th>
                      <td>Cashier 1</td>
                      <td>06 October 2019</td>
                      <td>Rp. 120.000</td>
                    </tr>
                  </tbody>
                </table>
            </div>
</div>
</div>
    
    
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: "history"
}


</script>

<style lang="scss" scoped>

</style>