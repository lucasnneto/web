<template>
  <div>
    <div class="text-center pb-2 pt-2 bg-light">
      <img src="@/assets/img/logo.webp" alt="logo-nagro" class="logonagro" />
    </div>

    <section id="produtor">
      <div class="content-produtor">
        <div class="linhas d-flex alinharCenter">
          <div class="credito font-ubuntu">
            <p>Crédito</p>
          </div>
          <div class="pprodutor font-ubuntu">
            <p>
              para <br />
              <b>PRODUTOR</b> <br />
              <b>RURAL</b>
            </p>
          </div>
        </div>

        <div class="linhas">
          <div class="checkBox d-flex alinharCenter">
            <img src="@/assets/img/checkbox.png" alt="" />
            <span>É 100% digital</span>
          </div>

          <div class="checkBox d-flex alinharCenter">
            <img src="@/assets/img/checkbox.png" alt="" />
            <span>Sem filas de bancos</span>
          </div>

          <div class="checkBox d-flex alinharCenter">
            <img src="@/assets/img/checkbox.png" alt="" />
            <span>Sem burocracias</span>
          </div>
        </div>

        <div class="linhas d-flex">
          <div class="d-flex">
            <span class="dinheiroConta font-ubuntu">
              <b> DINHEIRO NA CONTA </b> <br />
              EM ATÉ
            </span>
            <img class="iconone" src="@/assets/img/img48.webp" alt="48horas" />
          </div>
        </div>
      </div>
      <div class="linhas areabtn">
        <a href="#" class="btn">SOLICITE SEU CRÉDITO</a>
      </div>
    </section>

    <section id="depoimentos">
      <div>
        <h2 class="titledepo">
          <b>Depoimentos</b>
          <span style="font-weight: 400">
            de clientes <br />
            que confiaram na Nagro
          </span>
        </h2>
      </div>
      <div class="depoimentos d-flex justifyCenter">
        <img src="@/assets/img/depo-produtor.webp" alt="" />
        <img src="@/assets/img/depo-produtor2.webp" alt="" />
        <img
          src="@/assets/img/depo-produtor3.webp"
          alt=""
          style="margin-top: -5px"
        />
      </div>
    </section>

    <section
      id="emprestimo"
      class="d-flex flexColumn justifyCenter alinharCenter"
    >
      <h2 class="font-ubuntu">EMPRÉSTIMO PESSOAL SEM SAIR DA FAZENDA</h2>

      <p class="font-ubuntu">
        + 160 MILHÕES <br />
        <span>de crédito liberado </span>
      </p>

      <span id="textWhite" class="text-white">
        Por trás deste número, há milhares de pessoas
        <br />
        satisfeitas, <b>agora é a sua vez!</b>
      </span>

      <div class="areabtn">
        <a href="#" class="btn">SOLICITE SEU CRÉDITO</a>
      </div>
    </section>

    <section id="sec4">
      <h2 class="font-ubuntu">
        TROCAMOS A BUROCRACIA <br />
        PELA FACILIDADE
      </h2>

      <div class="icones d-flex">
        <div class="card d-flex">
          <img src="@/assets/img/money.webp" alt="money" />
          <span class="font-ubuntu">
            Sem pagamento <br />
            <b>antecipado</b>
          </span>
        </div>
        <div class="card d-flex">
          <img src="@/assets/img/pay.webp" alt="money" />
          <span class="font-ubuntu">
            Não precisa vincular <br />
            <b>nenhuma garantia</b>
          </span>
        </div>
      </div>

      <div class="icones d-flex">
        <div class="card">
          <img src="@/assets/img/search.webp" alt="money" />
          <span class="font-ubuntu">
            Análise de crédito <br />
            <b>sem custo</b>
          </span>
        </div>
        <div class="card">
          <img src="@/assets/img/phone.webp" alt="money" />
          <span class="font-ubuntu">
            <b>100% digital </b>
          </span>
        </div>
      </div>

      <h2 class="font-ubuntu">
        DINHEIRO NA CONTA DO <br />
        PRODUTOR RURAL EM
      </h2>

      <img
        src="@/assets/img/48.webp"
        alt="48h"
        width="100"
        style="margin: auto auto; display: block"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexBase",
  data: () => ({
    metodo: "questionario",
  }),
  head() {
    return {
      title: "SCR - Metodo",
    };
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat:wght@300;400;600&family=Nunito:wght@400;500;600;700&family=Roboto:wght@300&family=Ubuntu:wght@400;700&display=swap");

* {
  padding: 0;
  margin: 0;
}

.logonagro {
  width: 330px;
  margin: auto auto;
  display: block;
}

section {
  padding: 80px 50px;
}
/* fonts family */

.font-ubuntu {
  font-family: "Ubuntu", sans-serif;
}

/* flexBox */
.d-flex {
  display: flex;
}

.alinharCenter {
  align-items: center !important;
}

.flexColumn {
  flex-direction: column !important;
}

.justifyCenter {
  justify-content: center !important;
}
/* end flexbox */

#produtor {
  background-image: url("../assets/img/produtorbg.webp");
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  min-height: 440px;
}

.content-produtor {
  width: 40%;
  height: 100%;
  padding-left: 150px;
}

.content-produtor div:nth-child(1) {
  height: 10%;
}

