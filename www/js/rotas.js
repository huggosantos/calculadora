var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
  /*ROTAS*/
  $routeProvider
  .when('/calculadora', {
    templateUrl: 'paginas/calculadora.html',
    controller: 'calculadora'
  })
  .otherwise('/calculadora', {
   templateUrl: 'paginas/calculadora.html',
   controller: 'calculadora'
 });
}).run(function() {
    //remove 300ms delay touch
    //FastClick.attach(document.body);
  });

function toTop(){
  $('html, body').animate({
    scrollTop: 0
  }, 800, 'linear');
}


app.controller('calculadora', function($scope, $http, $routeParams, $location) {  
  toTop();

$scope.re = function(){


}
// Serviço SOMA --------------------------------------
$scope.soma = function(cal){
$http({
    url: 'https://modulosamu.herokuapp.com/soma',
    method: 'POST',
    data: {
      valor1: $scope.cal.valor1,
      valor2: $scope.cal.valor2,     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Soma Recebida', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    alert("Erro ao enviar!"+data);

  });
}
// fim soma ------------------------------------------------
// Serviço Subtraçao --------------------------------------

$scope.subtracao = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/subtracao',
    method: 'POST',
    data: {
     valor1: $scope.cal.valor1,
      valor2: $scope.cal.valor2,    

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Subtração Recebida ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    alert("Erro ao enviar!"+data);

  });
}
// fim Subtraçao -------------------------------------------

// Serviço multi --------------------------------------

$scope.multiplicacao = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/multiplicao',
    method: 'POST',
    data: {
      valor1: $scope.cal.valor1,
      valor2: $scope.cal.valor2,
     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Multiplicaçao Realizada ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    toast("Erro ao enviar!"+data);

  });
}
// fim multi -------------------------------------------
// Serviço divisão --------------------------------------

$scope.div = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/divisao',
    method: 'POST',
    data: {
      valor1: $scope.cal.valor1,
      valor2: $scope.cal.valor2,
     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Divisão Realizada ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    toast("Erro ao enviar!"+data);

  });
}
// fim divisão -------------------------------------------
// Serviço potencia --------------------------------------

$scope.pot = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/potenciacao',
    method: 'POST',
    data: {
      valor1: $scope.cal.valor1,
      valor2: $scope.cal.valor2,
     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Potenciação Realizada ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    toast("Erro ao enviar!"+data);

  });
}
// fim potencia -------------------------------------------
// Serviço seno --------------------------------------

$scope.seno = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/seno',
    method: 'POST',
    data: {
      valor: $scope.cal.valor1,     
     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Seno Realizada ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    toast("Erro ao enviar!"+data);

  });
}
// fim Seno -------------------------------------------
// Serviço coseno --------------------------------------

$scope.coseno = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/coseno',
    method: 'POST',
    data: {
      valor: $scope.cal.valor1,     
     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Coseno Realizada ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    toast("Erro ao enviar!"+data);

  });
}
// fim coseno -------------------------------------------
// Serviço tangente --------------------------------------

$scope.tangente = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/tangente',
    method: 'POST',
    data: {
      valor: $scope.cal.valor1,     
     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Tangente Realizada ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    toast("Erro ao enviar!"+data);

  });
}
// fim Tangente -------------------------------------------
// Serviço mod --------------------------------------

$scope.mod = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/resto',
    method: 'POST',
    data: {
      valor1: $scope.cal.valor1,
      valor2: $scope.cal.valor2,   
     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Resto Divisão Realizado ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    toast("Erro ao enviar!"+data);

  });
}
// fim mod -------------------------------------------
// Serviço mod --------------------------------------

$scope.raiz = function(cal){

$http({
    url: 'https://modulosamu.herokuapp.com/raiz',
    method: 'POST',
    data: {
      valor: $scope.cal.valor1,     
     

    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  }).
   success(function (data) {
    $scope.success = true;
    $scope.Resultado=data;
    document.getElementById('nome').value =  $scope.Resultado ;
    Materialize.toast('Raiz Realizada ', 2000)
  }).
   error(function (data) {
    $scope.error = true;
    toast("Erro ao enviar!"+data);

  });
}
// fim fatorial -------------------------------------------

});

