<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">Realizar Depósito</h3>
            <div class="row">
                <div class="form-group col-md-3">
                    <label for="account_id">Conta Bancária:</label>
                    <select class="form-control" id="account_id" v-model="currentAccount">
                        <option>Selecione uma conta</option>
                        <option
                            v-for="account in accounts "
                            :key="account.id"
                            v-bind:value="account.id">
                            {{ `Ag. ${account.agency} - CC ${account.number}` }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="amount">Valor:</label>
                    <input type="text" class="form-control" id="amount" v-model="amount">
                </div>
                <div class="form-group col-md-3">
                    <br/>
                    <button class="btn btn-primary" type="submit" @click="makeDeposit">Depositar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import config from '../config/config'

export default {
    data() {
        return {
            currentAccount: '',
            accounts: [],
            amount: 0,
        }
    },
    methods:{
        makeDeposit(){
            axios.post(`${config.apiURL}/deposit`, {account_id: this.currentAccount, amount: this.amount})
            .then(() => {
                this.$emit('displayMessage', {error: false, msg: 'Depósito realizado.'})
            })
            .catch((error) => {
                this.$emit('displayMessage', {error: true, msg: error.response.data.error})
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