.content-produtor .linhas:nth-child(2) {
  margin-top: 70px;
}

.content-produtor .linhas:nth-child(3) {
  padding-left: 33px;
}

.content-produtor .linhas:nth-child(3),
.text-white {
  margin-top: 50px;
}
.credito {
  background-color: #a0ef01;
  color: #1665ba;
  font-size: 70px;
  font-weight: bold;
  padding: 0 10px;
  line-height: 1;
}

.pprodutor {
  font-size: 40px;
  line-height: 1;
  color: white;
  margin-left: 5px;
}

.checkBox img {
  width: 40px;
}

.checkBox span {
  font-size: 36px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin-left: 5px;
  color: white;
}

.dinheiroConta {
  width: 40%;
  line-height: 1;
  font-size: 30px !important;
  color: white;
}
.iconone {
  display: block;
  width: 100px;
}

.areabtn {
  margin: 80px auto 20px auto;
  text-align: center;
}
.btn {
  font-weight: 700;
  letter-spacing: 1px !important;
  background-color: #023047;
  border: 2px solid #a0ef00;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  text-decoration: none !important;
  padding: 5px 15px;
  border-radius: 15px;
}

.titledepo {
  color: #4a4a4a;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 32px;
  margin: 20px 0;
  line-height: 1;
}

.depoimentos img {
  width: calc(90% / 3);
  max-height: 100%;
}

#emprestimo {
  background-image: url("../assets/img/bgIcon.webp");
}

#emprestimo h2 {
  background-color: #a0ef00;
  font-weight: 600;
  color: #1565ba !important;
  font-size: 28px;
  margin-top: 40px;
  text-align: center;
  padding: 10px 150px;
  width: 50%;
  font-size: 22px;
}

#emprestimo p {
  color: #a0ef00;
  font-size: 90px;
  text-align: center;
  font-weight: bold;
  margin-top: 60px;
  line-height: 0.6;
}

#emprestimo > p > span {
  font-size: 50px;
  font-weight: 700;
}

.text-white {
  display: block;
  text-align: center;
  font-family: "Nunito", sans-serif !important;
  color: white;
  line-height: 1;
  font-weight: 600;
  font-size: 20px;
}
#sec4 {
  padding: 30px !important;
}

#sec4 h2 {
  text-align: center;
  color: #0065c3 !important;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
}

.icones {
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 111px;
}

.card img {
  max-height: 100%;
}

.card span {
  display: block;
  padding-top: 10px;
  font-family: "Ubuntu";
}

#sec5 {
  background-color: #ededed;
  display: flex;
}

#sec5 div {
  width: 50%;
  padding: 45px;
}

#sec5 div img {
  width: 50%;
  margin: auto auto;
  display: block;
}

#sec5 div h2 {
  font-family: arial;
  color: #023047 !important;
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  width: 550px;
  padding-top: 5px;
}

#sec5 div p {
  color: #4a4a4a !important;
  font-size: 16px;
  font-weight: 700;
  width: 440px;
  margin-top: 40px;
}

#timeline {
  display: block;
  width: 400px;
  height: 50%;
  margin: 35px 0 !important;
}

.btn2 {
  color: #fff !important;
  font-size: 15px !important;
  font-family: "Nunito" !important;
  font-weight: 700;
  letter-spacing: 1px !important;
  background-color: rgb(2, 48, 71);
  border-color: rgb(2, 48, 71);
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  margin-left: 11px;
}

@media (max-width: 1050px) {
  #produtor {
    padding: 10px;
  }
}

@media (max-width: 800px) {
  section {
    padding: 40px 15px !important;
  }

  .logonagro {
    width: 220px;
  }

  #produtor {
    min-height: 460px;
  }
  .content-produtor {
    width: 60%;
    height: 100%;
    padding-left: 15px;
  }

  .credito {
    font-size: 40px;
  }

  .pprodutor {
    font-size: 20px;
  }

  .checkBox img {
    width: 30px;
  }

  .checkBox span {
    font-size: 19px;
  }

  .dinheiroConta {
    width: 50%;
    font-size: 22px !important;
  }
  .iconone {
    max-width: 100%;
  }

  .depoimentos {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px !important;
  }
  .depoimentos img {
    width: calc(90% / 1);
    display: block;
    margin: auto auto;
  }

  #emprestimo p,
  #emprestimo span {
    font-size: 33px !important;
    margin-bottom: 55px;
    line-height: 1;
  }

  #emprestimo h2 {
    background-color: #a0ef00;
    font-weight: 600;
    color: #1565ba !important;
    font-size: 17px;
    margin-top: 50px;
    text-align: center;
    padding: 10px 20px;
    width: 95%;
  }

  .icones {
    margin-bottom: 0;
    flex-direction: column;
  }

  #sec4 h2 {
    font-size: 20px;
    /* margin-top: 15px; */
  }

  .card {
    align-items: center;
    justify-content: start;
    height: 100px;
    width: 60%;
    margin: 10px auto;
  }

  .card img {
    max-height: 110%;
    margin-right: 10px;
    margin-left: 10px;
    width: 95px;
  }

  .card span {
    display: block;
    padding-top: 10px;
  }
}
::-webkit-scrollbar {
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #0168bb;
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #045292;
}
</style>
