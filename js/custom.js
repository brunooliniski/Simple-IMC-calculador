$(document).ready(function () {

    $("#calc")
        .click(function () {

            let weight = $("#weight").val();
            let height = $("#height").val();
            let imc;

            if (!weight || !height){
                alert("Preencha todos os campos");
            } else {
                let result = weight / (height * height);

                if(result < 18.5){
                    imc = "baixo peso";
                    $("#imc")
                        .removeClass()
                        .addClass("gray");
                }

                if(result > 18.5){
                    imc = "o peso ideal";
                    $("#imc")
                        .removeClass()
                        .addClass("green");
                }

                if(result > 25){
                    imc = "sobrepeso";
                    $("#imc")
                        .removeClass()
                        .addClass("yellow");
                }

                if(result > 30){
                    imc = "Obesidade Grau 1";
                    $("#imc")
                        .removeClass()
                        .addClass("orange");
                }

                if(result > 35){
                    imc = "Obesidade Grau 2";
                    $("#imc")
                        .removeClass()
                        .addClass("light-red");
                }

                if(result > 40){
                    imc = "Obesidade Grau 3";
                    $("#imc")
                        .removeClass()
                        .addClass("red");
                }

                $("#result")
                    .show("#result")
                    .text("Seu IMC é: " + result.toFixed(2));

                $("#imc")
                    .show("#imc")
                    .text("Você está com " + imc);

                $("#clear")
                    .click(function () {
                        $("#imc").hide();
                        $("#result").hide();
                    })


            }

        });
});