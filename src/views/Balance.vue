<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">Verificar Saldo</h3>
            <div class="row">
                <div class="form-group col-md-3">
                    <label for="account_id">Conta Bancária:</label>
                    <select class="form-control" id="account_id" v-model="currentAccount" @change="showBalance=false">
                        <option>Selecione uma conta</option>
                        <option
                            v-for="account in accounts "
                            :key="account.id"
                            v-bind:value="account.id">
                            {{ `Ag. ${account.agency} - CC ${account.number}` }}
                        </option>
                    </select>
                </div>
        
                <div class="form-group col-md-3">
                    <br/>
                    <button class="btn btn-primary" type="submit" @click="getBalance">Consultar Saldo</button>
                </div>
            </div>
            <h3 v-if="showBalance"><span class="badge badge-success">Saldo: R${{balance}}</span></h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import config from '../config/config'

export default {
    data() {
        return {
            balance: '',
            showBalance: false,
            currentAccount: '',
            accounts: []
        }
    },
    methods:{
        getBalance(){
            axios.get(`${config.apiURL}/balance/${this.currentAccount}`)
            .then((response) => {
                this.balance = response.data.balance
                this.showBalance = true
            })
            .catch((error) => {
                console.log(error);
            })

        }
    },
    created() {
        axios.get(`${config.apiURL}/accounts`)
            .then((response) => {
                this.accounts = response.data
            })
            .catch((error) => {
                console.log(error);
            })
    },
}
</script>